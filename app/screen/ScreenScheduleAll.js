// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList

} from 'react-native';
import { UserApi } from '../api/UserApi';
import { Schedule } from '../models/Schedule';
import moment from 'moment';
import ScheduleComponent from '../components/ScheduleComponent';

export default class ScreenScheduleAll extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            schedules: [],
            draw: 0
        };
    }

    async componentDidMount() {
        let res = await UserApi.getUserSchedule(1, 10, true);
        if(res.status){
            let schedules: Array<Schedule> = res.data;
            schedules = schedules.sort((a, b) => {
                return moment(b.start_time_schedule).valueOf() - moment(a.start_time_schedule).valueOf()
            });
            let draw = this.state.draw + 1;
            this.setState({schedules});
        }
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