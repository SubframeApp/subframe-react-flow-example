import type { EdgeTypes } from "@xyflow/react";

import { FlowEdgeType} from "./FlowEdge";
import FlowEdge from "./FlowEdge";

export const initialEdges = [
  { id: "a->c", type: "flow-edge", source: "a", target: "c", data: {text: "Loan help"}},
  { id: "b->d", type: "flow-edge", source: "b", target: "d", data: {text: "Success"}},
  { id: "c->d", type: "flow-edge", source: "c", target: "d", data: {text: "Schedule follow-up"}},
] satisfies CustomEdgeType[];

export const edgeTypes = {
  // Add your custom edge types here!
  "flow-edge": FlowEdge,
} satisfies EdgeTypes;

// Append the types of you custom edges to the BuiltInEdge type
export type CustomEdgeType = FlowEdgeType
