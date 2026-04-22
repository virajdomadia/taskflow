import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TaskFlow — Simple Task Management for Small Teams",
  description: "Plan, track, and ship work without complexity. TaskFlow helps teams stay focused on what matters most.",
  keywords: ["task management", "project management", "team productivity", "simple tasks", "saas"],
  openGraph: {
    title: "TaskFlow — Simple Task Management for Small Teams",
    description: "Plan, track, and ship work without complexity. TaskFlow helps teams stay focused on what matters most.",
    url: "https://taskflow.com",
    siteName: "TaskFlow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskFlow — Simple Task Management for Small Teams",
    description: "Plan, track, and ship work without complexity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

