import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class SignScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  submit = () => {
    if (this.state.username == 'test' && this.state.password == 'test') {
      AsyncStorage.setItem('user', 'test');
      this.props.navigation.navigate('Auth');
    } else {
      alert('Invalid credentials');
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
      >
        <View
          style={{
            width: 300,
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingTop: 15,
          }}
        >
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
          <TextInput
            placeholder='Username'
            style={{ borderColor: 'black', borderBottomWidth: 1 }}
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <TextInput
            placeholder='Password'
            style={{ borderColor: 'black', borderBottomWidth: 1 }}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          <View style={{ margin: 30, alignSelf: 'center', alignItems: 'center' }}>
            <Button title='Login In' onPress={this.submit} />
          </View>
        </View>
      </View>
    );
  }
}

export default SignScreen;
