import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

//youtube API
const API_KEY = 'AIzaSyDWfdtQjN_XrOXoqthkz3wLKahxhf6EDP0';

// Create a new component. Thi component
// should produce some html


const App = () => {
    return (
    //JSX - subset/dialect of javascript that looks like html but is actually part of javascript. Babel does the transpilaton of JSX for us and converts it to javascript.
    <div>
        <SearchBar/>
    </div>
);
};

//Take this component's generated HTML
// and put it on the page(in the DOM)
//<App/> instance of App class
ReactDOM.render(<App />, document.querySelector('.container'));

