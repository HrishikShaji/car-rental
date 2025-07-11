import { CarouselItem } from "@/components/ui/carousel";
import { EmbeddedAICategory } from "@/data/embeddedAI";
import * as Icons from "lucide-react"
import EmbeddedAppModal from "./EmbeddedAppModal";


interface Props {
	category: EmbeddedAICategory;
}

export default function EmbeddedAppCard({ category }: Props) {

	const IconComponent = Icons[
		category.icon as keyof typeof Icons
	] as Icons.LucideIcon;
	return (
		<div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-500 h-[280px] flex flex-col border border-gray-100 dark:border-gray-800">

			<div className="flex-1">
				<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
					<IconComponent className="w-6 h-6 text-primary" />
				</div>

				<h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
					{category.title}
				</h3>
				<p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
					{category.description}
				</p>
			</div>

			<div className="flex justify-end mt-4">
				<EmbeddedAppModal category={category} />
			</div>
		</div>
	)
}
