"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/heroVariants";

interface Props {
	children: ReactNode;
}


export default function HeroWrapper({ children }: Props) {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className="relative max-w-5xl  min-h-screen flex flex-col gap-8 items-center justify-center overflow-hidden pt-20"
		>
			{children}
		</motion.div>
	)
}
