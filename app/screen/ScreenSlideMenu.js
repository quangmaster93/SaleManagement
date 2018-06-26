// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';

export default class ScreenSlideMenu extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity  onPress={() => { this.props.navigation.closeDrawer()}}>
                    <Image style={styles.backIcon} source={require('../image/back.png')}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: "#FFFFFF" }}>
                    Cài đặt
                </Text>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("ScreenAppInfo")}}>
                    <View style={styles.menuBlock}>
                        <Image style={styles.menuIcon} source={require('../image/cloud.png')}></Image>
                        <Text style={{ fontSize: 20, color: "#14344D" }}>Thông tin ứng dụng</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("ScreenSetting")}}>
                    <View style={styles.menuBlock}>
                        <Image style={styles.menuIcon} source={require('../image/setting.png')}></Image>
                        <Text style={{ fontSize: 20, color: "#14344D" }}>Cài đặt chung</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("UserInfoStack")}}>
                    <View style={styles.menuBlock}>
                        <Image style={styles.menuIcon} source={require('../image/user.png')}></Image>
                        <Text style={{ fontSize: 20, color: "#14344D" }}>Thông tin cá nhân</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.menuBlock,{borderBottomWidth:0}]}>
                        <Image style={styles.menuIcon} source={require('../image/logout.png')}></Image>
                        <Text style={{ fontSize: 20, color: "#14344D" }}>Đăng xuất</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF"
    },
    header: {
        backgroundColor: "#5F84FD",
        height: 77,
        flexDirection: 'row',
        alignItems: "center",
        paddingTop: 25
    },
    menu: {
        paddingLeft: 29,
        paddingRight: 29,
        marginTop: 29
    },
    backIcon: {
        marginLeft: 23,
        marginRight: 19
    },
    menuBlock: {
        flexDirection: 'row',
        paddingTop: 8,
        borderBottomColor: "#BCBBC1",
        borderBottomWidth: 1,
        paddingBottom:8
    },
    menuIcon: {
        marginRight:10
    }
})