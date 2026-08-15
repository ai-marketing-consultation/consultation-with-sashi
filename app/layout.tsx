import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://consultation-with-sashi.vercel.app"),
  title: "Free AI Marketing Consultation | Sashi Shrestha",
  description: "Book a free 1-to-1 AI marketing consultation with Sashi Shrestha and discover practical strategies to attract more customers, generate leads, and improve your digital marketing.",
  alternates: { canonical: "/" },
  icons: { icon: "/logo-cropped.png" },
  openGraph: { title: "Free AI Marketing Consultation | Sashi Shrestha", description: "Book a free 1-to-1 AI marketing consultation and get practical marketing strategies for your business.", images: ["/logo-cropped.png"], type: "website" },
  twitter: { card: "summary", title: "Free AI Marketing Consultation | Sashi Shrestha", description: "Book a free 1-to-1 AI marketing consultation with Sashi Shrestha." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
