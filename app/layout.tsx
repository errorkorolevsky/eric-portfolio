import "./globals.css";

export const metadata = {
  title: "Эрик.dev",
  description: "AI Automation Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}