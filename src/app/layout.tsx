import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeAuth - Simple Authentication for SaaS",
  description: "Add secure authentication to your SaaS in minutes. Email/password, OAuth, JWT tokens, and user management.",
  keywords: ["authentication", "auth", "saas", "oauth", "jwt", "login"],
  openGraph: {
    title: "VibeAuth - Simple Authentication for SaaS",
    description: "Add secure authentication to your SaaS in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
