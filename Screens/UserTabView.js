import React, { Component } from 'react';
import { View, Image, Dimensions, SafeAreaView, ActivityIndicator, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import EmpDetails from './EmpDetails';
import Hierarchy from './Hierarchy';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class UserTabView extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Details', userDeatils: this.props.route.params.userDeatils },
      { key: 'second', title: 'Hierarchy' },
    ],
    isVisible: false,
  };
  setIndex = (index) => {
    this.setState({ index });
  };

  render() {
    const { userDeatils } = this.props.route.params;

    return (
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ height: 250, position: 'relative' }}>
          <Image source={userDeatils.emp_Timeline_path} style={{ width: '100%', maxHeight: 250 }} />
          <View
            style={{
              position: 'absolute',
              top: 0,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}
            >
              <Icon name={'close'} color={'white'} size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              alignItems: 'center',
              backgroundColor: 'rgba(5,5,5,0.6)',
              width: '100%',
            }}
          >
            <View
              style={{
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 100,
                marginTop: -40,
              }}
            >
              <Image
                source={userDeatils.emp_photo_path}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  backgroundColor: 'darkturquoise',
                  padding: 5,
                  borderRadius: 50,
                }}
              >
                <Icon name={'edit'} color={'white'} size={17} />
              </View>
            </View>
            <Text style={{ color: 'white', paddingTop: 5, fontSize: 18, fontWeight: '700' }}>
              {userDeatils.emp_name}
            </Text>
            <Text style={{ color: 'gray', paddingBottom: 10, fontSize: 18, fontWeight: '700' }}>
              {userDeatils.emp_department}
            </Text>
          </View>
        </View>
        <TabView
          lazy={true}
          renderLazyPlaceholder={() => {
            return <ActivityIndicator />;
          }}
          navigationState={this.state}
          scrollEnabled={false}
          swipeEnabled={false}
          tabStyle={{
            width: '30',
          }}
          renderScene={SceneMap({
            first: EmpDetails,
            second: Hierarchy,
          })}
          onIndexChange={(index) => this.setIndex(index)}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              swipeEnabled={true}
              indicatorStyle={{ backgroundColor: 'blue' }}
              style={{
                backgroundColor: '#ffff',
                color: 'red',
              }}
              activeColor={'blue'}
              inactiveColor={'gray'}
              labelStyle={{
                fontWeight: '700',
                fontSize: 15,
              }}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}

export default UserTabView;
