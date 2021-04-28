import './App.css';
import React from 'react';
import SearchForm from './Components/SearchForm'
import Nominations from './Components/Nominations'

class App extends React.Component {
  state = {
    noms: []
  }

  nominateMovie = (movie) => {
    this.setState({noms: [...this.state.noms, movie] });
  }
  removeNom = (movie) => {
    const updatedNoms = this.state.noms.filter(item => item.imdbID !== movie.imdbID)
    this.setState({noms: updatedNoms})
  }

  render(){
    return (
      <div className="App">
        <h1>Nominate Your Favorite Movies!</h1>
        <div className="main-container">
          <SearchForm nominateMovie={this.nominateMovie} noms ={this.state.noms}/>
          <Nominations removeNom = {this.removeNom} noms={this.state.noms}/>
        </div>
      </div>
    );
  }
}

export default App;
