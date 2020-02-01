import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';

import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class City extends React.Component {

    state = {
        name: '',
        info: ''
    }

    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }

    addLocation = () => {
        if (this.state.name === '' || this.state.info === '') {
            return;
        }
        const { city } = this.props.navigation.state.params;
        const location = {
            name: this.state.name,
            info: this.state.info
        }
        this.props.screenProps.addLocation(location, city);
        this.setState({ name: '', info: '' });
    }

    render() {
        const { city } = this.props.navigation.state.params;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={[!city.locations.length && { flex: 1 }]}>
                    <View style={[styles.locationsContainer, !city.locations.length && { flex: 1, justifyContent: 'center' }]}>
                        {
                            !city.locations.length && <CenterMessage message="No locations fro this city!" />
                        }
                        {
                            city.locations.map((location, index) => (
                                <View key={index} style={styles.locationsContainer}>
                                    <Text style={styles.locationName}>{location.name}</Text>
                                    <Text style={styles.locationInfo}>{location.info}</Text>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
                <TextInput
                    placeholderTextColor="white"
                    onChangeText={val => this.onChangeText('name', val)}
                    value={this.state.name}
                    style={styles.input}
                    placeholder="Location name"
                />
                <TextInput
                    placeholderTextColor="white"
                    onChangeText={val => this.onChangeText('info', val)}
                    value={this.state.info}
                    style={[styles.input, styles.input2]}
                    placeholder="Location info"
                />
                <View>
                    <TouchableOpacity onPress={this.addLocation}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Add Location</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    locationsContainer: {
        paddingBottom: 104
    },
    input: {
        height: 50,
        backgroundColor: colors.primary,
        color: 'white',
        paddingHorizontal: 8,
        position: 'absolute',
        width: '100%',
        bottom: 104,
        left: 0
    },
    input2: {
        bottom: 52
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    },
    locationsContainer: {
        padding: 10,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2
    },
    locationName: {
        fontSize: 20
    },
    locationName: {
        fontSize: 20
    },
    locationInfo: {
        color: 'rgba(0, 0, 0, .5)'
    }
})