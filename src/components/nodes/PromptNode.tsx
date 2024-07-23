import { FlowNode } from "@/subframe/components/FlowNode";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type PromptNodeData = {
  name: string;
  prompt: string;
};

export type PromptNodeType = Node<PromptNodeData, "prompt">;

export default function PromptNode({ data }: NodeProps<PromptNodeType>) {
  return (
    <div>
      <FlowNode badge="Prompt" icon="FeatherSparkles" title={data.name}>
        <span className="w-full text-body font-body text-subtext-color">
          {data.prompt}
        </span>
      </FlowNode>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
