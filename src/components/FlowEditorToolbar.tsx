import { Button } from "@/subframe/components/Button";
import { EditorToolbar } from "@/subframe/components/EditorToolbar";
import { useReactFlow } from "@xyflow/react";
import { v4 } from "uuid";

export function FlowEditorToolbar() {
  const { addNodes } = useReactFlow();

  return (
    <EditorToolbar
      className="absolute bottom-4 z-10 left-[50%] transform -translate-x-1/2"
      addButton={
        <Button
          variant="neutral-tertiary"
          icon="FeatherPlus"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            addNodes([
              {
                id: v4(),
                type: "prompt",
                position: { x: 0, y: -150 },
                data: {
                  name: "New prompt",
                  prompt: "What you enter here will be spoken to the caller",
                },
              },
            ]);
          }}
        >
          Add node
        </Button>
      }
      title="IVR Workflow 1"
    />
  );
}
