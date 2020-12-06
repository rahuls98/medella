import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const App = () => {
  const [messages, setMessages] = useState([
    {state:"received", msg:"Hi there!"},
    {state:"received", msg:"Welcome.."},
    {state:"sent", msg:"I'm new here"}
  ]);
  const [inp, setInp] = useState("");

  return (
    <View style={styles.view}>
      {
        messages.map((obj,index) => {
          return (
            (obj.state === "received") ?
            <Text style={styles.recvMsg} key={index}>{obj.msg}</Text> :
            <Text style={styles.sentMsg} key={index}>{obj.msg}</Text>
          )
        })
      }
      <TextInput
        style={styles.textInput}
        onChangeText={text => setInp(text)}
        onSubmitEditing={() => {
          let msg = inp;
          setInp("");
          setMessages([...messages, {state:"sent", msg}]);
        }}
        value={inp}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view :{
    padding: 20,
    height: "100%"
  },
  recvMsg : {
    alignSelf: "flex-start",
    backgroundColor: "green",
    borderRadius: 5,
    marginBottom: 5,
    maxWidth: "70%",
    padding: 10
  },
  sentMsg : {
    alignSelf: "flex-end",
    backgroundColor: "gainsboro",
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    maxWidth: "70%",
    textAlign: "right"
  },
  textInput : {
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    bottom: 10,
    height: 40,
    position: "absolute",
    width: "100%"
  }
})

export default App;