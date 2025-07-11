"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
	children: React.ReactNode;
}

export default function IndustrySliderWrapper({ children }: Props) {
	const sliderRef = React.useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (sliderRef.current) {
			const scrollAmount = 300;
			sliderRef.current.scrollLeft +=
				direction === "left" ? -scrollAmount : scrollAmount;
		}
	};

	return (
		<div className="relative w-full flex gap-5 items-center">
			<button
				onClick={() => scroll("left")}
				className="bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>
			<div
				ref={sliderRef}
				className="overflow-x-auto scroll-smooth mb-4 hide-scrollbar"
				style={{
					scrollbarWidth: "none",
					WebkitOverflowScrolling: "touch",
				}}
			>
				<div className="flex gap-4 ">
					{children}
				</div>
			</div>

			<button
				onClick={() => scroll("right")}
				className="bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
			>
				<ChevronRight className="w-6 h-6" />
			</button>
		</div>
	)
}
