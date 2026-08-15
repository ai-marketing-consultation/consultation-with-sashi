import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://consultation-with-sashi.vercel.app"),
  title: "Free AI Marketing Consultation | Consultation with Sashi",
  description: "Get a free personalized AI marketing plan designed to help your small business attract more customers and identify practical marketing opportunities.",
  icons: { icon: "/logo-cropped.png" },
  openGraph: { title: "Free AI Marketing Consultation | Consultation with Sashi", description: "Get a free personalized AI marketing plan for your small business.", images: ["/logo-cropped.png"], type: "website" },
  twitter: { card: "summary", title: "Free AI Marketing Consultation | Consultation with Sashi", description: "Get a free personalized AI marketing plan for your small business." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
