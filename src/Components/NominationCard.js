
function NominationCard(props) {
    const clickHandler = () => {
        props.removeNom(props, props.imdbID)
    }
    return(
        <div>
            <h5>{props.Title}({props.Year})</h5>
            <img className="movie-poster"src={props.Poster}></img>
            <button onClick={clickHandler}>Remove</button>
        </div>
    )
}
  
  export default NominationCard;