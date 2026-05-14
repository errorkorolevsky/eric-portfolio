"use client";

import { motion } from "framer-motion";

const footerLinks = [
  {
    label: "Telegram",
    href: "https://t.me/ericilyano",
  },

  {
    label: "GitHub",
    href: "https://github.com/errorkorolevsky",
  },

  {
    label: "Email",
    href: "mailto:artemfi435@gmail.com",
  },
];

const navigation = [
  {
    label: "Главная",
    href: "#hero",
  },

  {
    label: "Услуги",
    href: "#services",
  },

  {
    label: "Dashboard",
    href: "#dashboard",
  },

  {
    label: "Проекты",
    href: "#projects",
  },

  {
    label: "Контакты",
    href: "#contact",
  },
];

export default function Footer() {

  return (

    <footer className="footer-section">

      {/* BACKGROUND */}

      <div className="footer-background">

        <div className="footer-gradient footer-gradient-1" />

        <div className="footer-gradient footer-gradient-2" />

      </div>

      <div className="container">

        {/* TOP */}

        <div className="footer-top">

          {/* BRAND */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1,
            }}

            className="footer-brand"
          >

            <motion.div

              whileHover={{
                scale: 1.04,
              }}

              className="footer-logo"
            >

              <span className="footer-logo-dot" />

              Эрик.dev

            </motion.div>

            <p className="footer-description">

              Premium AI systems,
              intelligent automation,
              SaaS infrastructure
              и современные digital ecosystems.

            </p>

          </motion.div>

          {/* NAVIGATION */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1,
              delay: 0.1,
            }}

            className="footer-navigation"
          >

            <div className="footer-heading">
              Navigation
            </div>

            <div className="footer-links">

              {navigation.map(
                (item, index) => (

                  <motion.a

                    key={index}

                    href={item.href}

                    whileHover={{
                      x: 4,
                    }}

                    className="footer-link"
                  >

                    {item.label}

                  </motion.a>

                )
              )}

            </div>

          </motion.div>

          {/* CONTACTS */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1,
              delay: 0.2,
            }}

            className="footer-contacts"
          >

            <div className="footer-heading">
              Connect
            </div>

            <div className="footer-links">

              {footerLinks.map(
                (item, index) => (

                  <motion.a

                    key={index}

                    href={item.href}

                    target="_blank"

                    whileHover={{
                      x: 4,
                    }}

                    className="footer-link"
                  >

                    {item.label}

                  </motion.a>

                )
              )}

            </div>

          </motion.div>

        </div>

        {/* CENTER PANEL */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 0.25,
          }}

          className="footer-panel"
        >

          {/* GLOW */}

          <div className="footer-panel-glow" />

          {/* CONTENT */}

          <div className="footer-panel-content">

            <div className="footer-panel-left">

              <div className="footer-panel-label">

                AI SYSTEM STATUS

              </div>

              <div className="footer-panel-title">

                All infrastructure systems operational

              </div>

            </div>

            <div className="footer-panel-right">

              <motion.div

                animate={{
                  opacity: [0.5, 1, 0.5],
                }}

                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}

                className="footer-status-dot"
              />

              ONLINE

            </div>

          </div>

        </motion.div>

        {/* BOTTOM */}

        <motion.div

          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 0.3,
          }}

          className="footer-bottom"
        >

          <div className="footer-copyright">

            © 2026 Эрик.dev — AI Systems Engineer

          </div>

          <div className="footer-powered">

            Powered by Next.js • AI • Automation

          </div>

        </motion.div>

      </div>

    </footer>

  );

}