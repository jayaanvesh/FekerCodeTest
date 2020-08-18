import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';

class Auth extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    let user = await AsyncStorage.getItem('user');
    if (user == 'test') {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('SignInScreen');
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <ActivityIndicator size='large' />
      </View>
    );
  }
}

export default Auth;
