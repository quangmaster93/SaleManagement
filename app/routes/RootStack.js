// @flow
import { createStackNavigator, createDrawerNavigator, createTabNavigator  } from 'react-navigation';
import ScreenMap from '../screen/ScreenMap';
import ScreenNotification from '../screen/ScreenNotification';
import {ScheduleTab} from './ScheduleTab'
import ScreenScheduleDetail from '../screen/ScreenScheduleDetail';
import ScreenStore from '../screen/ScreenStore';
import ScreenScheduleMap from '../screen/ScreenScheduleMap';
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
            ScreenScheduleMap: {
                screen: ScreenScheduleMap
            },
            ScreenStore: {
                screen: ScreenStore
            }
        },
        {
            headerMode: "none"
        }
    );