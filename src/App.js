import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import apiKey from './config';
import SearchForm from './Components/SearchForm';
import NavBar from './Components/NavBar';
import PhotoContainer from './Components/PhotoContainer';

class App extends Component{

  state = {
    data: ''
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = ( query = 'cats') => {
    
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    axios.get(url)
    .then( (response) => {
      // handle success
      this.setState({
        data: response.data.photos.photo.map( photo => photo)
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <SearchForm />
          <NavBar />
          <PhotoContainer photo= { this.state.data }/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
