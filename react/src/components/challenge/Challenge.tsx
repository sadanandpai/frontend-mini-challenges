import Accordion from "@/machine-coding/accordion/App";
import Counter from "@/machine-coding/counter/counter";
import PasswordStrength from "@/machine-coding/password-strength/passwordStrength";
import GuessNumber from "@/machine-coding/guess-number/App";
import Toast from "@/machine-coding/toast-popup/toast";
import Header from "../header/header";
import LightDarkMode from "@/machine-coding/light-dark-mode/App";
import StarRating from "@/machine-coding/star-rating/App";
import TelephoneFormatter from "@/machine-coding/telephone-formatter";
import TodoList from "@/machine-coding/todo-list/todo";
import { useParams } from "react-router-dom";

const reactChallenges = [
  <Counter />,
  <Accordion />,
  <StarRating />,
  <LightDarkMode />,
  <GuessNumber />,
  <TelephoneFormatter />,
  <Toast />,
  <PasswordStrength />,
  <TodoList />
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
