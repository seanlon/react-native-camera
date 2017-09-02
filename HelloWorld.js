import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export class HelloWorld extends Component {
    render() {
        return (
            <Text>Hello world! {this.props.titleDesc}</Text>
        );
    }
}