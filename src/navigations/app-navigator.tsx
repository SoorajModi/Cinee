import {createBottomTabNavigator} from 'react-navigation-tabs';

import {BrowseScene, LikedScene, RoomScene, MatchesScene} from '@scenes';

const TabNavigatorConfig = {
    initialRouteName: 'Browse',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    // Room: {
    //     screen: RoomScene,
    // },
    Browse: {
      screen: BrowseScene,
    },
    Liked: {
        screen: LikedScene,
    },
    Matches: {
        screen: MatchesScene,
    }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
