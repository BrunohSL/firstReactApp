import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body: 'lorem ipsum', key: 1},
        { title: 'Pokemon', rating: 4, body: 'lorem ipsum', key: 2},
        { title: 'Mario', rating: 3, body: 'lorem ipsum', key: 3},
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text styles={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
