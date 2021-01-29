import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Button, Text, View, Image } from 'react-native';


export default function App() {
  const [userName, setUserName] = useState('')
  const handleButton = () =>{
    alert("another hello world!")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.biggerFont}>Hello World</Text>
      <Text>This is my first app!</Text>
      <Image
      style={styles.image}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png'
      }}
      />

      

      <TouchableOpacity 
      style={{backgroundColor: 'blue', padding:10 }}
      onPress={() => alert("Image has been press")}
      >
      <Text>Hello World</Text>
      </TouchableOpacity>
      <Image
      style={styles.image}
      source={{
        uri: 'https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ'
      }}
      />

      <Button 
      onPress={() => alert('Hello World')}
      title="Press Me!"
      color="#f00"
      />
       <Button 
      onPress={handleButton}
      title="Another Button!"
      color="#841584"
      />

      <TextInput style={{height:40, borderColor:'black', borderWidth:1}}
      onChangeText={
        text=> setUserName(text)
      }
      value = {userName}
      >
      </TextInput>

        <Button style={{height:40,color:'blue'}}
        onPress={() => alert('Hello ' +userName)} title="Click Me"
        />

      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  image:{
    width: 100,
    height: 100,
  },
  biggerFont:{
    fontSize:32,
    textAlign:'center',
    color:'#00f'
  },
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
});
