import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabinFont = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evans-sparcil.vercel.app"),
  title: "Evans ❤️ Sparcil | Wedding Invitation",
  description: "We joyfully invite you to celebrate our wedding and share in our special day.",
  openGraph: {
    title: "Evans ❤️ Sparcil | Wedding Invitation",
    description:"We joyfully invite you to celebrate our wedding and share in our special day.",
    url: "https://evans-sparcil.vercel.app",
    siteName: "Evans & Sparcil",
    images: [
      {
        url: "https://evans-sparcil.vercel.app/images/pic1.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Evans ❤️ Sparcil | Wedding Invitation",
    description:
      "We joyfully invite you to celebrate our wedding and share in our special day.",
    images: ["/images/pic4.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cabinFont.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}