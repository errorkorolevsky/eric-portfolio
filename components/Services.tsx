"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI Systems",

    description:
      "OpenAI integration, intelligent assistants, AI infrastructure и scalable automation ecosystems.",

    tags: [
      "OpenAI",
      "AI Agents",
      "Automation",
    ],
  },

  {
    title: "Automation",

    description:
      "CRM systems, Telegram workflows, intelligent pipelines и modern automation architecture.",

    tags: [
      "CRM",
      "Telegram",
      "Workflows",
    ],
  },

  {
    title: "Digital Products",

    description:
      "Premium SaaS platforms, dashboards, analytics systems и modern digital ecosystems.",

    tags: [
      "SaaS",
      "Analytics",
      "Dashboards",
    ],
  },
];

export default function Services() {

  return (

    <section
      id="services"
      className="section services-section"
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
            SERVICES
          </div>

          <h2 className="section-title">

            Premium AI
            <br />

            Infrastructure

          </h2>

          <p className="section-description">

            Intelligent systems,
            automation ecosystems,
            scalable infrastructure
            и premium digital products.

          </p>

        </motion.div>

        {/* GRID */}

        <div className="services-grid">

          {services.map(
            (service, index) => (

              <motion.div

                key={index}

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
                  duration: 0.8,
                  delay: index * 0.15,
                }}

                whileHover={{
                  y: -10,
                }}

                className="service-card"
              >

                {/* GLOW */}

                <div className="service-card-glow" />

                {/* TOP */}

                <div className="service-card-top">

                  <div className="service-icon">

                    <motion.div

                      animate={{
                        scale: [1, 1.12, 1],
                      }}

                      transition={{
                        duration: 5,
                        repeat: Infinity,
                      }}

                      className="service-icon-inner"
                    />

                  </div>

                  <div className="service-number">

                    0{index + 1}

                  </div>

                </div>

                {/* TITLE */}

                <h3 className="service-title">

                  {service.title}

                </h3>

                {/* DESCRIPTION */}

                <p className="service-description">

                  {service.description}

                </p>

                {/* TAGS */}

                <div className="service-tags">

                  {service.tags.map(
                    (tag, tagIndex) => (

                      <motion.div

                        key={tagIndex}

                        whileHover={{
                          scale: 1.05,
                        }}

                        className="service-tag"
                      >

                        {tag}

                      </motion.div>

                    )
                  )}

                </div>

                {/* BOTTOM LINE */}

                <motion.div

                  initial={{
                    width: 0,
                  }}

                  whileInView={{
                    width: "100%",
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}

                  className="service-line"
                />

              </motion.div>

            )
          )}

        </div>

        {/* BOTTOM STATS */}

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
            delay: 0.2,
          }}

          className="services-bottom"
        >

          {[
            {
              value: "24/7",
              label: "Automation Systems",
            },

            {
              value: "99.9%",
              label: "Infrastructure Stability",
            },

            {
              value: "+320%",
              label: "Workflow Efficiency",
            },

          ].map((item, index) => (

            <motion.div

              key={index}

              whileHover={{
                y: -6,
              }}

              className="bottom-stat-card"
            >

              <div className="bottom-stat-value">
                {item.value}
              </div>

              <div className="bottom-stat-label">
                {item.label}
              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  );

}