import './App.css';
import React from 'react';
import SearchForm from './Components/SearchForm';
import Nominations from './Components/Nominations';
import Banner from './Components/Banner'
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
        <div className="banner-container">
          <Banner noms= {this.state.noms}/>
        </div>
        <div className="main-container">
          <SearchForm nominateMovie={this.nominateMovie} noms ={this.state.noms}/>
          <Nominations removeNom = {this.removeNom} noms={this.state.noms}/>
        </div>
      </div>
    );
  }
}

export default App;
