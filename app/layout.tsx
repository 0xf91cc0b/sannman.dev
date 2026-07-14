import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sannman — AI/ML student & builder",
  description:
    "BSc AIML student building practical machine learning and finance tools. Open to collaboration.",
  keywords: ["Sannman", "AI", "Machine Learning", "Finance", "Portfolio", "Mumbai"],
  authors: [{ name: "Sannman", url: "https://sannman.dev" }],
  alternates: { canonical: "https://sannman.dev" },
  openGraph: {
    title: "Sannman — AI/ML student & builder",
    description:
      "BSc AIML student building practical machine learning and finance tools. Open to collaboration.",
    url: "https://sannman.dev",
    siteName: "sannman.dev",
    images: [
      {
        url: "https://sannman.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Sannman — AI/ML",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sannman — AI/ML student & builder",
    description:
      "BSc AIML student building practical machine learning and finance tools. Open to collaboration.",
    images: ["https://sannman.dev/og.png"],
    site: "@sannman",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sannman",
              url: "https://sannman.dev",
              sameAs: [
                "https://github.com/0xf91cc0b",
                "https://instagram.com/sannman.ai",
                "https://linkedin.com/in/sannman",
              ],
              jobTitle: "AI/ML Student",
              alumniOf: {
                "@type": "College",
                name: "Dr. Homi Bhabha State University, Mumbai",
              },
              description:
                "BSc AIML student building practical machine learning and finance tools. Open to collaboration.",
            }),
          }}
        />
        <link rel="canonical" href="https://sannman.dev" />
      </head>
      <body>{children}</body>
    </html>
  );
}
