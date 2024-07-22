import { FlowNode } from "@/subframe/components/FlowNode";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type SmsNodeData = {
  title: string;
  contents: string;
};

export type SmsNodeType = Node<SmsNodeData>;

export default function SmsNode({ data }: NodeProps<SmsNodeType>) {
  return (
    <div>
      <FlowNode badge="Prompt" icon="FeatherSparkles" title={data.title}>
        <span className="w-full text-body font-body text-subtext-color">
          {data.contents}
        </span>
        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
      </FlowNode>
    </div>
  );
}
