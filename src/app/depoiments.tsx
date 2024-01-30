"use client";
import { Vector } from "assets/vector";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { useRef } from "react";
import { cn } from "utils/cn";
import depoiments from "@root/depoiments.json";

export const Depoiments = () => {
	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
	return (
		<section className="sm:py-40 py-16 gradient-bg-invert px-4 text-white">
			<div className="max-w-7xl mx-auto flex-col gap-4 flex scroll-mt-20">
				<div className="flex-col gap-4 flex text-center items-center">
					<h2>Veja o que nossos clientes tem a dizer</h2>
					<Vector variant="full" />
				</div>
				<Carousel
					plugins={[plugin.current]}
					className="w-full mt-20"
					onMouseEnter={plugin.current.stop}
					onMouseLeave={plugin.current.reset}
				>
					<CarouselContent>
						{depoiments.map((depoiment, index) => (
							<CarouselItem
								className={cn(
									"pl-6 md:basis-1/3 sm:basis-1/2 lg:basis-1/4 flex gap-5",
									index % 2 === 0 ? "flex-col" : "flex-col-reverse",
								)}
								key={index.toString()}
							>
								<div
									className={cn(
										"bg-secondary py-12 px-8 space-x-2 h-full",
										index % 2 === 0 ? "rounded-bl-3xl" : "rounded-tl-3xl",
									)}
								>
									<Quote className="w-10 h-10 mb-4 fill-blue-600 stroke-none" />
									<blockquote className="opacity-70 font-normal line-clamp-[9]">
										{depoiment.depoiment}
									</blockquote>
								</div>
								<div className="flex items-center space-x-4">
									<Avatar>
										<AvatarImage src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
										<AvatarFallback>A</AvatarFallback>
									</Avatar>
									<div className="flex flex-col -space-y-2 max-w-52">
										<h4 className="text-2xl font-bold truncate capitalize">
											{depoiment.nome.toLowerCase()}
										</h4>
										<p className="truncate text-yellow-400">
											{Array.from({ length: depoiment.stars }, () => "★")}
										</p>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};
