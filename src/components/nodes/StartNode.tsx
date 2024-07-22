import { FlowNode } from "@/subframe/components/FlowNode";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type StartNodeData = {
  title: string;
  prompt: string;
};

export type StartNodeType = Node<StartNodeData>;

export default function StartNode({ data }: NodeProps<StartNodeType>) {
  return (
    <div>
      <FlowNode badge="Start" icon="FeatherPlay" title={data.title} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
