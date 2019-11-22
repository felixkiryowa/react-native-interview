import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, ImageBackground } from 'react-native';
import OriginalPlace   from './components/OriginalPlace/OriginPlace';
import DestinationPlace from './components/DestinationPlace/DestinationPlace';
import MapButton from './components/MapButton/MapButton';
import backGroundImage from './assets/images/maps.jpg';



export default class App extends Component {

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
    console.warn(this.state);
  }

   render() {
     return (
      <ImageBackground source={ backGroundImage } style={ styles.imageBackground }>
        <View style={styles.bodyContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>
              Easy Matatu
            </Text>
          </View>
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
     textTransform:'capitalize',
     fontSize:20,
     textAlign: 'center',
     color: '#85649E',
     fontWeight:'bold',
     paddingTop: 10
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

AppRegistry.registerComponent('App', () => App);