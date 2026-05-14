"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* MOUSE GLOW */}

      <div
        className="mouse-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* BACKGROUND */}

      <div className="ambient ambient-1"></div>
      <div className="ambient ambient-2"></div>
      <div className="ambient ambient-3"></div>

      <div className="grid-overlay"></div>

      {/* NAVBAR */}

      <header className="navbar">

        <div className="navbar-container">

          <div className="logo">
            Эрик.dev
          </div>

          <nav className="nav-links">

            <a href="#hero">
              Главная
            </a>

            <a href="#services">
              Услуги
            </a>

            <a href="#projects">
              Проекты
            </a>

            <a href="#contact">
              Контакты
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}

      <section
        id="hero"
        className="hero-section"
      >

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9 }}
          className="hero-content"
        >

          <div className="hero-label">
            AI • AUTOMATION • SAAS
          </div>

          <h1 className="hero-title">

            Создаю intelligent
            <br />
            digital systems
            <br />
            для AI automation
            <br />
            и SaaS products

          </h1>

          <p className="hero-description">

            AI automation, Telegram ecosystems,
            AI assistants, SaaS platforms
            и premium digital infrastructure
            нового поколения.

          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Обсудить проект
            </button>

            <button className="secondary-btn">
              Смотреть кейсы
            </button>

          </div>

        </motion.div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="section"
      >

        <div className="section-container">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="section-heading"
          >

            <div className="section-label">
              SERVICES
            </div>

            <h2 className="section-title">

              Premium AI
              <br />
              Infrastructure

            </h2>

          </motion.div>

          <div className="services-grid">

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="glass-card"
            >

              <div className="card-glow"></div>

              <h3>
                AI Systems
              </h3>

              <p>
                Интеллектуальные AI systems,
                OpenAI integration,
                AI assistants
                и automation workflows.
              </p>

            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="glass-card"
            >

              <div className="card-glow"></div>

              <h3>
                Automation
              </h3>

              <p>
                Telegram automation,
                AI workflows,
                CRM systems,
                notifications и scalable automation.
              </p>

            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="glass-card"
            >

              <div className="card-glow"></div>

              <h3>
                SaaS Products
              </h3>

              <p>
                Современные SaaS systems,
                web platforms,
                dashboards
                и premium digital experiences.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="section"
      >

        <div className="section-container">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="section-heading"
          >

            <div className="section-label">
              SELECTED WORK
            </div>

            <h2 className="section-title">
              AI SaaS Systems
            </h2>

          </motion.div>

          <div className="projects-grid">

            {/* PROJECT 1 */}

            <motion.div
              whileHover={{
                y: -12,
                scale: 1.01,
              }}
              className="project-card"
            >

              <div className="project-preview advanced-preview">

                <div className="preview-glow"></div>

                <div className="preview-topbar">

                  <div className="preview-dots">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                  <div className="preview-search"></div>

                </div>

                <div className="dashboard-layout">

                  <div className="dashboard-sidebar">

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                  </div>

                  <div className="dashboard-main">

                    <div className="dashboard-hero-card"></div>

                    <div className="dashboard-stats">

                      <div></div>
                      <div></div>
                      <div></div>

                    </div>

                    <div className="dashboard-chart-large"></div>

                  </div>

                </div>

              </div>

              <div className="project-content">

                <div className="project-tag">
                  AI PLATFORM
                </div>

                <h3>
                  AI SaaS Dashboard
                </h3>

                <p>

                  Intelligent SaaS ecosystem
                  для AI automation,
                  analytics,
                  workflow management
                  и scalable digital infrastructure.

                </p>

                <a href="#">
                  Смотреть проект →
                </a>

              </div>

            </motion.div>

            {/* PROJECT 2 */}

            <motion.div
              whileHover={{
                y: -12,
                scale: 1.01,
              }}
              className="project-card"
            >

              <div className="project-preview advanced-preview">

                <div className="preview-glow"></div>

                <div className="telegram-ui">

                  <div className="telegram-header"></div>

                  <div className="telegram-chat">

                    <div className="message left"></div>
                    <div className="message right"></div>
                    <div className="message left short"></div>
                    <div className="message right"></div>

                  </div>

                  <div className="telegram-input"></div>

                </div>

                <div className="floating-stat stat-1"></div>
                <div className="floating-stat stat-2"></div>

              </div>

              <div className="project-content">

                <div className="project-tag">
                  AUTOMATION SYSTEM
                </div>

                <h3>
                  Telegram AI Platform
                </h3>

                <p>

                  AI automation ecosystem
                  для Telegram workflows,
                  CRM systems,
                  notifications
                  и intelligent automation pipelines.

                </p>

                <a href="#">
                  Смотреть проект →
                </a>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="contact-section"
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="contact-content"
        >

          <div className="section-label">
            CONTACT
          </div>

          <h2 className="contact-title">

            Давайте создадим
            <br />
            что-то
            <br />
            exceptional

          </h2>

          <p className="contact-description">

            Открыт для AI systems,
            automation platforms,
            Telegram ecosystems
            и premium digital products.

          </p>

          <div className="contact-links">

            <a href="https://t.me/ericilyano" target="_blank">
              Telegram
            </a>

            <a href="https://github.com/errorkorolevsky" target="_blank">
              GitHub
            </a>

            <a href="mailto:artemfi435@gmail.com">
              Email
            </a>

          </div>

        </motion.div>

      </section>

    </main>
  );
}