"use client";
/*
 * Documentation:
 * Edge Label — https://app.subframe.com/cbd8a0a4115f/library?component=Edge+Label_6e54c2a3-4027-4310-ae44-6b29d2a43c5c
 * Icon Button — https://app.subframe.com/cbd8a0a4115f/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "./IconButton";

interface EdgeLabelRootProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  className?: string;
}

const EdgeLabelRoot = React.forwardRef<HTMLElement, EdgeLabelRootProps>(
  function EdgeLabelRoot(
    { text, className, ...otherProps }: EdgeLabelRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/6e54c2a3 flex h-full cursor-pointer items-center justify-center gap-1 rounded border-2 border-solid border-neutral-100 bg-neutral-100 pt-1 pr-1 pb-1 pl-3 hover:border-2 hover:border-solid hover:border-neutral-300",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {text ? (
          <span className="text-caption-bold font-caption-bold text-default-font">
            {text}
          </span>
        ) : null}
        <IconButton
          size="small"
          icon="FeatherXCircle"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        />
      </div>
    );
  }
);

export const EdgeLabel = EdgeLabelRoot;
