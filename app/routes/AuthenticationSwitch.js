//@flow
//AuthenticationStack
import { createStackNavigator, createDrawerNavigator, createTabNavigator,createSwitchNavigator  } from 'react-navigation';
import ScreenLogin from '../screen/ScreenLogin';
import ScreenWelcome from '../screen/ScreenWelcome';
import ScreenResetPassword from '../screen/ScreenResetPassword';
import {RootDrawer} from './RootDrawer'
export default createSwitchNavigator (
        {
            ScreenLogin: {
                screen: ScreenLogin,
            },
            RootDrawer: {
                screen: RootDrawer,
            },
            ScreenWelcome: {
                screen: ScreenWelcome,
            },
            ScreenResetPassword:{
                screen:ScreenResetPassword
            }
        },
        {
            // initialRouteName: "ScreenWelcome"
            initialRouteName: "ScreenWelcome"
        }
    );
