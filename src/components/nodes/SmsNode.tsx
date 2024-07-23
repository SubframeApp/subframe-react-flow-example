import { FlowNode } from "@/subframe/components/FlowNode";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type SmsNodeData = {
  name: string;
  prompt: string;
};

export type SmsNodeType = Node<SmsNodeData, "sms">;

export default function SmsNode({ data, selected }: NodeProps<SmsNodeType>) {
  return (
    <div>
      <FlowNode badge="SMS" icon="FeatherSparkles" name={data.name} selected={selected}>
        <span className="w-full text-body font-body text-subtext-color">
          {data.prompt}
        </span>
      </FlowNode>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
