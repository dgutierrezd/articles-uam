import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const Answer2 = props => {
  return (
    <SafeAreaView>
      <Text style={{marginHorizontal: 30, fontSize: 20, marginTop: 80}}>
        ES UN ESTUDIO EVIDENCIA 5
      </Text>
      <Text style={{marginHorizontal: 30, fontSize: 20, marginTop: 30}}>
        Grado de recomendación: C (insuficiente evidencia científica, la
        decisión de adoptar los resultados en la clínica debe basarse en otros
        criterios)
      </Text>
      <Text style={{marginHorizontal: 30, fontSize: 20, marginTop: 10}}>
        Los reportes de caso o con menos de 10 pacientes, las revisiones
        narrativas (sólo teoría) y las opiniones de expertos o cartas al editor
        son evidencia 5
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

export default Answer2;
