// app/layout.tsx
import type { Metadata } from "next";
import '@radix-ui/themes/styles.css';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { Theme } from "@radix-ui/themes";


const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Theme>
        <Navbar></Navbar>
        <main> {children}  </main>
        </Theme>
     


      </body>
    </html>
  );
}
