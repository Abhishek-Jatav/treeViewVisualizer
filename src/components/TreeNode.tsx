import { Handle, Position } from "reactflow";

export default function TreeNode({ data }: { data: { label: string } }) {
  return (
    <div
      style={{
        width: 100,
        padding: "10px",
        borderRadius: 8,
        background: "#ffffff",
        border: "2px solid #2563eb",
        textAlign: "center",
        fontWeight: 600,
      }}>
      <Handle type="target" position={Position.Top} />
      {data.label}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
