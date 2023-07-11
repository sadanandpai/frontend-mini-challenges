import { MouseEvent, useRef, useState } from "react";
import { NodeIntf, NodeOrNull } from "../utils/node.interface";

import EditableInput from "./Input";
import File from "./File";
import Folder from "./Folder";
import styles from "../styles.module.css";

interface Props {
  node: NodeIntf;
  parent: NodeOrNull;
  onNodeAdditon: (a: NodeIntf, b: NodeIntf) => void;
  onNodeDeletion: (a: NodeIntf, b: NodeIntf) => void;
  onNodeUpdate: (a: NodeIntf, b: NodeIntf, c: string) => void;
}

function Tree({
  node,
  parent,
  onNodeAdditon,
  onNodeDeletion,
  onNodeUpdate,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const isFolderRef = useRef(false);

  const toggleExpand = (e: MouseEvent) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const onNew = (isFolder: boolean) => {
    isFolderRef.current = isFolder;
    setIsNew(!isNew);
    setExpanded(true);
  };

  const onComplete = (name: string) => {
    if (name) {
      onNodeAdditon(node, {
        name,
        id: new Date().getTime().toString(),
        isFolder: isFolderRef.current,
      });
    }
    setIsNew(false);
  };

  return (
    <>
      <Folder
        expanded={expanded}
        toggleExpand={toggleExpand}
        parent={parent}
        node={node}
        onNodeDeletion={onNodeDeletion}
        onNodeUpdate={onNodeUpdate}
        onNew={onNew}
      />

      {expanded && (
        <div className={styles.indent}>
          {node.nodes?.map((childNode) =>
            childNode.isFolder ? (
              <Tree
                key={childNode.id}
                node={childNode}
                parent={node}
                onNodeAdditon={onNodeAdditon}
                onNodeDeletion={onNodeDeletion}
                onNodeUpdate={onNodeUpdate}
              />
            ) : (
              <File
                key={childNode.id}
                node={childNode}
                parent={node}
                onNodeDeletion={onNodeDeletion}
                onNodeUpdate={onNodeUpdate}
              />
            )
          )}

          {isNew && (
            <li className={`${styles.list} ${styles.editList}`}>
              {isFolderRef.current ? "📁" : "📄"}&nbsp;
              <EditableInput onComplete={onComplete} />
            </li>
          )}
        </div>
      )}
    </>
  );
}

export default Tree;
