"use client";
/*
 * Documentation:
 * Edge Label — https://app.subframe.com/cbd8a0a4115f/library?component=Edge+Label_6e54c2a3-4027-4310-ae44-6b29d2a43c5c
 * Icon Button — https://app.subframe.com/cbd8a0a4115f/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface EdgeLabelRootProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  actions?: React.ReactNode;
  className?: string;
}

const EdgeLabelRoot = React.forwardRef<HTMLElement, EdgeLabelRootProps>(
  function EdgeLabelRoot(
    { text, actions, className, ...otherProps }: EdgeLabelRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/6e54c2a3 flex cursor-pointer items-center justify-center gap-2 rounded border-2 border-solid border-neutral-100 bg-neutral-100 pt-1.5 pr-2 pb-1.5 pl-2 hover:border-2 hover:border-solid hover:border-neutral-200",
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
        {actions ? (
          <div className="flex items-center justify-center gap-2">
            {actions}
          </div>
        ) : null}
      </div>
    );
  }
);

export const EdgeLabel = EdgeLabelRoot;
