import { useCallback } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes, type CustomNodeType } from "./nodes";
import { initialEdges, edgeTypes, type CustomEdgeType } from "./edges";
import { FlowDrawer } from "@/components/FlowDrawer";

export default function App() {
  const [nodes, , onNodesChange] = useNodesState<CustomNodeType>(initialNodes);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState<CustomEdgeType>(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <ReactFlow<CustomNodeType, CustomEdgeType>
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <FlowDrawer />
      <Background />
      <Controls />
    </ReactFlow>
  );
}
