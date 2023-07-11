import { NodeIntf } from "./utils/node.interface";
import Tree from "./components/Tree";
import { fileExplorerData } from "./utils/data";
import styles from "./styles.module.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState<NodeIntf>(fileExplorerData as NodeIntf);

  const onNodeAdditon = (parent: NodeIntf, node: NodeIntf) => {
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

  const onNodeUpdate = (parent: NodeIntf, node: NodeIntf, name) => {
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

  return (
    <div className={styles.app}>
      <Tree
        node={data}
        parent={null}
        onNodeAdditon={onNodeAdditon}
        onNodeDeletion={onNodeDeletion}
        onNodeUpdate={onNodeUpdate}
      />
    </div>
  );
}

export default App;
