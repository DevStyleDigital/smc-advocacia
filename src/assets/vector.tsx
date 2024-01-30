export const Vector = ({
	size = "95",
	variant = "default",
	...props
}: { className?: string; size?: string; variant?: "full" | "default" }) =>
	variant === "full" ? (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height="44"
			viewBox={`0 0 ${size} 45`}
			fill="none"
			{...props}
		>
			<title>{""}</title>
			<line y1="26.5" x2={size} y2="26.5" className="stroke-blue-600" />
			<line y1="16.5" x2={size} y2="16.5" className="stroke-blue-600" />
			<line
				x1="52.5"
				y1="44"
				x2="52.5"
				y2="2.18557e-08"
				className="stroke-blue-600"
			/>
			<line
				x1="42.5"
				y1="44"
				x2="42.5"
				y2="2.18557e-08"
				className="stroke-blue-600"
			/>
			<rect x="44" y="18" width="7" height="7" className="fill-blue-600" />
		</svg>
	) : (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height="45"
			viewBox={`0 0 ${size} 45`}
			fill="none"
			{...props}
		>
			<title>{""}</title>
			<rect x="21" y="18.3027" width="7" height="7" className="fill-blue-600" />
			<line y1="26.8027" x2={size} y2="26.8027" className="stroke-blue-600" />
			<line y1="16.8027" x2={size} y2="16.8027" className="stroke-blue-600" />
			<line
				x1="29.5"
				y1="44.3027"
				x2="29.5"
				y2="0.302734"
				className="stroke-blue-600"
			/>
			<line
				x1="19.5"
				y1="44.3027"
				x2="19.5"
				y2="0.302734"
				className="stroke-blue-600"
			/>
		</svg>
	);
