import HeroDemoPopup from "./HeroDemoPopup";

export default function CallToActionSection() {
	return (
		<section
			className="py-32 bg-white dark:bg-[#0c1018] relative overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="relative rounded-3xl overflow-hidden">
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 mix-blend-multiply" />
						<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent dark:from-black opacity-70" />
					</div>

					<div className="relative py-24 px-8 md:px-16 flex flex-col items-center text-center">
						<h2
							className="text-5xl font-light tracking-tight mb-6 max-w-3xl">
							Ready to Transform Your Workflow?
						</h2>
						<p
							className="text-xl text-muted-foreground font-light mb-12 max-w-2xl">
							Explore our collection of AI agents and discover how they can
							enhance your productivity and creativity.
						</p>
						<div
						>
							<HeroDemoPopup />

						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
