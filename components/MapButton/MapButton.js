import { AppRegistry, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const  MapButton = ({handleSubmit}) =>   {
        return ( 
            <View>
              <View style={styles.separator} />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={ handleSubmit }
                >
                <Text style={styles.viewRoute }>View Route</Text>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#85649E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 10
  },
  submitButton: {
    borderColor:'red',
    backgroundColor: '#85649E',
    height:60,
    borderRadius:30,
    justifyContent: 'center', 
    alignItems:'center'
  },
  viewRoute: {
    color: '#fff'
  }
});

export default MapButton;
AppRegistry.registerComponent('MapButton', () => MapButton);