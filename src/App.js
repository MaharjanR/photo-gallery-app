import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route  
} from 'react-router-dom';
import axios from 'axios';

import apiKey from './config';
import SearchForm from './Components/SearchForm';
import NavBar from './Components/NavBar';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';

class App extends Component{

  state = {
    data: '',
    cat: '',
    dog: '',
    rabbit: '',
    loading: true
  }

  componentDidMount(){
    this.performSearch();

    // this.setState({
    //   cat: this.performSearch('cats')
    // })

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then( (response) => {
      // handle success
      this.setState({
        cat: response.data.photos.photo.map( photo => photo),
        loading: false
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
    .then( (response) => {
      // handle success
      this.setState({
        dog: response.data.photos.photo.map( photo => photo),
        loading: false
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=rabbit&per_page=24&format=json&nojsoncallback=1`)
    .then( (response) => {
      // handle success
      this.setState({
        rabbit: response.data.photos.photo.map( photo => photo),
        loading: false
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  performSearch = ( query = 'sparrow') => {
    
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    this.setState({ loading: true });

    axios.get(url)
    .then( (response) => {
      // handle success
      this.setState({
        data: response.data.photos.photo.map( photo => photo),
        loading: false
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
          <SearchForm search={ this.performSearch } />
          <NavBar />
          { (this.state.loading) ?
            <p>Loading...</p>
            :
            <Switch>
            <Route exact path="/" render={ () => <PhotoContainer photo={ this.state.data } />} />
            <Route exact path="/cats" render={ () => <PhotoContainer photo={ this.state.cat } />} />
            <Route exact path="/dogs" render={ () => <PhotoContainer photo={ this.state.dog } />} />
            <Route exact path="/rabbit" render={ () => <PhotoContainer photo={ this.state.rabbit } />} />
            <Route exact path="/:query" render={ () => <PhotoContainer photo={ this.state.data } />} />
            <Route render={ () => <NotFound />} />
          </Switch>
          }
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
