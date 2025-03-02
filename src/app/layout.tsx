import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

// Correctly configure the Inter font
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter', // This defines a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Phoenix Gym Academy",
  description: "Phoenix Gym Academy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
