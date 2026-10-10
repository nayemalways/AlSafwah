import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "আল-সাফওয়াহ ট্রাভেলস | নিশ্চিত হজ ও ওমরাহ ভিসা এবং এয়ার টিকিট সল্যুশন",
  description:
    "ধর্ম বিষয়ক মন্ত্রণালয় ও সৌদি হজ মন্ত্রণালয় অনুমোদিত এজেন্সি (লাইসেন্স নং ১৪৩২)। নুসুক কোটায় নিশ্চিত হজ ও ওমরাহ ভিসা, সুলভ মূল্যে এয়ার টিকিট এবং হারামের নিকটবর্তী হোটেল সেবা।",
  keywords: [
    "হজ এজেন্সি ঢাকা",
    "ওমরাহ ভিসা বাংলাদেশ",
    "নুসুক হজ কোটা",
    "এয়ার টিকিট বুকিং",
    "হজ প্যাকেজ ২০২৫",
    "আইএটিএ ট্রাভেল এজেন্ট",
  ],
  authors: [{ name: "আল-সাফওয়াহ ট্রাভেলস লিমিটেড" }],
  openGraph: {
    title: "আল-সাফওয়াহ ট্রাভেলস | নিশ্চিত হজ ও ওমরাহ ভিসা এবং এয়ার টিকিট সল্যুশন",
    description:
      "ধর্ম বিষয়ক মন্ত্রণালয় ও সৌদি হজ মন্ত্রণালয় অনুমোদিত এজেন্সি। নুসুক কোটায় নিশ্চিত হজ ও ওমরাহ ভিসা এবং এয়ার টিকিট সমাধান।",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
