import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Silo Vault | Secure Password & Note Manager",
    template: "%s | Silo Vault",
  },
  description:
    "Your secrets, encrypted. A military-grade encrypted vault for your passwords and private notes with zero-knowledge cloud sync. Open-source and secure.",
  keywords: [
    "password manager",
    "encrypted vault",
    "secure notes",
    "zero-knowledge",
    "open source",
    "privacy",
    "encryption",
    "AES-256",
  ],
  authors: [{ name: "Shivam Ingale" }],
  creator: "Shivam Ingale",
  metadataBase: new URL("https://silo-vault.vercel.app"), // Replace with actual URL if known
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://silo-vault.vercel.app",
    title: "Silo Vault | Secure Password & Note Manager",
    description: "Military-grade encrypted vault for your passwords and private notes.",
    siteName: "Silo Vault",
    images: [
      {
        url: "/og-image.png", // Assuming an OG image exists or will be created
        width: 1200,
        height: 630,
        alt: "Silo Vault - Secure Encryption",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silo Vault | Secure Password & Note Manager",
    description: "Military-grade encrypted vault for your passwords and private notes.",
    images: ["/og-image.png"],
    creator: "@shivamingale", // Replace if different
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
