import Accordion from "./Accordion";
import questions from "./data";
import styles from "./Accordion.module.css";
import { useState } from "react";

export default function App() {
  const [multiple, setMultiple] = useState(true);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const setIdOfOpenAccordion = (id = null) => {
    setOpenAccordionId(multiple ? null : id);
  };

  const onMultipleChange = () => {
    if (multiple) {
      setOpenAccordionId(-1);
    }
    setMultiple(!multiple);
  };

  return (
    <div className={styles.App}>
      <h4>
        <label htmlFor="max-open">Is multiple open accordion allowed?</label>
        <input
          type="checkbox"
          id="max-open"
          checked={multiple}
          onChange={onMultipleChange}
        />
      </h4>

      <div>
        {questions.map((question) => (
          <Accordion
            key={question.id}
            multiple={multiple}
            openAccordionId={openAccordionId}
            setIdOfOpenAccordion={setIdOfOpenAccordion}
            {...question}
          />
        ))}
      </div>
    </div>
  );
}
