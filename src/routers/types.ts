import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type RootDrawerParamList = {
  Home: NavigatorScreenParams<HomeTabsParamList>;
  DrawerStack: NavigatorScreenParams<DrawerStackParamList>;
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;

export type HomeTabsParamList = {
  Services: undefined;
  AddService: undefined;
  Map: undefined;
};

export type DrawerStackParamList = {
  About: undefined;
};

export type HomeTabsScreenProps<T extends keyof HomeTabsParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabsParamList, T>,
    RootDrawerScreenProps<keyof RootDrawerParamList>
  >;

export type DrawerStackScreenProps<T extends keyof DrawerStackParamList> =
  CompositeScreenProps<
    StackScreenProps<DrawerStackParamList, T>,
    RootDrawerScreenProps<keyof RootDrawerParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
