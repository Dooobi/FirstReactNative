import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            // Try removing the 'flex: 1' on the parent View.
            // The parent will not have dimensions, so the children can't expan.
            // What if you add 'height: 300' instead of 'flex: 1'?
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
        // height: 300,
    },
    powderblue: {
        flex: 0.2,
        backgroundColor: "powderblue",
    },
    skyblue: {
        flex: 0.3,
        backgroundColor: "skyblue",
    },
    steelblue: {
        flex: 0.5,
        backgroundColor: "steelblue",
    },
});