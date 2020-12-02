import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import youtube from "./api/youtube";

function App() {
  //usestate setup
  const [searchTerm, setSearchTerm] = useState("learn javascript");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //get video data from the API, based on the user search
  //specify how many videos to display in the sidebar
  const onFormSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      },
    });
    //set the selected video and sidebar videos
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  //display default videos when the page is opened
  useEffect(() => {
    onFormSubmit(searchTerm);
  }, []);

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onFormSubmit={onFormSubmit}
            />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              videos={videos}
              setSelectedVideo={setSelectedVideo}
            ></VideoList>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
