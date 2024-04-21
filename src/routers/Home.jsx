import React from "react";
import { useState } from "react";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  console.log(heroes);
  return (
    <Container>
      <div className="title">
        <h1>Home</h1>
      </div>
      <SearchBar setter={setHeroes} />
      <Grid>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Grid>
    </Container>
  );
};

export default Home;
