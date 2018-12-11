import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Board from './Board.js';

export default class Game extends Component {
    render() {
        return (
            <View className="game">
                <View className="gameBoard">
                    <Board/>
                </View>
                <View className="gameInfo">
                    <Text>{/* status */}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    game: {

    },
    gameBoard: {

    },
    gameInfo: {

    }
});