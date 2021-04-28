import React from 'react';
import NominationCard from './NominationCard'

class Nominations extends React.Component {
    renderNoms = () => {
        if(this.props.noms){
            return (
                <ul>
                    {this.props.noms.map(nom => <li><NominationCard removeNom = {this.props.removeNom} {...nom}/></li>)}
                </ul>
            )
        }
    }
    render() {
        return (
            <div className="noms-container">
                <h3>Nominations</h3>
                <hr></hr>
                {this.renderNoms()}
            </div>
          );
    }   
}
  
export default Nominations;