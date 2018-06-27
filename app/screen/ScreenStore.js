// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { UserApi } from '../api/UserApi';
import { Schedule } from '../models/Schedule';
import { RouterStore } from '../models/RouterStore';
import ScheduleComponent from '../components/ScheduleComponent';
import moment from 'moment';

interface ComponentState {
    draw: number;
}

export default class ScreenStore extends Component<any, any> {

    store: RouterStore;

    constructor(props: any) {
        super(props);
        this.store = props.navigation.getParam("store");
    }

    async componentDidMount() {

    }

    render() {
        let checkinTime = moment(this.store.checkin_time);
        let checkoutTime = moment(this.store.checkout_time);
        let checkoutColor = checkinTime.isValid() ? "#1A91EB" : "#7383A1";
        return <ImageBackground source={require("../image/logo-bg.png")} style={[styles.bgImg]}
            imageStyle={[styles.btImgInside]}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flexDirection: "row" }}>
                {checkinTime.isValid()
                    ? <View style={{ flex: 1, backgroundColor: "#7383A1" }}>
                        <Text style={[styles.btnText]}>{checkinTime.format("hh:mm A")}</Text>
                    </View>
                    : <TouchableOpacity style={{ flex: 1, backgroundColor: "#39B54A" }}>
                        <Text style={[styles.btnText]}>CHECK IN</Text>
                    </TouchableOpacity>}
                {checkoutTime.isValid()
                    ? <View style={{ flex: 1, backgroundColor: "#FD6E4C" }}>
                        <Text style={[styles.btnText]}>{checkoutTime.format("hh:mm A")}</Text>
                    </View>
                    : <TouchableOpacity style={{ flex: 1, backgroundColor: checkoutColor }} disabled={!checkinTime.isValid()}>
                        <Text style={[styles.btnText]}>CHECK OUT</Text>
                    </TouchableOpacity>}
            </View>
        </ImageBackground>
    }
}

const styles = {
    bgImg: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column"
    },
    btImgInside: {
        width: "100%",
        height: "100%",
        resizeMode: "center",
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
    },
    btnText: {
        textAlign: "center",
        height: 40,
        lineHeight: 40,
        fontSize: 17,
        color: "#fff"
    }
}