import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, SafeAreaView } from 'react-native';

class EmpDetails extends Component {
  render() {
    const { userDeatils } = this.props.route;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView>
            <View>
              <View
                style={[
                  styles.sec,
                  { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
                ]}
              >
                <View>
                  <Text style={styles.header}>{userDeatils.emp_id}</Text>
                  <Text style={styles.text}>{userDeatils.emp_name}</Text>
                </View>
                <View>
                  <Image source={userDeatils.emp_photo_path} style={styles.userImg} />
                </View>
              </View>
              <View style={styles.sec}>
                <Text style={styles.header}>Department</Text>
                <Text style={styles.text}>{userDeatils.emp_department}</Text>
              </View>
              <View style={styles.sec}>
                <Text style={styles.header}>Designation</Text>
                <Text style={styles.text}>{userDeatils.emp_designation}</Text>
              </View>
              <View style={styles.sec}>
                <Text style={styles.header}>Experience</Text>
                <Text style={styles.text}>{userDeatils.emp_experience}</Text>
              </View>
              <View style={styles.sec}>
                <Text style={styles.header}>Salary</Text>
                <Text style={styles.text}>{userDeatils.emp_salary}</Text>
              </View>
              <View style={styles.sec}>
                <Text style={styles.header}>Address</Text>
                <Text style={styles.text}>{userDeatils.emp_address}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  sec: {
    padding: 20,
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 7,
  },
  text: {
    fontSize: 16,
  },
});

export default EmpDetails;
