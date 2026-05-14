"use client";

import { motion } from "framer-motion";

const terminalLogs = [
  "Initializing AI infrastructure...",
  "Connecting OpenAI systems...",
  "Launching automation workflows...",
  "Realtime analytics synchronized...",
  "Telegram ecosystem online...",
  "Premium SaaS infrastructure active...",
  "AI deployment completed successfully.",
];

export default function Terminal() {

  return (

    <section
      className="section terminal-section"
    >

      <div className="container">

        {/* HEADING */}

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
          }}

          className="section-heading"
        >

          <div className="section-label">
            AI TERMINAL
          </div>

          <h2 className="section-title">

            Live Infrastructure
            <br />

            Console

          </h2>

          <p className="section-description">

            Realtime AI systems,
            automation logs,
            deployment activity
            и cinematic infrastructure interface.

          </p>

        </motion.div>

        {/* TERMINAL */}

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
          }}

          whileHover={{
            y: -4,
          }}

          className="terminal-shell"
        >

          {/* TOPBAR */}

          <div className="terminal-header">

            <div className="terminal-controls">

              <span className="terminal-dot red" />

              <span className="terminal-dot yellow" />

              <span className="terminal-dot green" />

            </div>

            <div className="terminal-system-title">

              ai.infrastructure.console

            </div>

            <div className="terminal-status">

              ONLINE

            </div>

          </div>

          {/* CONTENT */}

          <div className="terminal-body">

            {/* SYSTEM INFO */}

            <div className="terminal-system-grid">

              <div className="terminal-system-card">

                <div className="terminal-system-label">
                  STATUS
                </div>

                <div className="terminal-system-value">
                  ACTIVE
                </div>

              </div>

              <div className="terminal-system-card">

                <div className="terminal-system-label">
                  LATENCY
                </div>

                <div className="terminal-system-value">
                  12ms
                </div>

              </div>

              <div className="terminal-system-card">

                <div className="terminal-system-label">
                  AI LOAD
                </div>

                <div className="terminal-system-value">
                  98%
                </div>

              </div>

            </div>

            {/* LOGS */}

            <div className="terminal-logs">

              {terminalLogs.map(
                (log, index) => (

                  <motion.div

                    key={index}

                    initial={{
                      opacity: 0,
                      x: -20,
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}

                    className="terminal-log-line"
                  >

                    <span className="terminal-prefix">

                      $

                    </span>

                    <span className="terminal-log-text">

                      {log}

                    </span>

                  </motion.div>

                )
              )}

              {/* CURSOR */}

              <motion.div

                animate={{
                  opacity: [0, 1, 0],
                }}

                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}

                className="terminal-cursor"
              />

            </div>

            {/* LIVE METRICS */}

            <div className="terminal-metrics">

              {[

                {
                  label: "AI Requests",
                  value: "14.2K",
                },

                {
                  label: "Automation Tasks",
                  value: "1.8K",
                },

                {
                  label: "Realtime Events",
                  value: "92K",
                },

              ].map((metric, index) => (

                <motion.div

                  key={index}

                  whileHover={{
                    y: -5,
                  }}

                  className="terminal-metric-card"
                >

                  <div className="terminal-metric-glow" />

                  <div className="terminal-metric-value">

                    {metric.value}

                  </div>

                  <div className="terminal-metric-label">

                    {metric.label}

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}