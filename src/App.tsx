import { useState, useEffect } from 'react'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

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

function SkillIllustration({ category }: { category: string }) {
  switch (category) {
    case 'Programming':
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <path d="M18 18h44v44H18zM18 31h44M27 25h1M33 25h1M39 25h1M31 40l-8 7 8 7M49 40l8 7-8 7M45 36l-9 23" />
        </svg>
      )
    case 'Frontend':
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <rect x="13" y="18" width="54" height="44" rx="7" />
          <path d="M13 31h54M23 25h1M29 25h1M35 25h1M24 40h15M24 47h28M24 54h21M54 40v14M47 47h14" />
        </svg>
      )
    case 'Backend':
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="23" cy="25" r="8" /><circle cx="57" cy="25" r="8" /><circle cx="40" cy="56" r="8" />
          <path d="m29 29 7 19M51 29l-7 19M31 25h18M16 63h48" />
        </svg>
      )
    case 'Database & Cloud':
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <ellipse cx="29" cy="27" rx="14" ry="6" /><path d="M15 27v25c0 4 6 7 14 7s14-3 14-7V27M15 39c0 4 6 7 14 7s14-3 14-7" />
          <path d="M51 55h13a8 8 0 0 0 0-16 11 11 0 0 0-21-1 8 8 0 0 0 8 17Z" />
        </svg>
      )
    case 'Tools':
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <path d="M55 16a15 15 0 0 0-15 18L19 55a7 7 0 1 0 10 10l21-21a15 15 0 0 0 18-15l-10 5-8-8 5-10Z" />
          <path d="m19 55 6 6M53 44l-8-8" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <rect x="18" y="24" width="44" height="34" rx="10" />
          <path d="M40 14v10M31 14h18M12 41h6M62 41h6M27 58v7M53 58v7M30 41h1M49 41h1M32 50c5 3 11 3 16 0" />
        </svg>
      )
  }
}

function WatercolorDetails() {
  return (
    <>
      <span className="wc-paint-mark wc-paint-mark--one" aria-hidden="true" />
      <span className="wc-paint-mark wc-paint-mark--two" aria-hidden="true" />
    </>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeCertificate, setActiveCertificate] = useState<(typeof certifications)[number] | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-watercolor-reveal]')
    )

    if (
      revealNodes.length === 0 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      revealNodes.forEach((node) => node.classList.add('is-painted'))
      return
    }

    document.documentElement.classList.add('watercolor-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-painted')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    revealNodes.forEach((node) => observer.observe(node))

    let scrollFrame = 0
    const revealVisibleNodes = () => {
      cancelAnimationFrame(scrollFrame)
      scrollFrame = requestAnimationFrame(() => {
        revealNodes.forEach((node) => {
          if (node.classList.contains('is-painted')) return
          const rect = node.getBoundingClientRect()
          if (rect.bottom > 24 && rect.top < window.innerHeight - 24) {
            node.classList.add('is-painted')
            observer.unobserve(node)
          }
        })
      })
    }
    window.addEventListener('scroll', revealVisibleNodes, { passive: true })
    document.addEventListener('scroll', revealVisibleNodes, { passive: true })
    window.addEventListener('resize', revealVisibleNodes, { passive: true })
    revealVisibleNodes()
    const revealCheck = window.setTimeout(revealVisibleNodes, 120)
    const revealCheckLate = window.setTimeout(revealVisibleNodes, 600)
    const revealSweep = window.setInterval(() => {
      revealVisibleNodes()
      if (revealNodes.every((node) => node.classList.contains('is-painted'))) {
        window.clearInterval(revealSweep)
      }
    }, 300)

    // Cover browsers and layouts that report an initial zero-area intersection
    // for a freshly clipped section by checking the viewport once after setup.
    revealNodes.forEach((node) => {
      const rect = node.getBoundingClientRect()
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        node.classList.add('is-painted')
        observer.unobserve(node)
      }
    })

    return () => {
      cancelAnimationFrame(scrollFrame)
      window.clearTimeout(revealCheck)
      window.clearTimeout(revealCheckLate)
      window.clearInterval(revealSweep)
      window.removeEventListener('scroll', revealVisibleNodes)
      document.removeEventListener('scroll', revealVisibleNodes)
      window.removeEventListener('resize', revealVisibleNodes)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!activeCertificate) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveCertificate(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [activeCertificate])

  // Close mobile menu on link click
  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label="Sukhitha R Mopagar home">
            <span className="brand-mark">S</span>
            <span className="brand-name">
              Sukhitha<span className="brand-dot">.</span>
            </span>
          </a>

          <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleNavClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav-cta" href="#contact" aria-label="Get in touch">
            Let&apos;s talk <span aria-hidden="true">✦</span>
          </a>

          <button
            className={`nav-burger${menuOpen ? ' nav-burger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <main className="portfolio-shell">

      <section className="hero-section journal-hero wc-reveal wc-reveal--wash" id="home" aria-labelledby="hero-name" data-watercolor-reveal>
        <WatercolorDetails />
        <div className="hero-paper-grain" aria-hidden="true" />
        <div className="paint-wash paint-wash--rose" aria-hidden="true" />
        <div className="paint-wash paint-wash--violet" aria-hidden="true" />
        <span className="hero-page-number" aria-hidden="true">01</span>

        <div className="hero-copy">
          <p className="journal-note">
            <span className="journal-note-line" />
            A page from my sketchbook
          </p>
          <p className="hero-identity">Robotics engineering student <i>•</i> programmer <i>•</i> artist</p>

          <h1 id="hero-name" className="hero-name">
            <span>Sukhitha</span>
            <em>R Mopagar</em>
          </h1>

          <div className="hero-introduction">
            <p className="hero-role">B.Tech Robotics Engineering Student | Aspiring Web Developer.</p>
            <h2>
              Turning ideas into <span>meaningful digital</span> experiences.
            </h2>
            <p className="hero-description">
              I&apos;m Sukhitha, a B.Tech Robotics Engineering student passionate about
              web development, creative technology and building meaningful solutions.
            </p>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              <span className="button-flower" aria-hidden="true">✦</span>
              Explore my world <span className="button-arrow" aria-hidden="true">↗</span>
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

        <div className="hero-art" aria-label="Portrait of Sukhitha R Mopagar">
          <svg className="floral floral--left" viewBox="0 0 230 285" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M112 282C104 225 124 184 105 127C91 85 59 58 22 26" strokeWidth="2.1" />
              <path d="M112 220C82 196 48 192 16 199" strokeWidth="1.55" />
              <path d="M114 181C149 155 168 125 166 78" strokeWidth="1.7" />
              <path d="M106 143C76 124 48 117 24 122" strokeWidth="1.55" />
              <path d="M78 195C53 177 30 177 17 193C32 209 55 210 78 195Z" fill="rgba(151, 173, 139, .28)" />
              <path d="M132 159C146 135 167 127 185 135C180 157 159 169 132 159Z" fill="rgba(151, 173, 139, .28)" />
              <path d="M75 123C54 103 31 103 18 117C32 136 55 138 75 123Z" fill="rgba(151, 173, 139, .22)" />
              <path d="M102 126C91 104 96 83 113 72C129 89 123 111 102 126Z" fill="rgba(151, 173, 139, .24)" />
              <path d="M166 78C151 62 151 41 167 28C185 45 183 65 166 78Z" fill="rgba(151, 173, 139, .22)" />
            </g>
            <g fill="rgba(216, 157, 171, .44)" stroke="rgba(144, 80, 101, .48)" strokeWidth="1.1">
              <ellipse cx="22" cy="26" rx="12" ry="29" transform="rotate(-38 22 26)" />
              <ellipse cx="22" cy="26" rx="12" ry="29" transform="rotate(34 22 26)" />
              <ellipse cx="22" cy="26" rx="12" ry="29" transform="rotate(106 22 26)" />
              <ellipse cx="22" cy="26" rx="12" ry="29" transform="rotate(178 22 26)" />
              <circle cx="22" cy="26" r="7" fill="rgba(238, 188, 132, .7)" stroke="none" />
            </g>
          </svg>

          <div className="paint-pool paint-pool--one" aria-hidden="true" />
          <div className="paint-pool paint-pool--two" aria-hidden="true" />
          <div className="portrait-frame">
            <span className="tape tape--top" aria-hidden="true" />
            <img src="/MyProfile.jpeg" alt="Sukhitha R Mopagar" />
            <p className="portrait-caption">ideas in progress</p>
          </div>

          <svg className="floral floral--right" viewBox="0 0 250 300" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M34 283C71 239 105 207 117 151C126 108 116 61 138 18" strokeWidth="2" />
              <path d="M73 235C104 223 126 230 150 253" strokeWidth="1.6" />
              <path d="M101 191C70 172 42 169 18 180" strokeWidth="1.5" />
              <path d="M119 151C153 142 179 119 187 87" strokeWidth="1.5" />
              <path d="M75 236C82 211 102 202 121 210C114 234 96 244 75 236Z" fill="rgba(151, 173, 139, .24)" />
              <path d="M101 191C83 172 60 172 47 188C64 204 87 205 101 191Z" fill="rgba(151, 173, 139, .24)" />
              <path d="M120 151C139 130 163 128 178 144C160 162 137 165 120 151Z" fill="rgba(151, 173, 139, .22)" />
            </g>
            <g fill="rgba(194, 173, 214, .46)" stroke="rgba(112, 89, 136, .52)" strokeWidth="1.1">
              <ellipse cx="138" cy="18" rx="13" ry="31" transform="rotate(-38 138 18)" />
              <ellipse cx="138" cy="18" rx="13" ry="31" transform="rotate(34 138 18)" />
              <ellipse cx="138" cy="18" rx="13" ry="31" transform="rotate(106 138 18)" />
              <ellipse cx="138" cy="18" rx="13" ry="31" transform="rotate(178 138 18)" />
              <circle cx="138" cy="18" r="7" fill="rgba(238, 188, 132, .7)" stroke="none" />
            </g>
          </svg>

          <span className="drawn-star drawn-star--one" aria-hidden="true">✦</span>
          <span className="drawn-star drawn-star--two" aria-hidden="true">✧</span>
          <span className="drawn-star drawn-star--three" aria-hidden="true">✦</span>
          <p className="art-annotation" aria-hidden="true">dream · build · bloom</p>
        </div>
      </section>

      <section className="scroll-cue wc-reveal" aria-label="Scroll for more" data-watercolor-reveal>
        <span className="scroll-line" />
        <span>Scroll to explore</span>
      </section>

      <section className="content-section about-section scrapbook-about wc-reveal wc-reveal--wash" id="about" aria-labelledby="about-title" data-watercolor-reveal>
        <WatercolorDetails />
        <div className="about-wash about-wash--pink" aria-hidden="true" />
        <div className="about-wash about-wash--purple" aria-hidden="true" />
        <div className="about-heading">
          <div>
            <p className="section-kicker">01 / About me</p>
            <h2 id="about-title">Curiosity drives the work.</h2>
          </div>
          <p className="about-hand-note">a little page from my world</p>
        </div>

        <div className="scrapbook-layout">
          <aside className="about-photo-note" aria-label="Profile photograph of Sukhitha R Mopagar">
            <span className="photo-tape photo-tape--left" aria-hidden="true" />
            <span className="photo-tape photo-tape--right" aria-hidden="true" />
            <span className="photo-scribble photo-scribble--one" aria-hidden="true">✦</span>
            <span className="photo-scribble photo-scribble--two" aria-hidden="true">✧</span>
            <div className="about-photo-frame">
              <img src="/MyProfile.jpeg" alt="Sukhitha R Mopagar" />
            </div>
            <p className="photo-caption">collecting ideas &amp; making them real</p>
            <svg className="about-flower about-flower--photo" viewBox="0 0 150 145" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M80 143C76 105 91 77 70 43" strokeWidth="1.8" />
                <path d="M77 104C57 89 39 89 25 100C39 115 58 117 77 104Z" fill="rgba(166, 188, 151, .27)" />
                <path d="M77 80C94 63 112 63 125 75C110 90 92 92 77 80Z" fill="rgba(166, 188, 151, .24)" />
              </g>
              <g fill="rgba(222, 163, 179, .45)" stroke="rgba(155, 93, 112, .45)" strokeWidth="1">
                <ellipse cx="70" cy="43" rx="10" ry="24" transform="rotate(-40 70 43)" />
                <ellipse cx="70" cy="43" rx="10" ry="24" transform="rotate(38 70 43)" />
                <ellipse cx="70" cy="43" rx="10" ry="24" transform="rotate(108 70 43)" />
                <ellipse cx="70" cy="43" rx="10" ry="24" transform="rotate(179 70 43)" />
                <circle cx="70" cy="43" r="5" fill="rgba(238, 188, 132, .8)" stroke="none" />
              </g>
            </svg>
          </aside>

          <div className="about-story">
            <article className="about-bio-card">
              <span className="bio-card-pin" aria-hidden="true" />
              <span className="bio-card-corner" aria-hidden="true" />
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
              <span className="bio-signoff" aria-hidden="true">notes from my journal</span>
            </article>

            <div className="about-records">
              <div className="about-record about-record--rose">
                <span className="detail-label">Education</span>
                <strong>B.Tech in AI &amp; ML in Robotics Engineering</strong>
              </div>
              <div className="about-record about-record--lavender">
                <span className="detail-label">Interests</span>
                <strong>Web development, robotics, coding, animation &amp; web design</strong>
              </div>
              <div className="about-record about-record--sage">
                <span className="detail-label">Also exploring</span>
                <strong>Artificial Intelligence &amp; Machine Learning</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="interest-scrapbook" aria-label="Creative and technical interests">
          <div className="interest-heading">
            <span className="interest-heading-line" aria-hidden="true" />
            <p>Things that inspire me</p>
          </div>
          <div className="interest-cards">
            <article className="interest-card interest-card--robotics">
              <svg viewBox="0 0 76 76" aria-hidden="true">
                <rect x="17" y="23" width="42" height="32" rx="10" />
                <path d="M38 14v9M30 14h16M12 39h5M59 39h5M24 55v8M52 55v8" />
                <circle cx="30" cy="39" r="3" /><circle cx="46" cy="39" r="3" />
                <path d="M31 48c5 3 9 3 14 0" />
              </svg>
              <span>Robotics</span>
            </article>
            <article className="interest-card interest-card--coding">
              <svg viewBox="0 0 76 76" aria-hidden="true">
                <rect x="12" y="16" width="52" height="42" rx="6" />
                <path d="M12 28h52M21 22h1M27 22h1M33 22h1M29 37l-8 7 8 7M47 37l8 7-8 7M42 34l-8 21" />
              </svg>
              <span>Coding</span>
            </article>
            <article className="interest-card interest-card--painting">
              <svg viewBox="0 0 76 76" aria-hidden="true">
                <path d="M58 29C58 16 45 10 34 13 20 17 14 32 19 45c5 14 19 18 29 12 5-3 2-9-2-9h-5c-8 0-9-11-2-13 4-1 7 2 10 0 4-2 9-1 9-6Z" />
                <circle cx="29" cy="28" r="3" /><circle cx="23" cy="37" r="3" /><circle cx="34" cy="20" r="3" />
                <path d="M51 52l12 12M55 56l5-5" />
              </svg>
              <span>Painting</span>
            </article>
            <article className="interest-card interest-card--drawing">
              <svg viewBox="0 0 76 76" aria-hidden="true">
                <path d="M18 57 23 44 50 17l9 9-27 27-14 4Z" />
                <path d="m45 22 9 9M18 57l11-3-8-8-3 11ZM15 63h45" />
              </svg>
              <span>Drawing</span>
            </article>
            <article className="interest-card interest-card--music">
              <svg viewBox="0 0 76 76" aria-hidden="true">
                <path d="M47 16v37M47 18l17-5v34M47 29l17-5" />
                <ellipse cx="37" cy="55" rx="9" ry="6" transform="rotate(-20 37 55)" />
                <ellipse cx="54" cy="49" rx="9" ry="6" transform="rotate(-20 54 49)" />
              </svg>
              <span>Music</span>
            </article>
          </div>
          <svg className="about-flower about-flower--interests" viewBox="0 0 150 145" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M80 143C76 105 91 77 70 43" strokeWidth="1.8" />
              <path d="M77 104C57 89 39 89 25 100C39 115 58 117 77 104Z" fill="rgba(166, 188, 151, .27)" />
              <path d="M77 80C94 63 112 63 125 75C110 90 92 92 77 80Z" fill="rgba(166, 188, 151, .24)" />
            </g>
            <g fill="rgba(198, 180, 220, .48)" stroke="rgba(125, 103, 148, .45)" strokeWidth="1">
              <ellipse cx="70" cy="43" rx="10" ry="24" transform="rotate(-40 70 43)" />
              <ellipse cx="70" cy="43" rx="10" ry="24" transform="rotate(38 70 43)" />
              <ellipse cx="70" cy="43" rx="10" ry="24" transform="rotate(108 70 43)" />
              <ellipse cx="70" cy="43" rx="10" ry="24" transform="rotate(179 70 43)" />
              <circle cx="70" cy="43" r="5" fill="rgba(238, 188, 132, .8)" stroke="none" />
            </g>
          </svg>
        </div>
      </section>

      <section className="content-section skills-section watercolor-skills wc-reveal wc-reveal--wash" id="skills" aria-labelledby="skills-title" data-watercolor-reveal>
        <WatercolorDetails />
        <div className="skills-wash skills-wash--left" aria-hidden="true" />
        <div className="skills-wash skills-wash--right" aria-hidden="true" />
        <span className="skills-doodle skills-doodle--one" aria-hidden="true">✦</span>
        <span className="skills-doodle skills-doodle--two" aria-hidden="true">✧</span>
        <div className="section-heading section-heading-row skills-heading">
          <div>
            <p className="section-kicker">02 / Technical skills</p>
            <h2 id="skills-title">Tools for thoughtful work.</h2>
          </div>
          <p className="section-note">
            A growing collection of technologies I use and explore.
          </p>
        </div>
        <div className="skill-gallery">
          {skillGroups.map((group, index) => (
            <article className={`skill-card skill-card--${index + 1}`} key={group.title}>
              <span className="skill-card-wash" aria-hidden="true" />
              <div className="skill-card-top">
                <span className="card-number">0{index + 1}</span>
                <span className="skill-paint-swatch" aria-hidden="true" />
              </div>
              <div className="skill-illustration">
                <SkillIllustration category={group.title} />
              </div>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section projects-section watercolor-projects wc-reveal wc-reveal--wash" id="projects" aria-labelledby="projects-title" data-watercolor-reveal>
        <WatercolorDetails />
        <div className="projects-wash projects-wash--left" aria-hidden="true" />
        <div className="projects-wash projects-wash--right" aria-hidden="true" />
        <span className="projects-doodle projects-doodle--one" aria-hidden="true">✦</span>
        <span className="projects-doodle projects-doodle--two" aria-hidden="true">✧</span>
        <div className="section-heading section-heading-row projects-heading">
          <div>
            <p className="section-kicker">03 / Selected projects</p>
            <h2 id="projects-title">Building for connection.</h2>
          </div>
          <p className="section-note">
            One project currently in development.
          </p>
        </div>

        <div className="project-gallery" aria-label="Selected project gallery">
          <article className="project-artwork">
            <div className="project-canvas" aria-hidden="true">
              <span className="canvas-wash canvas-wash--rose" />
              <span className="canvas-wash canvas-wash--violet" />
              <span className="canvas-wash canvas-wash--sage" />
              <svg className="canvas-drawing" viewBox="0 0 420 318">
                <path d="M22 236C96 177 164 258 229 190S347 139 401 88" />
                <path d="M17 260C84 202 157 285 225 219S347 172 406 117" />
                <path d="M87 272c-11-26-30-43-60-51M89 273c14-22 34-34 58-34M306 171c-7-28 0-49 23-68M306 171c22-15 43-17 65-6" />
                <circle cx="172" cy="105" r="3" /><circle cx="192" cy="89" r="2" /><circle cx="220" cy="112" r="3" />
              </svg>
              <span className="canvas-spark canvas-spark--one">✦</span>
              <span className="canvas-spark canvas-spark--two">✧</span>
              <p className="canvas-title">CampusConnect</p>
              <p className="canvas-note">work in progress</p>
            </div>

            <div className="project-info-paper">
              <div className="project-card-top">
                <span className="card-number">01</span>
                <span className="project-status">Currently developing</span>
              </div>
              <div className="project-title-row">
                <span className="project-title-brush" aria-hidden="true" />
                <h3>CampusConnect</h3>
              </div>
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
            </div>
          </article>
        </div>
      </section>

      <section className="content-section education-section watercolor-education wc-reveal wc-reveal--wash" id="education" aria-labelledby="education-title" data-watercolor-reveal>
        <WatercolorDetails />
        <div className="education-wash education-wash--rose" aria-hidden="true" />
        <div className="education-wash education-wash--lavender" aria-hidden="true" />
        <span className="education-doodle education-doodle--one" aria-hidden="true">✦</span>
        <span className="education-doodle education-doodle--two" aria-hidden="true">✧</span>

        <div className="section-heading section-heading-row education-heading">
          <div>
            <p className="section-kicker">04 / Education</p>
            <h2 id="education-title">Learning with intention.</h2>
          </div>
          <p className="section-note">
            Academic foundation combining robotics engineering and modern software development.
          </p>
        </div>

        <div className="education-layout">
          <article className="education-primary-card">
            <span className="edu-tape edu-tape--top" aria-hidden="true" />
            <div className="edu-card-top">
              <span className="edu-badge">2024 — 2028</span>
              <span className="education-status">Expected graduation: 2028</span>
            </div>
            <h3 className="education-degree">Bachelor of Technology (B.Tech)</h3>
            <p className="education-branch">AI &amp; ML in Robotics Engineering</p>
            <p className="education-university">Garden City University</p>
          </article>

          <aside className="education-focus-card">
            <span className="focus-pin" aria-hidden="true" />
            <div className="focus-header">
              <span className="detail-label">Academic Focus &amp; Specialization</span>
              <p className="focus-description">
                AI and machine learning applied to robotics, alongside a growing focus on web development.
              </p>
            </div>
            <div className="focus-domains">
              <span className="domain-tag">Robotics Engineering</span>
              <span className="domain-tag">Artificial Intelligence</span>
              <span className="domain-tag">Machine Learning</span>
              <span className="domain-tag">Web Development</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-section experience-section watercolor-experience wc-reveal wc-reveal--wash" id="experience" aria-labelledby="experience-title" data-watercolor-reveal>
        <WatercolorDetails />
        <div className="experience-wash experience-wash--rose" aria-hidden="true" />
        <div className="experience-wash experience-wash--lavender" aria-hidden="true" />
        <span className="experience-doodle experience-doodle--one" aria-hidden="true">✦</span>
        <span className="experience-doodle experience-doodle--two" aria-hidden="true">✧</span>

        <div className="section-heading section-heading-row experience-heading">
          <div>
            <p className="section-kicker">05 / Experience</p>
            <h2 id="experience-title">Leading teams with purpose.</h2>
          </div>
          <p className="section-note">
            Leadership, coordination and marketing within MAVROS.
          </p>
        </div>

        <article className="experience-card">
          <div className="experience-logo-panel" aria-label="MAVROS organization">
            <span className="experience-logo-tape experience-logo-tape--top" aria-hidden="true" />
            <img
              className="experience-logo"
              src="/images/mavros-logo.png"
              alt="MAVROS logo"
            />
          </div>

          <div className="experience-details">
            <div className="experience-role-header">
              <div>
                <p className="experience-company">MAVROS</p>
                <h3>Executive Director <span>(ED)</span></h3>
              </div>
              <span className="experience-role-badge">Leadership</span>
            </div>
            <div className="experience-description">
              <p>
                As Executive Director at MAVROS, I contribute to leadership, team coordination,
                and the organization&apos;s overall direction.
              </p>
              <p>
                I also manage the marketing team, guiding its activities and ensuring that the
                team&apos;s efforts align with MAVROS&apos;s goals and vision.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="content-section certifications-section watercolor-certificates wc-reveal wc-reveal--wash" id="certifications" aria-labelledby="certifications-title" data-watercolor-reveal>
        <WatercolorDetails />
        <div className="certificates-wash certificates-wash--rose" aria-hidden="true" />
        <div className="certificates-wash certificates-wash--lavender" aria-hidden="true" />
        <span className="certificates-doodle certificates-doodle--one" aria-hidden="true">✦</span>
        <span className="certificates-doodle certificates-doodle--two" aria-hidden="true">✧</span>
        <div className="section-heading section-heading-row certificates-heading">
          <div>
            <p className="section-kicker">06 / Certifications</p>
            <h2 id="certifications-title">Proof of continued learning.</h2>
          </div>
          <p className="section-note">
            Professional certification and course-completion credentials.
          </p>
        </div>
        <div className="certificate-gallery">
          {certifications.map((certification, index) => {
            const isPdf = certification.file.endsWith('.pdf')
            return (
            <article
              className={`certificate-paper certificate-paper--${index + 1}${certification.featured ? ' certification-featured' : ''}`}
              key={certification.title}
            >
              <div className="certificate-preview-frame">
                <span className="certificate-tape certificate-tape--left" aria-hidden="true" />
                <span className="certificate-tape certificate-tape--right" aria-hidden="true" />
                {isPdf ? (
                  <iframe
                    className="certificate-document"
                    src={certification.file}
                    title={`Preview of ${certification.title}`}
                    loading="lazy"
                    tabIndex={-1}
                  />
                ) : (
                  <img className="certificate-image" src={certification.file} alt={`Preview of ${certification.title}`} loading="lazy" />
                )}
                <span className="certificate-frame-doodle" aria-hidden="true">✦</span>
              </div>
              <div className="certificate-details">
                <span className="certification-type">
                  {certification.featured ? 'Professional certification' : 'Course completion'}
                </span>
                <h3>{certification.title}</h3>
                {certification.issuer && <p className="certification-issuer">{certification.issuer}</p>}
                <p className="certification-date">{certification.date}</p>
                <div className="certificate-actions">
                  <button
                    className="certificate-preview-button"
                    type="button"
                    onClick={() => setActiveCertificate(certification)}
                  >
                    Preview <span aria-hidden="true">↗</span>
                  </button>
                  <a
                    className="certification-link"
                    href={certification.file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
            )
          })}
        </div>
      </section>

      {activeCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-preview-title">
          <button
            className="certificate-modal-backdrop"
            type="button"
            aria-label="Close certificate preview"
            onClick={() => setActiveCertificate(null)}
          />
          <div className="certificate-modal-paper" role="document">
            <button
              className="certificate-modal-close"
              type="button"
              aria-label="Close certificate preview"
              onClick={() => setActiveCertificate(null)}
            >
              ×
            </button>
            <p className="section-kicker">Certificate preview</p>
            <h2 id="certificate-preview-title">{activeCertificate.title}</h2>
            <div className="certificate-modal-media">
              {activeCertificate.file.endsWith('.pdf') ? (
                <iframe title={activeCertificate.title} src={activeCertificate.file} />
              ) : (
                <img className="certificate-modal-image" src={activeCertificate.file} alt={activeCertificate.title} />
              )}
            </div>
            <a className="certificate-modal-link" href={activeCertificate.file} target="_blank" rel="noreferrer">
              Open Certificate <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}

      <section className="content-section contact-section watercolor-contact wc-reveal wc-reveal--wash" id="contact" aria-labelledby="contact-title" data-watercolor-reveal>
        <WatercolorDetails />
        <div className="contact-wash contact-wash--rose" aria-hidden="true" />
        <div className="contact-wash contact-wash--lavender" aria-hidden="true" />
        <svg className="contact-flower contact-flower--left" viewBox="0 0 200 242" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M106 240C91 186 118 141 91 90 72 55 43 40 15 20" strokeWidth="2" />
            <path d="M99 179C72 160 44 158 20 168C36 188 63 191 99 179Z" fill="rgba(157, 181, 145, .27)" />
            <path d="M99 134C121 113 147 110 165 125C146 146 120 150 99 134Z" fill="rgba(157, 181, 145, .24)" />
          </g>
          <g fill="rgba(223, 163, 180, .46)" stroke="rgba(157, 95, 114, .46)" strokeWidth="1">
            <ellipse cx="15" cy="20" rx="12" ry="27" transform="rotate(-38 15 20)" /><ellipse cx="15" cy="20" rx="12" ry="27" transform="rotate(38 15 20)" />
            <ellipse cx="15" cy="20" rx="12" ry="27" transform="rotate(108 15 20)" /><ellipse cx="15" cy="20" rx="12" ry="27" transform="rotate(178 15 20)" />
            <circle cx="15" cy="20" r="6" fill="rgba(238, 188, 132, .76)" stroke="none" />
          </g>
        </svg>
        <svg className="contact-flower contact-flower--right" viewBox="0 0 200 242" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M106 240C91 186 118 141 91 90 72 55 43 40 15 20" strokeWidth="2" />
            <path d="M99 179C72 160 44 158 20 168C36 188 63 191 99 179Z" fill="rgba(157, 181, 145, .27)" />
            <path d="M99 134C121 113 147 110 165 125C146 146 120 150 99 134Z" fill="rgba(157, 181, 145, .24)" />
          </g>
          <g fill="rgba(195, 177, 217, .48)" stroke="rgba(121, 98, 144, .46)" strokeWidth="1">
            <ellipse cx="15" cy="20" rx="12" ry="27" transform="rotate(-38 15 20)" /><ellipse cx="15" cy="20" rx="12" ry="27" transform="rotate(38 15 20)" />
            <ellipse cx="15" cy="20" rx="12" ry="27" transform="rotate(108 15 20)" /><ellipse cx="15" cy="20" rx="12" ry="27" transform="rotate(178 15 20)" />
            <circle cx="15" cy="20" r="6" fill="rgba(238, 188, 132, .76)" stroke="none" />
          </g>
        </svg>
        <svg className="contact-butterfly" viewBox="0 0 54 42" aria-hidden="true">
          <path d="M27 21C21 4 6 2 5 15c-1 10 11 13 22 6ZM27 21C33 4 48 2 49 15c1 10-11 13-22 6Z" />
          <path d="M27 18v18M24 37h6" />
        </svg>
        <div className="contact-journal">
          <div className="contact-heading">
            <p className="section-kicker">07 / Contact</p>
            <p className="contact-hand-note">leave a little note</p>
            <h2 id="contact-title">Let&apos;s make something meaningful.</h2>
            <p>Have an idea or an opportunity to share? I&apos;d be happy to hear from you.</p>
            <a className="contact-button" href="mailto:sukhitharmopagar@gmail.com">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-paper" aria-label="Contact details">
            <div className="contact-links">
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
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Sukhitha R Mopagar</span>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </main>
    </>
  )
}

export default App
