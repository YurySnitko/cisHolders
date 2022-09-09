import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React, { FC } from 'react';

export const CustomDrawerContent: FC<DrawerContentComponentProps> = props => {
  const drawerStackState =
    props.state.routes[props.state.index].name === 'DrawerStack' &&
    props.state.routes[props.state.index].state;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="About"
        focused={
          drawerStackState &&
          drawerStackState.routes[
            drawerStackState.index ? drawerStackState.index : 0
          ].name === 'About'
        }
        onPress={() =>
          props.navigation.navigate('DrawerStack', { screen: 'About' })
        }
      />
    </DrawerContentScrollView>
  );
};
