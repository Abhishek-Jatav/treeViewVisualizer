// utils/treeToFlow.ts
import { TreeNode } from "../types/tree";
import { Node, Edge } from "reactflow";

const xGap = 120;
const yGap = 100;

export function treeToFlow(tree: TreeNode) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  let leafX = 0;

  function traverse(node: TreeNode, depth: number): number {
    const y = depth * yGap;

    // COLLAPSED or LEAF NODE
    if (
      !node.children ||
      node.children.length === 0 ||
      node.expanded === false
    ) {
      const x = leafX * xGap;
      leafX++;

     nodes.push({
       id: node.id,
       type: "treeNode", // 👈 ADD THIS LINE
       data: { label: node.label },
       position: { x, y },
     });


      return x;
    }

    // EXPANDED NODE WITH CHILDREN
    const childXs: number[] = [];

    for (const child of node.children) {
      const childX = traverse(child, depth + 1);

      edges.push({
        id: `${node.id}-${child.id}`,
        source: node.id,
        target: child.id,
      });

      childXs.push(childX);
    }

    const x = (Math.min(...childXs) + Math.max(...childXs)) / 2;

    nodes.push({
      id: node.id,
      data: { label: node.label },
      position: { x, y },
    });

    return x;
  }

  traverse(tree, 0);
  return { nodes, edges };
}
