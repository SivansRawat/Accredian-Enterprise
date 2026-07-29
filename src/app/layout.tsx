import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise - Transform Your Workforce",
  description: "Next-Gen Enterprise Corporate Upskilling, AI-driven Learning & Strategic Skill Enhancement.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-700">
        {children}
      </body>
    </html>
  );
}
