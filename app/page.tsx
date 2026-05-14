"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* LIGHTS */}

      <div className="light-orb one" />
      <div className="light-orb two" />
      <div className="light-orb three" />

      {/* MOUSE GLOW */}

      <div
        className="mouse-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* HEADER */}

      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-3xl">

        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <div className="text-3xl font-black tracking-tight">
            Эрик.dev
          </div>

          <nav className="hidden items-center gap-14 text-[15px] text-zinc-400 md:flex">

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
        className="flex min-h-screen items-center justify-center pt-36"
      >

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">

          <div className="fade-up">

            <div className="mb-10 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm uppercase tracking-[0.35em] text-zinc-400 backdrop-blur-xl">
              AI • WEB • AUTOMATION
            </div>

            <h1 className="mx-auto max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl lg:text-[120px]">

              Эрик —
              <br />
              AI Developer

            </h1>

            <p className="mx-auto mt-12 max-w-4xl text-xl leading-10 text-zinc-400 md:text-2xl">

              Создаю AI-сервисы, современные web-приложения,
              automation systems и digital-продукты нового поколения.

            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">

              <a
                href="#contact"
                className="rounded-2xl bg-white px-10 py-5 text-lg font-semibold text-black transition hover:scale-105"
              >
                Связаться
              </a>

              <a
                href="#projects"
                className="glass rounded-2xl px-10 py-5 text-lg font-semibold transition hover:bg-white/[0.06]"
              >
                Портфолио
              </a>

            </div>

          </div>

          {/* SERVICES */}

          <div
            id="services"
            className="mt-32 grid w-full grid-cols-1 gap-8 md:grid-cols-3"
          >

            {[
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

            ].map((service, index) => (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className="glass hover-card rounded-[32px] p-10 text-center"
              >

                <h3 className="mb-6 text-4xl font-black tracking-tight">
                  {service.title}
                </h3>

                <p className="text-lg leading-9 text-zinc-400">
                  {service.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="border-t border-white/5 py-40">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <div className="mb-8 uppercase tracking-[0.35em] text-zinc-500">
            ОБО МНЕ
          </div>

          <h2 className="mx-auto max-w-5xl text-5xl font-black leading-[1] tracking-[-0.05em] md:text-7xl lg:text-[88px]">

            Создаю современные
            <br />
            AI-продукты

          </h2>

          <p className="mx-auto mt-14 max-w-4xl text-xl leading-10 text-zinc-400">

            AI automation, Telegram ecosystems,
            web development, CRM systems и digital infrastructure
            для современных компаний.

          </p>

          <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2">

            <div className="glass hover-card rounded-[32px] p-10 text-left">

              <div className="mb-6 text-4xl font-black">
                Кто я
              </div>

              <p className="text-lg leading-9 text-zinc-400">

                Я занимаюсь разработкой AI-сервисов,
                web-приложений, автоматизацией бизнес-процессов
                и созданием современных digital-продуктов.

              </p>

            </div>

            <div className="glass hover-card rounded-[32px] p-10 text-left">

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

        <div className="mx-auto max-w-7xl px-6 text-center">

          <div className="mb-8 uppercase tracking-[0.35em] text-zinc-500">
            ПРОЕКТЫ
          </div>

          <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl lg:text-[88px]">
            Избранные работы
          </h2>

          <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2">

            {[
              {
                title: "AI Assistant",
                text: "AI-ассистент для автоматизации задач, генерации контента и работы с клиентами.",
              },

              {
                title: "Telegram Automation",
                text: "Telegram automation ecosystem для бизнеса, CRM и AI-интеграций.",
              },

            ].map((project, index) => (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className="glass hover-card overflow-hidden rounded-[36px] text-left"
              >

                {/* PROJECT PREVIEW */}

                <div className="relative h-[320px] overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />

                  <div className="absolute left-10 top-10 h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl" />

                  <div className="absolute right-10 top-10 h-12 w-40 rounded-xl border border-white/10 bg-white/[0.04]" />

                  <div className="absolute bottom-10 left-10 h-32 w-[80%] rounded-3xl border border-white/10 bg-white/[0.03]" />

                </div>

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