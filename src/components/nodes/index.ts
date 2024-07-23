import type { NodeTypes } from "@xyflow/react";
import PromptNode, { PromptNodeType } from "./PromptNode";
import StartNode, { StartNodeType } from "./StartNode";
import EndNode, { EndNodeType } from "./EndNode";
import SmsNode, { SmsNodeType } from "./SmsNode";

export const initialNodes = [
  {
    id: "a",
    type: "start",
    position: { x: 0, y: 0 },
    data: { name: "Incoming conversation", prompt: "Greet the customer in a friendly manner and ask what you can help with today.",  },
  },
  {
    id: "b",
    type: "sms",
    position: { x: -300, y: 300 },
    data: { name: "Send lead a reminder", prompt: "Craft an SMS message to send to the lead that answers the question." },
  },
  {
    id: "c",
    type: "prompt",
    position: { x: 300, y: 300 },
    data: {
      name: "Prompt for loan details",
      prompt:
        "Ask the customer for their loan details, such as loan number or property address. Once you have the necessary information, provide an update on the status of their loan and address any specific questions or concerns they may have.",
    },
  },
  {
    id: "d",
    type: "end",
    position: { x: 0, y: 600 },
    data: { name: "End conversation", prompt: "Thank the customer for their call and let them know you are available if they have any further questions or need additional assistance." },
  },
] satisfies CustomNodeType[];

export const nodeTypes = {
  prompt: PromptNode,
  sms: SmsNode,
  start: StartNode,
  end: EndNode,
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType =
  | PromptNodeType
  | SmsNodeType
  | StartNodeType
  | EndNodeType;
