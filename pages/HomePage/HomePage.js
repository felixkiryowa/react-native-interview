import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, ImageBackground } from 'react-native';
import OriginalPlace   from '../../components/OriginalPlace/OriginPlace';
import DestinationPlace from '../../components/DestinationPlace/DestinationPlace';
import MapButton from '../../components/MapButton/MapButton';
import backGroundImage from '../../assets/images/maps.jpg';

export default class HomePage extends Component {
    static navigationOptions = {
        title: 'Easy Matatu',
        headerStyle: {
          backgroundColor: '#024F7A',
        },
        headerTitleStyle: {
            textTransform:'capitalize',
            fontSize:20,
            textAlign: 'center',
            color: '#85649E',
            fontWeight:'bold',
        },
    };
  constructor(props) {
    super(props);
    this.state = {
      originalPlace: '',
      destinationPlace: ''
    }

    this.handleOriginalPlaceInputChange = this.handleOriginalPlaceInputChange.bind(this);
    this.handleDestinationPlaceInputChange = this.handleDestinationPlaceInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOriginalPlaceInputChange(text){
    this.setState({
     originalPlace: text
    });
  }

  handleDestinationPlaceInputChange(text){
    this.setState({
      destinationPlace: text
    });
  }

  handleSubmit(){
    const { navigation } = this.props;
    const { originalPlace, destinationPlace } = this.state;
     /*Send the Input values to the maps page */
     navigation.navigate('MapPage', {
      originalPlace: originalPlace,
      destinationPlace: destinationPlace,
    });
  }

   render() {
     return (
      <ImageBackground source={ backGroundImage } style={ styles.imageBackground }>
        <View style={styles.bodyContainer}>
          <View style={styles.inputsContainer}>
            <OriginalPlace 
               handleOriginalPlaceInputChange={ this.handleOriginalPlaceInputChange }
             />
            <DestinationPlace 
              handleDestinationPlaceInputChange={ this.handleDestinationPlaceInputChange }
            />
            <MapButton handleSubmit={ this.handleSubmit } />
          </View>
        </View>
      </ImageBackground>
     )
   }
}

const styles = StyleSheet.create({
   heading: {

   },
   headingContainer : {
      backgroundColor: '#024F7A',
      height:50
   },
   inputsContainer: {
     padding:30
   },
   imageBackground: {
      width: '100%', 
      height: '100%'
   }

});

AppRegistry.registerComponent('HomePage', () => HomePage);