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

  description:
    "We joyfully invite you to celebrate our wedding and share in our special day.",

  openGraph: {
    url: "https://evans-sparcil.vercel.app",
    type: "website",
    title: "Evans ❤️ Sparcil | Wedding Invitation",
    description:
      "We joyfully invite you to celebrate our wedding and share in our special day.",
    images: [
      {
        url: "/images/preview.jpg",
        width: 1280,
        height: 1158,
        alt: "Evans & Sparcil Wedding Invitation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Evans ❤️ Sparcil | Wedding Invitation",
    description:
      "We joyfully invite you to celebrate our wedding and share in our special day.",
    images: ["/images/preview.jpg"],
  },

  alternates: {
    canonical: "https://evans-sparcil.vercel.app",
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