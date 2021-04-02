import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import HomeNavigator from "./home-navigator";

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
    Home: HomeNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);

const Navigator = createAppContainer(RootNavigator);

export default Navigator;
