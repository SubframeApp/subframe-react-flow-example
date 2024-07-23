import { FlowNode } from "@/subframe/components/FlowNode";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type StartNodeData = {
  name: string;
  prompt: string;
};

export type StartNodeType = Node<StartNodeData, "start">;

export default function StartNode({ data, selected }: NodeProps<StartNodeType>) {
  return (
    <div>
      <FlowNode badge="Start" icon="FeatherPlay" name={data.name} selected={selected}>
        <span className="w-full text-body font-body text-subtext-color">
          {data.prompt}
        </span>
      </FlowNode>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
