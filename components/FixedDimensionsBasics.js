import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View>
                <View style={styles.powderblue}/>
                <View style={styles.skyblue}/>
                <View style={styles.steelblue}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    powderblue: {
        width: 50, 
        height: 50, 
        backgroundColor: "powderblue",
    },
    skyblue: {
        width: 100,
        height: 100,
        backgroundColor: "skyblue",
    },
    steelblue: {
        width: 150,
        height: 150,
        backgroundColor: "steelblue",
    },
});