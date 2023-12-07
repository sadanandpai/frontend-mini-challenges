import Input from "./Input";
import type { NodeIntf, NodeOrNull } from "../utils/node.interface";
import styles from "../styles.module.css";
import { useState } from "react";

interface Props {
  node: NodeIntf;
  parent: NodeIntf;
  onNodeDeletion: (a: NodeIntf, b: NodeIntf) => void;
  onNodeUpdate: (a: NodeIntf, b: NodeIntf, c: string) => void;
  validateNode: (a: NodeOrNull, b: NodeIntf | null, c: string) => boolean;
}

function File({ node, parent, onNodeDeletion, onNodeUpdate, validateNode }: Props) {
  const [isEditable, setIsEditable] = useState(false);

  const validateNodeOnUpdate = (name: string) => validateNode(parent, node, name);

  const onComplete = (value) => {
    if (validateNodeOnUpdate(value)) onNodeUpdate(parent, node, value);
    setIsEditable(false);
  };

  if (isEditable) {
    return (
      <li className={`${styles.list} ${styles.editList}`}>
        📄&nbsp;
        <Input defaultValue={node.name} onComplete={onComplete} validateNode={validateNodeOnUpdate} />
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
