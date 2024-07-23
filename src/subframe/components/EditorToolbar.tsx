"use client";
/*
 * Documentation:
 * Editor Toolbar — https://app.subframe.com/cbd8a0a4115f/library?component=Editor+Toolbar_f7d24dea-f865-4284-aaad-1a56946e5958
 * Button — https://app.subframe.com/cbd8a0a4115f/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface EditorToolbarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  addButton?: React.ReactNode;
  title?: string;
  className?: string;
}

const EditorToolbarRoot = React.forwardRef<HTMLElement, EditorToolbarRootProps>(
  function EditorToolbarRoot(
    { addButton, title, className, ...otherProps }: EditorToolbarRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex items-center justify-center gap-2 rounded border border-solid border-neutral-border bg-default-background pt-2 pr-2 pb-2 pl-6 shadow-overlay",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex items-center justify-center gap-2 pr-4">
          {title ? (
            <span className="text-body-bold font-body-bold text-subtext-color">
              {title}
            </span>
          ) : null}
        </div>
        <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
        {addButton ? (
          <div className="flex items-center justify-center gap-2">
            {addButton}
          </div>
        ) : null}
      </div>
    );
  }
);

export const EditorToolbar = EditorToolbarRoot;
