import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './Square.js';

export default class Board extends Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        return (
            <View>
                <View className="status">{/*status*/}</View>
                <View className="boardRow">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </View>
                <View className="boardRow">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </View>
                <View className="boardRow">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    status: {

    },
    boardRow: {

    }
});