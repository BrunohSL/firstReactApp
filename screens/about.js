import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function About() {
    return (
        <View style={StyleSheet.container}>
            <Text>About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
});
