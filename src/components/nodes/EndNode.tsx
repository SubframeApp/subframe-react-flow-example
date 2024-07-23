import { FlowNode } from "@/subframe/components/FlowNode";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type EndNodeData = {
  name: string;
  prompt: string
};

export type EndNodeType = Node<EndNodeData, "end">;

export default function EndNode({ data, selected }: NodeProps<EndNodeType>) {
  return (
    <div>
      <FlowNode badge="End" icon="FeatherX" name={data.name} selected={selected}>
        <span className="w-full text-body font-body text-subtext-color">
          {data.prompt}
        </span>
      </FlowNode>
      <Handle type="target" position={Position.Top} />
    </div>
  );
}
