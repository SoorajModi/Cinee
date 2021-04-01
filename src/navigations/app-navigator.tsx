import {createBottomTabNavigator} from 'react-navigation-tabs';

import {RoomScene} from '@scenes';

const TabNavigatorConfig = {
    initialRouteName: 'Room',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Room: {
        screen: RoomScene,
    },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
