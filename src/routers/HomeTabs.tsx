import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { AddNewServiceScreen } from '../scenes/AddNewServiceScreen';
import { MapScreen } from '../scenes/Map';
import { ServicesScreen } from '../scenes/Services';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Services"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Add New" component={AddNewServiceScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};
