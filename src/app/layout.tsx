import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "Bitcoin for Signal - Private Messaging Needs Private Money.",
  description:
    "Signal integration for private, peer-to-peer bitcoin payments via Cashu ecash.",
  openGraph: {
    type: "website",
    title: "Bitcoin for Signal - Private Messaging Needs Private Money.",
    description:
      "Signal integration for private, peer-to-peer bitcoin payments via Cashu ecash.",
    images: [
      {
        url: "https://bitcoinforsignal.org/og-image2.jpg?v4",
        width: 1200,
        height: 630,
        alt: "Bitcoin for Signal - Private Messaging Needs Private Money.",
      },
    ],
    url: "https://bitcoinforsignal.org",
    siteName: "Bitcoin for Signal",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bitcoinforsignal",
    creator: "@bitcoinforsignal",
    title: "Bitcoin for Signal - Private Messaging Needs Private Money.",
    description:
      "Signal integration for private, peer-to-peer bitcoin payments via Cashu ecash.",
    images: ["https://bitcoinforsignal.org/og-image2.jpg?v4"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async src="https://plausible.io/js/pa-zcl1csmZPS1iT1ChWExqe.js" />
      <Script
        id="plausible-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          `,
        }}
      />
      <body className="antialiased">{children}</body>
    </html>
  );
}
