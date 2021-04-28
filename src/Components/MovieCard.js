import React from 'react';

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
          <h4>{props.Title}({props.Year})</h4>
          <img className="movie-poster" src={props.Poster}></img>
          <button disabled={isNominated()} onClick={clickHandler}>Nominate</button>
      </div>
    );
  }
  
  export default MovieCard;