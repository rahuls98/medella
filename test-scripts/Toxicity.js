import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';
import '@tensorflow/tfjs-react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isTfReady: false,
      isModelReady: false,
      inp: "",
      res: ""
    }
  }

  getRes = async () => {
    await this.model.classify(this.state.inp).then(async (pred) => {
      this.setState({ res: JSON.stringify(pred) });
    });
  }

  async componentDidMount() {
    const threshold = 0.9;
    const labels = ["toxicity", "insult", "threat"];
    await tf.ready();
    console.log("tf is ready!!!");
    this.setState({ isTfReady: true });
    this.model = await toxicity.load(threshold, labels)
    this.setState({ isModelReady: true })
  }

  render() {
    return (
      <View style={styles.container}> 
      {(this.state.isModelReady) ? <View style={{width:"100%"}}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({inp: text})}
            onSubmitEditing={() => this.getRes()}
          />
          <Text>{this.state.res}</Text>
        </View> : 
        <Text>Loading</Text>
      }</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput : {
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: "100%"
  }
});
