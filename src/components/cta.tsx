"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const CTA = ({
	variant = "default",
}: {
	variant?: "default" | "secondary";
}) => {
	return (
		<Button
			variant={variant}
			size="lg"
			className="w-fit group transition-all relative overflow-hidden sm:px-12 py-8"
			onClick={() => {
				window.open(
					`https://wa.me/15991198369?text=${encodeURIComponent(
						"Olá vim do site!",
					)}`,
					"_blank",
				);
			}}
		>
			<ArrowRight className="group-hover:translate-x-0 mr-2 w-0 group-hover:opacity-100 opacity-0 -translate-x-8 group-hover:w-6 h-6 transition-all" />
			<span className="translate-x-0 transition-all [font-variant:small-caps] text-xl whitespace-normal text-center">
				Fale com um especialista
			</span>
			<ArrowRight className="group-hover:translate-x-8 ml-2 group-hover:w-0 group-hover:opacity-0 opacity-100 translate-x-0 w-6 h-6 transition-all" />
		</Button>
	);
};
