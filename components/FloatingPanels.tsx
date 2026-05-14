"use client";

import { motion } from "framer-motion";

export default function FloatingPanels() {

  return (

    <div className="floating-panels-wrapper">

      {/* PANEL 1 */}

      <motion.div

        animate={{
          y: [0, -18, 0],
          rotate: [0, 1.2, 0],
        }}

        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="floating-panel floating-panel-left"
      >

        {/* GLOW */}

        <div className="floating-panel-glow" />

        {/* HEADER */}

        <div className="floating-panel-header">

          <div className="floating-panel-dots">

            <span />
            <span />
            <span />

          </div>

          <div className="floating-panel-status">

            LIVE

          </div>

        </div>

        {/* CONTENT */}

        <div className="floating-panel-content">

          <div className="floating-panel-title">

            AI Infrastructure

          </div>

          <div className="floating-panel-lines">

            <div className="floating-line w-100" />
            <div className="floating-line w-80" />
            <div className="floating-line w-60" />

          </div>

        </div>

      </motion.div>

      {/* PANEL 2 */}

      <motion.div

        animate={{
          y: [0, 14, 0],
          rotate: [0, -1.2, 0],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="floating-panel floating-panel-right"
      >

        {/* GLOW */}

        <div className="floating-panel-glow" />

        {/* HEADER */}

        <div className="floating-panel-header">

          <div className="floating-panel-dots">

            <span />
            <span />
            <span />

          </div>

          <div className="floating-panel-status">

            ACTIVE

          </div>

        </div>

        {/* CHART */}

        <div className="floating-chart">

          {[1,2,3,4,5].map((item) => (

            <motion.div

              key={item}

              animate={{
                height: [
                  50,
                  120,
                  80,
                  150,
                ],
              }}

              transition={{
                duration: 4 + item,
                repeat: Infinity,
              }}

              className="floating-chart-bar"
            />

          ))}

        </div>

      </motion.div>

      {/* PANEL 3 */}

      <motion.div

        animate={{
          y: [0, -12, 0],
        }}

        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="floating-panel floating-panel-center"
      >

        {/* GLOW */}

        <div className="floating-panel-glow" />

        {/* TOP */}

        <div className="floating-panel-top">

          <div className="floating-panel-badge">

            AI SYSTEM

          </div>

          <div className="floating-panel-online">

            <motion.div

              animate={{
                opacity: [0.4, 1, 0.4],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
              }}

              className="floating-online-dot"
            />

            ONLINE

          </div>

        </div>

        {/* METRICS */}

        <div className="floating-metrics">

          {[

            "98%",
            "24/7",
            "+320%",

          ].map((metric, index) => (

            <motion.div

              key={index}

              whileHover={{
                y: -4,
              }}

              className="floating-metric-card"
            >

              <div className="floating-metric-value">

                {metric}

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </div>

  );

}