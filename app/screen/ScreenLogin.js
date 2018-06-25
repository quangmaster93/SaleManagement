// @flow
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class ScreenLogin extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        setTimeout(() => {this.props.navigation.navigate('RootDrawer')}, 2000);
    }
    render() {
        return <View>
            <Text>
            ScreenLogin
            </Text>
            
        </View>
    }
}