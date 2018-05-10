import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

//youtube API
const API_KEY = 'AIzaSyDWfdtQjN_XrOXoqthkz3wLKahxhf6EDP0';


class App extends Component{
    constructor(){
        super();
        this.state = {
            videos: [],
            searchedTerm:'Nadira',
            selectedVideo:null
        };
        this.videoSearch(this.state.searchedTerm)
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term:term}, (videos) => {
            this.setState({videos:videos,
                selectedVideo:videos[0],
                searchedTerm: term}); //ES6 feaature ==={videos : videos}
        });
    }

    render() {
        const videoSearch = _.debounce((term)=>this.videoSearch(term),300);
        return (
            //JSX - subset/dialect of javascript that looks like html but is actually part of javascript. Babel does the transpilaton of JSX for us and converts it to javascript.
            <div>
                <SearchBar onSearch = {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(video)=>this.setState({
                        selectedVideo:video
                    })}
                    videos = {this.state.videos}/>
            </div>
        );
    };
}
//Take this component's generated HTML
// and put it on the page(in the DOM)
//<App/> instance of App class
ReactDOM.render(<App />, document.querySelector('.container'));

