import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "TransitAlert",
    description: "TransitAlert WebApp",
    icons: {
        icon: '/favicon.png'
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} antialiased`}>
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
