import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Эрик.dev — AI Systems Engineer",
  description:
    "Premium AI systems, automation infrastructure and digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className="noise" />

        <div className="ambient ambient-1" />
        <div className="ambient ambient-2" />
        <div className="ambient ambient-3" />

        <div id="cursor-glow" className="cursor-glow" />

        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              const glow = document.getElementById('cursor-glow');

              window.addEventListener('mousemove', (e) => {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
              });
            `,
          }}
        />
      </body>
    </html>
  );
}