import Button from 'react-bootstrap/Button'

function NominationCard(props) {
    const clickHandler = () => {
        props.removeNom(props, props.imdbID)
    }
    return(
        <div>
            <p>{props.Title}({props.Year})
            <span>      
                <Button className="remove btn-danger"size="sm" onClick={clickHandler}>X</Button>
            </span>
            </p>
        </div>
    )
}
  
  export default NominationCard;