"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
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

export default function Navbar() {

  const [scrolled, setScrolled] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("hero");

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

      const sections = navItems.map(
        (item) =>
          item.href.replace("#", "")
      );

      sections.forEach((section) => {

        const el =
          document.getElementById(section);

        if (!el) return;

        const top =
          el.offsetTop - 160;

        const bottom =
          top + el.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActiveSection(section);
        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <motion.header

      initial={{
        opacity: 0,
        y: -40,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.9,
      }}

      className={`navbar ${
        scrolled
          ? "navbar-scrolled"
          : ""
      }`}
    >

      <div className="container navbar-container">

        {/* LOGO */}

        <motion.a

          href="#hero"

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: 0.96,
          }}

          className="logo"
        >

          <span className="logo-dot" />

          Эрик.dev

        </motion.a>

        {/* NAVIGATION */}

        <nav className="nav-links">

          {navItems.map((item) => {

            const section =
              item.href.replace("#", "");

            const isActive =
              activeSection === section;

            return (

              <motion.a

                key={item.label}

                href={item.href}

                whileHover={{
                  y: -2,
                }}

                whileTap={{
                  scale: 0.96,
                }}

                className={`nav-link ${
                  isActive
                    ? "nav-link-active"
                    : ""
                }`}
              >

                {item.label}

                {isActive && (

                  <motion.div

                    layoutId="navbar-indicator"

                    className="nav-indicator"

                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  />

                )}

              </motion.a>

            );

          })}

        </nav>

        {/* CTA */}

        <motion.a

          href="#contact"

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: 0.97,
          }}

          className="navbar-cta"
        >

          Start Project

        </motion.a>

      </div>

    </motion.header>

  );
}