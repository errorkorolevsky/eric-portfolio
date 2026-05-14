"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
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

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const mouseMove = (e: MouseEvent) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      if (cursorRef.current) {

        cursorRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          {
            duration: 600,
            fill: "forwards",
          }
        );

      }

    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  return (
    <main className="site-wrapper">

      {/* PREMIUM CURSOR */}

      <div
        ref={cursorRef}
        className="premium-cursor"
      />

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

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="logo"
          >
            Эрик.dev
          </motion.div>

          <nav className="nav-links">

            <a href="#hero">Главная</a>
            <a href="#services">Услуги</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#projects">Проекты</a>
            <a href="#contact">Контакты</a>

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
          transition={{ duration: 1 }}
          className="hero-content"
        >

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="hero-label"
          >
            AI • AUTOMATION • SAAS
          </motion.div>

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

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="primary-btn"
            >
              Обсудить проект
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="secondary-btn"
            >
              Смотреть кейсы
            </motion.button>

          </div>

        </motion.div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="section"
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="section-container"
        >

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

            {[
              {
                title: "AI Systems",
                text: "OpenAI integration, AI assistants и intelligent automation systems.",
              },

              {
                title: "Automation",
                text: "CRM systems, Telegram workflows и scalable automation platforms.",
              },

              {
                title: "SaaS Products",
                text: "Modern dashboards, analytics и premium digital experiences.",
              },

            ].map((card, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  rotateX: 4,
                  rotateY: 4,
                }}
                className="glass-card magnetic"
              >

                <div className="card-glow"></div>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.text}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* LIVE DASHBOARD */}

      <section
        id="dashboard"
        className="section"
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="section-container"
        >

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

            <div className="dashboard-sidebar">

              <div className="sidebar-logo"></div>

              <div className="sidebar-items">

                <div></div>
                <div></div>
                <div></div>
                <div></div>

              </div>

            </div>

            <div className="dashboard-content">

              <div className="dashboard-top">

                <div className="dashboard-search"></div>

                <div className="dashboard-user"></div>

              </div>

              <div className="stats-grid">

                {[
                  "98%",
                  "24/7",
                  "+320%",
                ].map((stat, index) => (

                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + index,
                    }}
                    className="stat-card"
                  >

                    <div className="stat-number">
                      {stat}
                    </div>

                    <div className="stat-text">
                      AI Performance
                    </div>

                  </motion.div>

                ))}

              </div>

              <div className="chart-container">

                <div className="chart-bars">

                  {[1,2,3,4,5].map((item) => (

                    <motion.div
                      key={item}
                      animate={{
                        height: [
                          60,
                          140,
                          90,
                          180,
                          120,
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 5 + item,
                      }}
                    />

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="section"
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="section-container"
        >

          <div className="section-heading">

            <div className="section-label">
              SELECTED WORK
            </div>

            <h2 className="section-title">
              AI SaaS Systems
            </h2>

          </div>

          <div className="projects-grid">

            {[1,2].map((project) => (

              <motion.div
                key={project}
                whileHover={{
                  y: -12,
                }}
                className="project-card magnetic"
              >

                <div className="project-preview">

                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                    }}
                    className="preview-glow"
                  />

                </div>

                <div className="project-content">

                  <div className="project-tag">
                    AI PLATFORM
                  </div>

                  <h3>
                    Intelligent Automation
                  </h3>

                  <p>

                    Premium AI ecosystem
                    для analytics,
                    workflows
                    и scalable automation systems.

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

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
          transition={{ duration: 1 }}
          className="contact-content"
        >

          <div className="section-label">
            CONTACT
          </div>

          <h2 className="contact-title">

            Let’s build
            <br />
            something
            <br />
            exceptional

          </h2>

          <p className="contact-description">

            Open for AI systems,
            SaaS products,
            automation platforms
            и premium digital experiences.

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