import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from "react-native-elements";
// import App from "../../App";

class Logo extends React.Component {

  render() {
    return (
      <Header
        placement="center"
        style={{ height: 100 }}
        backgroundColor="orange"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Movies & Me', style: { color: '#fff', fontSize: 24 } }}
        rightComponent={{ icon: 'home', color: '#fff' }}>

      </Header>


    )
  }
}


const styles = StyleSheet.create({
  app: {
    backgroundColor: "#FFF3CA",
    flex: 1,
    height: 10
  },
  image: {
    flex: 1,
    width: 300,
    height: 50,
    resizeMode: 'contain'
  }
});

export default Logo