import { Feature } from "@/data/features";
import * as Icons from "lucide-react"

interface Props {
	feature: Feature
}

export default function FeatureCard({ feature }: Props) {
	const IconComponent = Icons[
		feature.icon as keyof typeof Icons
	] as React.ElementType;
	return (
		<div
			key={feature.id}
			className={`group p-6 rounded-xl transition-all duration-300 hover-lift h-[150px] flex flex-col ${feature.highlighted
				? "border-primary/30 bg-primary/5"
				: "border border-border"
				}`}
		>
			<div
				className="flex items-start space-x-4"
			>
				<div
					className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${feature.highlighted
						? "bg-primary text-primary-foreground"
						: "bg-secondary text-secondary-foreground"
						}`}
				>
					{IconComponent && <IconComponent className="w-6 h-6" />}
				</div>
				<div className="flex-1">
					<h3
						className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors h-7"
					>
						{feature.title}
					</h3>
					<p
						className="text-muted-foreground text-sm line-clamp-4 min-h-[80px]"
					>
						{feature.description}
					</p>
				</div>
			</div>
		</div>
	)
}
