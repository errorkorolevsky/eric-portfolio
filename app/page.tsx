"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Эрик.dev</h1>

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
        </header>

        {/* HERO */}
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6 inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm">
              AI • Web • Automation
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Эрик —
              <br />
              AI Developer
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-3xl mx-auto">
              Создаю AI-сервисы, современные web-приложения
              и digital-продукты нового поколения.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                Связаться
              </a>

              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Портфолио
              </a>
            </div>
          </motion.div>

          {/* HERO CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mt-24 w-full">
            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-4xl font-bold mb-4">
                AI Integration
              </h3>

              <p className="text-zinc-400 text-lg">
                Интеграция OpenAI, AI automation,
                AI assistants и умных workflow.
              </p>
            </div>

            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-4xl font-bold mb-4">
                Web Development
              </h3>

              <p className="text-zinc-400 text-lg">
                Современные web-приложения
                на Next.js, React и TypeScript.
              </p>
            </div>

            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-4xl font-bold mb-4">
                Automation
              </h3>

              <p className="text-zinc-400 text-lg">
                Telegram-боты, AI-сервисы
                и автоматизация бизнес-процессов.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-32">
          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Обо мне
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
            Создаю современные
            AI-продукты
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-10">
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

            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-10">
              <h3 className="text-4xl font-bold mb-6">
                Технологии
              </h3>

              <div className="flex flex-wrap gap-4">
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
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-32">
          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Проекты
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-20">
            Избранные работы
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-10 min-h-[350px] flex flex-col justify-end">
              <h3 className="text-5xl font-bold mb-4">
                AI Assistant
              </h3>

              <p className="text-zinc-400 text-xl mb-6">
                AI-ассистент для автоматизации задач,
                генерации контента и работы с клиентами.
              </p>

              <a
                href="#"
                className="text-white text-xl font-semibold"
              >
                Смотреть проект →
              </a>
            </div>

            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-10 min-h-[350px] flex flex-col justify-end">
              <h3 className="text-5xl font-bold mb-4">
                Telegram Automation
              </h3>

              <p className="text-zinc-400 text-xl mb-6">
                Telegram-боты, AI-интеграции
                и автоматизация бизнес-процессов.
              </p>

              <a
                href="#"
                className="text-white text-xl font-semibold"
              >
                Смотреть проект →
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-32 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Контакты
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Давайте создадим
            <br />
            что-то великое
          </h2>

          <p className="mt-8 text-zinc-400 text-xl max-w-3xl mx-auto">
            Открыт для сотрудничества,
            AI-проектов и современных
            digital-решений.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-2xl">
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
        </section>

      </div>
    </main>
  );
}