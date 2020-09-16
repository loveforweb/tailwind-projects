import React from 'react';
import VideoCard from './VideoCard';

const VideoCardContainer = ({ title, videoCardItems }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-white text-xl font-medium mb-3">{title}</h2>
      <div className="flex items-center flex-row overflow-x-scroll">
        {videoCardItems.map((item, i) => (
          <VideoCard
            key={item.id}
            index={i}
            videoItems={videoCardItems.length}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCardContainer;
