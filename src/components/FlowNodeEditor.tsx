"use client";

import { CustomNodeType } from "@/components/nodes";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import { RadioCardGroup } from "@/subframe/components/RadioCardGroup";
import { TextArea } from "@/subframe/components/TextArea";
import { TextField } from "@/subframe/components/TextField";
import { DrawerLayout } from "@/subframe/layouts/DrawerLayout";
import * as SubframeCore from "@subframe/core";
import { useReactFlow } from "@xyflow/react";
import React from "react";

function FlowNodeEditor({
  node,
  open,
  onOpenChange,
}: {
  node: CustomNodeType;
  open: boolean;
  onOpenChange: (newOpen: boolean) => void;
}) {
  const reactFlow = useReactFlow();

  return (
    <DrawerLayout
      className="left-auto w-auto"
      open={open}
      onOpenChange={onOpenChange}
    >
      <div className="flex h-full w-96 flex-col items-start gap-6 bg-default-background pt-6 pr-6 pb-6 pl-6">
        <div className="flex w-full items-center gap-2">
          <SubframeCore.Icon
            className="text-body font-body text-default-font"
            name="FeatherPencil"
          />
          <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
            Edit node
          </span>
        </div>
        <RadioCardGroup
          className="h-auto w-full flex-none grid grid-cols-3"
          value={node.type}
          onValueChange={(value: string) => {
            reactFlow.updateNode(node.id, { type: value });
          }}
        >
          <RadioCardGroup.RadioCard
            disabled={false}
            hideRadio={true}
            value="start"
          >
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconWithBackground
                variant="neutral"
                size="medium"
                icon="FeatherPlay"
                square={true}
              />
              <span className="w-full text-body-bold font-body-bold text-default-font text-center">
                Start
              </span>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard
            disabled={false}
            hideRadio={true}
            value="prompt"
          >
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconWithBackground
                variant="neutral"
                size="medium"
                icon="FeatherSparkles"
                square={true}
              />
              <span className="w-full text-body-bold font-body-bold text-default-font text-center">
                Prompt
              </span>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard
            disabled={false}
            hideRadio={true}
            value="sms"
          >
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconWithBackground
                variant="neutral"
                size="medium"
                icon="FeatherMessageSquare"
                square={true}
              />
              <span className="w-full text-body-bold font-body-bold text-default-font text-center">
                SMS
              </span>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard
            disabled={false}
            hideRadio={true}
            value="end"
          >
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconWithBackground
                variant="neutral"
                size="medium"
                icon="FeatherX"
                square={true}
              />
              <span className="w-full text-body-bold font-body-bold text-default-font text-center">
                End
              </span>
            </div>
          </RadioCardGroup.RadioCard>
        </RadioCardGroup>
        <TextField
          className="h-auto w-full flex-none"
          label="Node Name"
          helpText=""
        >
          <TextField.Input
            placeholder=""
            value={node.data.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              reactFlow.updateNodeData(node.id, { name: event.target.value });
            }}
          />
        </TextField>
        <TextArea
          className="h-auto w-full flex-none"
          label="Prompt"
          helpText=""
        >
          <TextArea.Input
            className="h-auto min-h-[96px] w-full flex-none"
            placeholder=""
            value={node.data.prompt}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              reactFlow.updateNodeData(node.id, { prompt: event.target.value });
            }}
          />
        </TextArea>
      </div>
    </DrawerLayout>
  );
}

export default FlowNodeEditor;
