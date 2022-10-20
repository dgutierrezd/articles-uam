import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const Question3 = props => {
  return (
    <SafeAreaView>
      <Text style={{marginHorizontal: 30, fontSize: 20, marginTop: 80}}>
        ¿El estudio es un reporte de caso clínico(menos de 10 casos), o es una
        revisión narrativa(sólo presenta teoria sobre un tema) o una opinión de
        un experto?
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
          onPress={() => props.navigation.navigate('Answer2')}>
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
          onPress={() => props.navigation.navigate('Question4')}>
          <Text style={{color: 'white'}}>NO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Question3;
