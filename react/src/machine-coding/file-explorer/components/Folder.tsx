import { MouseEvent, useState } from "react";
import { NodeIntf, NodeOrNull } from "../utils/node.interface";

import Input from "./Input";
import styles from "../styles.module.css";

interface Props {
  expanded: boolean;
  toggleExpand: (ex: MouseEvent) => void;
  node: NodeIntf;
  parent: NodeOrNull;
  onNodeDeletion: (a: NodeIntf, b: NodeIntf) => void;
  onNodeUpdate: (a: NodeIntf, b: NodeIntf, c: string) => void;
  onNew: (a: boolean) => void;
  validateNode: (a: NodeOrNull, b: NodeIntf | null, c: string) => boolean;
}

function Folder({
  expanded,
  toggleExpand,
  parent,
  node,
  onNodeDeletion,
  onNodeUpdate,
  onNew,
  validateNode,
}: Props) {
  const [isEditable, setIsEditable] = useState(false);

  const validateNodeOnUpdate = (name: string) => validateNode(parent, node, name);

  const onComplete = (value: string) => {
    if (parent) {
      if (validateNodeOnUpdate(value)) onNodeUpdate(parent, node, value);
      setIsEditable(false);
    }
  };

  if (isEditable) {
    return (
      <li className={`${styles.list} ${styles.editList}`}>
        {expanded ? "📂" : "📁"}&nbsp;
        <Input defaultValue={node?.name} onComplete={onComplete} validateNode={validateNodeOnUpdate} />
      </li>
    );
  }

  return (
    <li className={styles.list} data-root={parent === null}>
      <button onClick={toggleExpand}>
        {expanded ? "📂" : "📁"} {node?.name}
      </button>

      <div className={styles.controls}>
        <button className="edit" onClick={() => setIsEditable(true)}>
          ✏️
        </button>
        <button className="new-file" onClick={() => onNew(false)}>
          📄
        </button>
        <button className="new-folder" onClick={() => onNew(true)}>
          🗂
        </button>
        <button
          className="delete"
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          onClick={() => onNodeDeletion(parent!, node)}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

export default Folder;
