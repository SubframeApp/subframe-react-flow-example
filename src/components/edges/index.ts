import type { BuiltInEdge, Edge, EdgeTypes } from "@xyflow/react";

import ButtonEdge, { type ButtonEdge as ButtonEdgeType } from "./ButtonEdge";

export const initialEdges = [
  { id: "a->c", source: "a", target: "c" },
  { id: "b->d", source: "b", target: "d" },
  { id: "c->d", source: "c", target: "d" },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
  "button-edge": ButtonEdge,
} satisfies EdgeTypes;

// Append the types of you custom edges to the BuiltInEdge type
export type CustomEdgeType = BuiltInEdge | ButtonEdgeType;
