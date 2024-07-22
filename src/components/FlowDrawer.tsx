import {useCallback, useState} from "react";
import {useOnSelectionChange, useStore} from "@xyflow/react";
import FlowNodeEditor from "@/components/FlowNodeEditor";
import {Edge, Node} from "@xyflow/react";

export function FlowDrawer() {
  const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
  const [selectedEdges, setSelectedEdges] = useState<Edge[]>([]);
  const deselectNodesAndEdges = useStore((store) => store.unselectNodesAndEdges)

  const onChange = useCallback(({ nodes, edges }: {nodes: Node[], edges: Edge[]}) => {
    setSelectedNodes(nodes);
    setSelectedEdges(edges);
  }, []);

  useOnSelectionChange({
    onChange,
  });

  return <FlowNodeEditor open={Boolean(selectedNodes.length)} onOpenChange={() => deselectNodesAndEdges()} node={selectedNodes[0]} />
}