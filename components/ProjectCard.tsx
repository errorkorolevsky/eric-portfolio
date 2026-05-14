"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {

  category: string;

  title: string;

  description: string;

  tags: string[];

}

export default function ProjectCard({
  category,
  title,
  description,
  tags,
}: ProjectCardProps) {

  return (

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
        duration: 0.8,
      }}

      whileHover={{
        y: -10,
      }}

      className="project-card-shell"
    >

      {/* GLOW */}

      <div className="project-card-glow" />

      {/* PREVIEW */}

      <div className="project-card-preview">

        {/* GRID */}

        <div className="project-card-grid" />

        {/* FLOATING WINDOW */}

        <motion.div

          animate={{
            y: [0, -10, 0],
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
          }}

          className="project-window project-window-left"
        >

          <div className="project-window-top">

            <span />
            <span />
            <span />

          </div>

          <div className="project-window-content">

            <div className="project-line w-100" />
            <div className="project-line w-80" />
            <div className="project-line w-60" />

          </div>

        </motion.div>

        {/* CHART */}

        <motion.div

          animate={{
            y: [0, 12, 0],
          }}

          transition={{
            duration: 7,
            repeat: Infinity,
          }}

          className="project-window project-window-right"
        >

          <div className="project-chart">

            {[1,2,3,4].map((item) => (

              <motion.div

                key={item}

                animate={{
                  height: [
                    40,
                    100,
                    70,
                    130,
                  ],
                }}

                transition={{
                  duration: 4 + item,
                  repeat: Infinity,
                }}

                className="project-chart-bar"
              />

            ))}

          </div>

        </motion.div>

        {/* CENTER GLOW */}

        <motion.div

          animate={{
            scale: [1, 1.06, 1],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
          }}

          className="project-preview-glow"
        />

      </div>

      {/* CONTENT */}

      <div className="project-card-content">

        {/* CATEGORY */}

        <div className="project-card-category">

          {category}

        </div>

        {/* TITLE */}

        <h3 className="project-card-title">

          {title}

        </h3>

        {/* DESCRIPTION */}

        <p className="project-card-description">

          {description}

        </p>

        {/* TAGS */}

        <div className="project-card-tags">

          {tags.map(
            (tag, index) => (

              <motion.div

                key={index}

                whileHover={{
                  scale: 1.05,
                }}

                className="project-card-tag"
              >

                {tag}

              </motion.div>

            )
          )}

        </div>

        {/* BUTTON */}

        <motion.a

          href="#"

          whileHover={{
            x: 6,
          }}

          className="project-card-link"
        >

          Смотреть проект →

        </motion.a>

      </div>

    </motion.div>

  );

}