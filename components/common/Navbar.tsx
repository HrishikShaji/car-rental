"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, Settings } from "lucide-react";

const Navbar = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedTheme = localStorage.getItem("theme");
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			const initialDarkMode =
				savedTheme === "dark" || (!savedTheme && prefersDark);
			{/*
      setIsDarkMode(initialDarkMode);
      document.documentElement.classList.toggle("dark", initialDarkMode);
      */}
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (isDarkMode) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("theme", "light");
			}
		}
	}, [isDarkMode]);

	const menuItems = [
		{ label: "Agent Hub", path: "/ai-agents", isButton: false },
		// { label: "Industries", path: "#industries", isButton: false },
		// { label: "Learn More", path: "/learn-more",isButton: false },
		// { label: "Submit App", path: "/onboard", isButton: true },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<span className="text-xl font-light tracking-tight">
							ElevaticsAI
						</span>
					</Link>

					{/* Navigation and Controls */}
					<div className="flex items-center gap-6">
						{/* Desktop Navigation */}
						<div className="hidden lg:flex lg:items-center lg:space-x-6">
							{menuItems.map((item) => (
								<Link
									key={item.path}
									href={item.path}
									className={`text-base font-light transition-colors ${pathname === item.path
										? "text-primary"
										: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
										}`}
								>
									{item.label}
								</Link>
							))}
						</div>
						{/*
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            */}

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 z-50"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>

					{/* Mobile Navigation */}
					<div
						className={`fixed top-0 right-0 h-screen w-[300px] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
							} z-40`}
					>
						<div className="pt-20 px-4 space-y-4">
							{menuItems.map((item) =>
								item.isButton ? (
									<Link
										key={item.path}
										href={item.path}
										className="block w-full bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80 font-light backdrop-blur-sm transition-colors"
										onClick={() => setIsMenuOpen(false)}
									>
										{item.label}
									</Link>
								) : (
									<Link
										key={item.path}
										href={item.path}
										className={`block px-4 py-3 rounded-lg transition-colors ${pathname === item.path
											? "bg-primary/10 text-primary"
											: "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
											}`}
										onClick={() => setIsMenuOpen(false)}
									>
										{item.label}
									</Link>
								)
							)}
						</div>
					</div>

					{/* Overlay */}
					{isMenuOpen && (
						<div
							className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-30"
							onClick={() => setIsMenuOpen(false)}
						/>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
