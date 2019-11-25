import React from 'react';
import { AppRegistry } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './pages/HomePage/HomePage';
import MapPage from './pages/MapPage/MapPage';


const MainNavigator = createStackNavigator({
  Home: {
    screen: HomePage
  },
  MapPage: {
    screen: MapPage
  },
});

const App = createAppContainer(MainNavigator);

export default App;
// AppRegistry.registerComponent('App', () => App);