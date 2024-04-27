import React, { useRef } from "react";
// import fetchHeroes from "../utils/utils";
import { fetchHeroes, fetchHero } from "../utils/utils";

const SearchBar = ({ setter }) => {
  // console.log("setter:" + setter);
  let input = useRef("");

  const handleClick = async (e) => {
    console.log("Clicked");
    e.preventDefault();
    let value = input.current.value;
    console.log(value);
    if (value === "") return;
    try {
      let heroes = await fetchHeroes(value);
      setter(heroes);
      // let hero = await fetchHero(value);
      // setter(hero);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form>
      <input type="text" placeholder="Search hero..." ref={input} />
      <button onClick={handleClick}>Search Hero</button>
    </form>
  );
};

export default SearchBar;
