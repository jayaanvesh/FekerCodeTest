import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Auth from './Screens/Auth';
import HomeScreen from './Screens/HomeScreen';
import SignInScreen from './Screens/SignInScreen';
import UserTabView from './Screens/UserTabView';

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Auth' headerMode={null}>
          <Stack.Screen name='Auth' component={Auth} />
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='UserTabView' component={UserTabView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
