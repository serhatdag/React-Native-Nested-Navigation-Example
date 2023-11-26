import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// -------------- P A G E S -------------- 
import Stack_1 from './components/stack_files/Stack_1';
import Stack_2 from './components/stack_files/Stack_2';
import Stack_3 from './components/stack_files/Stack_3';
// -------------- P A G E S -------------- 


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Stack_1' >
        <Stack.Screen
          name="Stack_1"
          component={Stack_1}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Stack_2"
          component={Stack_2}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Stack_3"
          component={Stack_3}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App