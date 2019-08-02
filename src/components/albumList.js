import React, { Component} from 'react'
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import Album from "./album"

// import console = require('console');


class AlbumList extends Component {
    state = {
        albums: []
    }

    componentDidMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({albums: response.data})
                // console.log(this.state.albums);
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderAlbums() {
        return this.state.albums.map((item,i) => {
            return  <Album key={item.title} album={item} />

        }
    )}

    render() {
        return (
            <ScrollView >
                {this.renderAlbums()}
            </ScrollView>
        )}
    }

    

    export default AlbumList;