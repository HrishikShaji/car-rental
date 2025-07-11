"use client"

import { itemVariants } from "@/lib/heroVariants";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type TextElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";


type AnimatedTextProps<T extends TextElements = "h1"> = {
	as?: T;
	children: ReactNode;
	className?: string;
	variants?: any;
	ref?: React.Ref<HTMLElement>;
} & Omit<HTMLMotionProps<T>, "ref">;

export default function AnimatedText<T extends TextElements = "h1">({
	as: Tag = "h1" as T,
	children,
	className = "",
	variants = itemVariants,
	...props
}: AnimatedTextProps<T>) {
	const MotionTag = motion[Tag] as React.ComponentType<HTMLMotionProps<T>>;

	return (
		<MotionTag
			variants={variants}
			initial="hidden"
			animate="visible"
			className={className}
			{...props}
		>
			{children}
		</MotionTag>
	);
}
