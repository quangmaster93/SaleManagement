// @flow
import { createStackNavigator, createDrawerNavigator, createTabNavigator  } from 'react-navigation';
import ScreenMap from '../screen/ScreenMap';
import ScreenNotification from '../screen/ScreenNotification';
import {ScheduleTab} from './ScheduleTab'
import ScreenScheduleDetail from '../screen/ScreenScheduleDetail';
import ScreenStore from '../screen/ScreenStore';
export const RootStack =   createStackNavigator(
        {
            ScreenMap: {
                screen: ScreenMap,
            },
            ScheduleTab: {
                screen: ScheduleTab,
            },
            ScreenNotification:{
                screen:ScreenNotification
            },
            ScreenScheduleDetail: {
                screen: ScreenScheduleDetail
            },
            ScreenStore: {
                screen: ScreenStore
            }
        }
    );