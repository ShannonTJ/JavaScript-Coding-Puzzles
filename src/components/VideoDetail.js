import React from "react";
import { Paper, Typography } from "@material-ui/core";

function VideoDetail({ video }) {
  //return a loading message while retrieving videos
  if (!video) return <h1>Loading...</h1>;
  //get the video link
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  //display the selected video
  return (
    <React.Fragment>
      <Paper
        elevation={6}
        style={{
          position: "relative",
          padding: "0 0 56.25% 0",
          width: "100%",
          display: "block",
        }}
      >
        <iframe
          style={{ position: "absolute" }}
          frameBorder="0"
          width="100%"
          height="100%"
          left="0"
          top="0"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">{video.snippet.title}</Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}

export default VideoDetail;
