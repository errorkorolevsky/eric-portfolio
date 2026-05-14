import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Эрик.dev — AI Automation Studio",

  description:
    "AI systems, automation platforms, Telegram ecosystems и premium SaaS products.",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">

      <body suppressHydrationWarning={true}>
        {children}
      </body>

    </html>
  );
}