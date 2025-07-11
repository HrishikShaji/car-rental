"use client"

import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroSearchBar() {
	const [searchQuery, setSearchQuery] = useState("");
	const router = useRouter()

	const url = "http://localhost:3000"
	const serverUrl = "https://elevaticsai.com"

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			router.push(`${serverUrl}?q=${searchQuery}`);
		}
	};

	return (
		<div className="relative w-[80%] mx-auto mb-16">
			<div className="relative group">
				{/* Enhanced Glassmorphism Effect */}
				<div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10 dark:from-white/5 dark:via-white/10 dark:to-white/5 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

				<form onSubmit={handleSearch} className="relative flex items-center">
					<div className="absolute left-6 text-muted-foreground/70">
						<Search className="w-6 h-6" />
					</div>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="What kind of AI agent are you looking for?"
						className="w-full pl-16 pr-36 py-6 bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/10 shadow-xl font-light text-lg placeholder:text-muted-foreground/70"
					/>

					<button
						type="submit"
						className="absolute right-3 bg-primary/80 backdrop-blur-sm text-primary-foreground px-8 py-3 rounded-xl font-light text-lg hover:bg-primary/90 transition-colors duration-300"
					>
						Search
					</button>
				</form>
			</div>
		</div>
	)
}
