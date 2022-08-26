import React from 'react';
import {Button, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const Home = props => {
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', marginTop: 30, marginHorizontal: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#00000'}}>
          Introducción
        </Text>
        <Text style={{marginTop: 20, marginBottom: 10, color: '#00000'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
          faucibus arcu. Proin ac imperdiet nibh, quis ultricies sem. Aenean
          quis augue nec purus elementum lobortis. Nunc sodales dapibus tellus
          vulputate consectetur. Vestibulum ultricies ornare tortor, et cursus
          sem tristique sit amet. Maecenas quis commodo purus, eget porttitor
          felis. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Integer eu quam sed est tristique
          feugiat eu quis libero. Pellentesque sapien risus, porttitor in
          tincidunt eget, interdum sed lorem. Vivamus mollis faucibus rutrum.
          Aliquam et lectus pulvinar, vehicula mauris vitae, sodales dolor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
          faucibus arcu. Proin ac imperdiet nibh, quis ultricies sem. Aenean
          quis augue nec purus elementum lobortis. Nunc sodales dapibus tellus
          vulputate consectetur. Vestibulum ultricies ornare tortor, et cursus
          sem tristique sit amet. Maecenas quis commodo purus, eget porttitor
          felis. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Integer eu quam sed est tristique
          feugiat eu quis libero. Pellentesque sapien risus, porttitor in
          tincidunt eget, interdum sed lorem. Vivamus mollis faucibus rutrum.
          Aliquam et lectus pulvinar, vehicula mauris vitae, sodales dolor.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#9e192b',
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginBottom: 180,
          }}
          onPress={() => props.navigation.navigate('Articles')}>
          <Text style={{color: 'white'}}>Continuar</Text>
        </TouchableOpacity>
        <Button title="Acerca de" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
