import { useState } from 'react';
import {
  FaArrowRight,
  FaAws,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaShieldHalved,
} from 'react-icons/fa6';
import {
  SiAndroid,
  SiCodemagic,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiOpencv,
  SiPython,
} from 'react-icons/si';
import './App.css';

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'];

const codeLines = [
  'const developer = {',
  "  name: 'Saurav Kumar',",
  "  focus: 'Software Engineering + AI Automation',",
  "  skills: ['Flutter', 'ASP.NET', 'YOLO'],",
  '  passionate: true,',
  "  motto: 'Build with Precision'",
  '};',
  '',
  'developer.shipReliableSoftware();',
];

const stats = [
  ['1+', 'Years Experience'],
  ['10+', 'Projects Built'],
  ['90%', 'Manual Effort Saved'],
  ['95%', 'OMR Accuracy'],
];

const experience = [
  {
    period: 'Apr 2025 - Present',
    role: 'Software Developer',
    company: 'The Institute of Company Secretaries of India (ICSI), Noida',
    tag: 'Current Role',
    points: [
      'Built internal applications to automate examination workflows.',
      'Developed secure REST APIs using ASP.NET, ADO.NET, and MSSQL.',
      'Built Flutter and Android applications for internal communication.',
      'Reduced manual OMR verification effort by 90% using YOLO and OpenCV automation.',
      'Worked with cross-functional teams to deliver reliable systems.',
    ],
  },
];

const skills = [
  ['Languages', ['C', 'C++', 'Java', 'Python', 'Dart', 'SQL']],
  ['Frameworks', ['Flutter', 'Android SDK', 'ASP.NET', 'REST APIs']],
  ['Databases', ['MSSQL', 'MySQL', 'Firebase', 'MongoDB']],
  ['DevOps / Cloud', ['Docker', 'AWS', 'IIS', 'VPS', 'Nginx', 'Reverse Proxy', 'CI/CD', 'GitHub Actions']],
  ['AI Tools', ['Ollama', 'Codex', 'Continue', 'YOLO', 'OpenCV']],
  ['Systems', ['Linux Administration', 'Windows Configuration', 'Nmap', 'Troubleshooting']],
];

const projects = [
  {
    name: 'Cab Booking Application',
    summary:
      'Built a complete ride booking workflow with real-time tracking, Firebase sync, Google Maps integration, and FCM notifications.',
    stack: ['Flutter', 'Firebase', 'Google Maps API'],
    icon: SiFlutter,
    primaryLabel: 'Request Demo',
    primaryHref: 'mailto:sauravsinha239@gmail.com?subject=Cab%20Booking%20Application%20Demo',
    secondaryLabel: 'GitHub Profile',
    secondaryHref: 'https://github.com/sauravsinha239',
    secondaryIcon: FaGithub,
  },
  {
    name: 'Exam Admin Application',
    summary:
      'Built a workflow management system used by 10+ team members for dependable examination operations.',
    stack: ['Flutter', 'ASP.NET', 'MSSQL'],
    icon: SiCodemagic,
    primaryLabel: 'Request Walkthrough',
    primaryHref: 'mailto:sauravsinha239@gmail.com?subject=Exam%20Admin%20Application%20Walkthrough',
    secondaryLabel: 'LinkedIn',
    secondaryHref: 'https://www.linkedin.com/in/sauravsinha239',
    secondaryIcon: FaLinkedin,
  },
  {
    name: 'Caller ID Application',
    summary:
      'Developed a caller identification app with overlay popups, foreground services, and backend API integration.',
    stack: ['Android', 'ASP.NET API', 'MSSQL'],
    icon: SiAndroid,
    primaryLabel: 'Request Demo',
    primaryHref: 'mailto:sauravsinha239@gmail.com?subject=Caller%20ID%20Application%20Demo',
    secondaryLabel: 'GitHub Profile',
    secondaryHref: 'https://github.com/sauravsinha239',
    secondaryIcon: FaGithub,
  },
  {
    name: 'OMR Detection System',
    summary:
      'Built an OMR detection system with Python, YOLO, and OpenCV that achieved 99% accuracy and major operational savings.',
    stack: ['Python', 'YOLO', 'OpenCV'],
    icon: SiPython,
    primaryLabel: 'Request Case Study',
    primaryHref: 'mailto:sauravsinha239@gmail.com?subject=OMR%20Detection%20System%20Case%20Study',
    secondaryLabel: 'LinkedIn',
    secondaryHref: 'https://www.linkedin.com/in/sauravsinha239',
    secondaryIcon: FaLinkedin,
  },
];

const education = [
  {
    title: 'MCA',
    place: 'SRM Institute of Science & Technology',
    meta: 'CGPA: 8.18 | 2023-2025',
  },
  {
    title: 'BCA',
    place: 'Maulana Mazharul Haque Arabic & Persian University',
    meta: '2018-2021',
  },
];

const certifications = [
  'Cybersecurity Fundamentals - Palo Alto',
  'Network Security Fundamentals',
  'Geo Data Sharing and Cyber Security - ISRO',
];

const contact = [
  ['Email', 'sauravsinha239@gmail.com', 'mailto:sauravsinha239@gmail.com', FaEnvelope],
  ['Phone', '+91 7462906007', 'tel:+917462906007', FaPhone],
  ['Location', 'Noida / Delhi NCR', '#contact', FaLocationDot],
];

const socials = [
  ['LinkedIn', 'https://www.linkedin.com/in/sauravsinha239', FaLinkedin],
  ['GitHub', 'https://github.com/sauravsinha239', FaGithub],
];

const toolIcons = [
  ['Flutter', SiFlutter],
  ['AWS', FaAws],
  ['Docker', FaDocker],
  ['Firebase', SiFirebase],
  ['MySQL', SiMysql],
  ['MongoDB', SiMongodb],
  ['Nginx', SiNginx],
  ['Actions', SiGithubactions],
  ['OpenCV', SiOpencv],
  ['Security', FaShieldHalved],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const updateForm = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:sauravsinha239@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="universe">
      <div className="noise" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />

      <header className="nav-wrap">
        <nav className="topbar">
          <a className="logo" href="#home" onClick={() => setMenuOpen(false)}>
            <img className="logo-avatar" src="/saurav.png" alt="Saurav Kumar" />
            <span>
              <strong>Saurav Kumar</strong>
              <small>Software Developer</small>
            </span>
          </a>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </div>

          <a className="resume-link" href="resume.html" >
            Get Resume
            <FaArrowRight />
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a href="/Saurav_Kumar_Resume.txt" download onClick={() => setMenuOpen(false)}>
              Get Resume
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy reveal-up">
            <p className="kicker">Where Ideas Become Products</p>
            <h1>
              Transforming
              <span> Ideas Into Production-Ready Software</span>
            </h1>
            <p className="hero-lead">
              I&apos;m Saurav Kumar, a Software Developer with hands-on experience building enterprise
              applications, REST APIs, mobile apps, computer vision systems, and deployment infrastructure.
            </p>
            <div className="cta-row">
              <a className="primary-btn" href="#contact">
                Let&apos;s Collaborate
              </a>
              <a className="ghost-btn" href="/resume.html">
                Get Resume
              </a>
            </div>
            <div className="hero-mini-meta">
              <span>Noida / Delhi NCR</span>
              <span>Flutter • ASP.NET • Computer Vision</span>
            </div>
          </div>

          <div className="reveal-up delay-1">
            <div className="editor-card-shell">
              <div className="editor-card">
                <div className="editor-head">
                  <span>Portfolio.js</span>
                  <div>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="editor-body">
                  {codeLines.map((line, index) => (
                    <p key={`${line}-${index}`}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <code>{line || ' '}</code>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-intro reveal-up">
            <p className="kicker">Discovery</p>
            <h2>About The Architect</h2>
            <p>
              A software developer focused on practical systems, reliable delivery, and automation that
              makes real operational work simpler.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-copy glass-card reveal-up">
              <p>
                Software Developer with hands-on experience building enterprise applications, REST APIs,
                mobile apps, computer vision systems, and deployment infrastructure at ICSI. Skilled in
                Flutter, ASP.NET, MSSQL, AWS, Docker, Linux administration, and AI-powered automation tools.
              </p>
              <div className="stat-grid">
                {stats.map(([value, label]) => (
                  <div className="stat-card" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="architect-card reveal-up delay-1">
              <div className="photo-orbit">
                {toolIcons.slice(0, 4).map(([, TechIcon], index) => (
                  <span key={index}>
                    <TechIcon />
                  </span>
                ))}
                <div className="avatar-core">
                  <img src="/saurav.png" alt="Saurav Kumar" />
                  <small>AI + Backend</small>
                </div>
              </div>
              <span>Built with Precision</span>
            </div>
          </div>
        </section>

        <section className="section-shell" id="experience">
          <div className="section-intro reveal-up">
            <p className="kicker">Professional Journey</p>
            <h2>Experience</h2>
            <p>
              Building dependable applications, APIs, and AI-assisted tools inside real production workflows.
            </p>
          </div>
          <div className="journey">
            {experience.map((job) => (
              <article className="journey-card glass-card reveal-up" key={job.role}>
                <div className="journey-rail">
                  <span className="journey-dot" />
                  <div className="journey-date-block">
                    <span className="journey-date">{job.period}</span>
                    <small>{job.tag}</small>
                  </div>
                </div>
                <div className="journey-content">
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="skills">
          <div className="section-intro centered reveal-up">
            <p className="kicker">Inventory</p>
            <h2>The Tech Stack</h2>
            <p>
              A developer toolkit built around mobile delivery, backend systems, cloud deployment,
              and AI-powered automation.
            </p>
          </div>
          <div className="tool-strip reveal-up">
            {toolIcons.map(([label, TechIcon], index) => (
              <div
                className="tool-badge"
                key={label}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <TechIcon />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="skills-cloud">
            {skills.map(([group, items], index) => (
              <article
                className="skill-card glass-card reveal-up"
                style={{ animationDelay: `${index * 80}ms` }}
                key={group}
              >
                <h3>{group}</h3>
                <div>
                  {items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className="skill-pill"
                      style={{ animationDelay: `${index * 120 + itemIndex * 80}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="projects">
          <div className="section-intro centered reveal-up">
            <p className="kicker">Portfolio</p>
            <h2>Featured Creations</h2>
            <p>
              A selection of high-impact software solutions built with focus on automation, performance,
              operational value, and dependable user experience.
            </p>
          </div>
          <div className="creation-grid">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;
              const SecondaryIcon = project.secondaryIcon;

              return (
                <article
                  className="creation-card glass-card reveal-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  key={project.name}
                >
                  <div className="project-visual">
                    <div className="project-visual-inner">
                      <ProjectIcon />
                    </div>
                  </div>
                  <div className="creation-content">
                    <a className="project-title" href="#contact">
                      {project.name}
                    </a>
                    <p>{project.summary}</p>
                    <div className="stack-row">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.primaryHref}>
                        {project.primaryLabel}
                        <FaArrowRight />
                      </a>
                      <a href={project.secondaryHref} target="_blank" rel="noreferrer">
                        {project.secondaryLabel}
                        <SecondaryIcon />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-shell" id="education">
          <div className="section-intro reveal-up">
            <p className="kicker">Foundation</p>
            <h2>Education & Certifications</h2>
            <p>
              Academic grounding and cybersecurity-focused learning that support practical engineering work.
            </p>
          </div>
          <div className="education-grid">
            <article className="glass-card education-card reveal-up">
              <h3>Education</h3>
              <div className="edu-list">
                {education.map((item) => (
                  <div className="edu-item" key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.place}</span>
                    <small>{item.meta}</small>
                  </div>
                ))}
              </div>
            </article>
            <article className="glass-card education-card reveal-up delay-1">
              <h3>Certifications</h3>
              <ul className="cert-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-shell contact-section" id="contact">
          <div className="section-intro centered reveal-up">
            <p className="kicker">Communication</p>
            <h2>Let&apos;s Connect</h2>
            <p>
              Have a project in mind, a role to discuss, or a technical challenge to solve? I&apos;m always
              open to meaningful opportunities and thoughtful conversations.
            </p>
          </div>

          <div className="contact-grid">
            <form className="message-card glass-card reveal-up" onSubmit={sendMessage}>
              <h3>Send a Message</h3>
              <p>I&apos;ll get back to you within 24 hours.</p>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={updateForm}
                required
              />
              <input
                name="email"
                placeholder="Your Email"
                type="email"
                value={form.email}
                onChange={updateForm}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={updateForm}
                required
              />
              <button type="submit">Send Message</button>
            </form>

            <aside className="direct-card glass-card reveal-up delay-1">
              <h3>Direct Contact</h3>
              {contact.map(([label, value, href, ContactIcon]) => (
                <a href={href} key={label}>
                  <span className="direct-label">
                    <ContactIcon />
                    {label}
                  </span>
                  <strong>{value}</strong>
                </a>
              ))}
              <h3>Social Presence</h3>
              <div className="social-grid">
                {socials.map(([label, href, SocialIcon]) => (
                  <a href={href} key={label} target="_blank" rel="noreferrer">
                    <SocialIcon />
                    {label}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <div className="site-footer">
        <footer className="footer">
          <div className="footer-brand">
            <img className="footer-avatar" src="/saurav.png" alt="Saurav Kumar" />
            <div>
              <p>
                Professional Software Developer dedicated to crafting reliable enterprise systems,
                mobile apps, and AI-powered automation.
              </p>
            </div>
          </div>
          <div className="footer-block">
            <h3>Navigation</h3>
            <nav>
              {navItems.map((item) => (
                <a href={`#${item.toLowerCase()}`} key={item}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-block footer-connect">
            <h3>Connect</h3>
            <div className="footer-links-row">
              <a href="mailto:sauravsinha239@gmail.com">sauravsinha239@gmail.com</a>
              <a href="tel:+917462906007">+91 7462906007</a>
            </div>
          </div>
        </footer>
        <div className="footer-bottom">
          <p>© 2026 Saurav Kumar. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
