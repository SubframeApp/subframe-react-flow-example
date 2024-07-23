import {useCallback, useState} from "react";
import {useOnSelectionChange, useStore} from "@xyflow/react";
import FlowNodeEditor from "@/components/FlowNodeEditor";
import {Edge, Node} from "@xyflow/react";
import {CustomNodeType} from "@/components/nodes";
import {CustomEdgeType} from "@/components/edges";
import FlowEdgeEditor from "@/components/FlowEdgeEditor";

export function FlowDrawer() {
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([]);
  const [selectedEdgeIds, setSelectedEdgeIds] = useState<string[]>([]);
  const deselectNodesAndEdges = useStore((store) => store.unselectNodesAndEdges)
  const selectedNode = useStore(store => store.nodes.find(node => node.id === selectedNodeIds[0]))
  const selectedEdge = useStore(store => store.edges.find(node => node.id === selectedEdgeIds[0]))

  const onChange = useCallback(({ nodes, edges }: {nodes: Node[], edges: Edge[]}) => {
    setSelectedNodeIds(nodes.map(node => node.id));
    setSelectedEdgeIds(edges.map(edge => edge.id));
  }, []);

  useOnSelectionChange({
    onChange,
  });

  if (selectedNode) {
    return <FlowNodeEditor open onOpenChange={() => deselectNodesAndEdges()} node={selectedNode as CustomNodeType} />
  }

  if (selectedEdge) {
    return <FlowEdgeEditor open onOpenChange={() => deselectNodesAndEdges()} edge={selectedEdge as CustomEdgeType} />
  }

  return null
}