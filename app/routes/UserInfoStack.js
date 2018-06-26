// @flow
import { createStackNavigator, createDrawerNavigator, createTabNavigator  } from 'react-navigation';
import ScreenUserInfo from '../screen/ScreenUserInfo';
import ScreenChangePassword from '../screen/ScreenChangePassword';
export const UserInfoStack =   createStackNavigator(
        {
            ScreenUserInfo: {
                screen: ScreenUserInfo,
            },
            ScreenChangePassword: {
                screen: ScreenChangePassword,
            }
        }
    );