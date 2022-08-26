import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './Components/Home';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name='Articles' component={Articles}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
