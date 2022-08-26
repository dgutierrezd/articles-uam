import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Articles = props => {
  return (
    <SafeAreaView>
      <Text style={{color: '#000000'}}>Articles!!</Text>
      {[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ].map((item, index) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}>
          {item.map(i => (
            <View
              key={i}
              style={{
                width: 50,
                height: 100,
                borderColor: 'black',
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#000000'}}>Hi</Text>
            </View>
          ))}
        </View>
      ))}
      <TouchableOpacity
        style={{
          backgroundColor: '#9e192b',
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginBottom: 180,
        }}
        onPress={() => props.navigation.goBack()}>
        <Text style={{color: 'white'}}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Articles;
