import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🍩Springfield APP🍩</Text>
            <Text style={styles.subtitle}>Evaluacion 1 IPSS 2025</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff' 
    },
    title: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },
    subtitle: { 
        fontSize: 16, 
        color: 'gray' 
    }
});

export default HomeScreen;