import React, { Component } from 'react';

//{Component} similar to const Component = React.Component

// const SearchBar = () =>{
//     return <input />; // import react for jsx as jsx is converted into React.createElement
// };

export default class SearchBar extends Component{
    render(){  //every class based react component must have a defined render method
        return <input onChange={this.onInputChange} />;
    }

    //event handler
    onInputChange(eventObject){ //eventObject describes the context and a lot of information about the event that occured.
        console.log(eventObject.target.value)
    }
}
