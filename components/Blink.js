import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };
        
        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() {
        if (!this.state.isShowingText) {
            return null;
        }
        return (
            <Text>{ this.props.text }</Text>            
        );
    }
}

const styles = StyleSheet.create({
});