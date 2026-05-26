import type { Metadata } from "next";
import {  DM_Serif_Display } from "next/font/google";
import "./globals.css";
// import "./lightswind.css"

const geistSans = DM_Serif_Display({
  weight: "400",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


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
        url: "https://evans-sparcil.vercel.app/images/og-image.jpg",
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
    <html
      lang="en"
      className={`${geistSans.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
