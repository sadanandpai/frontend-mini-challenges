import Counter from "@/mc/counter/counter";
import Header from "../header/header";
import { useParams } from "react-router-dom";

const reactChallenges = [<Counter />];

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
