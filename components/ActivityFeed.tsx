"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "AI infrastructure initialized",
    time: "2 sec ago",
    status: "active",
  },

  {
    title: "OpenAI systems synchronized",
    time: "12 sec ago",
    status: "success",
  },

  {
    title: "Telegram automation connected",
    time: "24 sec ago",
    status: "active",
  },

  {
    title: "Realtime analytics updated",
    time: "46 sec ago",
    status: "success",
  },

  {
    title: "Premium SaaS ecosystem deployed",
    time: "1 min ago",
    status: "success",
  },

  {
    title: "AI workflow optimization completed",
    time: "2 min ago",
    status: "active",
  },
];

export default function ActivityFeed() {

  return (

    <div className="activity-feed-shell">

      {/* HEADER */}

      <div className="activity-feed-header">

        <div>

          <div className="activity-feed-label">

            LIVE ACTIVITY

          </div>

          <div className="activity-feed-title">

            AI Infrastructure Feed

          </div>

        </div>

        <div className="activity-feed-status">

          <motion.div

            animate={{
              opacity: [0.4, 1, 0.4],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
            }}

            className="activity-status-dot"
          />

          ONLINE

        </div>

      </div>

      {/* FEED */}

      <div className="activity-feed-list">

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
                delay: index * 0.08,
              }}

              whileHover={{
                x: 4,
              }}

              className="activity-feed-item"
            >

              {/* STATUS */}

              <div
                className={`activity-feed-dot ${activity.status}`}
              />

              {/* CONTENT */}

              <div className="activity-feed-content">

                <div className="activity-feed-item-title">

                  {activity.title}

                </div>

                <div className="activity-feed-item-time">

                  {activity.time}

                </div>

              </div>

              {/* GLOW */}

              <div className="activity-feed-glow" />

            </motion.div>

          )
        )}

      </div>

      {/* FOOTER */}

      <div className="activity-feed-footer">

        <motion.div

          animate={{
            opacity: [0.4, 1, 0.4],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}

          className="activity-feed-footer-status"
        >

          ● LIVE SYSTEMS ACTIVE

        </motion.div>

      </div>

    </div>

  );

}