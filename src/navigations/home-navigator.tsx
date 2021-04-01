import { createStackNavigator } from 'react-navigation-stack';

import {CreateRoomScene, HomeScene, JoinRoomScene} from '@scenes';

const AuthNavigatorConfig: any = {
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

const HomeNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default HomeNavigator;
