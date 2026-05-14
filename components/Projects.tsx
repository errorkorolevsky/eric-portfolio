"use client";

import { motion } from "framer-motion";

const projects = [
  {
    category: "AI PLATFORM",

    title: "Intelligent Automation",

    description:
      "AI ecosystem для automation workflows, analytics systems, CRM infrastructure и intelligent digital operations.",

    metrics: [
      "OpenAI",
      "Automation",
      "Analytics",
    ],
  },

  {
    category: "SaaS SYSTEM",

    title: "Realtime AI Dashboard",

    description:
      "Premium dashboard ecosystem с realtime metrics, AI infrastructure и scalable SaaS architecture.",

    metrics: [
      "Realtime",
      "Dashboard",
      "Infrastructure",
    ],
  },

  {
    category: "CRM PLATFORM",

    title: "Automation CRM",

    description:
      "CRM automation system с Telegram integrations, AI workflows и intelligent client infrastructure.",

    metrics: [
      "CRM",
      "Telegram",
      "AI Workflows",
    ],
  },

  {
    category: "DIGITAL ECOSYSTEM",

    title: "AI Infrastructure",

    description:
      "Scalable AI systems, deployment architecture, intelligent automation и premium digital ecosystems.",

    metrics: [
      "Cloud",
      "Systems",
      "Deployment",
    ],
  },
];

export default function Projects() {

  return (

    <section
      id="projects"
      className="section projects-section"
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
            PROJECTS
          </div>

          <h2 className="section-title">

            Premium AI
            <br />

            Products

          </h2>

          <p className="section-description">

            Intelligent systems,
            scalable SaaS infrastructure,
            AI ecosystems
            и premium digital experiences.

          </p>

        </motion.div>

        {/* GRID */}

        <div className="projects-grid">

          {projects.map(
            (project, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 50,
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
                  delay: index * 0.12,
                }}

                whileHover={{
                  y: -10,
                }}

                className="project-shell"
              >

                {/* GLOW */}

                <div className="project-glow" />

                {/* PREVIEW */}

                <div className="project-preview">

                  {/* GRID */}

                  <div className="project-preview-grid" />

                  {/* FLOATING UI */}

                  <motion.div

                    animate={{
                      y: [0, -12, 0],
                    }}

                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}

                    className="preview-window preview-window-left"
                  >

                    <div className="preview-window-header">

                      <span />
                      <span />
                      <span />

                    </div>

                    <div className="preview-window-content">

                      <div className="preview-line w-100" />
                      <div className="preview-line w-80" />
                      <div className="preview-line w-60" />

                    </div>

                  </motion.div>

                  <motion.div

                    animate={{
                      y: [0, 10, 0],
                    }}

                    transition={{
                      duration: 7,
                      repeat: Infinity,
                    }}

                    className="preview-window preview-window-right"
                  >

                    <div className="preview-chart">

                      {[1,2,3,4].map((item) => (

                        <motion.div

                          key={item}

                          animate={{
                            height: [
                              50,
                              110,
                              80,
                              140,
                            ],
                          }}

                          transition={{
                            duration: 4 + item,
                            repeat: Infinity,
                          }}

                        />

                      ))}

                    </div>

                  </motion.div>

                  {/* CENTER GLOW */}

                  <motion.div

                    animate={{
                      scale: [1, 1.08, 1],
                    }}

                    transition={{
                      duration: 8,
                      repeat: Infinity,
                    }}

                    className="project-preview-glow"
                  />

                </div>

                {/* CONTENT */}

                <div className="project-content">

                  {/* CATEGORY */}

                  <div className="project-category">

                    {project.category}

                  </div>

                  {/* TITLE */}

                  <h3 className="project-title">

                    {project.title}

                  </h3>

                  {/* DESCRIPTION */}

                  <p className="project-description">

                    {project.description}

                  </p>

                  {/* TAGS */}

                  <div className="project-tags">

                    {project.metrics.map(
                      (metric, metricIndex) => (

                        <motion.div

                          key={metricIndex}

                          whileHover={{
                            scale: 1.05,
                          }}

                          className="project-tag"
                        >

                          {metric}

                        </motion.div>

                      )
                    )}

                  </div>

                  {/* BUTTON */}

                  <motion.a

                    whileHover={{
                      x: 6,
                    }}

                    href="#"

                    className="project-link"
                  >

                    Смотреть проект →

                  </motion.a>

                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>

  );

}