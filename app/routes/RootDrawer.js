//@flow
import { createStackNavigator, createDrawerNavigator, createTabNavigator  } from 'react-navigation';
import React from 'react';
import ScreenSlideMenu from '../screen/ScreenSlideMenu';
import {RootStack} from './RootStack';
import ScreenAppInfo from '../screen/ScreenAppInfo';
import ScreenSetting from '../screen/ScreenSetting';
import {UserInfoStack} from '../routes/UserInfoStack';
export const RootDrawer = createDrawerNavigator(
    {
        RootStack: {
            screen: RootStack
        },
        ScreenAppInfo: {
            screen: ScreenAppInfo
        },
        ScreenSetting: {
            screen: ScreenSetting
        },
        UserInfoStack: {
            screen: UserInfoStack
        }
    },
    {
        contentComponent: props => <ScreenSlideMenu {...props}></ScreenSlideMenu>
    }
);