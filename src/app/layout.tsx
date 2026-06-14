import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/* ── Approved fonts (RULES.md §TYPOGRAPHY SYSTEM) ──────────────────────── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const gondensDemo = localFont({
  src: "../fonts/Gondens DEMO.otf",
  variable: "--font-gondens",
  display: "swap",
  weight: "400",
});

const citadel = localFont({
  src: "../fonts/CitadelScriptStd.otf",
  variable: "--font-citadel",
  display: "swap",
  weight: "400",
});

/* ── Site-wide SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Leo Club Mavericks | District 324 E — Chennai, Tamil Nadu",
    template: "%s | Leo Club Mavericks",
  },
  description:
    "Leo Club of Mavericks — empowering young leaders to serve, grow, and transform communities across Tamil Nadu through youth service, education, and environmental initiatives.",
  keywords: [
    "Leo Club Mavericks",
    "District 324 E",
    "NGO Chennai",
    "youth service",
    "community service",
    "Tamil Nadu",
    "Lions Clubs International",
  ],
  openGraph: {
    title: "Leo Club Mavericks | District 324 E",
    description:
      "Empowering young leaders to serve, grow, and transform communities across Tamil Nadu.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} ${gondensDemo.variable} ${citadel.variable} min-h-full bg-[#FAFAF5] font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
