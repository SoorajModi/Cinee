import {createBottomTabNavigator} from 'react-navigation-tabs';

import {CreateRoomScene, HomeScene, JoinRoomScene, RoomScene} from '@scenes';

const TabNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Home: {
        screen: HomeScene,
    },
    CreateRoom: {
        screen: CreateRoomScene,
    },
    JoinRoom: {
      screen: JoinRoomScene,
    },
    Room: {
        screen: RoomScene,
    },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
