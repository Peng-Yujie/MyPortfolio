import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yujie Peng | Full Stack Developer",
  description: "Full Stack Developer with expertise in Web Development, Software Engineering, and UI/UX Design. Building scalable applications with modern technologies.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Yujie Peng" }],
  openGraph: {
    title: "Yujie Peng | Full Stack Developer",
    description: "Full Stack Developer with expertise in Web Development, Software Engineering, and UI/UX Design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
