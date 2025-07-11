import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import HeroTypewriterEffect from "./HeroTypewriterEffect";
import HeroDemoPopup from "./HeroDemoPopup";
import HeroSearchBar from "./HeroSearchBar";
import HeroWrapper from "./HeroWrapper";
import AnimatedText from "./AnimatedText";

interface HeroProps {
	title: string;
	subtitle: string;
	ctaText: string;
	ctaLink: string;
}

const HeroSection: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {

	return (
		<div className="w-full flex justify-center items-center">
			<div
				className="absolute inset-0 bg-gradient-to-b from-transparent to-background"
			/>
			<div className="absolute inset-0 overflow-hidden">
				<div
					className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
				/>
				<div
					className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-indigo-400/20 to-pink-400/20 blur-3xl"
				/>
				<div
					className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-400/20 to-cyan-400/20 blur-3xl"
				/>
			</div>
			<HeroWrapper>
				<div
					className=" h-12 flex items-center justify-center"
				>
					<HeroTypewriterEffect />
				</div>

				<AnimatedText
					className="text-4xl md:text-5xl font-light  leading-[40px] tracking-tight flex flex-col gap-3 bg-clip-text text-center"
					as="h1"
				>
					Empowering Businesses with <br className="mb-4" /><span className="pt-5">AI Agents</span>
				</AnimatedText>

				<AnimatedText
					as="p"
					className="text-xl md:text-xl text-muted-foreground text-center max-w-3xl mx-auto font-light"
				>
					{subtitle}
				</AnimatedText>

				<HeroSearchBar />
				<div
					className="flex flex-col sm:flex-row items-center justify-center gap-6"
				>
					<Link
						href={ctaLink}
						className="group inline-flex items-center justify-center px-8 py-4 bg-primary/80 backdrop-blur-sm text-primary-foreground rounded-xl font-light text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
					>
						{ctaText}
						<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
					</Link>
					<HeroDemoPopup />
				</div>
			</HeroWrapper>
		</div>
	);
};

export default HeroSection;
