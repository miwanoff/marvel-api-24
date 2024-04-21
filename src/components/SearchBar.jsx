import React, { useRef } from "react";

const SearchBar = ({ setter }) => {
  // console.log("setter:" + setter);
  let input = useRef("");

  const handleClick = async (e) => {
    console.log("Clicked");
    e.preventDefault();
    let value = input.current.value;
    if (value === "") return;
    try {
      //let heroes = await fetchHeroes(value);
      let hero = [value];
      setter(hero);
      console.log("setter:" + hero);
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
