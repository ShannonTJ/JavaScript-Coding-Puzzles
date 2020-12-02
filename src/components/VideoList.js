import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

function VideoList({ videos, setSelectedVideo }) {
  const videoArray = videos.map((video, id) => (
    <VideoItem
      key={id}
      video={video}
      setSelectedVideo={setSelectedVideo}
    ></VideoItem>
  ));
  return (
    <Grid container spacing={10}>
      {videoArray}
    </Grid>
  );
}

export default VideoList;
