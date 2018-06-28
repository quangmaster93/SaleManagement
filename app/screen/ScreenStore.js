// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    Image
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
        let store = this.store;
        let checkinTime = moment(store.checkin_time);
        let checkoutTime = moment(store.checkout_time);
        let commingTime = moment(store.comming_time);
        let userWorkingTime = moment.duration(checkoutTime.diff(checkinTime));
        let checkoutColor = checkinTime.isValid() ? "#1A91EB" : "#7383A1";
        let userWorkingTimeString = "...";
        if (userWorkingTime.isValid()) {
            userWorkingTimeString = "";
            let h = userWorkingTime.hours();
            let m = userWorkingTime.minutes();
            let s = userWorkingTime.seconds();
            if (h > 0) {
                userWorkingTimeString += `${h}h`;
            }
            if (m > 0) {
                userWorkingTimeString = `${m}p`;
            }

            if (h == 0 && m == 0) {
                userWorkingTimeString = `${s}s`;
            }
        }
        return <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: "#5F84FD",
                paddingBottom: 10,
                flexDirection: "row",
                zIndex: 99
            }}>
                <TouchableOpacity style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }}
                    onPress={() => { this.props.navigation.goBack() }}>
                    <Image style={{ width: 16, height: 16 }} source={require('../image/arrow.png')}></Image>
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, marginTop: 10, color: "#fff" }}>{store.name}</Text>
                        <Text style={{ fontSize: 12, color: "#fff" }}>{store.address}</Text>
                        <Text style={{ fontSize: 12, color: "#fff" }}>
                            <Text>
                                <Text>Dự kiến: </Text>
                                <Text style={{ fontWeight: "bold" }}>{`${commingTime.format("h[h]m[p]")}/ `}</Text>
                                <Text style={{ fontWeight: "bold", color: "#71CA3A" }}>{checkinTime.isValid() ? `${checkinTime.format("h[h]m[p]")}/ ` : "..."}</Text>
                            </Text>
                            <Text style={{marginLeft: 2, marginRight: 2}}>{" | "}</Text>
                            <Text>
                                <Text>Làm việc trong: </Text>
                                <Text style={{ fontWeight: "bold" }}>{`${store.working_time}p/ `}</Text>
                                <Text style={{ fontWeight: "bold", color: "#71CA3A" }}>{userWorkingTimeString}</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
            <ImageBackground source={require("../image/logo-bg.png")} style={[styles.bgImg]}
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
        </View>
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