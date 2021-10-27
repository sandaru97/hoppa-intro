import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground resizeMode="cover"
            style={
                {
                    width: "100%",
                    height: "100%"
                }
            }
            source={
                require('./bg.jpg')
        }>
    <View style={{
     
      "height":"100%",
      "justify-content":"center",
      "text-align":"center",
      "padding":"20px",
      "border-top":"10px solid #eb9486",
      "border-bottom":"10px solid #eb9486",
      "background-color":"#d7d9b1",
    }}>
      <Image source={require('./headphones.png')} style={{
  // "background-color":"black",
        "width":"200px",
        "height":"200px",
        "float":"center",
        "margin":"auto",
        "margin-bottom":"0",
        "margin-top":"0",
        "padding-bottom":"20px",
      }}/><br/><br/>
      <Text
      style={{
        "font-size":"7vw",
              }}
      ><b>Wear Headphones !</b></Text>
      <Text
      style={{
        "font-size":"5vw",

              }}
      ><b>We recomend wearing headphones for the best experiance.
        You will be jumping up and down. therefore make sure the headphones or ear buds fit well.
      </b></Text>
      <br/>
      <Text
      style={{
        "padding-top":"10px",
        "font-size":"10vw",
      }}
      ><b>
         * * *</b></Text> 
         <br/>
    
    <Text style={{
     // "position": "fixed",
                   "font-size":"5vw",
//"right":"0px",
           "float":"right",
         }}>SKIP</Text>
         </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
