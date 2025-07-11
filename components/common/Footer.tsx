"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
	return (
		<footer className="border-t dark:bg-gray-900/70 border-border">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-1 md:col-span-2">
						<Link href="/" className="text-xl font-semibold">
							Elevatics AI
						</Link>
						<p className="mt-4 text-sm text-muted-foreground max-w-md">
							{` Experience AI like never before – sleek, smart, and game-changing. Dive into the tech that’s rewriting the rules.`}

						</p>
						<div className="mt-6 flex space-x-4">
							{/*
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              */}
							<Link
								target="_blank" rel="noopener noreferrer"
								href="https://x.com/ElevaticsAI"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Twitter"
							>
								<Twitter className="h-5 w-5" />
							</Link>
							<Link
								target="_blank" rel="noopener noreferrer"
								href="https://www.linkedin.com/company/elevatics-ai/"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-5 w-5" />
							</Link>
							{/*
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              */}
						</div>
					</div>

					<div>
					</div>

					<div>
						<h3 className="text-sm font-semibold tracking-wider uppercase">
							Resources
						</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<Link
									href="/about"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									About
								</Link>
							</li>
							{/*
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
              </li>
              */}
						</ul>
					</div>

				</div>

				<div className="mt-12 pt-8 border-t border-border">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-muted-foreground">
							© 2025 Elevatics AI by Gauss Moto Inc. All rights reserved.
						</p>
						<div className="mt-4 md:mt-0">
							<div className="flex items-center space-x-3">
								<Link
									href="/terms"
									className="text-xs text-muted-foreground hover:text-foreground transition-colors"
								>
									Terms of Service
								</Link>
								<span className="text-muted-foreground">•</span>
								<Link
									href="/privacy"
									className="text-xs text-muted-foreground hover:text-foreground transition-colors"
								>
									Privacy Policy
								</Link>
								<span className="text-muted-foreground">•</span>
								<Link
									href="/cookies"
									className="text-xs text-muted-foreground hover:text-foreground transition-colors"
								>
									Cookie Policy
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
