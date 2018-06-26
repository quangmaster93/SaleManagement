// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar

} from 'react-native';

export default class Setting extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return <View>
            <StatusBar translucent backgroundColor="#416af3"></StatusBar>
            <Text>
            Setting
            </Text>
        </View>
    }
}