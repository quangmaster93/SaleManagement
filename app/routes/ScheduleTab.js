// @flow
import { createStackNavigator, createDrawerNavigator, createTabNavigator  } from 'react-navigation';
import ScreenScheduleToday from '../screen/ScreenScheduleToday';
import ScreenScheduleAll from '../screen/ScreenScheduleAll';
export const ScheduleTab = createTabNavigator({
    ScreenScheduleToday: {
        screen: ScreenScheduleToday,
        navigationOptions: {
            title: "HÔM NAY"
        }
    },
    ScreenScheduleAll: {
        screen: ScreenScheduleAll,
        navigationOptions: {
            title: "TẤT CẢ"
        }
    }
},{
    tabBarOptions: {
        style: {
            backgroundColor: "#5F84FD",
            height: 48,

        },
        showIcon: false,
        tabStyle: {
        },
        tabStyle: {
            borderBottomColor: "#fff"
        },
        indicatorStyle: {
            backgroundColor: "#fff",
            height: 1
        }
    }
});