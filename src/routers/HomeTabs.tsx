import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { ServicesScreen } from 'scenes/Services';
import { AddNewServiceScreen } from 'scenes/AddNewServiceScreen';
import { MapScreen } from 'scenes/Map';
import { Button } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { RootDrawerScreenProps } from './types';

const Tab = createBottomTabNavigator();

export const HomeTabs: FC<RootDrawerScreenProps<'Home'>> = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Services"
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        headerTitle: getFocusedRouteNameFromRoute(route),
        headerLeft: () => (
          <Button title="drawer" onPress={() => navigation.openDrawer()} />
        ),
        headerStyle: { backgroundColor: '#242a42' },
        tabBarStyle: { backgroundColor: '#242a42' },
        headerTintColor: '#d2d2d3',
      })}>
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={() => ({ headerRight: () => <Button title="Filter" /> })}
      />
      <Tab.Screen name="Add New" component={AddNewServiceScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};
