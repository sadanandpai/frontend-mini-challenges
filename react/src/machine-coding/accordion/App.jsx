import questions from "./data";
import Accordion from "./Accordion";
import styles from "./Accordion.module.css";

export default function App() {
  return (
    <div className={styles.App}>
      <h1>Accordion</h1>

      {questions.map((question) => {
        return <Accordion {...question} />;
      })}
    </div>
  );
}
