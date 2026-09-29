import type { Metadata } from "next";

export const defaultSEO: Metadata = {
  title: {
    default: "Tarteeb",
    template: "Tarteeb",
  },
  description: "AI-Powered Classroom Tools for Speaking, Writing & Assessment",
  keywords: [
    "AI",
    "Classroom",
    "IELTS",
    "Speaking",
    "Writing",
    "Assessment",
    "Teacher",
    "Student",
    "Education center",
  ],
  authors: [{ name: "Tarteeb team" }],
  creator: "tarteeb team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarteeb.uz",
    siteName: "Tarteeb.uz",
    title: "Tarteeb",
    description:
      "AI-Powered Classroom Tools for Speaking, Writing & Assessment",
    images: [
      {
        url: "/logo-gradient.jpg",
        width: 1200,
        height: 630,
        alt: "Tarteeb.uz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarteeb.uz",
    description:
      "AI-Powered Classroom Tools for Speaking, Writing & Assessment",
    images: ["/logo-gradient.jpg"],
    creator: "tarteeb team",
  },
  metadataBase: new URL("https://tarteeb.uz"),
  icons: {
    icon: "/favicon.svg", // For browsers
    shortcut: "/favicon.svg", // Optional, older browser shortcut
    apple: "/logo.jpg", // For iOS home screen
  },
};
