//@flow
//AuthenticationStack
//Khong dung nua
import { createStackNavigator, createDrawerNavigator, createTabNavigator  } from 'react-navigation';
import ScreenLogin from '../screen/ScreenLogin';
import {RootDrawer} from './RootDrawer'
export const AuthenticationStack = (select: any) => {
    return createStackNavigator(
        {
            ScreenLogin: {
                screen: ScreenLogin,
            },
            RootApp: {
                screen: RootDrawer,
            },
            // ScreenLoading:{
            //     screen:ScreenLoading
            // }
        },
        {
            headerMode: "none",
            // initialRouteName: select=="loaded" ? "RootApp" : (select=="logged"?"ScreenLoading":"ScreenLogin")
            initialRouteName: select=="true"?"RootApp":"ScreenLogin"
        }
    );
}