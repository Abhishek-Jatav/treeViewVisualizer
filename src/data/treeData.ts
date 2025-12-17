// data/treeData.ts
import { TreeNode } from "../types/tree";

export const treeData: TreeNode = {
  id: "root",
  label: "Root",
  expanded: true,
  children: [
    {
      id: "A",
      label: "A",
      expanded: true,
      children: [
        { id: "A1", label: "A1" },
        { id: "A2", label: "A2" },
      ],
    },
    {
      id: "B",
      label: "B",
      expanded: true,
      children: [
        { id: "B1", label: "B1" },
        { id: "B2", label: "B2" },
      ],
    },
  ],
};
