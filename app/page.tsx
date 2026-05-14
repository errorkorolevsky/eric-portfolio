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

      {/* AMBIENT */}

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

            <a href="#dashboard">
              Dashboard
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
            для automation
            <br />
            и AI products

          </h1>

          <p className="hero-description">

            AI automation, Telegram ecosystems,
            SaaS systems, AI assistants
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

          <div className="section-heading">

            <div className="section-label">
              SERVICES
            </div>

            <h2 className="section-title">

              Premium AI
              <br />
              Infrastructure

            </h2>

          </div>

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
                OpenAI integration,
                AI assistants,
                intelligent workflows
                и scalable AI systems.
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
                CRM systems,
                AI workflows
                и business automation platforms.
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
                Modern SaaS systems,
                dashboards,
                analytics
                и premium digital experiences.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* LIVE DASHBOARD */}

      <section
        id="dashboard"
        className="section"
      >

        <div className="section-container">

          <div className="section-heading">

            <div className="section-label">
              LIVE AI SYSTEM
            </div>

            <h2 className="section-title">
              Interactive Dashboard
            </h2>

          </div>

          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="live-dashboard"
          >

            {/* SIDEBAR */}

            <div className="live-sidebar">

              <div className="sidebar-logo"></div>

              <div className="sidebar-items">

                <div></div>
                <div></div>
                <div></div>
                <div></div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="live-content">

              {/* TOP */}

              <div className="live-top">

                <div className="live-search"></div>

                <div className="live-profile"></div>

              </div>

              {/* STATS */}

              <div className="live-stats">

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="stat-card"
                >

                  <div className="stat-value">
                    98%
                  </div>

                  <div className="stat-label">
                    AI Accuracy
                  </div>

                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className="stat-card"
                >

                  <div className="stat-value">
                    24/7
                  </div>

                  <div className="stat-label">
                    Automation
                  </div>

                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="stat-card"
                >

                  <div className="stat-value">
                    +320%
                  </div>

                  <div className="stat-label">
                    Productivity
                  </div>

                </motion.div>

              </div>

              {/* CHART */}

              <div className="chart-block">

                <div className="chart-lines">

                  <motion.div
                    animate={{
                      height: [40, 100, 70, 120],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                    }}
                  />

                  <motion.div
                    animate={{
                      height: [90, 60, 130, 80],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                    }}
                  />

                  <motion.div
                    animate={{
                      height: [60, 120, 80, 150],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                    }}
                  />

                  <motion.div
                    animate={{
                      height: [100, 70, 140, 90],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                    }}
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="section"
      >

        <div className="section-container">

          <div className="section-heading">

            <div className="section-label">
              SELECTED WORK
            </div>

            <h2 className="section-title">
              AI SaaS Systems
            </h2>

          </div>

          <div className="projects-grid">

            <motion.div
              whileHover={{
                y: -12,
              }}
              className="project-card"
            >

              <div className="project-preview"></div>

              <div className="project-content">

                <div className="project-tag">
                  AI PLATFORM
                </div>

                <h3>
                  AI SaaS Dashboard
                </h3>

                <p>
                  Intelligent AI ecosystem
                  для analytics,
                  workflows
                  и scalable automation systems.
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{
                y: -12,
              }}
              className="project-card"
            >

              <div className="project-preview second"></div>

              <div className="project-content">

                <div className="project-tag">
                  AUTOMATION SYSTEM
                </div>

                <h3>
                  Telegram AI Platform
                </h3>

                <p>
                  Telegram automation ecosystem,
                  AI workflows,
                  notifications
                  и intelligent automation pipelines.
                </p>

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

        <div className="contact-content">

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

            Open for AI systems,
            automation platforms,
            SaaS products
            и premium digital experiences.

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

        </div>

      </section>

    </main>
  );
}