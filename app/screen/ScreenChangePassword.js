// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { Input } from 'react-native-elements';
import { UserApi } from '../api/UserApi';
import NotificationModal from '../component/NotificationModal';
import { ResponseModel } from "../models/ResponseModel";
import {User} from "../models/User"
import Common from "../config/common"
export default class ScreenChangePassword extends Component<any, any> {
    userInfo:User
    avatarPath:string
    constructor(props: any) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        }
        this.userInfo=User.data;
        this.avatarPath=Common.domain+this.userInfo.avatar_path +"/"+this.userInfo.avatar
    }
    isSuccess:boolean=false;
    modalData = {
        isVisible:false,
        title: "THÔNG BÁO",
        message: "dasfgfds fdsfsdf",
        imageLink: require('../image/attention.png'),
        closeText: "Đóng"
    }
    ConfirmLogout = () => {
        console.log('remove token');
        AsyncStorage.removeItem('@token:key')
        .then(() => {
            this.props.navigation.navigate("ScreenLogin");
        });
    }
    HideModal = () => {
        if(this.isSuccess){
            this.ConfirmLogout();
        }
        else{
            this.modalData.isVisible=false;
            this.forceUpdate();
        }
    }
    DisplayModal = () => {
        this.modalData.isVisible=true;
        this.forceUpdate();
    }
    EditOldPassword = (oldPassword: string) => {
        this.setState({ oldPassword })
    }
    EditNewPassword = (newPassword: string) => {
        this.setState({ newPassword })
    }
    EditConfirmPassword = (confirmPassword: string) => {
        this.setState({ confirmPassword })
    }
    ChangePassword=async ()=>{
        let data = await UserApi.changePassword(this.state.oldPassword, this.state.newPassword,this.state.confirmPassword);
        console.log(data);
        if(data && data.status){
            this.modalData.message=data.message;
            this.isSuccess=true;
            this.DisplayModal();
        }
        else{
            let message="Đã xảy ra lỗi!"
            if(data && data.message){
                message=data.message;
            }
            this.modalData.message=message;
            this.DisplayModal();
        }
    }
    componentDidMount() {

    }
    render() {
        return <View style={styles.container}>
            <StatusBar translucent backgroundColor="#416af3"></StatusBar>
            <NotificationModal isVisible={this.modalData.isVisible}
                title={this.modalData.title}
                imageLink={this.modalData.imageLink}
                message={this.modalData.message}
                closeText={this.modalData.closeText}
                HideModal={this.HideModal}>
            </NotificationModal>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Image style={styles.backIcon} source={require('../image/back.png')}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: "#FFFFFF" }}>
                    Thay đổi mật khẩu
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

            <View style={styles.inputContainer}>
                <View style={styles.inputBlock}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.labelStyle}>Mật khẩu cũ</Text>
                    </View>

                    <Input
                        // placeholder='Tên người dùng'
                        secureTextEntry={true}
                        onChangeText={(oldPassword) => this.EditOldPassword(oldPassword)}
                        shake={true}
                        containerStyle={{ width: "100%", marginTop: 5 }}
                        inputContainerStyle={styles.inputComponentStyle}
                        inputStyle={styles.inputStyle}
                    />
                </View>

                <View style={styles.inputBlock}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.labelStyle}>Mật khẩu mới</Text>
                    </View>

                    <Input
                        // placeholder='Tên người dùng'
                        secureTextEntry={true}
                        onChangeText={(newPassword) => this.EditNewPassword(newPassword)}
                        shake={true}
                        containerStyle={{ width: "100%", marginTop: 5 }}
                        inputContainerStyle={styles.inputComponentStyle}
                        inputStyle={styles.inputStyle}
                    />
                </View>

                <View style={styles.inputBlock}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.labelStyle}>Nhập lại mật khẩu mới</Text>
                    </View>

                    <Input
                        // placeholder='*******'
                        secureTextEntry={true}
                        onChangeText={(confirmPassword) => this.EditConfirmPassword(confirmPassword)}
                        shake={true}
                        containerStyle={{ width: "100%", marginTop: 5 }}
                        inputContainerStyle={styles.inputComponentStyle}
                        inputStyle={styles.inputStyle}
                    />
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TouchableOpacity  onPress={() => { this.props.navigation.goBack() }}>
                    <View style={styles.cancelButton}>
                        <Text style={{ fontSize: 14, color: "#7383A1" }} >Hủy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ChangePassword}>
                    <View style={styles.confirmButton}>
                        <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Xác nhận</Text>
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
    inputComponentStyle: {
        marginTop: 0,
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
    inputContainer: {
        marginTop: 25,
        paddingRight: 41,
        paddingLeft: 41,
    },
    inputBlock: {
        marginBottom: 10,
    },
    labelContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginTop: 10,
        paddingRight: 41,
        paddingLeft: 41,
    },
    cancelButton: {
        width: 68,
        height: 33,
        backgroundColor: "#F2F4F7",
        marginRight: 13,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: "center",
        borderColor:"#CED0DA",
        borderWidth:1
    },
    confirmButton: {
        width: 104,
        height: 33,
        backgroundColor: "#5F84FD",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: "center",
    }
})