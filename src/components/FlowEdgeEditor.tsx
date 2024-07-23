"use client";

import React from "react";
import { DrawerLayout } from "@/subframe/layouts/DrawerLayout";
import * as SubframeCore from "@subframe/core";
import { TextField } from "@/subframe/components/TextField";
import { CustomEdgeType } from "@/components/edges";
import {useReactFlow} from "@xyflow/react";

function FlowEdgeEditor({
  edge,
  open,
  onOpenChange,
}: {
  edge: CustomEdgeType;
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
            Edit edge
          </span>
        </div>
        <TextField
          className="h-auto w-full flex-none"
          label="Edge Name"
          helpText=""
        >
          <TextField.Input
            placeholder=""
            value={edge.data?.text}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              reactFlow.updateEdgeData(edge.id, { text: event.target.value });
            }}
          />
        </TextField>
      </div>
    </DrawerLayout>
  );
}

export default FlowEdgeEditor;