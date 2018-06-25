// @flow
import React, { Component } from 'react';
import {
    View,
    Text

} from 'react-native';

export default class ScreenWelcome extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        setTimeout(() => {this.props.navigation.navigate('ScreenLogin')}, 2000);
    }
    render() {
        return <View>
            <Text>
                ScreenWelcome
            </Text>
        </View>
    }
}