import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

function VideoItem({ video, setSelectedVideo }) {
  //display items in the sidebar video list
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: "inline-block",
          alignItems: "center",
          cursor: "pointer",
          width: "100%",
        }}
        onClick={() => setSelectedVideo(video)}
      >
        <img
          style={{ marginRight: "20px", float: "left" }}
          width="50%"
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1" style={{}}>
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
