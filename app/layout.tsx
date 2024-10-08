// app/layout.tsx
import type { Metadata } from "next";
import '@radix-ui/themes/styles.css';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { Theme, ThemePanel } from "@radix-ui/themes";
import ThemeSwitcher from "./ThemeSwitcher";


const inter = Inter({ subsets: ["latin"],
  variable:'--font-inter',
 });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeSwitcher>
        <Navbar></Navbar>
        <main> {children}  </main>
      
        </ThemeSwitcher>
     


      </body>
    </html>
  );
}
