"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="text-2xl font-bold tracking-tight">
            Эрик.dev
          </div>

          <div className="flex gap-8 text-zinc-400">
            <a href="#home" className="hover:text-white transition">
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
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="mb-6 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-sm text-zinc-300">
            AI • Web • Automation
          </div>

          <h1 className="text-7xl md:text-8xl font-black text-center leading-tight mb-6">
            Эрик —
            <br />
            AI Developer
          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl text-center leading-relaxed mb-10">
            Создаю AI-сервисы, современные web-приложения
            и digital-продукты нового поколения.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition duration-300"
            >
              Связаться
            </a>

            <a
              href="#projects"
              className="border border-white/20 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              Портфолио
            </a>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-28 max-w-6xl w-full">
          
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold mb-4">
              AI Integration
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Интеграция OpenAI, AI automation,
              AI assistants и умных workflow.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold mb-4">
              Web Development
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Современные web-приложения на
              Next.js, React и TypeScript.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold mb-4">
              Automation
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Telegram-боты, AI-сервисы и
              автоматизация бизнес-процессов.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-40 px-6 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="text-zinc-500 uppercase tracking-[0.2em] mb-6">
            Обо мне
          </div>

          <h2 className="text-6xl md:text-7xl font-black leading-tight mb-16">
            Создаю современные
            <br />
            AI-продукты
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
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

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
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
                    className="px-5 py-3 rounded-full bg-white/10 text-lg"
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
        className="py-40 px-6 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="text-zinc-500 uppercase tracking-[0.2em] mb-6">
            Проекты
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-20">
            Избранные работы
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="h-72 bg-gradient-to-br from-zinc-900 to-black" />

              <div className="p-8">
                <h3 className="text-4xl font-bold mb-4">
                  AI Assistant
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  AI-ассистент для автоматизации задач,
                  генерации контента и работы с клиентами.
                </p>

                <button className="text-white text-lg font-semibold hover:translate-x-2 transition">
                  Смотреть проект →
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="h-72 bg-gradient-to-br from-zinc-900 to-black" />

              <div className="p-8">
                <h3 className="text-4xl font-bold mb-4">
                  Telegram Automation
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Telegram-боты, AI-интеграции
                  и автоматизация бизнес-процессов.
                </p>

                <button className="text-white text-lg font-semibold hover:translate-x-2 transition">
                  Смотреть проект →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-40 px-6 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-zinc-500 uppercase tracking-[0.2em] mb-6">
            Контакты
          </div>

          <h2 className="text-6xl md:text-7xl font-black leading-tight mb-10">
            Давайте создадим
            <br />
            что-то великое
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed mb-12">
            Открыт для сотрудничества,
            AI-проектов и современных digital-решений.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            
            <a
              href="https://t.me/ericilyano"
              target="_blank"
              className="px-8 py-4 bg-white text-black rounded-2xl text-lg font-semibold hover:scale-105 transition"
            >
              Telegram
            </a>

            <a
              href="https://github.com/errorkorolevsky"
              target="_blank"
              className="px-8 py-4 border border-white/20 rounded-2xl text-lg font-semibold hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:artemfi435@gmail.com"
              className="px-8 py-4 border border-white/20 rounded-2xl text-lg font-semibold hover:bg-white/10 transition"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <div className="text-3xl font-bold mb-2">
              Эрик.dev
            </div>

            <div className="text-zinc-500">
              AI Developer • Web Developer
            </div>
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