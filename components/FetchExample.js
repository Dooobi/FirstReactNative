import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, FlatList } from 'react-native';

export default class FetchExample extends Component {
    
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }
    
    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function() {

                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View styles={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text style={styles.item}>{item.id}: {item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
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
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});