import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // Required for fast internal routing
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my Next.js portfolio website",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-zinc-50 font-sans text-black dark:bg-black dark:text-zinc-50">
        
        {/* HEADER AREA */}
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
          <div className="mx-auto flex max-w-4xl h-16 items-center justify-between px-6">
            <Link href="/" className="text-xl font-bold tracking-tight">
              MyPortfolio
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300">Home</Link>
              {/* Add your future project routes here */}
              <Link href="/projects" className="hover:text-zinc-600 dark:hover:text-zinc-300">Projects</Link>
              <Link href="/contact" className="hover:text-zinc-600 dark:hover:text-zinc-300">Contact</Link>
            </nav>
          </div>
        </header>

        {/* MAIN BODY AREA */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
          {children}
        </main>

        {/* FOOTER AREA */}
        <footer className="w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
          <div className="mx-auto max-w-4xl flex h-16 items-center justify-between px-6 text-xs text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
