import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchHero } from "../utils/utils";

const HeroDetails = () => {
  const [hero, setHero] = useState();
  let { id } = useParams(0);
  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data[0]))
      .catch((err) => console.error(err));
  }, []);

  console.log("hero");
  console.log(hero);

  if (!hero) return;

  return (
    <div className="container large">
      <div className="hero__details-container">
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt="hero full size"
        />
        <div className="hero__details">
          <h4>Name</h4>
          <p>{hero.name}</p>
          {hero.description ? (
            <>
              <h4>Description</h4>
              <p>{hero.description}</p>
            </>
          ) : null}
          <div className="hero__series">
            <h4>Series</h4>
            <ul>
              {hero.series.items
                ? hero.series.items.map((title) => (
                    <li key={Math.random() * 1000}>{title.name}</li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  //return <div>{id}</div>;
};

export default HeroDetails;
