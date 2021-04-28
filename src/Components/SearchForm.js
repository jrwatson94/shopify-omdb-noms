import React from 'react';
import MovieCard from './MovieCard';


class SearchForm extends React.Component{
    state = {
        userInput: "",
        movies: []
    };
    
    fetchSearchResults = () => {
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${this.state.userInput}`)
        .then(response => response.json())
        .then(movies => {
            this.setState({
                ...this.state,
                movies: movies.Search
            })
        })
        console.log(this.state.movies)
    }

    changeHandler = (evt) => {
        this.setState({
            ...this.state,
            userInput: evt.target.value
        })
        
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.fetchSearchResults();
    }

    renderMovies = () => {
        let movieResults = this.state.movies;
        if(movieResults){
            return(
                movieResults.map(movie => <MovieCard nomIDs={this.props.nomIDs} nominateMovie={this.props.nominateMovie} {...movie}/>)
            )
        }
    }

    render(){
        return(
            <div className="search-container">
                <h3>Search Movies</h3>
                <form onSubmit={this.submitHandler}>
                    <input name="userInput" onChange={this.changeHandler}></input>
                    <button type="submit" onClick={this.fetchSearchResults}>Search</button>
                </form>
                <div className="movies-container">
                    {this.renderMovies()}
                </div>
            </div>
        )
    }
}

export default SearchForm;