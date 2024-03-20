import React, { useState } from 'react';

function YouTubeVideo() {
  const [showVideo, setShowVideo] = useState(true);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className='bg-gray-600 h-96 w-full'>
    <div className='p-10 items-center bg-gray-600  flex flex-wrap justify-center  h-20'>
      {!showVideo ? (
        <button className='bg-red-600' onClick={handleClick}>Play Video</button>
      ) : (
        <iframe
          width="560"
          height="315"
          src="https://youtu.be/gI7qfHuLQ6Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
    </div>
  );
}

export default YouTubeVideo;
