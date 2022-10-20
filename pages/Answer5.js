import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const Answer5 = props => {
  return (
    <SafeAreaView>
      <Text style={{marginHorizontal: 30, fontSize: 20, marginTop: 80}}>
        ES UN ESTUDIO CLINICO CONTROLADO NO ALEATORIZADO: EVIDENCIA 3
      </Text>
      <Text style={{marginHorizontal: 30, fontSize: 20, marginTop: 30}}>
        Grado de recomendación: B (Existe cierta evidencia científica, para
        recomendar o no la adopción de un procedimiento clínico o Tecnología)
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
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={{color: 'white'}}>VOLVER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Answer5;
