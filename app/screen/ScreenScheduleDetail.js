// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Modal

} from 'react-native';
import { UserApi } from '../api/UserApi';
import { Schedule } from '../models/Schedule';
import RouterStoreComponent from '../components/RouterStoreComponent';
import { RouterStore } from '../models/RouterStore';
import { ScheduleApi } from '../api/ScheduleApi';
import { Button } from 'react-native-elements';
import moment from 'moment'

interface ComponentState {
    stores: Array<RouterStore>;
    draw: number;
    modalVisible: boolean;
    meta: any;
}

export default class ScreenScheduleDetail extends Component<any, ComponentState> {

    schedule: Schedule;
    routers: any;

    constructor(props: any) {
        super(props);
        this.schedule = props.navigation.getParam("schedule");
        this.state = {
            stores: [],
            draw: 0,
            modalVisible: false,
            meta: {}
        };
    }

    async componentDidMount() {
        console.log(this.props);
        let res = await ScheduleApi.getScheduleDetail(this.schedule.id)
        let stores = res.data;
        let meta = res.meta;
        console.log(stores);
        this.setState({ stores, meta })
    }

    setModalVisible(visible: boolean) {
        console.log("setModalVisible");
        console.log(visible);
        this.setState({ modalVisible: visible });
    }

    render() {
        if (!this.state.stores.length) {
            return <View></View>
        }
        let startTime = moment(this.state.meta.start_time);
        let endTime = moment(this.state.meta.end_time);
        return <View style={{ backgroundColor: "#ffffff", display: "flex", flex: 1 }}>
            <FlatList
                data={this.state.stores}
                renderItem={({ item, index }) => <RouterStoreComponent store={item} index={index} />}
                extraData={this.state.draw}
                keyExtractor={(item, index) => index.toString()}
            />
            {this.state.meta.start_time &&
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, backgroundColor: "#7383A1" }}>
                        <Text style={{ textAlign: "center", height: 40, lineHeight: 40, fontSize: 17, color: "#fff" }}>{startTime.format("hh:mm A")}</Text>
                    </View>
                    {endTime.isValid()
                        ? <View style={{ flex: 1, backgroundColor: "#FD6E4C" }}>
                            <Text style={{ textAlign: "center", height: 40, lineHeight: 40, fontSize: 17, color: "#fff" }}>{endTime.format("hh:mm A")}</Text>
                        </View>
                        : <TouchableOpacity style={{ flex: 1, backgroundColor: "#FD6E4C" }}>
                            <Text style={{ textAlign: "center", height: 40, lineHeight: 40, fontSize: 17, color: "#fff" }}>Kết thúc</Text>
                        </TouchableOpacity>}
                </View>}
            {!this.state.meta.start_time &&
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    paddingBottom: 13,
                    paddingRight: 17
                }}>
                    <Text style={{ width: 150, textAlign: "right", marginRight: 20 }}>Bắt đầu lịch trình tuyến đang chọn</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <View style={{
                            borderRadius: 4,
                            borderWidth: 1,
                            borderColor: "#5F84FD",
                            flexDirection: "row",
                            alignItems: "center",
                            width: 150,
                            height: 33,
                            backgroundColor: "#5F84FD",
                            overflow: "hidden"
                        }}>
                            <Text style={{ flex: 1, height: 33, lineHeight: 33, textAlign: "center", color: "#fff" }}>Bắt đầu</Text>
                            <View style={{ flex: 1, height: 33, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                                <Image style={{ width: 28, height: 16 }} source={require('../image/arrow-right.png')}></Image>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>}
            <Modal

                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    }
}