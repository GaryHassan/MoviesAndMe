import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Search from "./components/Search/Search";
import Sidebar from './components/Sidebar/Sidebar';
import { Header } from "react-native-elements";
import Logo from "./components/Header/Logo";


export default function App() {
  return (
    <View style={styles.app}>
      <Logo />

      {/* <View style={styles.header}>
        <Header />
      </View> */}
      <View style={styles.container}>
        <Search />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#FFF3CA",
    flex: 1,
    height: 10
  },
  header: {
    marginTop: 60,
    height: 50,
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    marginTop: 4
  }
});
