import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Founder Memory", description: "Your startup's searchable second brain, powered by Appwrite VectorsDB." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}