import { client } from "@/lib/sanity";
import { getFeaturedProductsQuery } from "@/lib/queries";
import { AIApp } from "@/types";
import FeaturedAppCard from "./FeaturedAppCard";
import FeaturedAppsSliderWrapper from "./FeaturedAppsSliderWrapper";
import AnimatedCardWrapper from "./AnimatedCardWrapper";

async function fetchData() {
	const data = await client.fetch(
		getFeaturedProductsQuery,
		{},
		{ cache: "no-store" }
	);
	return data as AIApp[]
}
export default async function FeaturedAppsSection() {
	const featuredProducts = await fetchData()

	return (
		<section
			className="py-32 dark:bg-[#0c1018] bg-gradient-to-b from-background to-gray-50 dark:to-gray-900/50"
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex justify-between items-end mb-16">
					<div
						className="max-w-2xl"
					>
						<h2
							className="text-4xl font-light tracking-tight mb-4"
						>
							Featured Agents
						</h2>
						<p
							className="text-xl text-muted-foreground font-light"
						>
							Discover our most innovative and powerful AI Agents
						</p>
					</div>
					{/*
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="ml-8"
          >
            <Link
              href="/marketplace"
              className="group flex items-center text-lg font-light text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
            >
              View all
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          */}
				</div>

				<div className=" flex flex-col gap-20 ">
					<div className="relative w-full">
						<FeaturedAppsSliderWrapper>
							{featuredProducts.map((product, index) => (
								<div
									key={index}
								>
									<AnimatedCardWrapper index={index} limit={3}>
										<FeaturedAppCard data={product} />
									</AnimatedCardWrapper>
									{/*
									*/}
								</div>
							))}
						</FeaturedAppsSliderWrapper>
					</div>
				</div>
			</div>
		</section>
	);
}
