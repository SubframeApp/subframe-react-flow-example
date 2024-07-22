import type { BuiltInNode, Node, NodeTypes } from "@xyflow/react";
import PromptNode, { PromptNodeType } from "./PromptNode";
import StartNode, { StartNodeType } from "./StartNode";
import EndNode, { EndNodeType } from "./EndNode";
import SmsNode from "./SmsNode";

export const initialNodes = [
  {
    id: "a",
    type: "start",
    position: { x: 0, y: 0 },
    data: { title: "Incoming message" },
  },
  {
    id: "b",
    type: "sms",
    position: { x: -300, y: 300 },
    data: { title: "Send lead a reminder", contents: "hey there" },
  },
  {
    id: "c",
    type: "prompt",
    position: { x: 300, y: 300 },
    data: {
      title: "Prompt for loan details",
      prompt:
        "Ask the customer for their loan details, such as loan number or property address. Once you have the necessary information, provide an update on the status of their loan and address any specific questions or concerns they may have.",
    },
  },
  {
    id: "d",
    type: "end",
    position: { x: 0, y: 600 },
    data: { label: "with React Flow" },
  },
] satisfies Node[];

export const nodeTypes = {
  prompt: PromptNode,
  sms: SmsNode,
  start: StartNode,
  end: EndNode,
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType =
  | BuiltInNode
  | PromptNodeType
  | StartNodeType
  | EndNodeType;
