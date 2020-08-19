import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Sample } from './SampleObj';

class UserLoc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 17.385,
            longitude: 78.4867,
            latitudeDelta: 0.5,
            longitudeDelta: 0.25,
          }}
        >
          {Sample.map((res, i) => (
            <Marker key={i} coordinate={{ latitude: res.latitude, longitude: res.longitude }}>
              <Callout>
                <View style={{ padding: 5, width: 200 }}>
                  <Text style={{ fontWeight: 'bold', marginVertical: 5 }}>{res.emp_name}</Text>
                  <Text style={{ marginVertical: 5 }}>{res.emp_department}</Text>
                  <Text>{res.emp_designation}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default UserLoc;
