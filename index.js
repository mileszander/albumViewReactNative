/**
 * @format
 */

//import libraries
import React from 'react'
import {Text, AppRegistry, View} from 'react-native';
import Header from "./src/components/header.js"
import AlbumList from "./src/components/albumList"
// import App from './App';

// import {name as appName} from './app.json';


//create componenet
const App = () => {


    return (
        <View style={{flex:1}}>
            <Header headerText={"Albums"}/>

            <AlbumList />
        </View>

        // <Text>Hello World</Text>

    )}






//export componenet to 
AppRegistry.registerComponent('albums', () => App);
