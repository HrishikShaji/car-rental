"use client"

import React from "react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { EmbeddedAICategory } from "@/data/embeddedAI";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Props {
	category: EmbeddedAICategory;
}

export default function EmbeddedAppModal({ category }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button
					className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
					aria-label="Show more details"
				>
					<Icons.Plus className="w-4 h-4" />
				</button>
			</DialogTrigger>
			<DialogContent className="max-w-2xl dark:bg-gray-900 rounded-2xl p-10 bg-background border-0">
				<div className="flex justify-between items-start mb-6">
					<div className="flex items-center gap-4">
						{(() => {
							const IconComponent = Icons[
								category.icon as keyof typeof Icons
							] as LucideIcon;
							return <IconComponent className="w-8 h-8 text-primary" />;
						})()}
						<h2 className="text-2xl font-medium">{category.title}</h2>
					</div>
				</div>
				<div className="space-y-6">
					<p className="text-gray-600 dark:text-gray-300">
						{category.description}
					</p>
					<div className="space-y-4">
						<h3 className="text-lg font-medium">Capabilities</h3>
						<ul className="grid gap-3">
							{category.capabilities.map((capability, index) => (
								<li key={index} className="flex items-start gap-3">
									<div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
										<Icons.Check className="w-3 h-3 text-primary" />
									</div>
									<div>
										<h4 className="text-gray-900 dark:text-gray-100 font-medium">
											{capability.name}
										</h4>
										<p className="text-gray-600 dark:text-gray-300 text-sm">
											{capability.description}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
