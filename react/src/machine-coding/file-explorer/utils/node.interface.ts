export interface NodeIntf {
  id: string;
  name: string;
  isFolder: boolean;
  nodes?: NodeIntf[];
}

export type NodeOrNull = NodeIntf | null;
