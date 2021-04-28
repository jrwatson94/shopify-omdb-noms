function Banner(props){
    return(
        <strong>
            <h3 id="banner-text">You have {props.noms.length} nominations</h3>
        </strong>
    )
}

export default Banner;