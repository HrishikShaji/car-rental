import { AIApp } from "@/types";
import dynamic from "next/dynamic";
import Image from "next/image";
import FeaturedAppModal from "./FeaturedAppModal";


interface Props {
	data: AIApp
}



export default function FeaturedAppCard({ data }: Props) {
	console.log("this is card", data)
	return (
		<div
			className="min-w-[400px] h-[600px] overflow-hidden group bg-white dark:bg-gray-800  rounded-3xl relative  transition-all cursor-pointer mx-2 "
		>

			{data.image ?
				<Image
					fill
					src={data.image}
					alt={data.name}
					className="w-full h-full object-cover rounded-t-xl  group-hover:scale-110 duration-500"
				/>
				: null}
			<div className="p-10 absolute z-10 top-0 h-full w-full text-black dark:text-white left-0 ">
				<h3 className="text-2xl font-semibold mb-2">{data.name}</h3>
				<p className="text-gray-800 dark:text-gray-200 text-md  line-clamp-2">{data.description}</p>
			</div>
			<div className="absolute bottom-4 right-4 z-20">
				<FeaturedAppModal data={data} />
			</div>
		</div>
	);
};
