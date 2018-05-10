import React, { Component } from "react";
import VideoListItem from "./video_list_item";

/*export default class VideoList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const videoItems = this.props.videos.map(prop => {
            return <VideoListItem video={prop}/>
        });
        return (
            <ul className="col-md-4 list-group" >
                {videoItems}
            </ul>
        )
    };
}*/

const VideoList = (props)=>{

    const videoItems = props.videos.map(prop => {
        return <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={prop.etag}
            video={prop}/>
    });
    return (
        <ul className="col-md-4 list-group" >
            {videoItems}
        </ul>
    );
};
export default VideoList;