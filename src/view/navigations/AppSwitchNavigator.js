import { createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'

export default createSwitchNavigator({
    SplashScreen: SplashScreen,
    LoginScreen: LoginScreen
});