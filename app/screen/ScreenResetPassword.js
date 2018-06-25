// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar

} from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';
export default class ScreenResetPassword extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)"></StatusBar>
            <Image style={{marginTop:75}} source={require('../image/small-logo.png')}></Image>
            <Text style={{ fontSize: 24, color: "#354052",marginTop: 10 }}>Lấy lại mật khẩu</Text>
            <View style={styles.loginSwitch}>
                <Text style={{ fontSize: 14, color: "#7F8FA4" }}>Bạn đã có tài khoản Xinkciti</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "#354052" }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{ fontSize: 14, color: "#7F8FA4" }}>Email:</Text>
                <Input
                    shake={true}
                    containerStyle={{width: "100%",marginTop: 5}}
                    inputContainerStyle={styles.inputComponentStyle}
                    inputStyle={styles.inputStyle}
                />
            </View>
            <Button
                title="Lấy lại mật khẩu"
                titleStyle={ {color: "#FFFFFF", fontSize: 17 }}
                buttonStyle={{
                    backgroundColor: "#1A91EB",
                    width: "100%",
                    height: 36,
                    borderWidth: 0,
                    borderRadius: 4,
                }}
                containerStyle={{ width: "100%", shadowColor: "#FFFFFF",marginTop:30 }}
            />
            <View style={styles.note}>
                <Text style={{fontSize:14,color:"#1A91EB"}}>*Sau khi lấy lại mật khẩu, vui lòng xác thực tài khoản bằng link liên kết đã được gửi qua email</Text>
            </View>
        </View >
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        paddingLeft: 42,
        paddingRight: 42,
    },
    loginSwitch:{
        marginTop:7,
        paddingLeft:7,
        paddingRight:7,
        width:"100%",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    inputComponentStyle:{
        // margin:0,
        width: "100%",
        borderWidth: 1,
        borderColor: "#DFE3E9",
        borderRadius: 4,
        // padding:0
        height: 37,
        
    },
    inputStyle:{
        color: "#354052",
        fontSize: 14,
        // margin:-3,
        marginTop: 10
    },
    note:{
        // backgroundColor:"red",
        flex:1,
        // height:"100%",
        justifyContent: "flex-end",
        paddingBottom:20
    }
})