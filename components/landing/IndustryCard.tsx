import { FullIndustry } from "@/types";
import { Check, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Props {
	industry: FullIndustry;
}

export default function IndustryCard({ industry }: Props) {
	return (
		<div
			className="bg-white w-full dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl"
		>
			<div className="grid lg:grid-cols-2 gap-8 p-8">
				<div
					className="flex flex-col gap-3  mt-16"
				>
					<h3
						className="text-2xl font-light mb-4"
					>
						{industry.title}
					</h3>
					<p
						className="text-muted-foreground mb-6"
					>
						{industry.description}
					</p>
					<ul className="space-y-4 mb-8">
						{industry?.results?.map(
							(result, index) => (
								<li
									key={index}
									className="flex items-center gap-3"
								>
									<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
										<Check className="w-4 h-4 text-primary" />
									</div>
									<span>{result}</span>
								</li>
							)
						)}
					</ul>
					<div
						className="flex items-center gap-4"
					>

						<Link
							href={`/industry/${industry._id}`}
							className="flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors"
						>
							<ExternalLink className="w-5 h-5" />
							Learn More
						</Link>
					</div>
				</div>
				<div
					className="relative aspect-[4/3] rounded-xl overflow-hidden"
				>
					<img
						src={industry.heroImage}
						alt={`${industry.heroTitle} Dashboard`}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>

	)
}
