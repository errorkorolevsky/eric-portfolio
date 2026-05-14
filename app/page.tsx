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
            AI • AUTOMATION • DIGITAL SYSTEMS
          </div>

          <h1 className="hero-title">

            Создаю intelligent
            <br />
            digital systems
            <br />
            для horeca
            <br />
            и бизнеса

          </h1>

          <p className="hero-description">

            AI automation, Telegram ecosystems,
            AI assistants, CRM systems
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
                Интеллектуальные AI-системы,
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
                Telegram Automation
              </h3>

              <p>
                Telegram CRM,
                horeca automation,
                AI notifications
                и бизнес automation systems.
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
                Digital Products
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
              Premium AI Projects
            </h2>

          </motion.div>

          <div className="projects-grid">

            {/* PROJECT */}

            <motion.div
              whileHover={{
                y: -12,
              }}
              className="project-card"
            >

              <div className="project-preview">

                <div className="fake-dashboard">

                  <div className="dashboard-header"></div>

                  <div className="dashboard-content">

                    <div className="dashboard-sidebar"></div>

                    <div className="dashboard-main">

                      <div className="dashboard-chart"></div>

                      <div className="dashboard-cards">

                        <div></div>
                        <div></div>
                        <div></div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="project-content">

                <h3>
                  AI Assistant
                </h3>

                <p>
                  AI assistant ecosystem
                  для automation,
                  клиентов
                  и digital infrastructure.
                </p>

                <a href="#">
                  Смотреть проект →
                </a>

              </div>

            </motion.div>

            {/* PROJECT */}

            <motion.div
              whileHover={{
                y: -12,
              }}
              className="project-card"
            >

              <div className="project-preview">

                <div className="fake-dashboard">

                  <div className="dashboard-header"></div>

                  <div className="dashboard-content">

                    <div className="dashboard-sidebar"></div>

                    <div className="dashboard-main">

                      <div className="dashboard-chart"></div>

                      <div className="dashboard-cards">

                        <div></div>
                        <div></div>
                        <div></div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="project-content">

                <h3>
                  Horeca Automation
                </h3>

                <p>
                  Telegram CRM + AI automation
                  для ресторанов,
                  кофеен
                  и horeca management systems.
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
            horeca automation,
            Telegram ecosystems
            и premium digital products.

          </p>

          <div className="contact-links">

            <a href="https://t.me/ericilyano">
              Telegram
            </a>

            <a href="https://github.com/errorkorolevsky">
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