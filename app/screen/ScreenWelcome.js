// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native';
import Network from '../api/Network';
import { UserApi } from '../api/UserApi';
import {User} from "../models/User"

export default class ScreenWelcome extends Component<any, any> {
    haveToken: boolean;
    constructor(props: any) {
        super(props);
        this.haveToken = false;
    }
    async componentDidMount() {
        this.GetToken();
        setTimeout(async () => {
            if (this.haveToken) {
                let data = await UserApi.getUserInfo();
                if(data && data.status){
                    let userInfo:User=data.data;
                    User.data=userInfo;
                }
                this.props.navigation.navigate('RootDrawer');
            }
            else{
                this.props.navigation.navigate('ScreenLogin');
            }
        }, 1000);
    }
    GetToken = () => {
        try {
            AsyncStorage.getItem('@token:key').then((token) => {
                if (token !== null) {
                    console.log("token got: " + token);
                    this.haveToken = true;
                    Network.token = token;
                }
            });
        } catch (error) {
            console.log("cannot get token");
        }
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
    logoContainer: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    recContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {

    },
    rec: {
        width: "100%",
        resizeMode: "contain"
    }
});