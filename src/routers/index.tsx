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
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeTabs}
          options={() => ({ headerShown: false })}
        />
        <Drawer.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={({ route }) => ({
            headerTitleAlign: 'center',
            headerLeft: NavBackButton,
            headerTitle: getFocusedRouteNameFromRoute(route),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
