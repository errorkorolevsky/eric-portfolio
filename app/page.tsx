"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "AI Systems",
    text: "Интеллектуальные AI-системы, OpenAI integration, automation workflows и AI infrastructure.",
  },
  {
    title: "Automation",
    text: "Telegram automation, CRM systems, horeca automation и AI business workflows.",
  },
  {
    title: "Digital Products",
    text: "Современные web applications, SaaS platforms и premium digital experiences.",
  },
];

const projects = [
  {
    title: "AI Assistant",
    text: "AI assistant ecosystem для automation, клиентов и digital infrastructure.",
  },
  {
    title: "Automation CRM",
    text: "Telegram CRM + AI automation system для horeca и бизнес-процессов.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black text-white">

      {/* PREMIUM BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-1/2 top-[-300px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute right-[-250px] top-[25%] h-[700px] w-[700px] rounded-full bg-zinc-600/10 blur-3xl" />

        <div className="absolute left-[-250px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-zinc-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_60%)]" />

      </div>

      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <div className="text-3xl font-black tracking-tight">
            Эрик.dev
          </div>

          <nav className="hidden items-center gap-10 text-zinc-400 md:flex">
            <a href="#hero" className="transition hover:text-white">
              Главная
            </a>

            <a href="#services" className="transition hover:text-white">
              Services
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
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

            <div className="mb-10 inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-xl">
              AI • AUTOMATION • DIGITAL SYSTEMS
            </div>

            <h1 className="text-6xl font-black leading-[0.9] tracking-tight md:text-8xl lg:text-[140px]">
              AI Systems
              <br />
              Automation
              <br />
              Digital Products
            </h1>

            <p className="mx-auto mt-14 max-w-4xl text-xl leading-9 text-zinc-400 md:text-2xl">
              Создаю AI-инфраструктуру, automation systems,
              Telegram ecosystems и premium digital experiences
              нового поколения.
            </p>

            <div className="mt-16 flex flex-wrap justify-center gap-6">

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="rounded-2xl bg-white px-10 py-5 text-lg font-semibold text-black"
              >
                Start Project
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg backdrop-blur-xl transition hover:bg-white/10"
              >
                View Work
              </motion.a>

            </div>

          </motion.div>

          {/* FLOATING SERVICE CARDS */}
          <div
            id="services"
            className="mt-36 grid w-full grid-cols-1 gap-8 md:grid-cols-3"
          >

            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{
                  y: -14,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  <h3 className="mb-8 text-4xl font-black">
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
      <section className="relative flex justify-center border-t border-white/5 py-40">
        <div className="w-full max-w-7xl px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >

            <p className="mb-8 uppercase tracking-[0.35em] text-zinc-500">
              AI AUTOMATION STUDIO
            </p>

            <h2 className="text-5xl font-black leading-[1] tracking-tight md:text-7xl lg:text-8xl">
              Создаю intelligent systems
              <br />
              для бизнеса нового поколения
            </h2>

            <p className="mx-auto mt-14 max-w-4xl text-xl leading-10 text-zinc-400">
              AI automation, horeca systems, Telegram ecosystems,
              SaaS platforms и digital infrastructure для современных компаний.
            </p>

          </motion.div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="flex justify-center border-t border-white/5 py-40"
      >
        <div className="w-full max-w-7xl px-6">

          <div className="text-center">

            <p className="mb-8 uppercase tracking-[0.35em] text-zinc-500">
              SELECTED WORK
            </p>

            <h2 className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
              Premium AI Projects
            </h2>

          </div>

          <div className="mt-28 grid grid-cols-1 gap-10 md:grid-cols-2">

            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -14,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-14 backdrop-blur-2xl"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex min-h-[500px] flex-col justify-end">

                  <div className="mb-10 h-[220px] rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black" />

                  <h3 className="mb-6 text-5xl font-black">
                    {project.title}
                  </h3>

                  <p className="mb-10 text-lg leading-9 text-zinc-400">
                    {project.text}
                  </p>

                  <a
                    href="#"
                    className="text-lg font-semibold text-white transition hover:text-zinc-400"
                  >
                    Explore Project →
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
        className="flex justify-center border-t border-white/5 py-40"
      >
        <div className="w-full max-w-5xl px-6 text-center">

          <p className="mb-8 uppercase tracking-[0.35em] text-zinc-500">
            CONTACT
          </p>

          <h2 className="text-5xl font-black leading-[1] tracking-tight md:text-7xl lg:text-8xl">
            Let’s build
            <br />
            something exceptional
          </h2>

          <p className="mx-auto mt-14 max-w-3xl text-xl leading-10 text-zinc-400">
            Open for AI systems, automation platforms,
            horeca infrastructure и premium digital products.
          </p>

          <div className="mt-20 flex flex-wrap justify-center gap-12 text-2xl font-semibold">

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