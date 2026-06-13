import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const gondensDemo = localFont({
  src: "../fonts/Gondens DEMO.otf",
  variable: "--font-gondens",
  display: "swap",
});

const citadel = localFont({
  src: "../fonts/CitadelScriptStd.otf",
  variable: "--font-citadel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voices of Impact | Community Stories & Testimonials | EmpowerChennai NGO",
  description: "Read inspiring stories and testimonials from volunteers, students, organizers, and beneficiaries whose lives have been touched by EmpowerChennai NGO initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} ${gondensDemo.variable} ${citadel.variable} min-h-full bg-[#FAFAF5] font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
