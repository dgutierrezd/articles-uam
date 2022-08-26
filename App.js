import React from 'react';
import Home from './Components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Articles from './Components/Articles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Articles"
          component={Articles}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
