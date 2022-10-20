import React from 'react';
import Home from './Components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Articles from './Components/Articles';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Question5 from './pages/Question5';
import Question6 from './pages/Question6';
import Answer1 from './pages/Answer1';
import Answer2 from './pages/Answer2';
import Answer3 from './pages/Answer3';
import Answer4 from './pages/Answer4';
import Answer5 from './pages/Answer5';
import Answer6 from './pages/Answer6';
import Answer7 from './pages/Answer7';

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
        <Stack.Screen
          options={{headerShown: false}}
          name="Question1"
          component={Question1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Question2"
          component={Question2}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Question3"
          component={Question3}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Question4"
          component={Question4}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Question5"
          component={Question5}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Question6"
          component={Question6}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Answer1"
          component={Answer1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Answer2"
          component={Answer2}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Answer3"
          component={Answer3}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Answer4"
          component={Answer4}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Answer5"
          component={Answer5}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Answer6"
          component={Answer6}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Answer7"
          component={Answer7}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
