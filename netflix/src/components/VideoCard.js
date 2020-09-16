import React from 'react';

const VideoCard = ({ imgSrc, videoItems, index }) => {
  return (
    <div
      className={`rounded overflow-hidden ${
        videoItems > index + 1 ? 'mr-1' : ''
      }`}
    >
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default VideoCard;
