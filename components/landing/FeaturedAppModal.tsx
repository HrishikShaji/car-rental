"use client"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AIApp } from "@/types";
import { ArrowRight } from "lucide-react";

interface Props {
	data: AIApp
}

const sampleImages = ["/assets/17.png", "/assets/16.png", "/assets/18.png"]

export default function FeaturedAppModal({ data }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="rounded-[40px] p-2 pl-4  text-black flex gap-3 items-center">
					<div className="flex items-center justify-center size-10 bg-black text-white rounded-full">
						<ArrowRight size={20} />
					</div>
				</button>
			</DialogTrigger>
			<DialogContent className="max-w-6xl  rounded-2xl py-20 px-0 bg-background border-0">
				<div className='max-h-[70vh] custom-scrollbar overflow-y-auto px-20 max-w-6xl '>

					<div>
						<h2 className="text-4xl font-[400] mb-2">{data.name}</h2>
						<p className="text-xl text-gray-700  mb-8">{data.description}</p>
					</div>
					<div className="flex flex-col gap-10">

						{/* @ts-ignore */}
						{data?.content?.map((content, index) => (
							<div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-3xl px-40 py-20 relative">
								<div className="mb-8 max-w-3xl mx-auto">
									<p className="text-gray-600 dark:text-gray-200 text-2xl  leading-tight">
										{content.description}
									</p>
								</div>
								<div className="aspect-video w-full max-w-4xl mx-auto relative overflow-hidden rounded-2xl">
									<img
										src={content.image}
										alt={`$ - Image ${index + 1}`}
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
									/>
								</div>
							</div>
						))}

						{/*
            <div className="bg-gray-100 rounded-3xl px-40 py-20 relative">
              <div className="mb-8 max-w-3xl mx-auto">
                <p className="text-gray-600 text-2xl font-semibold leading-tight">
                  {data.name}
                </p>
              </div>
              <div className="aspect-video w-full max-w-4xl mx-auto relative overflow-hidden rounded-2xl">
                <img
                  src="/assets/elevatics-graph.png"
                  alt={`${data.name} `}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            */}
					</div>
				</div>
			</DialogContent>
		</Dialog>

	)
}
