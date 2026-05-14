export default function Home() {
  return (
    <main className="page">

      {/* NAVBAR */}

      <nav className="navbar">
        <div className="container nav-inner">
          <div className="logo">Эрик.dev</div>

          <div className="nav-links">
            <a href="#hero">Главная</a>
            <a href="#about">Обо мне</a>
            <a href="#projects">Проекты</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero section" id="hero">
        <div className="container">

          <div className="hero-label">
            AI • AUTOMATION • DIGITAL SYSTEMS
          </div>

          <h1 className="hero-title">
            AI Systems
            <br />
            Automation
            <br />
            Digital Products
          </h1>

          <p className="hero-description">
            Создаю AI-инфраструктуру, automation systems,
            SaaS-платформы, intelligent workflows и современные
            digital-продукты нового поколения.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Смотреть проекты
            </a>

            <a href="#contact" className="secondary-btn">
              Связаться
            </a>
          </div>

          <div className="grid-3">

            <div className="card">
              <div className="card-title">
                AI Systems
              </div>

              <div className="card-text">
                OpenAI integration, intelligent workflows,
                AI infrastructure и automation architecture.
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Automation
              </div>

              <div className="card-text">
                CRM systems, Telegram ecosystems,
                scalable automations и digital pipelines.
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Digital Products
              </div>

              <div className="card-text">
                SaaS platforms, premium interfaces,
                web applications и AI experiences.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="section" id="about">
        <div className="container">

          <div className="section-label">
            ОБО МНЕ
          </div>

          <h2 className="section-title">
            Создаю современные
            <br />
            AI-продукты
          </h2>

          <p className="section-description">
            Разрабатываю AI-сервисы, automation systems,
            intelligent workflows, SaaS-платформы
            и premium digital experiences.
          </p>

          <div className="grid-2">

            <div className="card">
              <div className="card-title">
                Кто я
              </div>

              <div className="card-text">
                AI Systems Engineer и developer,
                который строит современные цифровые
                продукты с фокусом на automation,
                AI infrastructure и scalable systems.
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Технологии
              </div>

              <div className="card-text">
                Next.js • React • TypeScript • Tailwind •
                OpenAI API • Node.js • Vercel • Automation
              </div>
            </div>

          </div>

          <div className="terminal">

            <div className="terminal-top">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>

            <div className="terminal-line">
              &gt; Initializing AI infrastructure...
            </div>

            <div className="terminal-line">
              &gt; Connecting automation workflows...
            </div>

            <div className="terminal-line">
              &gt; OpenAI systems online
            </div>

            <div className="terminal-line">
              &gt; CRM ecosystem active
            </div>

            <div className="terminal-line">
              &gt; Telegram integrations connected
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="section" id="projects">
        <div className="container">

          <div className="section-label">
            PROJECTS
          </div>

          <h2 className="section-title">
            Premium AI
            <br />
            Projects
          </h2>

          <p className="section-description">
            Интеллектуальные digital systems,
            automation architecture и AI-инфраструктура.
          </p>

          <div className="grid-2">

            <div className="card">

              <div className="mockup">
                <div className="mockup-grid" />
              </div>

              <div className="card-title">
                AI Assistant
              </div>

              <div className="card-text">
                Intelligent AI ecosystem для automation,
                генерации контента, клиентских процессов
                и digital infrastructure.
              </div>
            </div>

            <div className="card">

              <div className="mockup">
                <div className="mockup-grid" />
              </div>

              <div className="card-title">
                Automation CRM
              </div>

              <div className="card-text">
                Telegram CRM + AI automation systems
                для scalable business infrastructure.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="section" id="contact">
        <div className="container">

          <div className="section-label">
            CONTACT
          </div>

          <h2 className="section-title">
            Let’s build
            <br />
            something
            <br />
            exceptional
          </h2>

          <p className="section-description">
            Открыт для AI systems, automation platforms,
            digital products и современных технологических проектов.
          </p>

          <div className="contact-links">
            <a href="#">Telegram</a>
            <a href="#">GitHub</a>
            <a href="#">Email</a>
          </div>

        </div>
      </section>

    </main>
  );
}