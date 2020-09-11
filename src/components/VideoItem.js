import React from 'react';
import './VideoItem.css';

const VideoItem = ({video}) => {


  return (
  <div className = "item video-item">
    <img src ={video.snippet.thumbnails.medium.url} className = "size ui image" alt="video image"/>
    <div className = "content">
      <div className = "header">
        {video.snippet.title} 
      </div>
    </div>
   
  </div>
  );
} 

export default VideoItem;