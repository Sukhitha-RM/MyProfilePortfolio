import './App.css'

const skillGroups = [
  { title: 'Programming', items: ['C', 'C++', 'Python', 'Python (Currently Learning)'] },
  { title: 'Frontend', items: ['HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js (Currently Learning)', 'Express.js (Currently Learning)'] },
  { title: 'Database & Cloud', items: ['MySQL', 'Firebase'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
  { title: 'Other Interests', items: ['Robotics', 'Animation'] },
]

const certifications = [
  {
    title: 'Oracle APEX Cloud Developer Certified Professional',
    issuer: 'Oracle University',
    date: 'October 31, 2025',
    featured: true,
    file: '/certificates/oracck%20appex.jpg',
  },
  {
    title: 'MySQL Database Development: Database Design Fundamentals',
    date: 'October 7, 2025',
    file: '/certificates/MYSQL_DATABASE_DEVELOPMENT%20%281%29.pdf',
  },
  {
    title: 'Introduction to Deep Learning',
    date: 'October 6, 2026',
    file: '/certificates/robotic%20course.pdf',
  },
  {
    title: 'Applying AI to Robotics',
    date: 'October 8, 2026',
    file: '/certificates/applying%20ai%20to%20robotics%20certification%20%282%29.pdf',
  },
  {
    title: 'Fundamentals of Machine Learning',
    date: 'October 8, 2026',
    file: '/certificates/Fundamentals%20of%20Machine%20Learning%20Certification%20%281%29.pdf',
  },
]

function App() {
  return (
    <main className="portfolio-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Sukhitha R Mopagar home">
          <span className="brand-mark">S</span>
          <span>SUKHITHA R MOPAGAR<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> B.Tech Robotics Engineering Student | Aspiring Web Developer.</p>
          <h1>
            Turning ideas into
            <br />
            <span className="accent-line">meaningful digital</span>
            <br />
            experiences.
          </h1>
          <p className="hero-description">
            I&apos;m Sukhitha, a B.Tech Robotics Engineering student passionate about
            web development, creative technology and building meaningful solutions.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a className="text-button" href="#about">
              More about me <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-meta" aria-label="Availability">
            <span className="status-dot" />
            <span>Available for select projects</span>
          </div>
        </div>

        <div className="hero-portrait" aria-label="Portrait of Sukhitha R Mopagar">
          <div className="portrait-glow" />
          <div className="portrait-frame">
            <img src="/MyProfile.jpeg" alt="Sukhitha R Mopagar" />
            <div className="portrait-label">SUKHITHA / 2024</div>
          </div>
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <span className="spark spark-one" />
          <span className="spark spark-two" />
        </div>
      </section>

      <section className="scroll-cue" aria-label="Scroll for more">
        <span className="scroll-line" />
        <span>Scroll to explore</span>
      </section>

      <section className="content-section about-section" id="about">
        <div className="section-heading">
          <p className="section-kicker">01 / About me</p>
          <h2>Curiosity drives the work.</h2>
        </div>
        <div className="about-content">
          <p className="about-lead">
            I am a B.Tech student specializing in AI &amp; ML in Robotics Engineering,
            passionate about web development, technology and creative problem-solving.
            I enjoy transforming ideas into meaningful digital experiences by combining
            creativity with technical knowledge. Alongside my interest in building
            modern and user-friendly websites, I am fascinated by Robotics, Artificial
            Intelligence and Machine Learning. My goal is to grow as a skilled Web
            Developer, create impactful digital solutions and continuously explore
            emerging technologies.
          </p>
          <div className="about-details">
            <div>
              <span className="detail-label">Education</span>
              <strong>B.Tech in AI &amp; ML in Robotics Engineering</strong>
            </div>
            <div>
              <span className="detail-label">Interests</span>
              <strong>Web development, robotics, coding, animation &amp; web design</strong>
            </div>
            <div>
              <span className="detail-label">Also exploring</span>
              <strong>Artificial Intelligence &amp; Machine Learning</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section skills-section" id="skills">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">02 / Technical skills</p>
            <h2>Tools for thoughtful work.</h2>
          </div>
          <p className="section-note">
            A growing collection of technologies I use and explore.
          </p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article className="info-card skill-card" key={group.title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">03 / Selected projects</p>
            <h2>Building for connection.</h2>
          </div>
          <p className="section-note">
            One project currently in development.
          </p>
        </div>
        <div className="project-grid">
          <article className="info-card project-card">
            <div className="project-card-top">
              <span className="card-number">01</span>
              <span className="project-status">Currently developing</span>
            </div>
            <h3>CampusConnect</h3>
            <p className="project-description">
              An independently developed event discovery and management platform
              designed to connect college students through campus and inter-college events.
            </p>
            <div className="project-purpose">
              <span className="detail-label">Purpose &amp; planned functionality</span>
              <ul>
                <li>Broadcast, create and publish upcoming college events.</li>
                <li>Help students discover and attend campus events.</li>
                <li>Support inter-college event discovery and participation.</li>
                <li>Support campus event management.</li>
              </ul>
            </div>
            <div className="project-stack">
              <span className="detail-label">Proposed technology stack</span>
              <p>Frontend: HTML, CSS, JavaScript, React</p>
              <p>Backend: Node.js, Express.js</p>
              <p>Database: MySQL</p>
              <p>Tools: Git, GitHub</p>
              <span className="project-stack-note">
                Proposed for the project; not implemented in this portfolio repository.
              </span>
            </div>
            <div className="project-links">
              <span>GitHub link not provided</span>
              <span>Live demo not provided</span>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section education-section" id="education">
        <div className="section-heading">
          <p className="section-kicker">04 / Education</p>
          <h2>Learning with intention.</h2>
        </div>
        <div className="education-layout">
          <article className="education-primary">
            <span className="detail-label">2024 — 2028</span>
            <h3>Bachelor of Technology (B.Tech)</h3>
            <p className="education-branch">AI &amp; ML in Robotics Engineering</p>
            <p className="education-university">Garden City University</p>
            <span className="education-status">Expected graduation: 2028</span>
          </article>
          <div className="education-note">
            <span className="detail-label">Academic focus</span>
            <p>AI and machine learning applied to robotics, alongside a growing focus on web development.</p>
          </div>
        </div>
      </section>

      <section className="content-section certifications-section" id="certifications">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">05 / Certifications</p>
            <h2>Proof of continued learning.</h2>
          </div>
          <p className="section-note">
            Professional certification and course-completion credentials.
          </p>
        </div>
        <div className="certification-grid">
          {certifications.map((certification) => (
            <article
              className={`info-card certification-card${certification.featured ? ' certification-featured' : ''}`}
              key={certification.title}
            >
              <span className="certification-type">
                {certification.featured ? 'Professional certification' : 'Course completion'}
              </span>
              <h3>{certification.title}</h3>
              {certification.issuer && <p className="certification-issuer">{certification.issuer}</p>}
              <p className="certification-date">{certification.date}</p>
              <a
                className="certification-link"
                href={certification.file}
                target="_blank"
                rel="noreferrer"
              >
                View Certificate <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="contact-heading">
          <p className="section-kicker">06 / Contact</p>
          <h2>Let&apos;s make something meaningful.</h2>
          <p>Have an idea or an opportunity to share? I&apos;d be happy to hear from you.</p>
        </div>
        <div className="contact-links" aria-label="Contact details">
          <div className="contact-link">
            <span className="detail-label">Email</span>
            <a href="mailto:sukhitharmopagar@gmail.com">sukhitharmopagar@gmail.com</a>
          </div>
          <div className="contact-link">
            <span className="detail-label">Phone</span>
            <a href="tel:+917019343924">+91 7019343924</a>
          </div>
          <div className="contact-link">
            <span className="detail-label">GitHub</span>
            <a href="https://github.com/Sukhitha-RM" target="_blank" rel="noreferrer">
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.99c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
              Sukhitha-RM
            </a>
          </div>
          <div className="contact-link">
            <span className="detail-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/sukhitha-r-mopagar-ab0b8b382" target="_blank" rel="noreferrer">
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.06 2.06 0 1 0 4.75 7.12 2.06 2.06 0 0 0 4.75 3ZM21 13.84c0-3.77-2-5.52-4.68-5.52a4.04 4.04 0 0 0-3.67 2.02V8.5H9.15V21h3.5v-6.19c0-1.63.31-3.2 2.32-3.2 1.98 0 2 1.86 2 3.31V21H21v-7.16Z" />
              </svg>
              Sukhitha R Mopagar
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Sukhitha R Mopagar</span>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </main>
  )
}

export default App
