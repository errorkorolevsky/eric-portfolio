"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "AI Integration",
    text: "Интеграция OpenAI, AI automation, AI assistants и интеллектуальных workflow-систем.",
  },
  {
    title: "Web Development",
    text: "Современные web-приложения на Next.js, React, TypeScript и premium UI systems.",
  },
  {
    title: "Automation",
    text: "Telegram-боты, CRM automation, AI-инфраструктура и автоматизация бизнес-процессов.",
  },
];

const projects = [
  {
    title: "AI Assistant",
    text: "AI-ассистент для автоматизации задач, генерации контента и работы с клиентами.",
  },
  {
    title: "Telegram Automation",
    text: "Telegram automation ecosystem для бизнеса, CRM и AI-интеграций.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.08] blur-3xl" />

        <div className="absolute left-[-200px] top-[40%] h-[500px] w-[500px] rounded-full bg-zinc-700/10 blur-3xl" />

        <div className="absolute right-[-200px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-zinc-600/10 blur-3xl" />

      </div>

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <div className="text-3xl font-black tracking-tight">
            Эрик.dev
          </div>

          <nav className="hidden items-center gap-12 text-[15px] text-zinc-400 md:flex">
            <a href="#hero" className="transition hover:text-white">
              Главная
            </a>

            <a href="#services" className="transition hover:text-white">
              Услуги
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
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 1 }}
          >

            <div className="mb-10 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm uppercase tracking-[0.35em] text-zinc-400 backdrop-blur-xl">
              AI • WEB • AUTOMATION
            </div>

            <h1 className="mx-auto max-w-6xl text-6xl font-black leading-[0.92] tracking-[-0.05em] md:text-8xl lg:text-[120px]">

              Эрик —
              <br />
              AI Developer

            </h1>

            <p className="mx-auto mt-12 max-w-4xl text-xl leading-10 text-zinc-400 md:text-2xl">
              Создаю AI-сервисы, современные web-приложения,
              automation systems и digital-продукты нового поколения.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="rounded-2xl bg-white px-10 py-5 text-lg font-semibold text-black transition"
              >
                Связаться
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-10 py-5 text-lg font-semibold backdrop-blur-xl transition hover:bg-white/[0.08]"
              >
                Портфолио
              </motion.a>

            </div>

          </motion.div>

          {/* SERVICES */}
          <div
            id="services"
            className="mt-28 grid w-full grid-cols-1 gap-8 md:grid-cols-3"
          >

            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  <h3 className="mb-6 text-4xl font-black tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-lg leading-9 text-zinc-400">
                    {service.text}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-white/5 py-40">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-center"
          >

            <div className="mb-8 uppercase tracking-[0.35em] text-zinc-500">
              ОБО МНЕ
            </div>

            <h2 className="text-5xl font-black leading-[1] tracking-[-0.05em] md:text-7xl lg:text-[88px]">

              Создаю современные
              <br />
              AI-продукты

            </h2>

            <p className="mx-auto mt-14 max-w-4xl text-xl leading-10 text-zinc-400">
              AI automation, Telegram ecosystems, web development,
              CRM systems и digital infrastructure для современных компаний.
            </p>

          </motion.div>

          {/* ABOUT GRID */}
          <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2">

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl">

              <div className="mb-6 text-4xl font-black">
                Кто я
              </div>

              <p className="text-lg leading-9 text-zinc-400">
                Я занимаюсь разработкой AI-сервисов, web-приложений,
                автоматизацией бизнес-процессов и созданием современных digital-продуктов.
              </p>

            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl">

              <div className="mb-6 text-4xl font-black">
                Технологии
              </div>

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
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-lg text-zinc-300"
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
        className="border-t border-white/5 py-40"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <div className="mb-8 uppercase tracking-[0.35em] text-zinc-500">
              ПРОЕКТЫ
            </div>

            <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl lg:text-[88px]">
              Избранные работы
            </h2>

          </div>

          <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2">

            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
              >

                <div className="h-[320px] bg-gradient-to-br from-zinc-900 to-black" />

                <div className="p-10">

                  <h3 className="mb-5 text-5xl font-black tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mb-8 text-lg leading-9 text-zinc-400">
                    {project.text}
                  </p>

                  <a
                    href="#"
                    className="text-lg font-semibold text-white transition hover:text-zinc-400"
                  >
                    Смотреть проект →
                  </a>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/5 py-40"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="mb-8 uppercase tracking-[0.35em] text-zinc-500">
            КОНТАКТЫ
          </div>

          <h2 className="text-5xl font-black leading-[1] tracking-[-0.05em] md:text-7xl lg:text-[92px]">

            Давайте создадим
            <br />
            что-то великое

          </h2>

          <p className="mx-auto mt-14 max-w-3xl text-xl leading-10 text-zinc-400">
            Открыт для сотрудничества, AI-проектов,
            automation systems и современных digital-решений.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-12 text-2xl font-semibold">

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