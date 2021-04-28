
function NominationCard(props) {
    return(
        <div>
            <h5>{props.Title}({props.Year})</h5>
            <img className="movie-poster"src={props.Poster}></img>
            <button>Remove</button>
        </div>
    )
}
  
  export default NominationCard;