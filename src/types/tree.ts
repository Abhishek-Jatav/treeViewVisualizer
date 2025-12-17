// types/tree.ts
export interface TreeNode {
  id: string;
  label: string;
  expanded?: boolean; // NEW
  children?: TreeNode[];
}
