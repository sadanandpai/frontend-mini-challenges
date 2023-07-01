import Accordion from "@/machine-coding/accordion/App";
import Counter from "@/machine-coding/counter/counter";
import Header from "../header/header";
import LightDarkMode from "@/machine-coding/light-dark-mode/App";
import StarRating from "@/machine-coding/star-rating/App";
import TelephoneFormatter from "@/machine-coding/telephone-formatter";
import { useParams } from "react-router-dom";

const reactChallenges = [
  <Counter />,
  <Accordion />,
  <StarRating />,
  <LightDarkMode />,
  null, // Gap for "Guess the number"
  <TelephoneFormatter />,
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
