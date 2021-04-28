import React from 'react';
import NominationCard from './NominationCard'

class Nominations extends React.Component {
    renderNoms = () => {
        if(this.props.noms){
            return (
                this.props.noms.map(nom => <NominationCard removeNom = {this.props.removeNom} {...nom}/>)
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