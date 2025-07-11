
"use client"

import * as React from "react"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface Props {
	children: React.ReactNode;
}

export default function EmbeddedAppsCarouselWrapper({ children }: Props) {
	return (
		<div className="w-full flex justify-center">

			<Carousel
				opts={{
					align: "start",
					loop: true,
					slidesToScroll: 1,
				}}
				plugins={[Autoplay({ delay: 2000 })]}
				className="w-full max-w-[75%]  py-5"
			>
				<CarouselContent>
					{children}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
