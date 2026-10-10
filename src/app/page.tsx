import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { OfficeLocation } from "@/components/sections/OfficeLocation";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Solving Process (Problem vs Direct Solution) */}
      <ProblemSolution />

      {/* 3. About Us & Government Licenses */}
      <About />

      {/* 4. Specialized Services */}
      <Services />

      {/* 5. How to Get Services (Step-by-Step Onboarding) */}
      <ProcessSteps />

      {/* 6. Client Feedback & Verified Reviews */}
      <Testimonials />

      {/* 7. Frequently Asked Questions */}
      <Faq />

      {/* 8. Physical Office Locations Network */}
      <OfficeLocation />

      {/* 9. Contact Form & Quick Consultation */}
      <Contact />
    </div>
  );
}
