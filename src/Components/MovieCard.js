import React from 'react';

function MovieCard(props) {
    const clickHandler =() => {
        console.log("running")
        props.nominateMovie(props,props.imdbID)
    }
    const isNominated = () => {
        console.log(props.nomIDs)
        if(props.nomIDs.includes(props.imdbID)){
            return true
        }else{
            return false;
        }
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