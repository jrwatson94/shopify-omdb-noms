import React from 'react';
import NominationCard from './NominationCard'

class Nominations extends React.Component {
    renderNoms = () => {
        let nominations = this.props.nominatedMovies;
        if(nominations){
            return (
                nominations.map(nom => <NominationCard {...nom}/>)
            )
        }
    }
    render() {
        return (
            <div className="noms-container">
                <h3>Nominations</h3>
                {this.renderNoms()}
            </div>
          );
    }   
}
  
export default Nominations;