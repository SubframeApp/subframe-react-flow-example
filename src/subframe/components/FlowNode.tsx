"use client";
/*
 * Documentation:
 * FlowNode — https://app.subframe.com/cbd8a0a4115f/library?component=FlowNode_5749bf2e-d8b2-41e3-b406-81f70b61fde6
 * Icon with background — https://app.subframe.com/cbd8a0a4115f/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 * Badge — https://app.subframe.com/cbd8a0a4115f/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconWithBackground } from "./IconWithBackground";
import { Badge } from "./Badge";

interface FlowNodeRootProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  children?: React.ReactNode;
  badge?: string;
  icon?: SubframeCore.IconName;
  selected?: boolean;
  className?: string;
}

const FlowNodeRoot = React.forwardRef<HTMLElement, FlowNodeRootProps>(
  function FlowNodeRoot(
    {
      name,
      children,
      badge,
      icon = "FeatherCheck",
      selected = false,
      className,
      ...otherProps
    }: FlowNodeRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/5749bf2e flex max-w-[448px] cursor-pointer flex-col items-start gap-2",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div
          className={SubframeCore.twClassNames(
            "flex w-full flex-col items-start gap-4 rounded border-2 border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4 shadow-overlay group-hover/5749bf2e:border-2 group-hover/5749bf2e:border-solid group-hover/5749bf2e:border-neutral-300",
            {
              "border-2 border-solid border-brand-primary group-hover/5749bf2e:border-2 group-hover/5749bf2e:border-solid group-hover/5749bf2e:border-brand-primary":
                selected,
            }
          )}
        >
          <div className="flex w-full items-center gap-6">
            <div className="flex grow shrink-0 basis-0 items-center gap-2">
              <IconWithBackground
                variant="neutral"
                size="small"
                icon={icon}
                square={true}
              />
              {name ? (
                <span className="line-clamp-1 grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                  {name}
                </span>
              ) : null}
            </div>
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
  }
);

export const FlowNode = FlowNodeRoot;
