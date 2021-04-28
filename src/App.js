import './App.css';
import React from 'react';
import SearchForm from './Components/SearchForm'
import Nominations from './Components/Nominations'

class App extends React.Component {
  state = {
    nomIDs:[],
    noms: []
  }

  nominateMovie = (movie,id) => {
    console.log(id)
    this.setState({nomIDs: [...this.state.nomIDs, id] });
    this.setState({noms: [...this.state.noms, movie] });
  }

  render(){
    return (
      <div className="App">
        <h1>Nominate Your Favorite Movies!</h1>
        <div className="main-container">
          <SearchForm nominateMovie={this.nominateMovie} nomIDs ={this.state.nomIDs}/>
          <Nominations nominatedMovies={this.state.noms}/>
        </div>
      </div>
    );
  }
}

export default App;
