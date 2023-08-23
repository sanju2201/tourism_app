import React from 'react';
import './videoCard.scss';

const VideoCard = ({src}) => {
  return (
    <div className="card">
      <video autoPlay muted loop className="video">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card-content">
        <p>BLOG TITLE</p>
      </div>
    </div>
  );
};

export default VideoCard;
