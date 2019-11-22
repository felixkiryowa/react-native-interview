import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const DestinationPlace = ({handleDestinationPlaceInputChange}) =>  {

    return ( 
        <View>
            <Text style={ styles.destination } >Destination Place</Text>
            <View style={styles.separator} />
            <TextInput
                style={ styles.destinationInput }
                onChangeText={text =>
                    handleDestinationPlaceInputChange(text)
                }
                placeholder="Enter Destination Place"
            />
        </View >
    )
}


const styles = StyleSheet.create({
    destinationInput: {
        borderRadius: 50,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor:'#fff',
        paddingLeft: 15
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#85649E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop: 10
    },
    destination: {
        color: '#85649E'
    }
});

export default DestinationPlace;
AppRegistry.registerComponent('DestinationPlace', () => DestinationPlace);