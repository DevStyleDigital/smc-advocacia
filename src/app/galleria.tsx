"use client";
import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import Image1 from "assets/galleria/image1.png";
import Image2 from "assets/galleria/image2.png";
import Image3 from "assets/galleria/image3.png";
import Image4 from "assets/galleria/image4.png";
import Image5 from "assets/galleria/image5.png";
import Image6 from "assets/galleria/image6.png";
import { Dialog, DialogContent, DialogTrigger } from "components/ui/dialog";
import Image from "next/image";
import { cn } from "utils/cn";

export const Galleria = () => {
	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
	return (
		<section
			className="max-w-7xl mx-auto px-4 flex-col gap-4 flex md:py-20 py-10 md:h-[1080px]"
			aria-hidden
		>
			<ul className="grid grid-cols-2 max-md:hidden md:grid-cols-3 grid-rows-3 md:grid-rows-4 gap-4 h-full w-full">
				{(
					[
						[Image1, "row-span-1 md:row-span-2"],
						[Image2, "col-span-1 md:col-span-2"],
						[Image3, ""],
						[Image4, "row-span-1 md:row-span-2"],
						[Image5, "row-span-1 md:row-span-2 col-span-1 md:col-span-2"],
						[Image6, ""],
					] as const
				).map(([image, className], i) => (
					<Dialog key={i.toString()}>
						<DialogTrigger asChild>
							<li
								className={cn(
									className,
									"cursor-pointer overflow-hidden group",
								)}
							>
								<Image
									src={image}
									alt=""
									className="w-full h-full object-cover group-hover:scale-105 transition-all"
								/>
							</li>
						</DialogTrigger>
						<DialogContent className="max-w-[90vw] max-h-[90dvh] p-0 overflow-hidden border-none">
							<Image
								src={image}
								alt=""
								className="w-full h-full object-cover rounded-xl"
							/>
						</DialogContent>
					</Dialog>
				))}
			</ul>
			<Carousel
				plugins={[plugin.current]}
				className="w-full md:hidden"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{[Image1, Image2, Image3, Image4, Image5, Image6].map(
						(image, index) => (
							<CarouselItem
								className="pl-1 md:basis-1/2 lg:basis-1/3"
								key={index.toString()}
							>
								<Image priority src={image} alt="" className="w-full h-full" />
							</CarouselItem>
						),
					)}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
				<CarouselDots />
			</Carousel>
		</section>
	);
};
