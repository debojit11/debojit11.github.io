import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Braces,
  Bot,
  Database,
  Network,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  {
    number: "01",
    title: "Agentic AI",
    copy: "Designing systems where models can reason, route work, and collaborate toward useful outcomes.",
    accent: "yellow",
    icon: Bot,
  },
  {
    number: "02",
    title: "RAG systems",
    copy: "Building grounded retrieval experiences that connect language models to relevant context.",
    accent: "teal",
    icon: Database,
  },
  {
    number: "03",
    title: "MCP + tooling",
    copy: "Exploring how models become more capable when they can safely interact with tools and environments.",
    accent: "pink",
    icon: Network,
  },
  {
    number: "04",
    title: "LLM products",
    copy: "Turning applied AI ideas into clear, human-facing products with room to grow.",
    accent: "lavender",
    icon: Sparkles,
  },
];

const projects = [
  {
    index: "01",
    type: "ADAPTIVE RAG / LANGGRAPH",
    title: "RESEARCHLENS",
    description:
      "Built an adaptive RAG system with LangGraph that routes between documentation retrieval and live web search, combines vector search + BM25 + reranking, corrects weak retrieval through query rewriting, and generates grounded answers with citations and quality checks.",
    tags: ["LangGraph", "RAG", "BM25", "BGE Reranker", "LangSmith"],
    accent: "yellow",
    glyph: "↗",
    url: "https://github.com/debojit11/researchlens",
  },
  {
    index: "02",
    type: "AGENTIC AI / LANGGRAPH",
    title: "ISSUETRACE",
    description:
      "Evidence-grounded LangGraph agent that investigates public GitHub issues, analyzes root causes, audits fix plans, generates constrained patches, and validates them through controlled testing in isolated historical repository workspaces.",
    tags: ["LangGraph", "MCP", "Human-in-the-Loop", "GitHub API", "Multi-Agent"],
    accent: "teal",
    glyph: "⌁",
    url: "https://github.com/debojit11/IssueTrace",
  },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-label__number">[{number}]</span>
      <span>{children}</span>
    </div>
  );
}

function Marquee({ children, className = "" }: { children: string; className?: string }) {
  const group = <div className="marquee__group"><span>{children}</span><span>{children}</span><span>{children}</span><span>{children}</span><span>{children}</span><span>{children}</span></div>;
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -65%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Debojit Choudhury home">
          DEBOJIT<span className="wordmark__dot">.</span>
        </a>
        <div className="header-link-hint">
          <button className="header-link-hint__trigger" type="button" aria-label="Information about the floating profile icons" aria-describedby="floating-links-hint">↗</button>
          <span className="header-link-hint__tooltip" id="floating-links-hint" role="tooltip">GITHUB, EMAIL, LINKEDIN &amp; CV / RESUME CARDS ARE INTERACTIVE — EACH OPENS ITS RESPECTIVE LINK.</span>
        </div>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} className={activeSection === item.href.slice(1) ? "is-active" : ""} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`} id="mobile-navigation">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}<ArrowUpRight size={16} /></a>)}
      </div>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grid-lines" aria-hidden="true" />
          <div className="float-tag float-tag--year">✦ AI SYSTEMS</div>
          <div className="float-tag float-tag--agent">⌁ AGENTIC AI</div>
          <div className="float-tag float-tag--rag">◈ MCP / TOOLS</div>
          <div className="float-tag float-tag--mcp">⌁ RAG SYSTEMS</div>
          <a className="float-card float-card--github" href="https://github.com/debojit11" target="_blank" rel="noreferrer" aria-label="Open Debojit Choudhury's GitHub profile"><span className="float-card__motion"><span className="float-card__face"><Github size={19} /><span>GITHUB</span></span></span></a>
          <a className="float-card float-card--email" href="mailto:debojitchoudhury117@gmail.com" aria-label="Email Debojit Choudhury"><span className="float-card__motion"><span className="float-card__face"><Mail size={18} /><span>EMAIL</span></span></span></a>
          <a className="float-card float-card--linkedin" href="https://www.linkedin.com/in/debojit-choudhury-a52276202/" target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile"><span className="float-card__motion"><span className="float-card__face"><Linkedin size={18} /><span>LINKEDIN</span></span></span></a>
          <div className="float-tag float-tag--harness">✦ HARNESS</div>
          <a className="hero__availability" href="#contact">✦ Open to work / opportunities <ArrowUpRight size={17} /></a>
          <div className="hero__center">
            <p className="hero__kicker">AI ENGINEER / DEVELOPER</p>
            <h1 id="hero-title"><span>DEBOJIT</span><strong>CHOUDHURY</strong></h1>
            <div className="hero__role"><Code2 size={17} /> Agentic AI · RAG · MCP · LLM products</div>
            <p className="hero__intro">I’m interested in the systems between intelligence and execution — thoughtful AI products, reliable retrieval, and agents that can do more than just chat.</p>
            <div className="hero__actions">
              <a className="button button--dark" href="#projects">View projects <ArrowUpRight size={17} /></a>
              <a className="button button--yellow" href="mailto:debojitchoudhury117@gmail.com">Let’s talk <Mail size={16} /></a>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-cue__line" /> SCROLL TO EXPLORE <ChevronDown size={15} /></a>
        </section>

        <Marquee className="marquee--yellow">AGENTIC AI ✦ RAG SYSTEMS ✦ MCP TOOLING ✦ LLM PRODUCTS ✦ APPLIED INTELLIGENCE ✦</Marquee>

        <section className="section section--about" id="about">
          <div className="section__topline"><SectionLabel number="01">ABOUT / THE SHORT VERSION</SectionLabel><span className="section__aside">AI ENGINEERING, IN PROGRESS →</span></div>
          <div className="about-grid">
            <div className="about-grid__title"><p className="mono-note">// WHO AM I?</p><h2>Building at the edge of <em>what’s next.</em></h2></div>
            <div className="about-grid__copy"><p>I’m Debojit Choudhury, an AI Engineer / Developer focused on Agentic AI, RAG, MCP, and LLM-powered products.</p><p>I’m interested in AI systems that go beyond a single model response — systems that retrieve evidence, use tools, adapt their workflow, and make decisions toward a useful outcome.</p><div className="signature">D / C <span>curious by default</span></div><div className="about-meta-row"><a className="float-card float-card--cv about-cv" href="https://drive.google.com/file/d/1uIzouGnTKVDkRDcTLuSnHdwqCfx_lSrx/view?usp=sharing" target="_blank" rel="noreferrer" aria-label="View Debojit Choudhury's CV"><span className="float-card__motion"><span className="float-card__face"><FileText size={18} /><span>CV / RESUME</span></span></span></a><p className="about-location">⌖ BASED IN INDIA · OPEN TO REMOTE OPPORTUNITIES &amp; RELOCATION</p></div></div>
          </div>
          <div className="about-stamp"><Braces size={30} /><span>STILL<br />LEARNING<br />OUT LOUD</span></div>
        </section>

        <section className="section section--focus" id="focus">
          <div className="section__topline"><SectionLabel number="02">FOCUS / WHAT I’M EXPLORING</SectionLabel><span className="section__aside">A SMALL, GROWING SYSTEM →</span></div>
          <div className="focus-heading"><h2>Where I put<br /><span>the energy.</span></h2><p>Not a list of buzzwords. A current map of the problems and patterns I’m learning to work with.</p></div>
          <div className="focus-grid">
            {focusAreas.map(({ number, title, copy, accent, icon: Icon }) => <article className={`focus-card focus-card--${accent}`} key={title}><div className="focus-card__top"><span>{number}</span><Icon size={24} strokeWidth={1.8} /></div><h3>{title}</h3><p>{copy}</p><span className="focus-card__arrow">↗</span></article>)}
          </div>
        </section>

        <Marquee className="marquee--ink">SYSTEMS THAT THINK · SYSTEMS THAT RETRIEVE · SYSTEMS THAT SHIP ·</Marquee>

        <section className="section section--projects" id="projects">
          <div className="section__topline"><SectionLabel number="03">PROJECTS / WHAT I’VE BUILT</SectionLabel><span className="section__aside">BUILDING &amp; REFINING →</span></div>
          <div className="projects-intro"><h2>FROM IDEAS<br /><span>TO SYSTEMS.</span></h2><p>AI systems built to explore agentic workflows, retrieval, tooling, and applied LLM engineering.</p></div>
          <div className="project-list">
            {projects.map((project) => <article className={`project-card project-card--${project.accent}`} key={project.title}><div className="project-card__index">{project.index}</div><div className="project-card__body"><div className="project-card__meta"><span>{project.type}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-card__tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-card__glyph" aria-hidden="true">{project.glyph}</div><a className="project-card__link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ExternalLink size={18} /></a></article>)}
          </div>
          <div className="project-note"><span className="project-note__line" /> Architecture, implementation details, and project links live inside each project.</div>
        </section>

        <section className="section section--experience" id="experience">
          <div className="section__topline"><SectionLabel number="04">EXPERIENCE / THE THROUGHLINE</SectionLabel><span className="section__aside">DATA → AI SYSTEMS → PRODUCTS</span></div>
          <div className="experience-grid"><div><h2>From data<br /><em>to direction.</em></h2><p className="experience-grid__lead">Around one year of professional experience as a Data Scientist, beginning with data-focused work and gradually moving into applied AI product development.</p></div><div className="timeline"><div className="timeline__item"><div className="timeline__date">AUG 2025 <span>—</span> JUL 2026</div><div className="timeline__marker" /><div><h3>Data Scientist</h3><span className="timeline__company">CompetitivIA</span><p>Contributed as a Data Scientist within a remote, multicultural team, supporting applied AI product development across data processing, predictive systems, data pipelines, and AI features.</p><p>Over time, the work expanded from primarily data-oriented tasks into building and integrating AI capabilities for real product workflows, with attention to reliability, fallback logic, documentation, and practical user-facing outputs.</p></div></div></div></div>
          <div className="experience-stamp"><span>OPEN TO WORK<br />/ OPPORTUNITIES</span></div>
        </section>

        <Marquee className="marquee--pink">CURIOUS · ITERATIVE · GROUNDED · HUMAN-IN-THE-LOOP · CURIOUS · ITERATIVE · GROUNDED · HUMAN-IN-THE-LOOP ·</Marquee>

        <section className="section section--education" id="education">
          <div className="section__topline"><SectionLabel number="05">EDUCATION / THE FOUNDATION</SectionLabel></div>
          <div className="education-card"><div className="education-card__year">2020<br /><span>—</span><br />2024</div><div><p className="mono-note">B.TECH / ENGINEERING</p><h2>Electronics &amp;<br /><span>Communication</span> Engineering</h2><p className="education-card__institution">Tezpur University</p></div><div className="education-card__seal">EC<br /><small>FOUNDATIONS<br />MATTER</small></div></div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact__inner"><div className="contact__label">06 / CONTACT</div><h2>Let’s make<br /><span>something useful.</span></h2><p>For AI engineering conversations, project ideas, collaborations, opportunities, or just a good technical discussion.</p><a className="contact__email" href="mailto:debojitchoudhury117@gmail.com">debojitchoudhury117@gmail.com <ArrowUpRight size={21} /></a><div className="contact__links"><a href="mailto:debojitchoudhury117@gmail.com"><Mail size={16} /> Email</a><a href="https://www.linkedin.com/in/debojit-choudhury-a52276202/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a></div></div><div className="contact__doodle" aria-hidden="true">✳</div></section>
      </main>

      <footer className="site-footer"><span>© 2026 DEBOJIT CHOUDHURY</span><span>AI ENGINEER / DEVELOPER</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
