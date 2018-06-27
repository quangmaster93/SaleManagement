// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableHighlight,
    Image

} from 'react-native';
interface ConfirmModalProp {
    isVisible: boolean,
    imageLink: any,
    message: string,
    title: string,
    closeText: string,
    confirmText: string,
    HideModal: Function,
    Confirm: Function,
    children?: any
}
export default class ConfirmModal extends Component<ConfirmModalProp, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return <Modal
            visible={this.props.isVisible}
            transparent={true}
            onRequestClose={this.props.HideModal}>
            <View style={styles.container}>
                <View style={styles.childcontainer}>
                    {/* {this.props.children} */}
                    <Image source={this.props.imageLink}></Image>
                    <Text style={{ color: "#333333", fontSize: 22 }}>{this.props.title}</Text>
                    <Text style={{ color: "rgba(123, 123, 123, 0.87)", fontSize: 16, marginTop: 3 }}>{this.props.message}</Text>
                    <View style={styles.buttonBlock}>
                        <TouchableHighlight onPress={this.props.HideModal}>
                            <View style={[styles.closeButton,{backgroundColor: "rgba(115, 131, 161, 0.7)", marginRight:7}]}>
                                <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{this.props.closeText}</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.props.Confirm}>
                            <View style={styles.closeButton}>
                                <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{this.props.confirmText}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>


        </Modal>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    childcontainer: {
        backgroundColor: "#FFFFFF",
        minHeight: 203,
        width: 328,
        maxWidth: "95%",
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight:15,
        paddingLeft:15,
        paddingBottom: 15,
        borderRadius: 4,

    },
    closeButton: {
        height: 33,
        width: 104,
        backgroundColor: "#FD6E4C",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 15
    },
    buttonBlock:{
        flexDirection: 'row',
        justifyContent: "center",
    }
})