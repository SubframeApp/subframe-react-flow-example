import {
  Background,
  Controls,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  type OnConnect,
} from "@xyflow/react";
import { useCallback } from "react";

import "@xyflow/react/dist/style.css";

import { FlowDrawer } from "@/components/FlowDrawer";
import { FlowEditorToolbar } from "./FlowEditorToolbar";
import { edgeTypes, initialEdges, type CustomEdgeType } from "./edges";
import { initialNodes, nodeTypes, type CustomNodeType } from "./nodes";

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
      defaultEdgeOptions={{
        type: "flow-edge",
        data: {
          text: "New edge",
        },
      }}
      fitView
    >
      <FlowEditorToolbar />
      <FlowDrawer />
      <Background />
      <Controls />
    </ReactFlow>
  );
}
