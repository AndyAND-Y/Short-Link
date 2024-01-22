import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "@/actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Short Link",
    description: "Link shortener",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const currentUser = await getCurrentUser();

    return (
        <html lang="en">

            <body className={inter.className}>
                <ToasterProvider />
                <Navbar currentUser={currentUser} />
                {children}
            </body>
        </html>
    );
}
