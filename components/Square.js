import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class Square extends Component {
    render() {
        return (
            <View>
                <Button title={this.props.value.toString()} className={styles.square}>
                    {this.props.value}
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    square: {
        width: "20px",
        height: "20px",
        marginBottom: "5px"
    }
});