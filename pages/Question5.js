import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const Question5 = props => {
  return (
    <SafeAreaView>
      <Text style={{marginHorizontal: 30, fontSize: 20, marginTop: 80}}>
        ¿Si hace alguna intervención en el paciente, la elección de los
        pacientes fue aleatoria?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#9e192b',
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 180,
            width: 80,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => props.navigation.navigate('Answer4')}>
          <Text style={{color: 'white'}}>SI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#9e192b',
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 180,
            width: 80,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => props.navigation.navigate('Answer5')}>
          <Text style={{color: 'white'}}>NO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Question5;
