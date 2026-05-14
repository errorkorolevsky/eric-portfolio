"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "98%",
    label: "AI Accuracy",
  },

  {
    value: "24/7",
    label: "Automation Runtime",
  },

  {
    value: "+320%",
    label: "Workflow Growth",
  },

  {
    value: "12ms",
    label: "System Response",
  },
];

const activities = [
  "AI workflow initialized",
  "Telegram automation connected",
  "Realtime analytics updated",
  "OpenAI systems active",
  "Infrastructure synchronized",
];

export default function Dashboard() {

  return (

    <section
      id="dashboard"
      className="section dashboard-section"
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
            LIVE AI SYSTEM
          </div>

          <h2 className="section-title">

            Interactive
            <br />

            AI Dashboard

          </h2>

          <p className="section-description">

            Realtime analytics,
            intelligent infrastructure,
            automation metrics
            и premium SaaS ecosystem.

          </p>

        </motion.div>

        {/* DASHBOARD */}

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
            scale: 1.005,
          }}

          className="dashboard-shell"
        >

          {/* SIDEBAR */}

          <div className="dashboard-sidebar">

            <div className="dashboard-sidebar-logo">

              <div className="dashboard-logo-glow" />

            </div>

            <div className="dashboard-sidebar-menu">

              {[1,2,3,4,5].map((item) => (

                <motion.div

                  key={item}

                  whileHover={{
                    x: 4,
                  }}

                  className="dashboard-menu-item"
                />

              ))}

            </div>

          </div>

          {/* CONTENT */}

          <div className="dashboard-main">

            {/* TOPBAR */}

            <div className="dashboard-topbar">

              <div className="dashboard-search" />

              <div className="dashboard-profile-group">

                <div className="dashboard-notification" />

                <div className="dashboard-avatar" />

              </div>

            </div>

            {/* METRICS */}

            <div className="dashboard-metrics">

              {metrics.map((metric, index) => (

                <motion.div

                  key={index}

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
                    duration: 0.8,
                    delay: index * 0.1,
                  }}

                  whileHover={{
                    y: -6,
                  }}

                  className="dashboard-metric-card"
                >

                  <div className="metric-glow" />

                  <div className="dashboard-metric-value">

                    {metric.value}

                  </div>

                  <div className="dashboard-metric-label">

                    {metric.label}

                  </div>

                </motion.div>

              ))}

            </div>

            {/* CONTENT GRID */}

            <div className="dashboard-content-grid">

              {/* CHART */}

              <div className="dashboard-chart-box">

                <div className="dashboard-box-header">

                  <div className="dashboard-box-title">
                    AI Analytics
                  </div>

                  <div className="dashboard-box-status">
                    LIVE
                  </div>

                </div>

                <div className="dashboard-chart">

                  {[1,2,3,4,5,6,7].map((item) => (

                    <motion.div

                      key={item}

                      animate={{
                        height: [
                          80,
                          160,
                          120,
                          220,
                          140,
                        ],
                      }}

                      transition={{
                        duration: 5 + item,
                        repeat: Infinity,
                      }}

                      className="dashboard-chart-bar"
                    />

                  ))}

                </div>

              </div>

              {/* ACTIVITY */}

              <div className="dashboard-activity-box">

                <div className="dashboard-box-header">

                  <div className="dashboard-box-title">
                    Activity Feed
                  </div>

                  <div className="dashboard-box-status">
                    ONLINE
                  </div>

                </div>

                <div className="dashboard-activity-list">

                  {activities.map(
                    (activity, index) => (

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
                          delay: index * 0.12,
                        }}

                        className="dashboard-activity-item"
                      >

                        <div className="activity-dot" />

                        <span>
                          {activity}
                        </span>

                      </motion.div>

                    )
                  )}

                </div>

              </div>

            </div>

            {/* BOTTOM PANELS */}

            <div className="dashboard-bottom-panels">

              {[1,2,3].map((item) => (

                <motion.div

                  key={item}

                  whileHover={{
                    y: -6,
                  }}

                  className="dashboard-panel"
                >

                  <div className="dashboard-panel-top">

                    <div className="panel-icon" />

                    <div className="panel-status" />

                  </div>

                  <div className="panel-line w-100" />
                  <div className="panel-line w-80" />
                  <div className="panel-line w-60" />

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}