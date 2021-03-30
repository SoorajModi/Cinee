import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeScene, RoomScene } from '@scenes';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScene,
  },
  Room: {
    screen: RoomScene,
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
