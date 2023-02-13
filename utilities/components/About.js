import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { ScrollView, Button } from 'react-native';

const About = ({ navigation, route }) => {

    const { firstName, lastName } = route.params

    return (
        <View style={styles.container}>
            <ScrollView >
                <Text>{firstName}</Text>
                <Text>{lastName}</Text>
            </ScrollView>
        </View>

    );
}

export default About;


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25
    }
})