// @flow
import React, { Component } from 'react';
import navigate from "../services/NavigationService"
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    TouchableOpacity

} from 'react-native';

export default class ScreenAppInfo extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return <View style={styles.container}>
            <StatusBar translucent backgroundColor="#416af3"></StatusBar>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack();this.props.navigation.openDrawer() }}>
                    <Image style={styles.backIcon} source={require('../image/back.png')}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: "#FFFFFF" }}>
                    Thông tin ứng dụng
                </Text>
            </View>

            <View style={styles.logoContainer}>
                <Image style={{width:94,height:87}} source={require('../image/logo.png')}></Image>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity>
                    <View style={styles.menuBlock}>
                        <Text style={{ fontSize: 18, color: "#14344D" }}>Tính năng & Hướng dẫn</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.menuBlock}>
                        <Text style={{ fontSize: 18, color: "#14344D" }}>Kiểm tra phiên bản mới</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.menuBlock}>
                        <Text style={{ fontSize: 18, color: "#14344D" }}>Bình chọn cho app</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.menuBlock}>
                        <Text style={{ fontSize: 18, color: "#14344D" }}>Website: </Text>
                        <Text style={{ fontSize: 16, color: "#14344D",marginTop:2 }}>http://</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuBlock}>
                        <Text style={{ fontSize: 18, color: "#14344D" }}>Email góp ý: </Text>
                        <Text style={{ fontSize: 16, color: "#14344D",marginTop:2 }}>feedback</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[styles.menuBlock, { borderBottomWidth: 0 }]}>
                        <Text style={{ fontSize: 18, color: "#14344D" }}>Hỗ trợ trực tuyến</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    logoContainer: {
        alignItems: "center",
        marginTop:18
    },
    header: {
        backgroundColor: "#5F84FD",
        height: 77,
        flexDirection: 'row',
        alignItems: "center",
        paddingTop: 25
    },
    menuBlock: {
        flexDirection: 'row',
        paddingTop: 8,
        borderBottomColor: "#BCBBC1",
        borderBottomWidth: 1,
        paddingBottom: 8,
        alignItems: "center",
    },
    menuIcon: {
        marginRight: 10
    },
    menu: {
        paddingLeft: 29,
        paddingRight: 29,
        marginTop: 22
    },
    backIcon: {
        marginLeft: 23,
        marginRight: 19
    },
})