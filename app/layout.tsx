import type { Metadata } from "next";
// import localFont from "next/font/local";
import {Poppins} from 'next/font/google';
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const font = Poppins({
  subsets: ["latin"],
  weight:['100', '400', '500', '700', '900','200','600','800'],
}); 

export const metadata: Metadata = {
  title: "SMARTEX Education | Plateforme de Gestion Scolaire et Universitaire",
  description:
    "SMARTEX Education est une solution numérique tout-en-un conçue pour faciliter la gestion des écoles et universités : inscriptions, absences, plannings, notes, stages, mémoires, communication avec les parents et bien plus.",
  keywords: [
    "Smartex Education",
    "Smartex Expertises",
    "gestion scolaire",
    "gestion universitaire",
    "plateforme éducative",
    "application école",
    "suivi des élèves",
    "notes et bulletins",
    "gestion de planning",
    "éducation numérique",
    "solution pour école",
    "stage et mémoire",
    "interface parent élève",
  ],
  authors: [{ name: "Smartex Expertises", url: "https://smartex-education.com" }],
  creator: "Smartex Expertises",
  publisher: "Smartex Expertises",
  openGraph: {
    title: "SMARTEX Education | Plateforme Numérique Éducative",
    description:
      "La solution idéale pour gérer vos formations, étudiants, enseignants, plannings, absences, notes et bien plus dans un seul outil numérique.",
    url: "https://smartex-education.com",
    siteName: "SMARTEX Education",
    images: [
      {
        url: "https://smartex-education.vercel.app/images/fav.jpg",
        width: 1200,
        height: 630,
        alt: "Interface SMARTEX Education",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMARTEX Education | Plateforme Numérique Éducative",
    description:
      "Gérez efficacement votre établissement scolaire ou universitaire avec SMARTEX Education : une solution innovante et intuitive.",
    images: ["https://smartex-education.vercel.app/images/fav.jpg"],
    creator: "@smartexexpertises",
  },
  metadataBase: new URL("https://smartex-education.com"),
};


export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/favicon.png" />
      </head>
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
