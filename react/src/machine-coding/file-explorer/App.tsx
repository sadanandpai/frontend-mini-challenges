import type { NodeIntf, NodeOrNull } from "./utils/node.interface";
import Tree from "./components/Tree";
import { fileExplorerData } from "./utils/data";
import styles from "./styles.module.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState<NodeIntf>(fileExplorerData as NodeIntf);

  const onNodeAddition = (parent: NodeIntf, node: NodeIntf) => {
    const updatedData = { ...data };
    const nodes = [...(parent.nodes ?? [])];

    nodes.push({
      ...node,
      nodes: [],
    });

    if (parent.id === "root") {
      updatedData.nodes = nodes;
    } else {
      parent.nodes = nodes;
    }

    setData(updatedData);
  };

  const onNodeDeletion = (parent: NodeIntf, node: NodeIntf) => {
    const updatedData = { ...data };
    const nodes = parent.nodes?.filter((i) => i.id !== node.id);

    if (parent.id === "root") {
      updatedData.nodes = nodes;
    } else {
      parent.nodes = nodes;
    }
    setData(updatedData);
  };

  const onNodeUpdate = (parent: NodeIntf, node: NodeIntf, name: string) => {
    const updatedData = { ...data };
    const nodes = parent.nodes?.map((n) => n) ?? [];
    const idx = nodes.findIndex((n) => n.id === node.id);
    nodes[idx] = { ...nodes[idx], name };

    if (parent.id === "root") {
      updatedData.nodes = nodes;
    } else {
      parent.nodes = nodes;
    }
    setData(updatedData);
  };

  /**
   * Validate the name of node
   * @param parent
   * @param node The current node. If `null`, then it means it is going to be a "new" node
   * @param name
   */
  const validateNode = (parent: NodeOrNull, node: NodeIntf | null, name: string): boolean => {
    if (parent === null) return true;
    if (typeof parent.nodes === 'undefined') return true;
    if (name === '') return false;

    // Find a node with same name
    const idx = parent.nodes?.findIndex((n) => n.id !== node?.id && n.name === name);
    return idx === -1;
  }

  return (
    <div className={styles.app}>
      <Tree
        node={data}
        parent={null}
        onNodeAddition={onNodeAddition}
        onNodeDeletion={onNodeDeletion}
        onNodeUpdate={onNodeUpdate}
        validateNode={validateNode}
      />
    </div>
  );
}

export default App;
