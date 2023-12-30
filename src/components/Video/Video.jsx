import React from "react";
import ReactPlayer from "react-player";
import video from "../../../public/Video/video.mp4";
import "./Video.scss";

function Video() {
  return (
    <div className="video-container">
      <ReactPlayer
        url={video}
        controls
        className="react-player-wrapper"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Video;
