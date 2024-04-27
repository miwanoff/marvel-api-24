// import React from "react";

// export default function HeroDetails({ props }) {
//   return <div className="grid">{123}</div>;
// }

import React from "react";
import { useParams } from "react-router-dom";
 
const HeroDetails = () => {
    let { id } = useParams(0);
    return <div>{id}</div>;
};
 
export default HeroDetails;
