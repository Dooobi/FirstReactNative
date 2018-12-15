import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList } from 'react-native';

export default class FlatListBasics extends Component {
    render() {
        return (
            <View styles={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
       alignItems: "center",  // available options: flex-start, center, flex-end and stretch
    },
    button: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    buttonText: {
        padding: 20,
        color: 'white',
    },
});