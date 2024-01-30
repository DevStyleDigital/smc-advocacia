import { forwardRef } from "react";
import { cn } from "utils/cn";

const Label = forwardRef<
	HTMLLabelElement,
	{ peerText?: boolean } & React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, peerText = false, ...props }, ref) => (
	<label
		ref={ref}
		className={cn(
			className,
			"absolute pointer-events-none text-base top-1/2 left-0 -translate-y-1/2 peer-focus:top-0 transition-all duration-75",
			{
				"peer-content-text:top-0": peerText,
				"peer-content:top-0": !peerText,
			},
		)}
		{...props}
	/>
));
Label.displayName = "Label";

export { Label };
