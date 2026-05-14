"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-24 flex items-center justify-between">

            <h1 className="text-3xl font-black">
              Эрик.dev
            </h1>

            <nav className="hidden md:flex gap-10 text-zinc-400">
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
        <div className="w-full max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center"
          >

            <div className="mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300">
              AI • Web • Automation
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              Эрик —
              <br />
              AI Developer
            </h1>

            <p className="mt-10 max-w-3xl text-zinc-400 text-xl leading-relaxed">
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
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">
                AI Integration
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Интеграция OpenAI, AI automation,
                AI assistants и умных workflow.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Web Development
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Современные web-приложения
                на Next.js, React и TypeScript.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Automation
              </h3>

              <p className="text-zinc-400 leading-relaxed">
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
        className="py-32 border-t border-white/5 flex justify-center"
      >
        <div className="w-full max-w-6xl px-6 flex flex-col items-center text-center">

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Обо мне
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[1] tracking-tight">
            Создаю современные
            <br />
            AI-продукты
          </h2>

          <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <h3 className="text-4xl font-bold mb-6">
                Кто я
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
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

              <div className="flex flex-wrap justify-center gap-3">

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
                    className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5"
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
        className="py-32 border-t border-white/5 flex justify-center"
      >
        <div className="w-full max-w-6xl px-6 flex flex-col items-center text-center">

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Проекты
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Избранные работы
          </h2>

          <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 min-h-[420px] flex flex-col justify-end text-center">
              <h3 className="text-5xl font-bold mb-5">
                AI Assistant
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                AI-ассистент для автоматизации задач,
                генерации контента и работы с клиентами.
              </p>

              <a href="#" className="text-lg font-semibold">
                Смотреть проект →
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 min-h-[420px] flex flex-col justify-end text-center">
              <h3 className="text-5xl font-bold mb-5">
                Telegram Automation
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Telegram-боты, AI-интеграции
                и автоматизация бизнес-процессов.
              </p>

              <a href="#" className="text-lg font-semibold">
                Смотреть проект →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 border-t border-white/5 flex justify-center"
      >
        <div className="w-full max-w-4xl px-6 flex flex-col items-center text-center">

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Контакты
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[1]">
            Давайте создадим
            <br />
            что-то великое
          </h2>

          <p className="mt-10 text-zinc-400 text-xl leading-relaxed">
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

    </main>
  );
}