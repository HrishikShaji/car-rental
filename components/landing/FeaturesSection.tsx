import React, { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import { getFeaturesQuery } from "@/lib/queries";
import { Feature } from "@/data/features";
import FeatureCard from "./FeatureCard";
import AnimatedCardWrapper from "./AnimatedCardWrapper";

interface FeatureSectionProps {
	title: string;
	description: string;
}

async function fetchData() {
	const data = await client.fetch(
		getFeaturesQuery,
		{},
		{ cache: "no-store" }
	);
	return data as Feature[]
}
export default async function FeaturesSection({
	title,
	description,
}: FeatureSectionProps) {
	const features = await fetchData()

	return (
		<div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 stagger-container">
			<div
				className="text-center mb-12"
			>
				<h2
					className="text-4xl font-light tracking-tight mb-4"
				>
					{title}
				</h2>
				<p
					className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
				>
					{description}
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{features.map((feature, index) => (
					<AnimatedCardWrapper limit={3} key={index} index={index}>
						<FeatureCard feature={feature} />
					</AnimatedCardWrapper>
				))}
			</div>
		</div>
	);
};

