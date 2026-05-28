import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabinFont = Cabin({ subsets: ["latin"], variable: "--font-cabin" });


export const metadata: Metadata = {
  title: "Digital Invite - Evans & Sparcil",
  description: "We are getting married.",
  openGraph: {
    title: "Digital Invite - Evans & Sparcil",
    description: "You are invited to our Wedding",
    url: "https://evans-sparcil.vercel.app/",
    siteName: "Evans & Sparcil",
    images: [
      {
        url: "/images/pic1.jpg",
        width: 1200,
        height: 600,
        alt: "Digital Invitation",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cabinFont.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
