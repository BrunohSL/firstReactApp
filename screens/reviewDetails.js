import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
        // navigation.pop();
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>ReviewDetails Screen</Text>
            <Button title="Back to home screen" onPress={pressHandler} />
        </View>
    )
}
