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
      <Text style={{ color: '#000000' }}>Articles!!</Text>
      <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 25}}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <View
          key={item}
          style={{
            width: 50,
            height: 100,
            borderColor: 'black',
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 25,
            marginVertical: 15
          }}>
          <Text style={{ color: '#000000' }}>Hi</Text>
          <Text style={{ color: '#000000' }}>Hi</Text>
        </View>
      ))
      }
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#9e192b',
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginBottom: 180,
        }}
        onPress={() => props.navigation.goBack()}>
        <Text style={{ color: 'white' }}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Articles;
