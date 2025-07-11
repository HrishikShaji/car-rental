import * as React from "react"
import EmbeddedAppsCarouselWrapper from "./EmbeddedAppsCarouselWrapper"
import { client } from "@/lib/sanity"
import { getEmbeddedAisQuery } from "@/lib/queries"
import { EmbeddedAICategory } from "@/data/embeddedAI"
import EmbeddedAppCard from "./EmbeddedAppCard"
import AnimatedCardWrapper from "./AnimatedCardWrapper"
import { CarouselItem } from "@/components/ui/carousel"

async function fetchData() {
	const data = await client.fetch(
		getEmbeddedAisQuery,
		{},
		{ cache: "no-store" }
	);
	return data as EmbeddedAICategory[]
}
export default async function EmbeddedAppsSection() {
	const items = await fetchData()
	return (
		<section
			className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900/50 overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div
					className="text-center mb-20"
				>
					<h2
						className="text-4xl font-light tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
					>
						Embedded AI for Edge Hardware
					</h2>
					<p
						className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
					>
						Powerful AI capabilities optimized for edge devices, enabling
						real-time processing and intelligent decision-making
					</p>
				</div>

				<div
					className="relative p-5"
				>
					<div className="w-full flex justify-center">

						<EmbeddedAppsCarouselWrapper>
							{[...items, ...items].map((category, index) => (
								<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-10  p-5 bg-transparent">
									<AnimatedCardWrapper index={index} key={index} limit={3}>
										<EmbeddedAppCard category={category} key={index} />
									</AnimatedCardWrapper>
								</CarouselItem>
							))}

						</EmbeddedAppsCarouselWrapper>

					</div>
				</div>
			</div>
		</section>

	)
}
