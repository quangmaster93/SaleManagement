// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar

} from 'react-native';

export default class ScreenAppInfo extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return <View>
            <StatusBar translucent backgroundColor="#416af3"></StatusBar>
            <Text>
                AppInfo
            </Text>
            <Text>
                AppInfo
            </Text>
            <Text>
                AppInfo
            </Text>
        </View>
    }
}