import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Эрик.dev — AI Automation Studio",

  description:
    "AI systems, horeca automation, Telegram ecosystems и современные digital-продукты.",

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