//@flow
import { createStackNavigator, createDrawerNavigator, createTabNavigator  } from 'react-navigation';
import React from 'react';
import ScreenSlideMenu from '../screen/ScreenSlideMenu';
import {RootStack} from './RootStack';
export const RootDrawer = createDrawerNavigator(
    {
        RootStack: {
            screen: RootStack
        },

    },
    {
        contentComponent: props => <ScreenSlideMenu {...props}></ScreenSlideMenu>
    }
);