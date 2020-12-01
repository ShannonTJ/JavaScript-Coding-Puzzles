import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoArray = videos.map((video, id) => (
    <VideoItem key={id} video={video} onVideoSelect={onVideoSelect}></VideoItem>
  ));
  return (
    <Grid container spacing={10}>
      {videoArray}
    </Grid>
  );
};

export default VideoList;
