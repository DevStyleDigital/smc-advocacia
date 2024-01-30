"use client";
import { useInputMask } from "@code-forge/react-input-mask";
import * as React from "react";
import { cn } from "utils/cn";
import { Label } from "./label-input";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	render?: React.ReactNode;
	labelClassName?: string;
	help?: string;
	icons?: [
		React.FC<{ className?: string }> | undefined | null,
		(React.FC<{ className?: string }> | null)?,
	];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, help, value, labelClassName, render, type, error, icons, ...props },
    ref,
  ) => {
    return (
      <div className="flex flex-col h-fit w-full relative group text-primary-foreground">
        {render ? (
          render
        ) : (
          <input
            className={cn(
              error && '!border-destructive',
              'peer text-base text-primary-foreground/70 flex w-full border-b-2 border-b-slate-600 focus:border-b-slate-400 outline-none py-4 bg-transparent file:border-0 file:text-sm file:font-medium placeholder:text-transparent disabled:cursor-not-allowed disabled:opacity-50',
              className,
              {
                'pl-12': !!icons?.[0],
                'pr-12': !!icons?.[1] || type === 'password',
              },
            )}
            ref={ref}
            {...{ ...props, value }}
          />
        )}
        <Label
          className={cn(labelClassName, {
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
Input.displayName = "Input";

const InputMask = React.forwardRef<
	HTMLInputElement,
	InputProps & {
		mask: string;
		showMask?: boolean;
		onChangeValue?: (v: string) => void;
	}
>(({ mask, error, showMask, onChangeValue, ...props }, ref) => {
	const { getInputProps } = useInputMask({
		mask: mask,
		placeholderChar: showMask ? undefined : "  ",
	});

	return (
		<Input
			error={error}
			ref={ref}
			onChange={() => {}}
			{...props}
			onKeyDown={(ev) => {
				const handle = getInputProps().onKeyDown;
				onChangeValue?.(ev.currentTarget.value);
				if (handle) handle(ev);
			}}
			value={
				getInputProps().value === mask.replaceAll("9", "  ")
					? ""
					: getInputProps().value
			}
		/>
	);
});
InputMask.displayName = "InputMask";

export { Input, InputMask };
