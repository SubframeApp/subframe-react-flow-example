import { FlowNode } from "@/subframe/components/FlowNode";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type EndNodeData = {
  title: string;
};

export type EndNodeType = Node<EndNodeData>;

export default function EndNode({ data }: NodeProps<EndNodeType>) {
  return (
    <div>
      <FlowNode badge="End" icon="FeatherX" title={data.title} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
}
