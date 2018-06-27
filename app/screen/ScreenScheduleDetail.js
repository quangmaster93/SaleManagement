// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image

} from 'react-native';
import { UserApi } from '../api/UserApi';
import { Schedule } from '../models/Schedule';
import RouterStoreComponent from '../components/RouterStoreComponent';
import { RouterStore } from '../models/RouterStore';
import { ScheduleApi } from '../api/ScheduleApi';
import { Button } from 'react-native-elements';

interface ComponentState {
    stores: Array<RouterStore>;
    draw: number;
}

export default class ScreenScheduleDetail extends Component<any, ComponentState> {

    schedule: Schedule;
    routers: any

    constructor(props: any) {
        super(props);
        this.schedule = props.navigation.getParam("schedule");
        this.state = {
            stores: [],
            draw: 0
        };
    }

    async componentDidMount() {
        console.log(this.props);
        let res = await ScheduleApi.getScheduleDetail(this.schedule.id)
        let stores = res.data;
        console.log(stores);
        this.setState({ stores })
    }

    render() {
        return <View style={{ backgroundColor: "#ffffff", display: "flex", flex: 1 }}>
            <FlatList
                data={this.state.stores}
                renderItem={({ item, index }) => <RouterStoreComponent store={item} index={index} />}
                extraData={this.state.draw}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingBottom: 13,
                paddingRight: 17
            }}>
                <Text style={{width: 150, textAlign: "right", marginRight: 20}}>Bắt đầu lịch trình tuyến đang chọn</Text>
                <TouchableOpacity>
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
                        <Text style={{flex: 1, height: 33, lineHeight: 33, textAlign: "center", color: "#fff"}}>Bắt đầu</Text>
                        <View style={{flex: 1, height: 33, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                            <Image style={{width: 28, height: 16}} source={require('../image/arrow-right.png')}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    }
}