"use client";
/*
 * Documentation:
 * Node Toolbar — https://app.subframe.com/cbd8a0a4115f/library?component=Node+Toolbar_2b1143ae-1c58-4000-ac95-bc3a47b1ca5d
 * Tooltip — https://app.subframe.com/cbd8a0a4115f/library?component=Tooltip_ccebd1e9-f6ac-4737-8376-0dfacd90c9f3
 * Icon Button — https://app.subframe.com/cbd8a0a4115f/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Tooltip } from "./Tooltip";
import { IconButton } from "./IconButton";

interface NodeToolbarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const NodeToolbarRoot = React.forwardRef<HTMLElement, NodeToolbarRootProps>(
  function NodeToolbarRoot(
    { className, ...otherProps }: NodeToolbarRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex flex-col items-center justify-center gap-1",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Root>
            <SubframeCore.Tooltip.Trigger asChild={true}>
              <IconButton
                size="small"
                icon="FeatherPencil"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </SubframeCore.Tooltip.Trigger>
            <SubframeCore.Tooltip.Portal>
              <SubframeCore.Tooltip.Content
                side="right"
                align="center"
                sideOffset={4}
                asChild={true}
              >
                <Tooltip>Edit node</Tooltip>
              </SubframeCore.Tooltip.Content>
            </SubframeCore.Tooltip.Portal>
          </SubframeCore.Tooltip.Root>
        </SubframeCore.Tooltip.Provider>
        <SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Root>
            <SubframeCore.Tooltip.Trigger asChild={true}>
              <IconButton
                size="small"
                icon="FeatherCopy"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </SubframeCore.Tooltip.Trigger>
            <SubframeCore.Tooltip.Portal>
              <SubframeCore.Tooltip.Content
                side="right"
                align="center"
                sideOffset={4}
                asChild={true}
              >
                <Tooltip>Duplicate</Tooltip>
              </SubframeCore.Tooltip.Content>
            </SubframeCore.Tooltip.Portal>
          </SubframeCore.Tooltip.Root>
        </SubframeCore.Tooltip.Provider>
        <SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Root>
            <SubframeCore.Tooltip.Trigger asChild={true}>
              <IconButton
                size="small"
                icon="FeatherTrash"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </SubframeCore.Tooltip.Trigger>
            <SubframeCore.Tooltip.Portal>
              <SubframeCore.Tooltip.Content
                side="right"
                align="center"
                sideOffset={4}
                asChild={true}
              >
                <Tooltip>Delete</Tooltip>
              </SubframeCore.Tooltip.Content>
            </SubframeCore.Tooltip.Portal>
          </SubframeCore.Tooltip.Root>
        </SubframeCore.Tooltip.Provider>
      </div>
    );
  }
);

export const NodeToolbar = NodeToolbarRoot;
