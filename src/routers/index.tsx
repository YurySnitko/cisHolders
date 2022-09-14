import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { HomeTabs } from './HomeTabs';
import { DrawerStack } from './DrawerStack';
import { CustomDrawerContent } from 'components/CustomDrawerContent/CustomDrawerContent';
import { RootDrawerParamList } from './types';
import { NavBackButton } from 'controls/NavBackButton/NavBackButton';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          headerTitle: getFocusedRouteNameFromRoute(route),
        })}>
        <Drawer.Screen name="Home" component={HomeTabs} />
        <Drawer.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={{
            headerLeft: NavBackButton,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
