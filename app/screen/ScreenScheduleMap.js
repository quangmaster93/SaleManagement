// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Modal,
    WebView
} from 'react-native';
import { UserApi } from '../api/UserApi';
import { Schedule } from '../models/Schedule';
import RouterStoreComponent from '../components/RouterStoreComponent';
import { RouterStore } from '../models/RouterStore';
import { ScheduleApi } from '../api/ScheduleApi';
import { Button } from 'react-native-elements';
import moment from 'moment'
import NavigationService from '../services/NavigationService';

export default class ScreenScheduleMap extends Component<any, any> {

    schedule: Schedule;
    stores: Array<RouterStore>;
    meta: any;

    constructor(props: any) {
        super(props);
        this.schedule = props.navigation.getParam("schedule");
        this.stores = props.navigation.getParam("stores");
        this.meta = props.navigation.getParam("meta");
    }

    render() {
        if (!this.stores.length) {
            return <View></View>
        }
        let stores = this.stores;
        let startTime = moment(this.meta.start_time);
        let endTime = moment(this.meta.end_time);
        let countAll = stores.length;
        let countDone = stores.filter((s: RouterStore) => {
            return s.checkin_time && s.checkout_time;
        }).length;
        return <View style={{ backgroundColor: "#ffffff", display: "flex", flex: 1 }}>
            <View style={{
                backgroundColor: "#5F84FD",
                paddingBottom: 10,
                flexDirection: "row"
            }}>
                <TouchableOpacity style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }}
                    onPress={() => { this.props.navigation.goBack() }}>
                    <Image style={{ width: 16, height: 16 }} source={require('../image/arrow.png')}></Image>
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, marginTop: 10, color: "#fff" }}>{this.schedule.name}</Text>
                        <Text style={{ fontSize: 12, color: "#fff" }}>{`Bắt đầu: ${"5:30"}, Tổng: ${countAll}, hoàn thành: ${countDone}`}</Text>
                    </View>
                    <View style={{ width: 80, alignContent: "center", alignItems: "center" }}>
                        <View>
                            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#fff", marginTop: 5 }}>{`${Math.round((countDone * 100) / countAll)}%`}</Text>
                        </View>
                        <TouchableOpacity style={{ marginTop: 3 }}
                            onPress={() => { this.props.navigation.goBack() }}>
                            <Image style={{ height: 30, resizeMode: "contain" }} source={require('../image/sw-map-on.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{flex: 1}}>
                <WebView
                    source={{ uri: 'https://map.xinkciti.com#2d=1&app=69' }}
                    style={{ marginTop: 20 }}
                />
            </View>
        </View>
    }
}