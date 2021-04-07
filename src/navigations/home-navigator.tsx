import { createStackNavigator } from 'react-navigation-stack';

import {CreateRoomScene, HomeScene, JoinRoomScene} from '@scenes';

const HomeNavigatorConfig: any = {
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
};

const HomeNavigator = createStackNavigator(RouteConfigs, HomeNavigatorConfig);

export default HomeNavigator;
