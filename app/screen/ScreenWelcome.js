// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image

} from 'react-native';

export default class ScreenWelcome extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        setTimeout(() => {this.props.navigation.navigate('ScreenLogin')}, 100);
    }
    render() {
        return <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)"></StatusBar>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../image/logo.png')}></Image>
        </View>
        <View style={styles.recContainer}>
            <Image style={styles.rec} source={require('../image/fixedrec.png')}></Image>
        </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
    },
    logoContainer:{
        flex:5,
        justifyContent: "center",
        alignItems: "center",
    },
    recContainer:{
        flex:3,
        justifyContent: "center",
        alignItems: "center",
    },
    logo:{

    },
    rec:{
        width:"100%",
        resizeMode:"contain"
    }
});