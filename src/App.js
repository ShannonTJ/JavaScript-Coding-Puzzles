import { configure } from "@testing-library/react";
import React from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import { VideoList } from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBMKceVdkO6zXuPxkUwHphdrg54hnkT8pI",
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={8}>
                {/* //VIDEO LIST */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
