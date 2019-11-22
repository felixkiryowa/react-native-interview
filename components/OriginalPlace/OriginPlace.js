import { AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';
import React from 'react';

const  OriginalPlace = ({handleOriginalPlaceInputChange}) =>   {
        return ( 
            <View>
                <Text style={ styles.original }>Original Place</Text>
                <View style={styles.separator} />
                <TextInput
                    style={ styles.originalInput }
                    onChangeText={
                        text => handleOriginalPlaceInputChange(text)
                    }
                    placeholder="Enter Original Place"
                />
            </View>
        )
}


const styles = StyleSheet.create({
    originalInput: {
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
    original: {
        color: '#85649E'
    }
});

export default OriginalPlace;
AppRegistry.registerComponent('OriginalPlace', () => OriginalPlace);