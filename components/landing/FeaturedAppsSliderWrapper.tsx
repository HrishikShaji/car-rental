"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function FeaturedAppsSliderWrapper({ children }: Props) {
	const sliderRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (sliderRef.current) {
			const scrollAmount = 300;
			sliderRef.current.scrollLeft +=
				direction === "left" ? -scrollAmount : scrollAmount;
		}
	};

	return (
		<div className="relative w-full">
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

			<div className="flex justify-end gap-2">
				<button
					onClick={() => scroll("left")}
					className="bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>
				<button
					onClick={() => scroll("right")}
					className="bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
				>
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}
