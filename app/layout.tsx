import type { Metadata } from "next";
import Script from "next/script";
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
  return <html lang="en"><body><Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','2103316316924438');fbq('track','PageView');`}</Script><noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=2103316316924438&ev=PageView&noscript=1" alt="" /></noscript>{children}</body></html>;
}
