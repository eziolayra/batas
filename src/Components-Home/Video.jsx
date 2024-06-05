import React from 'react'

const Video = () => {
  return (
    <div className="video-container">
      <div className="container mx-auto">
        <div className="video-description">
          <p>
            <b>VIDEOS</b>
          </p>
          <p className="video-detail">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit
            amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
            consectetur adipiscing elit. lorem ipsum dolor sit amet,
          </p>
        </div>
        <div className="YT-videos">
          <div className="w-50">
            <iframe
              src="https://www.youtube.com/embed/x6ubh5yL7nU?si=GHfezQWW3kNuAAgY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
          <div className="w-50 yt-fixed-height">
            <iframe
              src="https://www.youtube.com/embed/eEsLQ9EAoxQ?si=gNff3-QLMAxD-DCs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/oumUXgQGAe8?si=FLwgUz7UwcDCQNw4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video
