"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
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

export default function MobileMenu() {

  const [isOpen, setIsOpen] =
    useState(false);

  return (

    <div className="mobile-menu-wrapper">

      {/* BUTTON */}

      <motion.button

        whileTap={{
          scale: 0.94,
        }}

        onClick={() =>
          setIsOpen(!isOpen)
        }

        className="mobile-menu-button"
      >

        <motion.span

          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 7 : 0,
          }}

        />

        <motion.span

          animate={{
            opacity: isOpen ? 0 : 1,
          }}

        />

        <motion.span

          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -7 : 0,
          }}

        />

      </motion.button>

      {/* MENU */}

      <AnimatePresence>

        {isOpen && (

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.25,
            }}

            className="mobile-menu-overlay"
          >

            {/* BACKGROUND */}

            <div className="mobile-menu-background">

              <div className="mobile-menu-gradient mobile-menu-gradient-1" />

              <div className="mobile-menu-gradient mobile-menu-gradient-2" />

            </div>

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

              exit={{
                opacity: 0,
                y: 40,
              }}

              transition={{
                duration: 0.45,
              }}

              className="mobile-menu-content"
            >

              {/* LOGO */}

              <motion.div

                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                transition={{
                  delay: 0.15,
                }}

                className="mobile-menu-logo"
              >

                <span className="mobile-menu-logo-dot" />

                Эрик.dev

              </motion.div>

              {/* LINKS */}

              <div className="mobile-menu-links">

                {links.map(
                  (link, index) => (

                    <motion.a

                      key={index}

                      href={link.href}

                      initial={{
                        opacity: 0,
                        y: 20,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.1 + index * 0.08,
                      }}

                      whileHover={{
                        x: 6,
                      }}

                      onClick={() =>
                        setIsOpen(false)
                      }

                      className="mobile-menu-link"
                    >

                      <span className="mobile-link-number">

                        0{index + 1}

                      </span>

                      {link.label}

                    </motion.a>

                  )
                )}

              </div>

              {/* FOOTER */}

              <motion.div

                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                transition={{
                  delay: 0.5,
                }}

                className="mobile-menu-footer"
              >

                AI Systems • Automation •
                Digital Products

              </motion.div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );

}