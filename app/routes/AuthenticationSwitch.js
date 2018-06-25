//@flow
//AuthenticationStack
import { createStackNavigator, createDrawerNavigator, createTabNavigator,createSwitchNavigator  } from 'react-navigation';
import ScreenLogin from '../screen/ScreenLogin';
import ScreenWelcome from '../screen/ScreenWelcome';
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
            }
        },
        {
            // initialRouteName: "ScreenWelcome"
            initialRouteName: "ScreenLogin"
        }
    );
