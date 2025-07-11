import { client } from "@/lib/sanity";
import { getCategoriesQuery } from "@/lib/queries";
import { Category } from "@/data/categories";
import CategoryCard from "./CategoryCard";
import AnimatedCardWrapper from "./AnimatedCardWrapper";

async function fetchData() {
	const data = await client.fetch(
		getCategoriesQuery,
		{},
		{ cache: "no-store" }
	);
	return data.splice(0, 4) as Category[]
}
export default async function CategorySection() {

	const categories = await fetchData()

	return (
		<section
			className="py-32 bg-white dark:bg-black"
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div
					className="text-center mb-20"
				>
					<h2
						className="text-4xl font-light tracking-tight mb-6"
					>
						Browse by Category
					</h2>
					<p
						className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
					>
						Discover agents organized by their primary functionality
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{categories.map((category, index) => (
						<AnimatedCardWrapper index={index} key={index} limit={4}>
							<CategoryCard category={category} key={index} />
						</AnimatedCardWrapper>
					))}
				</div>
			</div>
		</section>
	);
}
