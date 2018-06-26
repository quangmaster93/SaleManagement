// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';
export default class ScreenLogin extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isRemember:false
        };
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
                    <View style={styles.labelContainer}>
                        <Text style={styles.labelStyle}>Tên người dùng</Text>
                        <Image style={styles.star} source={require('../image/attention-star.png')}></Image>
                    </View>

                    <Input
                        // placeholder='Tên người dùng'
                        shake={true}
                        containerStyle={{ width: "100%", marginTop: 5 }}
                        inputContainerStyle={styles.inputComponentStyle}
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.passwordContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.labelStyle}>Mật khẩu</Text>
                        <Image style={styles.star} source={require('../image/attention-star.png')}></Image>
                    </View>
                    <Input
                        // placeholder='Mật khẩu'
                        shake={true}
                        containerStyle={{ width: "100%", marginTop: 5 }}
                        inputContainerStyle={styles.inputComponentStyle}
                        inputStyle={styles.inputStyle}
                        rightIcon={<Image style={styles.eyeIcon} source={require('../image/eye.png')}></Image>}
                    />
                </View>
                <View style={styles.remembervsreset}>
                    <CheckBox
                        checkedIcon={<Image source={require('../image/checked.png')} />}
                        uncheckedIcon={<Image source={require('../image/unchecked.png')} />}
                        title="Ghi nhớ"
                        textStyle={styles.rememberText}
                        containerStyle={styles.rememberContainer}
                        checked={this.state.isRemember}
                        onPress={() => this.setState({isRemember: !this.state.isRemember})}
                    />
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ScreenResetPassword')}}>
                        <Text style={styles.resetPass}>Lấy lại mật khẩu?</Text>
                    </TouchableOpacity>

                </View>
                <Button
                    title="Đăng nhập"
                    titleStyle={{ color: "#FFFFFF", fontSize: 17 }}
                    buttonStyle={{
                        backgroundColor: "#1A91EB",
                        width: "100%",
                        height: 36,
                        borderWidth: 0,
                        borderRadius: 4,
                    }}
                    containerStyle={{ width: "100%", shadowColor: "#FFFFFF", marginTop: 10 }}
                />
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
        paddingLeft: 42,
        paddingRight: 42,
    },
    logo: {

    },
    loginText: {
        marginTop: 10,
        color: "#354052",
        fontSize: 24
    },
    inputComponentStyle: {
        // marginTop: 5,
        width: "100%",
        borderWidth: 1,
        borderColor: "#DFE3E9",
        borderRadius: 4,
        // padding:0
        height: 37,
    },
    inputStyle: {
        color: "#354052",
        fontSize: 14,
        // margin:-3,
        marginTop: 2
    },
    labelStyle: {
        fontSize: 14,
        color: "#7F8FA4"
    },
    userNameContainer: {

    },
    passwordContainer: {
        marginTop: 15
    },
    remembervsreset: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor:"green",
        width: "100%"
    },
    eyeIcon: {
        marginRight: 10
    },
    labelContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    star: {
        marginTop: 3,
        marginRight: 3
    },
    rememberText: {
        color: "#999fa8",
        fontSize: 16
    },
    resetPass: {
        color: "#1A91EB",
        fontSize: 14,
        // marginRight: 17
    },
    rememberContainer: {
        backgroundColor: "#FFFFFF",
        marginLeft: -11,
        borderWidth: 0
    }
});