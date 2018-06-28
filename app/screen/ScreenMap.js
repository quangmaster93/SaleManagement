// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet

} from 'react-native';
import HeaderTabMapVsSchedule from "../component/HeaderTabMapVsSchedule"
export default class ScreenMap extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return <View style={styles.container}>
            <HeaderTabMapVsSchedule OpenMenu={() => this.props.navigation.openDrawer()}
                OpenMap={() => this.props.navigation.navigate("ScreenMap")}
                OpenSchedule={() => this.props.navigation.navigate("ScheduleTab")}
                OpenNotification={() => this.props.navigation.navigate("ScreenNotification")}
                notificationNumber={0}
                isMap={true}
            />
            <StatusBar translucent backgroundColor="#416af3"></StatusBar>
            <Text>
                ScreenMap
            </Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF"
    }
})