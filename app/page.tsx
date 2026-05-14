"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-24 flex items-center justify-between">
            <h1 className="text-3xl font-black tracking-tight">
              Эрик.dev
            </h1>

            <nav className="hidden md:flex items-center gap-10 text-zinc-400">
              <a href="#hero" className="hover:text-white transition">
                Главная
              </a>

              <a href="#about" className="hover:text-white transition">
                Обо мне
              </a>

              <a href="#projects" className="hover:text-white transition">
                Проекты
              </a>

              <a href="#contact" className="hover:text-white transition">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-32"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 mb-8">
              AI • Web • Automation
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.9] tracking-tight">
              Эрик —
              <br />
              AI Developer
            </h1>

            <p className="mt-10 max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
              Создаю AI-сервисы, современные web-приложения
              и digital-продукты нового поколения.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-105 transition"
              >
                Связаться
              </a>

              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-lg"
              >
                Портфолио
              </a>
            </div>
          </motion.div>

          {/* HERO CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mt-28">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm text-center">
              <h3 className="text-3xl font-bold mb-5">
                AI Integration
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Интеграция OpenAI, AI automation,
                AI assistants и умных workflow.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm text-center">
              <h3 className="text-3xl font-bold mb-5">
                Web Development
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Современные web-приложения
                на Next.js, React и TypeScript.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm text-center">
              <h3 className="text-3xl font-bold mb-5">
                Automation
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Telegram-боты, AI-сервисы
                и автоматизация бизнес-процессов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Обо мне
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[1] tracking-tight max-w-5xl mx-auto">
            Создаю современные
            <br />
            AI-продукты
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <h3 className="text-4xl font-bold mb-6">
                Кто я
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                Я занимаюсь разработкой AI-сервисов,
                web-приложений, автоматизацией
                бизнес-процессов и созданием
                современных digital-продуктов.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <h3 className="text-4xl font-bold mb-6">
                Технологии
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "OpenAI API",
                  "Node.js",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-lg"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-32 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Проекты
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Избранные работы
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 min-h-[420px] flex flex-col justify-end text-center hover:bg-white/[0.05] transition">
              <h3 className="text-5xl font-bold mb-5">
                AI Assistant
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed mb-8">
                AI-ассистент для автоматизации задач,
                генерации контента и работы с клиентами.
              </p>

              <a
                href="#"
                className="text-xl font-semibold hover:text-zinc-400 transition"
              >
                Смотреть проект →
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 min-h-[420px] flex flex-col justify-end text-center hover:bg-white/[0.05] transition">
              <h3 className="text-5xl font-bold mb-5">
                Telegram Automation
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed mb-8">
                Telegram-боты, AI-интеграции
                и автоматизация бизнес-процессов.
              </p>

              <a
                href="#"
                className="text-xl font-semibold hover:text-zinc-400 transition"
              >
                Смотреть проект →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Контакты
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[1] tracking-tight">
            Давайте создадим
            <br />
            что-то великое
          </h2>

          <p className="mt-10 text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto">
            Открыт для сотрудничества,
            AI-проектов и современных
            digital-решений.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-10 text-2xl font-semibold">
            <a
              href="https://t.me/ericilyano"
              target="_blank"
              className="hover:text-zinc-400 transition"
            >
              Telegram
            </a>

            <a
              href="https://github.com/errorkorolevsky"
              target="_blank"
              className="hover:text-zinc-400 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:artemfi435@gmail.com"
              className="hover:text-zinc-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black">
              Эрик.dev
            </h3>

            <p className="text-zinc-500 mt-2">
              AI Developer • Web Developer
            </p>
          </div>

          <div className="flex gap-8 text-zinc-400">
            <a
              href="https://t.me/ericilyano"
              target="_blank"
              className="hover:text-white transition"
            >
              Telegram
            </a>

            <a
              href="https://github.com/errorkorolevsky"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="mailto:artemfi435@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}