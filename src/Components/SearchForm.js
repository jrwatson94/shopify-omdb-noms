import React from 'react';
import MovieCard from './MovieCard';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
                movieResults.map(movie => <MovieCard noms={this.props.noms} nominateMovie={this.props.nominateMovie} {...movie}/>)
            )
        }
    }

    render(){
        return(
            <div className="search-container">
                <h2 id="search-header">OMDB Search</h2>
                <hr></hr>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group>
                        <Form.Control size="md" type="search" name="userInput" onChange={this.changeHandler} placeholder="Search movies..."></Form.Control>
                        <Button id="submit-btn" type="submit" onClick={this.fetchSearchResults}>Search</Button>
                    </Form.Group>
                </Form>
                <strong>
                    <u><p>Please nominate up to 5 movies</p></u>
                </strong>
                <div className="movies-container">
                    {this.renderMovies()}
                </div>
            </div>
        )
    }
}

export default SearchForm;