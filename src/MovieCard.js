import React from 'react';

function MovieCard(props) {
    return (
      <div className="movie-card">
          <h4>{props.Title}({props.Year})</h4>
          <img className="movie-poster" src={props.Poster}></img>
          <button>Nominate</button>
      </div>
    );
  }
  
  export default MovieCard;