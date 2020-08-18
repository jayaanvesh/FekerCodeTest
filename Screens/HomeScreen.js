import React, { Component } from 'react';
import {
  StyleSheet,
  Picker,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import { Sample } from './SampleObj';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';
import _ from 'lodash';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: '',
      selectedValue: null,
      dep: [],
    };
  }

  componentDidMount() {
    let sortedArr = _.orderBy(Sample, ['emp_name'], ['asc']);
    this.setState({ data: sortedArr });
    let dep = [];
    dep.push('All Departments');
    Sample.map((res) => {
      if (!dep.includes(res.emp_department)) {
        dep.push(res.emp_department);
      }
    });
    this.setState({ dep });
  }

  logout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('SignInScreen');
  };

  changeHandler = (value) => {
    this.setState({ selectedValue: value });
    if (value == 'All Departments') {
      let sortedArr = _.orderBy(Sample, ['emp_name'], ['asc']);
      this.setState({ data: sortedArr });
    } else {
      let newArray = Sample.filter((e) => e.emp_department == value);
      this.setState({ data: newArray });
    }
  };

  render() {
    return (
      <>
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 1,
            padding: 10,
            paddingBottom: 20,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              paddingVertical: 10,
            }}
          >
            <View style={{ width: 30 }}></View>
            <View>
              <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: 'bold' }}>
                Employee Directory
              </Text>
            </View>
            <View>
              <Icon name={'power-settings-new'} color={'black'} size={30} onPress={this.logout} />
            </View>
          </View>
          <TextInput
            placeholder='search'
            style={{
              borderColor: 'black',
              textAlign: 'center',
              borderWidth: 2,
              width: '90%',
              borderRadius: 40,
              fontSize: 20,
              padding: 4,
            }}
            value={this.state.search}
            onChangeText={(search) => this.setState({ search })}
          />
        </View>
        <View>
          <Picker
            selectedValue={this.state.selectedValue}
            style={{ height: 50 }}
            onValueChange={(value) => {
              this.changeHandler(value);
            }}
          >
            {this.state.dep.map((res, i) => (
              <Picker.Item key={i} label={res} value={res} />
            ))}
          </Picker>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.emp_id}
          ListFooterComponent={() => <View style={{ paddingBottom: 50 }} />}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('UserTabView', { userDeatils: item })
                  }
                >
                  <View style={styles.sec}>
                    <Image source={item.emp_photo_path} style={styles.img} />
                    <View>
                      <Text style={styles.empName}>{item.emp_name}</Text>
                      <Text>{item.emp_designation}</Text>
                      <Text>{item.emp_department}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
  },
  sec: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 40,
  },
  empName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
