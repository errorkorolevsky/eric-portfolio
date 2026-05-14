"use client";

import { motion } from "framer-motion";

const analytics = [
  {
    value: "98%",
    label: "AI Accuracy",
    height: 180,
  },

  {
    value: "24/7",
    label: "Automation Runtime",
    height: 240,
  },

  {
    value: "+320%",
    label: "Workflow Growth",
    height: 210,
  },

  {
    value: "12ms",
    label: "Response Speed",
    height: 160,
  },
];

export default function AnalyticsChart() {

  return (

    <div className="analytics-chart-shell">

      {/* HEADER */}

      <div className="analytics-chart-header">

        <div>

          <div className="analytics-chart-label">

            REALTIME ANALYTICS

          </div>

          <div className="analytics-chart-title">

            AI Infrastructure Metrics

          </div>

        </div>

        <div className="analytics-chart-status">

          <motion.div

            animate={{
              opacity: [0.4, 1, 0.4],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
            }}

            className="analytics-status-dot"
          />

          LIVE

        </div>

      </div>

      {/* GRID */}

      <div className="analytics-grid">

        {/* CHART */}

        <div className="analytics-chart-box">

          <div className="analytics-chart-background" />

          <div className="analytics-bars">

            {analytics.map(
              (item, index) => (

                <motion.div

                  key={index}

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
                    duration: 0.8,
                    delay: index * 0.1,
                  }}

                  className="analytics-bar-wrapper"
                >

                  <motion.div

                    animate={{
                      height: [
                        item.height * 0.6,
                        item.height,
                        item.height * 0.75,
                        item.height,
                      ],
                    }}

                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                    }}

                    className="analytics-bar"
                  >

                    <div className="analytics-bar-glow" />

                  </motion.div>

                  <div className="analytics-bar-label">

                    {item.label}

                  </div>

                </motion.div>

              )
            )}

          </div>

        </div>

        {/* METRICS */}

        <div className="analytics-metrics">

          {analytics.map(
            (item, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  x: 20,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -5,
                }}

                className="analytics-metric-card"
              >

                <div className="analytics-metric-glow" />

                <div className="analytics-metric-value">

                  {item.value}

                </div>

                <div className="analytics-metric-label">

                  {item.label}

                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </div>

  );

}