import React from 'react';
import Button from 'react-bootstrap/Button';

function MovieCard(props) {
    const clickHandler =() => {
        props.nominateMovie(props)
    }
    const isNominated = () => {
        const isMovieNominated = props.noms.filter(item => item.imdbID === props.imdbID)
        if(isMovieNominated.length > 0 || props.noms.length >= 5){
            return true;
        }else{
            return false;
        }
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