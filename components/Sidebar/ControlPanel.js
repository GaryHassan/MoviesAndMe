import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text,
  Button
} from 'react-native';


export default class ControlPanel extends Component {
  render() {
    return (
      <View>
        <Text>
          Control Panel
        </Text>
        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          title="Close Drawer">Close</Button>
      </View>
    )
  }
}