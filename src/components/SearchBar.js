import React from "react";
import { Paper, TextField } from "@material-ui/core";

function SearchBar({ searchTerm, setSearchTerm, onFormSubmit }) {
  //get the value entered in the searchbar
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //prevent the page from refreshing every time the user makes a search
  //submit the search term to the api
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default SearchBar;
