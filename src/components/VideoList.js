import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const list = videos.map(video => {
        return <VideoItem 
            onVideoSelect={onVideoSelect} 
            video={video} 
            key={video.id.videoId}
            />;
    });
    return <div className="ui relaxed video-list"> {list} </div>
}

export default VideoList;