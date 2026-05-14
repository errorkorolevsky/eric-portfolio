"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-250px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute bottom-[-300px] right-[-200px] h-[600px] w-[600px] rounded-full bg-zinc-700/20 blur-3xl" />

        <div className="absolute left-[-200px] top-[40%] h-[500px] w-[500px] rounded-full bg-zinc-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]" />
      </div>

      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">

          <div className="text-3xl font-black tracking-tight">
            Эрик.dev
          </div>

          <nav className="hidden items-center gap-10 text-zinc-400 md:flex">
            <a href="#hero" className="transition hover:text-white">
              Главная
            </a>

            <a href="#about" className="transition hover:text-white">
              Обо мне
            </a>

            <a href="#projects" className="transition hover:text-white">
              Проекты
            </a>

            <a href="#contact" className="transition hover:text-white">
              Контакты
            </a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="flex min-h-screen items-center justify-center pt-32"
      >
        <div className="mx-auto w-full max-w-6xl px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center"
          >

            <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl">
              AI • Web • Automation
            </div>

            <h1 className="text-6xl font-black leading-[0.9] tracking-tight md:text-8xl lg:text-[120px]">
              Эрик —
              <br />
              AI Developer
            </h1>

            <p className="mt-12 max-w-3xl text-xl leading-9 text-zinc-400">
              Создаю AI-сервисы, современные web-приложения,
              automation-системы и digital-продукты нового поколения.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-5">

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black transition"
              >
                Связаться
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg transition hover:bg-white/10"
              >
                Портфолио
              </motion.a>

            </div>

          </motion.div>

          {/* HERO CARDS */}
          <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3">

            {[
              {
                title: "AI Integration",
                text: "Интеграция OpenAI, AI automation, AI assistants и умных workflow.",
              },
              {
                title: "Web Development",
                text: "Современные web-приложения на Next.js, React и TypeScript.",
              },
              {
                title: "Automation",
                text: "Telegram-боты, AI-сервисы и автоматизация бизнес-процессов.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl transition hover:bg-white/[0.06]"
              >
                <h3 className="mb-6 text-3xl font-bold">
                  {card.title}
                </h3>

                <p className="text-lg leading-8 text-zinc-400">
                  {card.text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="flex justify-center border-t border-white/5 py-36"
      >
        <div className="flex w-full max-w-6xl flex-col items-center px-6 text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="mb-8 uppercase tracking-[0.3em] text-zinc-500">
              Обо мне
            </p>

            <h2 className="text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
              Создаю современные
              <br />
              AI-продукты
            </h2>

          </motion.div>

          <div className="mt-24 grid w-full grid-cols-1 gap-8 md:grid-cols-2">

            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-xl transition hover:bg-white/[0.05]"
            >
              <h3 className="mb-8 text-4xl font-bold">
                Кто я
              </h3>

              <p className="text-lg leading-8 text-zinc-400">
                Я занимаюсь разработкой AI-сервисов,
                web-приложений, автоматизацией бизнес-процессов
                и созданием современных digital-продуктов.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-xl transition hover:bg-white/[0.05]"
            >
              <h3 className="mb-8 text-4xl font-bold">
                Технологии
              </h3>

              <div className="flex flex-wrap justify-center gap-4">

                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "Framer Motion",
                  "OpenAI API",
                  "Node.js",
                  "GitHub",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-lg"
                  >
                    {tech}
                  </div>
                ))}

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="flex justify-center border-t border-white/5 py-36"
      >
        <div className="flex w-full max-w-6xl flex-col items-center px-6 text-center">

          <p className="mb-8 uppercase tracking-[0.3em] text-zinc-500">
            Проекты
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            Избранные работы
          </h2>

          <div className="mt-24 grid w-full grid-cols-1 gap-8 md:grid-cols-2">

            {[
              {
                title: "AI Assistant",
                text: "AI-ассистент для автоматизации задач, генерации контента и работы с клиентами.",
              },
              {
                title: "Telegram Automation",
                text: "Telegram-боты, AI-интеграции и автоматизация бизнес-процессов.",
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="flex min-h-[460px] flex-col justify-end rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-xl transition hover:bg-white/[0.05]"
              >
                <h3 className="mb-6 text-5xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-10 text-lg leading-8 text-zinc-400">
                  {project.text}
                </p>

                <a
                  href="#"
                  className="text-lg font-semibold transition hover:text-zinc-400"
                >
                  Смотреть проект →
                </a>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="flex justify-center border-t border-white/5 py-36"
      >
        <div className="flex w-full max-w-4xl flex-col items-center px-6 text-center">

          <p className="mb-8 uppercase tracking-[0.3em] text-zinc-500">
            Контакты
          </p>

          <h2 className="text-5xl font-black leading-[1.1] md:text-7xl">
            Давайте создадим
            <br />
            что-то великое
          </h2>

          <p className="mt-12 text-xl leading-9 text-zinc-400">
            Открыт для сотрудничества,
            AI-проектов и современных digital-решений.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-10 text-2xl font-semibold">

            <a
              href="https://t.me/ericilyano"
              target="_blank"
              className="transition hover:text-zinc-400"
            >
              Telegram
            </a>

            <a
              href="https://github.com/errorkorolevsky"
              target="_blank"
              className="transition hover:text-zinc-400"
            >
              GitHub
            </a>

            <a
              href="mailto:artemfi435@gmail.com"
              className="transition hover:text-zinc-400"
            >
              Email
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}