import React from 'react';

class SearchForm extends React.Component{
    state = {
        userInput: ""
    };
    
    componentDidMount(){
        
    }

    changeHandler = (evt) => {
        this.setState({
            ...this.state,
            userInput: evt.target.value
        })
        console.log(this.state);
    }

    submitHandler = (e) => {
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <h3>Search Movies</h3>
                <form onSubmit={this.submitHandler}>
                    <input name="userInput" onChange={this.changeHandler}></input>
                </form>
            </div>
        )
    }
}

export default SearchForm;