import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: "column",   // default is "column"
        alignItems: "stretch",  // available options: flex-start, center, flex-end and stretch
        justifyContent: "center",   // available options: flex-start, center, flex-end, space-around, space-between and space-evenly
        // height: 300,
    },
    powderblue: {
        // width: 100,
        height: 100,
        backgroundColor: "powderblue",
    },
    skyblue: {
        // width: 100,
        height: 100,
        backgroundColor: "skyblue",
    },
    steelblue: {
        // width: 100,
        height: 100,
        backgroundColor: "steelblue",
    },
});