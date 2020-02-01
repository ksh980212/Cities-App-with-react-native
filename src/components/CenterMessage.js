import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../theme';

const CenterMessage = ({ message }) => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    emptyContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    message: {
        alignSelf: 'center',
        fontSize: 20
    }
})

export default CenterMessage;