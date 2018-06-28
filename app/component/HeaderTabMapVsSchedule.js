// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
interface HeaderTabMapVsScheduleProp {
    OpenMenu: Function,
    OpenMap: Function,
    OpenSchedule: Function,
    OpenNotification: Function,
    notificationNumber: number,
    isMap: boolean
}
export default class HeaderTabMapVsSchedule extends Component<HeaderTabMapVsScheduleProp, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return <View style={styles.header}>
            <TouchableOpacity onPress={this.props.OpenMenu}>
                <Image source={require('../image/menu.png')}></Image>
            </TouchableOpacity>

            <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={this.props.OpenMap}  style={styles.buttonOutside}>
                    <View style={[styles.button, this.props.isMap ? { backgroundColor: "#FFFFFF" } : null]}>
                        <Text style={[{ fontSize: 14 }, this.props.isMap ? { color: "#5F84FD" } : { color: "#FFFFFF" }]}>
                            Bản đồ
                    </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.OpenSchedule} style={styles.buttonOutside}>
                    <View style={[styles.button, !this.props.isMap ? { backgroundColor: "#FFFFFF" } : null]}>
                        <Text style={[{ fontSize: 14 }, !this.props.isMap ? { color: "#5F84FD" } : { color: "#FFFFFF" }]}>
                            Lộ trình
                    </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={this.props.OpenNotification} style={styles.bell}>
                    <Image  source={require('../image/bell.png')}></Image>
                </TouchableOpacity>
                <View style={styles.number}>
                    <Text style={{ fontSize: 12, color: "#FFFFFF" }}>
                        {this.props.notificationNumber}
                    </Text>
                </View>
            </View>

        </View>


    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#5F84FD",
        height: 80,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 25
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonOutside:{
        flex: 1,
    },
    buttonGroup: {
        flexDirection: 'row',
        height: 31,
        width: 225,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        marginRight:25,
        marginLeft:30,
    },
    number: {
        position:"absolute",
        top:8,
        right:2,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "#FF7800",
        alignItems: "center",
        justifyContent: "center",
    },
    bell:{
        marginTop:8,
        width: 40,
        height: 40,
    }
})