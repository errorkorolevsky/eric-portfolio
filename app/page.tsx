"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Terminal from "@/components/Terminal";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* ADVANCED UI */

import FloatingPanels from "@/components/FloatingPanels";
import AnalyticsChart from "@/components/AnalyticsChart";
import ActivityFeed from "@/components/ActivityFeed";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {

  return (

    <main className="main-layout">

      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <section
        id="hero"
        className="hero-wrapper"
      >

        {/* FLOATING UI */}

        <FloatingPanels />

        {/* HERO */}

        <Hero />

      </section>

      {/* SERVICES */}

      <ScrollReveal>

        <Services />

      </ScrollReveal>

      {/* DASHBOARD */}

      <section
        id="dashboard"
        className="dashboard-section"
      >

        <div className="dashboard-container">

          {/* HEADER */}

          <ScrollReveal>

            <div className="dashboard-header">

              <div className="dashboard-header-left">

                <div className="dashboard-label">
                  AI ANALYTICS
                </div>

                <h2 className="dashboard-title">

                  Intelligent
                  <br />

                  Infrastructure

                </h2>

                <p className="dashboard-description">

                  Premium AI infrastructure,
                  realtime analytics,
                  automation ecosystems
                  и scalable SaaS architecture.

                </p>

              </div>

              <div className="dashboard-status">

                <div className="dashboard-status-dot" />

                <div className="dashboard-status-text">

                  SYSTEMS ONLINE

                </div>

              </div>

            </div>

          </ScrollReveal>

          {/* GRID */}

          <div className="dashboard-grid">

            {/* ANALYTICS */}

            <ScrollReveal delay={0.1}>

              <div className="dashboard-panel">

                <div className="dashboard-panel-glow" />

                <AnalyticsChart />

              </div>

            </ScrollReveal>

            {/* ACTIVITY */}

            <ScrollReveal delay={0.2}>

              <div className="dashboard-panel">

                <div className="dashboard-panel-glow" />

                <ActivityFeed />

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>

      {/* TERMINAL */}

      <ScrollReveal>

        <Terminal />

      </ScrollReveal>

      {/* PROJECTS */}

      <ScrollReveal>

        <Projects />

      </ScrollReveal>

      {/* CONTACT */}

      <ScrollReveal>

        <Contact />

      </ScrollReveal>

      {/* FOOTER */}

      <Footer />

    </main>

  );

}