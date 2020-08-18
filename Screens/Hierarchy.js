import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Hierarchy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text id='map'>Hierarchy Screen</Text>
      </View>
    );
  }
}

export default Hierarchy;
