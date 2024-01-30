"use client";
import * as React from "react";
import { cn } from "utils/cn";
import { Label } from "./label-input";

export interface InputProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: boolean;
	render?: React.ReactNode;
	labelClassName?: string;
	help?: string;
	icons?: [
		React.FC<{ className?: string }> | undefined | null,
		(React.FC<{ className?: string }> | null)?,
	];
}

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  (
    { className, help, value, labelClassName, render, error, icons, ...props },
    ref,
  ) => {
    return (
      <div className="flex flex-col h-fit w-full relative group text-primary-foreground">
        {render ? (
          render
        ) : (
          <textarea
            className={cn(
              error && '!border-destructive',
              'peer text-base text-primary-foreground/70 resize-none flex w-full min-h-44 h-full border-b-2 border-b-slate-600 focus:border-b-slate-400 outline-none py-4 bg-transparent file:border-0 file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
              className,
              { 'pl-12': !!icons?.[0] },
            )}
            ref={ref}
            {...{ ...props, value }}
            placeholder="..."
          />
        )}
        <Label
          className={cn(labelClassName, '!top-0', {
            '!left-12 peer-focus:!left-0 peer-content:!left-0': !!icons?.[0],
            '!top-0': !!value?.toString().length,
          })}
        >
          {props.placeholder}
        </Label>
        <p className="absolute -bottom-6 text-muted-foreground text-sm">{help}</p>

        {icons?.map(
          (Icon, i) =>
            Icon && (
              <div
                key={i.toString()}
                className={cn('absolute top-1/2 -translate-y-1/2', {
                  'left-4': i === 0,
                  'right-4': i === 1,
                })}
              >
                <Icon className="w-6 h-6 text-muted-foreground" />
              </div>
            ),
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
