import React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

const About = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../../assets/Chamikara.png')}
                    style={{ width: '100%' }} />
                <Text style={styles.title}>About</Text>
                <Text style={styles.text}>Name: Chamikara Mendis</Text>
                <Text style={styles.text}>Role: Intern Software Engineer</Text>
                <Text style={styles.text}>Skills: React Native, JavaScript, Node.js</Text>
            </View>
        </ScrollView>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#000',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        marginVertical: 10,
    },
});



export default About;