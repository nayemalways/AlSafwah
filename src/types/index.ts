import { ReactNode } from "react";

export interface ServiceItem {
  id: string;
  title: string;
  category: "Hajj & Umrah" | "Air Ticket" | "Visa Rescue" | "Custom";
  description: string;
  features: string[];
  badge?: string;
  iconName: string;
  popular?: boolean;
}

export interface ProblemSolutionItem {
  id: string;
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  solutionDesc: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  deliverable: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  serviceUsed: string;
  quote: string;
  rating: number;
  avatar: string;
  verified: boolean;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Visa" | "Air Ticket" | "Hajj & Umrah" | "General";
}

export interface OfficeLocationItem {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  isHeadquarter?: boolean;
  whatsapp: string;
  mapEmbedUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
