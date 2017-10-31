import React from 'react';

// Create a new component. This component should produce some HTML
const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">

      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  );
}

// Take this component, generated HTML and put it on the page(in the DOM)
export default VideoDetail;
