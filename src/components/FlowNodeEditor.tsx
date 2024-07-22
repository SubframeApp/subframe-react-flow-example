"use client";

import React from "react";
import { DrawerLayout } from "@/subframe/layouts/DrawerLayout";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import { RadioCardGroup } from "@/subframe/components/RadioCardGroup";
import { TextField } from "@/subframe/components/TextField";
import { TextArea } from "@/subframe/components/TextArea";
import { Switch } from "@/subframe/components/Switch";
import {Node} from "@xyflow/react";

function FlowNodeEditor({node, open, onOpenChange}: {node: Node, open: boolean, onOpenChange: (newOpen: boolean) => void}) {
  return (
    <DrawerLayout open={open} onOpenChange={onOpenChange}>
      <div className="flex h-full w-96 flex-col items-start gap-6 bg-default-background pt-6 pr-6 pb-6 pl-6">
        <div className="flex w-full items-center gap-2">
          <SubframeCore.Icon
            className="text-body font-body text-default-font"
            name="FeatherPencil"
          />
          <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
            Edit node
          </span>
          <Button
            variant="brand-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save
          </Button>
        </div>
        <RadioCardGroup
          className="h-auto w-full flex-none grid grid-cols-3"
          value=""
          onValueChange={(value: string) => {}}
        >
          <RadioCardGroup.RadioCard
            disabled={false}
            hideRadio={true}
            value="a2f16ef5"
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
            value="4048fb8e"
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
            value="e6be2acd"
          >
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconWithBackground
                variant="neutral"
                size="medium"
                icon="FeatherPhone"
                square={true}
              />
              <span className="w-full text-body-bold font-body-bold text-default-font text-center">
                Call
              </span>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard
            disabled={false}
            hideRadio={true}
            value="a4656592"
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
            value="b2bfc4c8"
          >
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconWithBackground
                variant="neutral"
                size="medium"
                icon="FeatherWebhook"
                square={true}
              />
              <span className="w-full text-body-bold font-body-bold text-default-font text-center">
                Webhook
              </span>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard
            disabled={false}
            hideRadio={true}
            value="2919f8ed"
          >
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconWithBackground
                variant="neutral"
                size="medium"
                icon="FeatherClock"
                square={true}
              />
              <span className="w-full text-body-bold font-body-bold text-default-font text-center">
                Wait
              </span>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard
            disabled={false}
            hideRadio={true}
            value="3040b673"
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
            value=""
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
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
            value=""
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
          />
        </TextArea>
        <div className="flex w-full items-center gap-4">
          <div className="flex grow shrink-0 basis-0 flex-col items-start">
            <span className="text-body-bold font-body-bold text-default-font">
              Enable desktop notifications
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Receive a notification on your desktop
            </span>
          </div>
          <Switch checked={false} onCheckedChange={(checked: boolean) => {}} />
        </div>
        <div className="flex w-full items-center gap-4">
          <div className="flex grow shrink-0 basis-0 flex-col items-start">
            <span className="text-body-bold font-body-bold text-default-font">
              Enable desktop notifications
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Receive a notification on your desktop
            </span>
          </div>
          <Switch checked={false} onCheckedChange={(checked: boolean) => {}} />
        </div>
      </div>
    </DrawerLayout>
  );
}

export default FlowNodeEditor;