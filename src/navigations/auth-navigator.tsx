import { createStackNavigator } from 'react-navigation-stack';

import { LoginScene } from '@scenes';

const AuthNavigatorConfig: any = {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Login: LoginScene,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;