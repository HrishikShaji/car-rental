import { fullIndustriesQuery } from "@/lib/queries";
import { client } from "@/lib/sanity";
import { FullIndustry } from "@/types";
import IndustryTabs from "./IndustryTabs";

async function fetchData() {
	const data = await client.fetch(
		fullIndustriesQuery,
		{},
		{ cache: "no-store" }
	);
	return data as FullIndustry[]
}



export default async function IndustrySection() {

	const data = await fetchData()
	return (
		<section className="py-32 dark:bg-[#0c1018] bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div
					className="mb-16"
				>
					<div
						className="text-center mb-20"
					>
						<h2
							className="text-4xl font-light tracking-tight mb-6"
						>
							Industry Solutions
						</h2>
						<p
							className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
						>
							Discover how Elevatics AI transforms workflows across different
							industries
						</p>
					</div>
					<IndustryTabs industries={data} />
				</div>
			</div>
		</section>

	)
}
