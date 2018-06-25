// @flow
import { createStackNavigator, createDrawerNavigator, createTabNavigator  } from 'react-navigation';
import ScreenScheduleToday from '../screen/ScreenScheduleToday';
import ScreenScheduleAll from '../screen/ScreenScheduleAll';
export const ScheduleTab = createTabNavigator({
    ScreenScheduleToday: {
        screen: ScreenScheduleToday
    },
    ScreenScheduleAll: {
        screen: ScreenScheduleAll
    }
});