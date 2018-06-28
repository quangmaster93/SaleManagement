// @flow
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import NavigationService from '../services/NavigationService';
import { RouterStore } from '../models/RouterStore';

interface Props {
    store: RouterStore;
    index: number;
}

export default class RouterStoreComponent extends Component<Props, any> {

    constructor(props: Props) {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        let store: RouterStore = this.props.store;
        let done = !!store.checkout_time;
        return <View>
            <TouchableOpacity style={styles.container}
                onPress={() => { NavigationService.navigate('ScreenStore', { store }); }}>
                <View style={styles.iconWrap}>
                    <View style={{
                        borderColor: done ? "#71CA3A" : "#8A8A8F",
                        backgroundColor: done ? "#71CA3A" : "#fff",
                        borderRadius: 50,
                        borderWidth: 1,
                        width: 25,
                        height: 25,

                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: done ? "#fff" : "#8A8A8F",
                            fontSize: 13,
                            marginTop: 2
                        }}>{this.props.index + 1}</Text>
                    </View>
                </View>
                <View style={styles.detailWrap}>
                    <Text style={styles.title}>{store.name}</Text>
                    <Text style={styles.description}>{store.address || "Chưa có mô tả"}</Text>
                </View>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
    },
    iconWrap: {
        width: 50,
        height: 50,
        alignItems: 'center',
        marginTop: 10
    },
    iconIndex: {

    },
    detailWrap: {
        width: 50,
        flex: 1
    },
    title: {
        fontSize: 20,
        // fontWeight: 'bold'
    },
    description: {
        fontSize: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 20,
        marginRight: 20,
    },
});