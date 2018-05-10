import React, { Component } from 'react';

//{Component} similar to const Component = React.Component

// const SearchBar = () =>{
//     return <input />; // import react for jsx as jsx is converted into React.createElement
// };

export default class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term:'Search here'};
    }
    render(){  //every class based react component must have a defined render method
        return (
            <div className="search-bar">
            <input
                value = {this.state.term}
                onChange={event => {
                    this.setState({term: event.target.value});
                    this.props.onSearch(this.state.term);
                }}/>
            </div>
            );
    };

    //event handler
    // onInputChange(eventObject){ //eventObject describes the context and a lot of information about the event that occured.
    //     console.log(eventObject.target.value)
    // }
}
