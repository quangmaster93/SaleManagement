// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Image

} from 'react-native';

export default class ScreenUserInfo extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return <View>
            <StatusBar translucent backgroundColor="#416af3"></StatusBar>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("RootStack") }}>
                    <Image style={styles.backIcon} source={require('../image/back.png')}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: "#FFFFFF" }}>
                    Thông tin ứng dụng
                </Text>
            </View>
            <View style={styles.avatarContainer}>
                <View style={styles.blueBlock}>

                </View>
                <View style={styles.whiteBlock}>

                </View>
                <View style={styles.avatarOutsite}>
                    <Image style={styles.avatar} source={require('../image/user-default.jpg')}></Image>
                </View>
            </View>
            <Text>
                ScreenUserInfo
            </Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    header: {
        backgroundColor: "#5F84FD",
        height: 77,
        flexDirection: 'row',
        alignItems: "center",
        paddingTop: 25
    },
    backIcon: {
        marginLeft: 23,
        marginRight: 19
    },
    avatar:{
        width:140,
        height:140,
        borderRadius:70,
    },
    avatarOutsite:{
        position:"absolute",
        width:144,
        height:144,
        borderRadius:72,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#FEFEFF"
    },
    avatarContainer:{
        width:164,
        backgroundColor: "#5F84FD",
        paddingTop:20
    },
    blueBlock:{
        width:72,
        backgroundColor: "#5F84FD"
    },
    whiteBlock:{
        width:72,
        backgroundColor: "#FEFEFF"
    }

})