// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList

} from 'react-native';
import { UserApi } from '../api/UserApi';
import { Schedule } from '../models/Schedule';
import ScheduleComponent from '../components/ScheduleComponent';
import moment from 'moment';

interface ScreenScheduleTodayState {
    schedules: Array<Schedule>;
    draw: number;
}

export default class ScreenScheduleToday extends Component<any, ScreenScheduleTodayState> {

    constructor(props: any) {
        super(props);
        this.state = {
            schedules: [],
            draw: 0
        };
    }

    async componentDidMount() {
        let res = await UserApi.getUserSchedule(1, 10, true);
        let sd:Schedule = {
            name: "Lộ trình Phan Đăng Lưu",
            description: "Dòng mô tả",
            start_time_schedule: "2018-07-26T08:00:00",
            work_at: "63 Phan Đăng lưu"
        }
        let schedules = [
            sd, sd
        ]
        // console.log(res.status);
        if(res.status){
            let schedules: Array<Schedule> = res.data;
            let draw = this.state.draw + 1;
            console.log(schedules);
            schedules = schedules.sort((a, b) => {
                return moment(b.start_time_schedule).valueOf() - moment(a.start_time_schedule).valueOf()
            });
            this.setState({schedules, draw});
        }
        console.log("=====================");
        console.log(res);
        // let draw = this.state.draw + 1;
        // this.setState({schedules, draw});
    }

    render() {
        return <View style={{backgroundColor: "#ffffff", display: "flex", flex: 1}}>
            <FlatList
                    data={this.state.schedules}
                    renderItem={({ item }) => <ScheduleComponent schedule={item} />}
                    extraData={this.state.draw}
                    keyExtractor={(item, index) => index.toString()}
                />
        </View>
    }
}