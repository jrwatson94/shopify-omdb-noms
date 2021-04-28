import React from 'react';
import Button from 'react-bootstrap/Button';

function MovieCard(props) {
    const clickHandler =() => {
        props.nominateMovie(props)
    }
    const isNominated = () => {
        const isMovieNominated = props.noms.filter(item => item.imdbID === props.imdbID)
        return isMovieNominated.length > 0 ? true : false;
    }
    
    return (
      <div className="movie-card">
          <p id="movie-title">{props.Title}({props.Year})</p>
          <img id="movie-poster" src={props.Poster}></img>
          <Button id="nom-btn" size="sm" disabled={isNominated()} onClick={clickHandler}>Nominate</Button>
      </div>
    );
  }
  
  export default MovieCard;