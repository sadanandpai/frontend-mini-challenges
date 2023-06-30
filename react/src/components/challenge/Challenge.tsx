import Accordion from "@/machine-coding/accordion/App";
import Counter from "@/machine-coding/counter/counter";
import StarRating from "@/machine-coding/star-rating/App";
import LightDarkMode from "@/machine-coding/light-dark-mode/App";

import Header from "../header/header";
import { useParams } from "react-router-dom";

const reactChallenges = [
  <Accordion />,
  <Counter />,
  <StarRating />,
  <LightDarkMode />,
];

function Challenge() {
  const params = useParams();
  const level = params?.level ?? 0;

  return (
    <div className="container">
      <Header heading={params.name} />
      {reactChallenges[+level]}
    </div>
  );
}

export default Challenge;
