import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FullIndustry } from "@/types";
import IndustryCard from "./IndustryCard";
import IndustrySliderWrapper from "./IndustrySliderWrapper";

interface Props {
	industries: FullIndustry[]
}

export default function IndustryTabs({ industries }: Props) {
	return (
		<Tabs defaultValue={industries[0].title} className="w-full">
			<TabsList className="w-full bg-transparent">
				<IndustrySliderWrapper>
					{industries.map((industry, i) => (
						<TabsTrigger
							className={`relative px-4 min-w-[350px] w-full text-xl h-20  justify-center items-center rounded-2xl transition-all duration-300  flex flex-col hover:scale-[1.02]
bg-gray-100 dark:bg-gray-900 hover:bg-primary/5 dark:hover:bg-primary/10 data-[state=active]:dark:bg-gray-900 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:scale-[1]
`}

							key={i} value={industry.title}>{industry.heroTitle}</TabsTrigger>
					))}
				</IndustrySliderWrapper>
			</TabsList>
			<div className="mt-10">
				{industries.map((industry, i) => (
					<TabsContent value={industry.title} key={i}>
						<IndustryCard industry={industry} />
					</TabsContent>
				))}
			</div>
		</Tabs>

	)
}
