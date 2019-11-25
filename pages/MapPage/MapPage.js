import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyDauIDItH_vPdo8BOG8855YrYgLQHP-5lQ';


export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coordinates: [],
    };

    this.mapView = null;
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }


  static navigationOptions = {
        title: 'Your Route',
        headerStyle: {
          backgroundColor: '#024F7A',
        },
        headerTintColor: '#85649E',
        headerTitleStyle: {
            textTransform:'capitalize',
            fontSize:20,
            textAlign: 'center',
            color: '#85649E',
            fontWeight:'bold',
        },
    };

    UNSAFE_componentWillMount() {
      const { navigation } = this.props;
      const originalPlace = navigation.getParam('originalPlace', 'originalPlace');
      const destinationPlace = navigation.getParam('destinationPlace', 'destinationPlace');
      axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${originalPlace}&key=38af6ca17d8a45a29dc01570f1afbfaa`)
      .then(response => {
        this.setState({
          coordinates:[
            ...this.state.coordinates,
            {
              latitude: response.data.results[0].geometry.lat,
              longitude: response.data.results[0].geometry.lng,
            }
          ]
        })
      })
      .catch(error => {
        console.warn(error);
      });

      axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${destinationPlace}&key=38af6ca17d8a45a29dc01570f1afbfaa`)
      .then(response => {
        this.setState({
          coordinates:[ 
            ...this.state.coordinates,
            {
              latitude: response.data.results[0].geometry.lat,
              longitude: response.data.results[0].geometry.lng,
            }
          ]
        })
      })
      .catch(error => {
        console.warn(error);
      });
    }


   render() {
     console.log(this.state);   
     return (
        <MapView
          style={StyleSheet.absoluteFill}
          ref={c => this.mapView = c}
          onPress={this.onMapPress}
        >
          {this.state.coordinates.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
          )}
          {(this.state.coordinates.length >= 2) && (
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
              destination={this.state.coordinates[this.state.coordinates.length-1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="hotpink"
              optimizeWaypoints={true}
              onStart={(params) => {
                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
              }}
              onReady={result => {
                console.log('RESULT>>>>>', result);
                console.log('Distance: ${result.distance} km')
                console.log('Duration: ${result.duration} min.')
                
                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: (width / 20),
                    bottom: (height / 20),
                    left: (width / 20),
                    top: (height / 20),
                  }
                });
              }}
              onError={(errorMessage) => {
                // console.log('GOT AN ERROR');
              }}
            />
          )}
      </MapView>
     )
   }
}

const styles = StyleSheet.create({
  mapStyle: {
    height: 400,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
  })

AppRegistry.registerComponent('MapPage', () => MapPage);