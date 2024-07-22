"use client";
/*
 * Documentation:
 * Node — https://app.subframe.com/cbd8a0a4115f/library?component=Node_5749bf2e-d8b2-41e3-b406-81f70b61fde6
 * Icon with background — https://app.subframe.com/cbd8a0a4115f/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 * Badge — https://app.subframe.com/cbd8a0a4115f/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconWithBackground } from "./IconWithBackground";
import { Badge } from "./Badge";

interface NodeRootProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  children?: React.ReactNode;
  badge?: string;
  icon?: SubframeCore.IconName;
  variant?: "default" | "selected";
  className?: string;
}

const NodeRoot = React.forwardRef<HTMLElement, NodeRootProps>(function NodeRoot(
  {
    text,
    children,
    badge,
    icon = "FeatherCheck",
    variant = "default",
    className,
    ...otherProps
  }: NodeRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/5749bf2e flex w-full cursor-pointer flex-col items-start gap-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div
        className={SubframeCore.twClassNames(
          "flex w-full flex-col items-start gap-4 rounded border-2 border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4 shadow-overlay group-hover/5749bf2e:border-2 group-hover/5749bf2e:border-solid group-hover/5749bf2e:border-neutral-300",
          {
            "border-2 border-solid border-brand-primary":
              variant === "selected",
          }
        )}
      >
        <div className="flex w-full items-center gap-2">
          <IconWithBackground
            variant="neutral"
            size="medium"
            icon={icon}
            square={true}
          />
          {text ? (
            <span className="line-clamp-1 grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
              {text}
            </span>
          ) : null}
          <Badge variant="neutral">{badge}</Badge>
        </div>
        {children ? (
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
});

export const Node = NodeRoot;
