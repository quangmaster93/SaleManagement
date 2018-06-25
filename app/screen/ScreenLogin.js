// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { Input } from 'react-native-elements';
export default class ScreenLogin extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        // setTimeout(() => {this.props.navigation.navigate('RootDrawer')}, 2000);
    }
    render() {
        return <View style={styles.container}>
            {/* <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)"></StatusBar> */}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../image/small-logo.png')}></Image>
                <Text style={styles.loginText}>Đăng nhập</Text>
            </View>
            <View style={styles.loginContainer}>
                <View style={styles.userNameContainer}>
                    <Text style={styles.labelStyle}>Tên người dùng</Text>
                    <Input
                        // placeholder='Tên người dùng'
                        shake={true}
                        inputContainerStyle={styles.inputComponentStyle}
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.passwordContainer}>
                    <Text style={styles.labelStyle}>Mật khẩu</Text>
                    <Input
                        // placeholder='Mật khẩu'
                        shake={true}
                    />
                </View>
                <View style={styles.remembervsreset}>

                </View>
                <View style={styles.loginButton}>

                </View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        marginTop: 15,
        flex: 3.2,
        justifyContent: "center",
        alignItems: "center",
    },
    loginContainer: {
        flex: 7,
        // justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },
    logo: {

    },
    loginText: {
        marginTop: 10,
        color: "#354052",
        fontSize: 24
    },
    inputComponentStyle: {
        marginTop: 5,
        width: "100%",
        borderWidth: 1,
        borderColor: "#DFE3E9",
        borderRadius: 4,
    },
    inputStyle:{
        color:"#354052",
        fontSize:14,
        margin:-2
    },
    labelStyle: {
        fontSize: 14,
        color: "#7F8FA4"
    },
    userNameContainer: {

    },
    passwordContainer: {

    },
    remembervsreset: {

    },
    loginButton: {

    }
});