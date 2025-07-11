import { Category } from "@/data/categories"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import * as Icons from "lucide-react"

interface Props {
	category: Category
}

export default function CategoryCard({ category }: Props) {
	console.log("this is category", category)

	const IconComponent = Icons[
		category.icon as keyof typeof Icons
	] as React.ElementType;
	return (
		<div
		>
			<Link
				href={`/ai-tools`}
				className="group relative overflow-hidden h-[350px] block"
			>
				<div className="p-8 bg-gray-100 dark:bg-gray-900 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl h-full flex flex-col">
					<div
						className="mb-auto"
					>
						<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
							<IconComponent />
						</div>
						<h3 className="text-2xl font-light mb-3 h-16">
							{category.name}
						</h3>
						<p className="text-muted-foreground line-clamp-2 font-light min-h-[48px]">
							{category.description}
						</p>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-sm font-medium bg-primary/5 px-3 py-1 rounded-full">
							{category.count} products
						</span>
						<MoveRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1" />
					</div>
				</div>
			</Link>
		</div>

	)
}
