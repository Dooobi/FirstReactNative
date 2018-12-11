import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.powderblue}/>
                <View style={styles.skyblue}/>
                <View style={styles.steelblue}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",   // default is "column"
        alignItems: "center",
        justifyContent: "space-between",   // available options: flex-start, center, flex-end, space-around, space-between and space-evenly
        // height: 300,
    },
    powderblue: {
        width: 100,
        height: 100,
        backgroundColor: "powderblue",
    },
    skyblue: {
        width: 100,
        height: 100,
        backgroundColor: "skyblue",
    },
    steelblue: {
        width: 100,
        height: 100,
        backgroundColor: "steelblue",
    },
});