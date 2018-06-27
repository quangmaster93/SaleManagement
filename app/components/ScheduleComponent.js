// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { UserApi } from '../api/UserApi';
import { Schedule } from '../models/Schedule';
import NavigationService from '../services/NavigationService';
import moment from 'moment';

interface ScreenScheduleTodayProps {
    schedule: Schedule;
}

export default class ScheduleComponent extends Component<Schedule, any> {

    constructor(props: Schedule) {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        let schedule: Schedule = this.props.schedule;
        let date = moment(schedule.start_time_schedule);
        return <View>
            <TouchableOpacity style={styles.container}
                onPress={() => { NavigationService.navigate('ScreenScheduleDetail', { schedule }); }}>
                <View style={styles.iconWrap}>
                    <Image style={styles.icon} source={require('../image/schedule-icon.png')} />
                </View>
                <View style={styles.detailWrap}>
                    <Text style={styles.title}>{schedule.name.toUpperCase()}</Text>
                    <Text style={[styles.description, { color: "#000", flexWrap: "nowrap" }]}>{schedule.description || "Chưa có mô tả"}</Text>
                    <Text style={styles.description}>{`Xuất phát: ${date.format("hh:mm A")}`}</Text>
                    <Text style={styles.description}>{`Bắt đầu tại: ${schedule.work_at}`}</Text>
                </View>
                <View style={{
                    position: "absolute",
                    top: 5,
                    right: 7,
                    backgroundColor: "transparent",
                    width: 30,
                    height: 40,
                }}>
                    <View style={{
                        backgroundColor: "#7383A1",
                        width: 30,
                        height: 28,
                    }}>
                        <View style={{
                            width: 24,
                            // backgroundColor: "red",
                            alignSelf: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{textAlign: "center", fontSize: 10, color: "#fff"}}>{date.date().toString()}</Text>
                            <View style={{
                                // position: "absolute",
                                width: 20,
                                height: 1,
                                backgroundColor: "#fff"
                            }}></View>
                            <Text style={{textAlign: "center", fontSize: 10, color: "#fff"}}>{date.month() + 1}</Text>
                            
                        </View>
                    </View>
                    <View style={{
                        position: "absolute",
                        bottom: 0,
                        width: 0,
                        height: 0,
                        backgroundColor: 'transparent',
                        borderStyle: 'solid',
                        borderTopWidth: 0,
                        borderRightWidth: 15,
                        borderBottomWidth: 12,
                        borderLeftWidth: 15,
                        borderTopColor: '#7383A1',
                        borderRightColor: '#7383A1',
                        borderBottomColor: 'transparent',
                        borderLeftColor: '#7383A1',
                    }}/>
                </View>
            </TouchableOpacity>
        </View >
    }
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        backgroundColor: "#eeeeee",
    },
    iconWrap: {
        width: 50,
        height: 50,
        alignItems: "center"
    },
    detailWrap: {
        width: 50,
        flex: 1
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: "#354052",
        // height: 23,
        paddingRight: 40,
        flexWrap: "nowrap"
    },
    description: {
        fontSize: 13,
        color: "#4B6FF4"
    },
    icon: {
        width: 25,
        height: 25,
        marginTop: 10
    },
});