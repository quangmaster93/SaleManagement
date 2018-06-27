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
import { UserApi } from '../api/UserApi';
import NotificationModal from '../component/NotificationModal'
export default class ScreenResetPassword extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            email:""
        };
    }
    Submit=async ()=>{
        let data = await UserApi.resetPassword(this.state.email);
        if(data.status){
            this.props.navigation.navigate('ScreenLogin');
        }
        else{
            let message="Đã xảy ra lỗi!"
            if(data.message){
                message=data.message;
            }
            this.modalData.message=message;
            this.DisplayModal();
        }
        console.log(data)
    }
    EditEmail = (email: string) => {
        this.setState({ email })
    }
    modalData = {
        isVisible:false,
        title: "THÔNG BÁO",
        message: "dasfgfds fdsfsdf",
        imageLink: require('../image/attention.png'),
        closeText: "Đóng"
    }
    HideModal = () => {
        this.modalData.isVisible=false;
        this.forceUpdate();
    }
    DisplayModal = () => {
        this.modalData.isVisible=true;
        this.forceUpdate();
    }
    componentDidMount() {

    }
    render() {
        return <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)"></StatusBar>
        <NotificationModal isVisible={this.modalData.isVisible}
                title={this.modalData.title}
                imageLink={this.modalData.imageLink}
                message={this.modalData.message}
                closeText={this.modalData.closeText}
                HideModal={this.HideModal}>
            </NotificationModal>
            <Image style={{marginTop:75}} source={require('../image/small-logo.png')}></Image>
            <Text style={{ fontSize: 24, color: "#354052",marginTop: 10 }}>Lấy lại mật khẩu</Text>
            <View style={styles.loginSwitch}>
                <Text style={{ fontSize: 14, color: "#7F8FA4" }}>Bạn đã có tài khoản Xinkciti</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ScreenLogin')}}>
                    <Text style={{ fontSize: 14, color: "#354052" }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{ fontSize: 14, color: "#7F8FA4" }}>Email:</Text>
                <Input
                    onChangeText={(email) => this.EditEmail(email)}
                    shake={true}
                    containerStyle={{width: "100%",marginTop: 5}}
                    inputContainerStyle={styles.inputComponentStyle}
                    inputStyle={styles.inputStyle}
                />
            </View>
            <Button
                onPress={this.Submit}
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
        marginTop: 2
    },
    note:{
        // backgroundColor:"red",
        flex:1,
        // height:"100%",
        justifyContent: "flex-end",
        paddingBottom:20
    }
})