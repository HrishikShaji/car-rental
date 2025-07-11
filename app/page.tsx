import CallToActionSection from "@/components/landing/CallToActionSection";
import CategorySection from "@/components/landing/CategorySection";
import EmbeddedAppsSection from "@/components/landing/EmbeddedAppsSection";
import FeaturedAppsSection from "@/components/landing/FeaturedAppsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import IndustrySection from "@/components/landing/IndustrySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elevatics AI ",
  description: "Chat with AI-powered researchers using IResearcherChat. Get insights, generate reports, and explore research topics effortlessly.",
  keywords: ["AI Research", "Chatbot", "Research Assistant", "AI-powered Chat"],
  openGraph: {
    title: "Elevatics AI | IResearcher",
    description: "An advanced AI-powered research chatbot designed to assist with generating reports and insights.",
    url: "https://elevaticsai.com",
    siteName: "IResearcher",
    images: [
      {
        url: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 1200,
        height: 630,
        alt: "Elevatics AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevatics AI",
    description: "Chat with AI-powered researchers using IResearcherChat.",
    images: ["https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
};

export default async function Home() {
  return (
    <div>
      <HeroSection
        title="The Ultimate All-in-One AI Platform – Right at Your Fingertips."
        subtitle="Streamline your workflows with our powerful AI suite. Create visual insights, automate research, and drive data-driven decisions in one intuitive platform."
        ctaText="Explore AI Apps"
        ctaLink="/ai-tools"
      />
      <FeaturedAppsSection />
      <IndustrySection />
      <CategorySection />
      <EmbeddedAppsSection />
      <FeaturesSection
        title="Designed for Excellence"
        description="Our AI applications are built with attention to detail, focusing on both functionality and user experience."
      />
      <CallToActionSection />
    </div>
  )
}
