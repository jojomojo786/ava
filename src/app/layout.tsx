import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AvA Facility Services in Hannover | Professionelle Gebäudereinigung",
  description:
    "Zuverlässige und gründliche Reinigung für Privat- und Geschäftskunden in Hannover. Büroreinigung, Treppenhausreinigung, Praxisreinigung und mehr. Jetzt kostenloses Angebot anfordern.",
  keywords: [
    "Facility Services Hannover",
    "Gebäudereinigung Hannover",
    "Büroreinigung Hannover",
    "Treppenhausreinigung Hannover",
    "Praxisreinigung Hannover",
    "Haushaltsreinigung Hannover",
    "AvA Reinigung",
  ],
  openGraph: {
    title: "AvA Facility Services in Hannover",
    description:
      "Zuverlässige und gründliche Reinigung für Privat- und Geschäftskunden. Flexibel, pünktlich und mit höchstem Anspruch an Qualität.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${jakarta.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
