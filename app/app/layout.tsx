import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import "./globals.css";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-typewriter"
});

export const metadata: Metadata = {
  title: "Silicon Scribe | Mastering Chips & Intelligence",
  description:
    "An immersive, emotionally intelligent deep dive into chips, computing, and AI craft with a typewriter aesthetic."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${specialElite.variable} bg-ink text-parchment`}>
        {children}
      </body>
    </html>
  );
}
