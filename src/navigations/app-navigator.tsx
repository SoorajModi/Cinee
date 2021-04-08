import { createBottomTabNavigator } from 'react-navigation-tabs';

import { BrowseScene, LikedScene, MatchesScene } from '@scenes';

const TabNavigatorConfig = {
  initialRouteName: 'Browse',
};

const RouteConfigs = {
  Browse: {
    screen: BrowseScene,
  },
  Liked: {
    screen: LikedScene,
  },
  Matches: {
    screen: MatchesScene,
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
