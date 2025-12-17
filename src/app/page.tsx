"use client";

import React, { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import { treeData as initialTree } from "../data/treeData";
import { treeToFlow } from "../utils/treeToFlow";
import  TreeNode  from "../components/TreeNode";

const nodeTypes = {
  treeNode: TreeNode,
};


export default function Home() {
  const [tree, setTree] = useState<TreeNode>(initialTree);

  const { nodes, edges } = treeToFlow(tree);

  function toggleNode(node: TreeNode, id: string): TreeNode {
    if (node.id === id && node.children) {
      return { ...node, expanded: !node.expanded };
    }

    if (!node.children) return node;

    return {
      ...node,
      children: node.children.map((child) => toggleNode(child, id)),
    };
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodeTypes={nodeTypes}
        onNodeClick={(_, node) => setTree((prev) => toggleNode(prev, node.id))}
      />
    </div>
  );
}
