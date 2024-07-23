import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  type EdgeProps,
  type Edge, useReactFlow,
} from "@xyflow/react";
import {EdgeLabel} from "@/subframe/components/EdgeLabel";
import {IconButton} from "@/subframe/components/IconButton";

type FlowEdgeData = {
  text: string,
};

export type FlowEdgeType = Edge<FlowEdgeData>;

export default function FlowEdge({
  id,
  data,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps<FlowEdgeType>) {
  const reactFlow = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <EdgeLabel
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all',
          }}
          text={data?.text}
          actions={
            <IconButton
              size="small"
              icon="FeatherX"
              onClick={() => reactFlow.deleteElements({edges: [{id}]})}
            />
          }
        />
      </EdgeLabelRenderer>
    </>
  );
}
