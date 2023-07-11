import Input from "./Input";
import { NodeIntf } from "../utils/node.interface";
import styles from "../styles.module.css";
import { useState } from "react";

interface Props {
  node: NodeIntf;
  parent: NodeIntf;
  onNodeDeletion: (a: NodeIntf, b: NodeIntf) => void;
  onNodeUpdate: (a: NodeIntf, b: NodeIntf, c: string) => void;
}

function File({ node, parent, onNodeDeletion, onNodeUpdate }: Props) {
  const [isEditable, setIsEditable] = useState(false);

  const onComplete = (value) => {
    onNodeUpdate(parent, node, value);
    setIsEditable(false);
  };

  if (isEditable) {
    return (
      <li className={`${styles.list} ${styles.editList}`}>
        📄&nbsp;
        <Input defaultValue={node.name} onComplete={onComplete} />
      </li>
    );
  }

  return (
    <li className={styles.list}>
      <button className={styles.button}>📄 {node.name}</button>

      <div className={styles.controls}>
        <button onClick={() => setIsEditable(true)}>✏️</button>
        <button onClick={() => onNodeDeletion(parent, node)}>🗑️</button>
      </div>
    </li>
  );
}

export default File;
