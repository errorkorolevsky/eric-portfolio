"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section
      id="hero"
      className="hero-section"
    >

      {/* HERO BACKGROUND */}

      <div className="hero-background">

        <div className="hero-gradient hero-gradient-1" />

        <div className="hero-gradient hero-gradient-2" />

        <div className="hero-gradient hero-gradient-3" />

      </div>

      <div className="container hero-container">

        {/* CONTENT */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="hero-content"
        >

          {/* LABEL */}

          <motion.div

            animate={{
              y: [0, -8, 0],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
            }}

            className="hero-label"
          >

            AI • AUTOMATION • DIGITAL SYSTEMS

          </motion.div>

          {/* TITLE */}

          <motion.h1

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.15,
              duration: 1,
            }}

            className="hero-title"
          >

            AI Systems
            <br />

            <span className="hero-title-gradient">
              Automation
            </span>

            <br />

            Digital Products

          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.3,
              duration: 1,
            }}

            className="hero-description"
          >

            Создаю premium AI-инфраструктуру,
            intelligent systems,
            automation ecosystems,
            scalable SaaS platforms
            и современные digital-продукты
            нового поколения.

          </motion.p>

          {/* BUTTONS */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.45,
              duration: 1,
            }}

            className="hero-buttons"
          >

            {/* PRIMARY */}

            <motion.a

              href="#projects"

              whileHover={{
                scale: 1.05,
                y: -4,
              }}

              whileTap={{
                scale: 0.97,
              }}

              className="primary-button"
            >

              Смотреть проекты

            </motion.a>

            {/* SECONDARY */}

            <motion.a

              href="#contact"

              whileHover={{
                scale: 1.05,
                y: -4,
              }}

              whileTap={{
                scale: 0.97,
              }}

              className="secondary-button"
            >

              Связаться

            </motion.a>

          </motion.div>

          {/* STATS */}

          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.7,
              duration: 1,
            }}

            className="hero-stats"
          >

            {[
              {
                value: "24/7",
                label: "AI Infrastructure",
              },

              {
                value: "+320%",
                label: "Automation Efficiency",
              },

              {
                value: "99.9%",
                label: "System Stability",
              },

            ].map((item, index) => (

              <motion.div

                key={index}

                whileHover={{
                  y: -6,
                }}

                className="hero-stat-card"
              >

                <div className="hero-stat-glow" />

                <div className="hero-stat-value">
                  {item.value}
                </div>

                <div className="hero-stat-label">
                  {item.label}
                </div>

              </motion.div>

            ))}

          </motion.div>

        </motion.div>

        {/* FLOATING PANELS */}

        <motion.div

          animate={{
            y: [0, -18, 0],
          }}

          transition={{
            duration: 7,
            repeat: Infinity,
          }}

          className="hero-floating-panel hero-panel-left"
        >

          <div className="floating-panel-header">

            <span />
            <span />
            <span />

          </div>

          <div className="floating-panel-content">

            <div className="floating-line w-100" />
            <div className="floating-line w-80" />
            <div className="floating-line w-60" />

          </div>

        </motion.div>

        <motion.div

          animate={{
            y: [0, 16, 0],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
          }}

          className="hero-floating-panel hero-panel-right"
        >

          <div className="floating-chart">

            <div />
            <div />
            <div />
            <div />

          </div>

        </motion.div>

      </div>

    </section>

  );

}