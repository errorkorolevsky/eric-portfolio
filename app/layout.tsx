import type { Metadata } from "next";

import "./globals.css";

/* STYLE SYSTEM */

import "@/styles/animations.css";
import "@/styles/dashboard.css";
import "@/styles/terminal.css";
import "@/styles/chatbot.css";
import "@/styles/responsive.css";

/* PREMIUM SYSTEMS */

import MotionProvider from "@/components/MotionProvider";
import Cursor from "@/components/Cursor";
import AmbientBackground from "@/components/AmbientBackground";
import LoadingScreen from "@/components/LoadingScreen";
import Chatbot from "@/components/Chatbot";

/* METADATA */

export const metadata: Metadata = {

  title:
    "Эрик.dev — AI Systems & Automation",

  description:
    "Premium AI systems, automation infrastructure, SaaS platforms и современные digital ecosystems.",

  keywords: [

    "AI Systems",
    "Automation",
    "OpenAI",
    "SaaS",
    "Next.js",
    "AI Developer",
    "Digital Products",
    "Infrastructure",

  ],

  openGraph: {

    title:
      "Эрик.dev — AI Systems & Automation",

    description:
      "Premium AI systems, automation infrastructure и современные digital ecosystems.",

    url:
      "https://ericdev.vercel.app",

    siteName:
      "Эрик.dev",

    locale:
      "ru_RU",

    type:
      "website",

  },

  twitter: {

    card:
      "summary_large_image",

    title:
      "Эрик.dev — AI Systems",

    description:
      "Premium AI infrastructure & automation ecosystems.",

  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="ru">

      <body>

        {/* MOTION */}

        <MotionProvider>

          {/* LOADING */}

          <LoadingScreen />

          {/* CURSOR */}

          <Cursor />

          {/* AMBIENT BACKGROUND */}

          <AmbientBackground />

          {/* APP */}

          <div className="app-shell">

            {children}

          </div>

          {/* AI CHATBOT */}

          <Chatbot />

        </MotionProvider>

      </body>

    </html>

  );

}