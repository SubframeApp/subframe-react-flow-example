import {useCallback, useState} from "react";
import {useOnSelectionChange, useStore} from "@xyflow/react";
import FlowNodeEditor from "@/components/FlowNodeEditor";
import {Edge, Node} from "@xyflow/react";
import {CustomNodeType} from "@/components/nodes";

export function FlowDrawer() {
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([]);
  const [selectedEdges, setSelectedEdges] = useState<Edge[]>([]);
  const deselectNodesAndEdges = useStore((store) => store.unselectNodesAndEdges)
  const selectedNode = useStore(store => store.nodes.find(node => node.id === selectedNodeIds[0]))

  const onChange = useCallback(({ nodes, edges }: {nodes: Node[], edges: Edge[]}) => {
    setSelectedNodeIds(nodes.map(node => node.id));
    setSelectedEdges(edges);
  }, []);

  useOnSelectionChange({
    onChange,
  });

  if (selectedNode) {
    return <FlowNodeEditor open={Boolean(setSelectedNodeIds.length)} onOpenChange={() => deselectNodesAndEdges()} node={selectedNode as CustomNodeType} />
  }

  return null
}