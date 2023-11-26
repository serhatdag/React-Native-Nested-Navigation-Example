import { View, Text, Button } from 'react-native'
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
// -------------- P A G E S -------------- 
import Drawer_1 from '../drawer_files/Drawer_1';
import Drawer_2 from '../drawer_files/Drawer_2';
import Drawer_3 from '../drawer_files/Drawer_3';
// -------------- P A G E S -------------- 


const Stack_3 = ({navigation}) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Drawer_1"
        component={Drawer_1}
        
      />
      <Drawer.Screen
        name="Drawer_2"
        component={Drawer_2}
      />
      <Drawer.Screen
        name="Drawer_3"
        component={Drawer_3}
      />
    </Drawer.Navigator>
  );
}

export default Stack_3