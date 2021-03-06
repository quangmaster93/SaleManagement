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
import {User} from "../models/User"
import Common from "../config/common"
export default class ScreenUserInfo extends Component<any, any> {
    userInfo:User
    avatarPath:string
    constructor(props: any) {
        super(props);
        this.userInfo=User.data;
        this.avatarPath=Common.domain+this.userInfo.avatar_path +"/"+this.userInfo.avatar
    }
    
    componentDidMount() {

    }
    render() {
        return <View style={styles.container}>
            <StatusBar translucent backgroundColor="#416af3"></StatusBar>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack(null);this.props.navigation.openDrawer() }}>
                    <Image style={styles.backIcon} source={require('../image/back.png')}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: "#FFFFFF" }}>
                    Thông tin cá nhân
                </Text>
            </View>
            <View style={styles.avatarContainer}>
                <View style={styles.blueBlock}></View>
                <View style={styles.whiteBlock}></View>
                <View style={styles.avatarOutsiteContainer}>
                    <View style={styles.avatarOutsite}>
                        <Image style={styles.avatar} source={{uri: this.avatarPath}}></Image>
                    </View>
                </View>
            </View>
            <View style={styles.userInfo}>
                <Text style={{ fontSize: 20, color: "#14344D" }}>{this.userInfo.fullName.toUpperCase()}</Text>
                <Text style={{ fontSize: 14, color: "#14344D" }}>{this.userInfo.phoneNumber}</Text>
                <Text style={{ fontSize: 14, color: "#14344D" }}>{this.userInfo.email}</Text>
                <Text style={{ fontSize: 14, color: "#14344D" }}>{this.userInfo.address}</Text>
            </View>
            <View style={styles.direction}>

                <View style={styles.setting}>
                    <TouchableOpacity >
                        <Image source={require('../image/setting-user.png')}></Image>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 17, color: "#14344D" }}>Cài đặt</Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.changePassword}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("ScreenChangePassword") }}>
                        <Image source={require('../image/edit-user.png')}></Image>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 17, color: "#14344D" }}>Thay đổi mật khẩu</Text>
                </View>

            </View>
            <Image style={styles.fixedrec} source={require('../image/subtract.png')}></Image>
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
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 70,
    },
    avatarOutsiteContainer: {
        position: "absolute",
        width: "100%",
        top: 20,
        alignItems: 'center',
        justifyContent: "center",
    },
    avatarOutsite: {
        width: 144,
        height: 144,
        borderRadius: 72,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#FEFEFF",
    },
    avatarContainer: {
        height: 164,
        backgroundColor: "#5F84FD",
        paddingTop: 20
    },
    blueBlock: {
        height: 72,
        backgroundColor: "#5F84FD"
    },
    whiteBlock: {
        height: 72,
        backgroundColor: "#FEFEFF"
    },
    fixedrec: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 130,
    },
    userInfo: {
        alignItems: 'center',
    },
    direction: {
        marginTop: 45,
        flexDirection: 'row',
        justifyContent: "center",
    },
    setting: {
        width: "49%",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },
    divider: {
        height: 53,
        width: 0.5,
        backgroundColor: "#7383A1",
        // marginRight:50,
        // marginLeft:50,
    },
    changePassword: {
        width: "49%",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },

})