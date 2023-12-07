import { useEffect, useState } from "react";

import styles from "./Accordion.module.css";

const Accordion = ({
  title,
  info,
  id,
  openAccordionId,
  setIdOfOpenAccordion,
}) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
    setIdOfOpenAccordion(id);
  };

  useEffect(() => {
    if (openAccordionId) {
      setShow(openAccordionId === id);
    }
  }, [id, openAccordionId]);

  return (
    <div key={id} className={styles.accordion}>
      <div className={styles["accordion-title"]}>
        <h3>{title}</h3>
        <button onClick={toggle} className={styles["accordion-icon"]}>
          {show ? "-" : "+"}
        </button>
      </div>
      {show && <p>{info}</p>}
    </div>
  );
};

export default Accordion;
