import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Greeting';

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <Greeting name="Rexxar"/>
                <Greeting name="Jaina"/>
                <Greeting name="Valeera"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});