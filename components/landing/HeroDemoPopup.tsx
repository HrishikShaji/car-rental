
"use client";

import React from "react";
import {
	MessageCircle,
	X,
	Pen,
	Layout,
	Search,
	FileText,
	Target,
	Sparkles,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";

// Zod schema for form validation
const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters" }),
	email: z.string().email({ message: "Invalid email address" }),
	phone: z.string().optional(),
	project: z
		.string()
		.min(10, { message: "Project description must be at least 10 characters" }),
	services: z
		.array(z.string())
		.min(1, { message: "Please select at least one service" }),
});

type FormValues = z.infer<typeof formSchema>;

interface Service {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const services: Service[] = [
	{
		icon: <Pen className="w-6 h-6" />,
		title: "AI App Development",
		description: "Want to develop AI powered Software App",
	},
	{
		icon: <Layout className="w-6 h-6" />,
		title: "Model Training",
		description: "Want to explore AI opportunity and Integartion",
	},
	{
		icon: <Search className="w-6 h-6" />,
		title: "Free Technical Consultation",
		description: "Want to develop custom model or fine tune existing model",
	},
	{
		icon: <FileText className="w-6 h-6" />,
		title: "Partnership",
		description: "Looking for Investment or Partnership",
	},
];

{
	/*
	{
	  icon: <Target className="w-6 h-6" />,
	  title: "Technical Support",
	  description: "Need help of Elevatics Apps"
	},
	{
	  icon: <Sparkles className="w-6 h-6" />,
	  title: "Contact Sales",
	  description: "Interested in Elevatics product and Services"
	}
      
      
      */
}

const HeroDemoPopup = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			project: "",
			services: [],
		},
	});

	const selectedServices = watch("services");

	const toggleService = (title: string) => {
		const currentServices = selectedServices.includes(title)
			? selectedServices.filter((s) => s !== title)
			: [...selectedServices, title];
		setValue("services", currentServices);
	};

	const SERVER_URL = "https://www.elevaticsai.com/api/demos/submit";

	const onSubmit = async (data: FormValues) => {
		try {
			const response = await axios.post(SERVER_URL, data, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.data.success) {
				toast.success("Form submitted successfully!");
				reset();
			} else {
				toast.error(response.data.message || "Failed to submit form");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error("An error occurred while submitting the form");
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 dark:bg-white/5 backdrop-blur-sm text-foreground rounded-2xl font-light text-lg hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-300 border border-white/10 dark:border-white/5">
					Book a Demo
				</button>
			</DialogTrigger>
			<DialogContent className="max-w-6xl dark:bg-gray-900 rounded-2xl p-0 px-10 bg-background border-0">
				<div className="flex justify-between items-start p-6 border-b border-border">
					<div>
						<DialogTitle className="text-2xl font-light text-foreground">
							Contact Us
						</DialogTitle>
						<DialogDescription className="text-muted-foreground">
							Tell us about your project
						</DialogDescription>
					</div>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="pb-2 px-6">
					<div className="flex gap-12">
						{/* Left Column - Contact Info */}
						<div className="space-y-2 w-[40%]">
							<h3 className="text-xl font-light mb-6 text-foreground">
								{`Tell us a little more about yourself and we'll get the ball rolling.`}
							</h3>

							<div>
								<label className="block text-sm font-medium mb-2 text-foreground">
									Name
								</label>
								<input
									{...register("name")}
									className="w-full px-4 py-3 rounded-lg dark:bg-gray-900 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-muted-foreground"
									placeholder="Your name"
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-500">
										{errors.name.message}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-medium mb-2 text-foreground">
									Email
								</label>
								<input
									{...register("email")}
									className="w-full px-4 py-3 rounded-lg dark:bg-gray-900 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-muted-foreground"
									placeholder="you@company.com"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">
										{errors.email.message}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-medium mb-2 text-foreground">
									Phone number
								</label>
								<input
									{...register("phone")}
									className="w-full px-4 py-3 rounded-lg dark:bg-gray-900 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-muted-foreground"
									placeholder="+1 (555) 000-0000"
								/>
								{errors.phone && (
									<p className="mt-1 text-sm text-red-500">
										{errors.phone.message}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-medium mb-2 text-foreground">
									Tell us about the project...
								</label>
								<textarea
									{...register("project")}
									className="w-full px-4 py-3 rounded-lg dark:bg-gray-900 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-muted-foreground"
									rows={4}
									placeholder="What's your project about?"
								/>
								{errors.project && (
									<p className="mt-1 text-sm text-red-500">
										{errors.project.message}
									</p>
								)}
							</div>
						</div>

						{/* Right Column - Services */}
						<div>
							<h3 className="text-xl font-light mb-6 text-foreground">
								{`                We'd love to collaborate! Let us know what you're after.`}
							</h3>

							<div className="grid grid-cols-2 gap-4">
								{services.map((service) => (
									<button
										key={service.title}
										type="button"
										onClick={() => toggleService(service.title)}
										className={`p-4 rounded-xl border-2 text-left transition-colors ${selectedServices.includes(service.title)
											? "border-primary bg-primary/10 dark:bg-primary/20"
											: "border-border hover:border-primary/50"
											}`}
									>
										<div
											className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${selectedServices.includes(service.title)
												? "bg-primary/20 dark:bg-primary/30 text-primary"
												: "bg-muted text-muted-foreground"
												}`}
										>
											{service.icon}
										</div>
										<h4 className="font-medium mb-1 text-foreground">
											{service.title}
										</h4>
										<p className="text-sm text-muted-foreground">
											{service.description}
										</p>
									</button>
								))}
							</div>
							{errors.services && (
								<p className="mt-2 text-sm text-red-500">
									{errors.services.message}
								</p>
							)}
						</div>
					</div>

					<div className="flex justify-end ">
						<button
							type="submit"
							disabled={isSubmitting}
							className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? "Submitting..." : "Submit"}
						</button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default HeroDemoPopup;
