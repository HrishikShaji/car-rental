"use client"

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
	index: number;
	children: ReactNode;
	limit: number;
}

export default function AnimatedCardWrapper({ index, children, limit }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-20%" });
	const shouldAnimate = index < limit;

	return (
		<motion.div
			ref={ref}
			initial={shouldAnimate ? { opacity: 0, y: 100, scale: 0.95 } : false}
			animate={
				shouldAnimate
					? isInView
						? { opacity: 1, y: 0, scale: 1 }
						: { opacity: 0, y: 100, scale: 0.95 }
					: false
			}
			transition={
				shouldAnimate
					? {
						duration: 0.8,
						delay: 0.3 * index,
						ease: "easeOut",
					}
					: undefined
			}
		>
			{children}
		</motion.div>
	);
}
