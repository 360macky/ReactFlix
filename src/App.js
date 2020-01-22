import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovies from './components/searchMovies';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Reactflix</h1>
        <SearchMovies/>
      </div>
    )
  }
}

export default App;
