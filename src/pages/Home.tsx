import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import portrait from "@/assets/sasikanth.jpg";
import {
  Mail, Phone, Linkedin, ArrowRight, Code2, Cpu, Database,
  Cloud, Bot, Layers, Workflow, Server, Brain, Sparkles, Terminal,
  Boxes, ShieldCheck, Zap, Download, FileText,
} from "lucide-react";
import { projects } from "@/lib/projects";

const stackGroups = [
  { icon: Code2, title: "Frontend", items: ["Angular 12/14/16", "React / Next.js", "TypeScript", "PrimeNG", "Material UI", "DevExpress", "Kendo UI"] },
  { icon: Server, title: "Backend", items: ["Java 17+", "Spring Boot 3", "Spring 6 / JPA", "Node.js", ".NET / ASP.NET", "REST / GraphQL", "JUnit 5"] },
  { icon: Database, title: "Data", items: ["MySQL", "SQL Server", "CouchDB", "SSRS", "Proficy Historian", "Kafka", "RabbitMQ"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["Docker", "Jenkins CI/CD", "Portainer", "AWS", "Azure", "Git / Mercurial"] },
  { icon: ShieldCheck, title: "Security", items: ["OAuth 2.0", "JWT", "Keycloak", "Active Directory", "SSO / UAA / IAM"] },
  { icon: Bot, title: "AI / LLM", items: ["Ollama", "GitHub Copilot", "n8n", "Llama 3 / Mistral", "Qwen / DeepSeek", "Open-source models", "RAG Pipelines", "Vector DBs", "LangChain", "Local Model Ops", "Prompt Engineering"] },
  { icon: Workflow, title: "Automation & Agents", items: ["n8n workflows", "AI agents", "Webhook orchestration", "Cron pipelines", "Copilot-driven dev"] },
];

const services = [
  { icon: Layers, title: "Solution Architecture", desc: "End-to-end design of distributed systems across MES, manufacturing, and enterprise platforms." },
  { icon: Brain, title: "AI Engineering", desc: "Self-hosted LLMs with Ollama, RAG, embeddings and AI agents for domain-specific workflows." },
  { icon: Workflow, title: "Tech Leadership", desc: "Leading cross-functional teams, mentoring engineers, code reviews and agile delivery." },
  { icon: Zap, title: "Performance & Scale", desc: "Optimizing legacy MES platforms and modern web apps for throughput and reliability." },
];

const experience = [
  { company: "GE Digital", role: "Services Engineer / Tech Lead", period: "Mar 2020 — Present",
    desc: "Owning core MES modules across GE Proficy Historian and Operations Hub. Leading UI architecture for Ardex, TEI, P&G, Kellogg's and Qatar Cool. Driving AI-assisted tooling and local LLM workflows for engineering teams.",
    tags: ["Angular", "Java 17", "Spring Boot", ".NET", "Ollama", "MES"] },
  { company: "Capgemini India", role: "Full-Stack Developer", period: "Jun 2018 — Jun 2020",
    desc: "Delivered the GE Aviation MES platform for aviation spare parts and engine manufacturing — work queues, OEE tracking, multi-user logins and alert systems.",
    tags: ["Spring Boot", "Angular 8", "Jenkins", "Docker", "SQL Server"] },
  { company: "Avast Technologies", role: "Frontend Developer", period: "Jan 2016 — Jun 2018",
    desc: "Built UIs across multiple startup-stage products with the latest JS frameworks and reusable component libraries.",
    tags: ["Java", "Spring Boot", "jQuery", "JavaScript"] },
];

function Nav() {
  const links = [["About", "#about"], ["Stack", "#stack"], ["Experience", "#experience"], ["Projects", "#projects"], ["Contact", "#contact"]] as const;
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary animate-glow" />
          <span className="text-gradient">sasikanth.pro</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">{label}</a>
          ))}
        </div>
        <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition">
          Get in touch
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary border border-primary/30 rounded-full px-3 py-1 mb-6 bg-primary/5">
            <Sparkles className="size-3" /> Available for architect & AI advisory roles
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Sasikanth <br/>
            <span className="text-gradient">Kankatala</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Tech Lead & Solution Architect with <span className="text-foreground font-medium">9+ years</span> shipping full-stack platforms, MES systems and AI tooling — extensive hands-on with <span className="text-primary font-mono">Ollama</span>, <span className="text-primary font-mono">Copilot</span>, <span className="text-primary font-mono">n8n</span> and open-source models.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition">
              View work <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition">
              <Mail className="size-4" /> Contact
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
            {[["9+", "Years"], ["20+", "Enterprise projects"], ["6+", "Industries"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-bold text-gradient font-mono">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative justify-self-center md:justify-self-end animate-float">
          <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-40" />
          <img
            src={portrait}
            alt="Sasikanth Kankatala portrait"
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-2 border-primary/40 shadow-glow"
          />
          <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-xl px-3 py-2 font-mono text-xs flex items-center gap-2 shadow-card">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            ollama serve
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-primary mb-3">// {eyebrow}</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="about" title="Architect by craft, builder by habit.">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition shadow-card">
            <div className="size-11 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
              <s.icon className="size-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Stack() {
  return (
    <Section id="stack" eyebrow="tech stack" title="The toolkit I architect with.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {stackGroups.map((g) => (
          <div key={g.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-9 rounded-lg bg-secondary flex items-center justify-center">
                <g.icon className="size-4 text-primary" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-secondary-foreground border border-border/50">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-card/40 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative grid md:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="size-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <Cpu className="size-8 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              Open-source AI: Ollama, Copilot & n8n
              <span className="text-xs font-mono text-primary border border-primary/40 rounded px-2 py-0.5">focus area</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Daily driver of open-source models via <span className="text-foreground font-medium">Ollama</span> (Llama 3, Mistral, Qwen, DeepSeek, CodeLlama),
              <span className="text-foreground font-medium"> GitHub Copilot</span> for accelerated delivery, and <span className="text-foreground font-medium">n8n</span> for
              agentic automation and RAG workflows. Building air-gapped AI for enterprises that can't ship data to the cloud.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
              {["ollama pull llama3", "ollama run mistral", "n8n workflow", "copilot agent", "rag pipeline", "model routing"].map((c) => (
                <code key={c} className="px-2 py-1 rounded bg-background/60 border border-border text-primary">{c}</code>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="experience" title="A decade across enterprise platforms.">
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2" />
        <div className="space-y-10">
          {experience.map((e, i) => (
            <div key={e.company} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-3 rounded-full bg-primary shadow-glow mt-6" />
              <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                <div className="font-mono text-xs text-primary mb-1">{e.period}</div>
                <h3 className="text-xl font-bold">{e.role}</h3>
                <div className="text-muted-foreground">{e.company}</div>
              </div>
              <div className="pl-12 md:pl-12 mt-3 md:mt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {e.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-secondary/60 border border-border/50">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="selected work" title="Projects spanning factories to LLMs.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition shadow-card relative overflow-hidden block"
          >
            <div className="absolute -top-20 -right-20 size-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-primary">{p.domain}</span>
                <Boxes className="size-4 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.slice(0, 5).map((s) => (
                  <span key={s} className="text-xs font-mono px-2 py-0.5 rounded bg-secondary/60 border border-border/50">{s}</span>
                ))}
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition">
                Read case study <ArrowRight className="size-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="Let's build something solid.">
      <div className="p-8 md:p-12 rounded-3xl border border-border bg-card shadow-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to architect your next platform?
            </h3>
            <p className="text-muted-foreground mb-5">
              Whether it's modernizing a legacy stack, deploying local LLMs, or leading an engineering team — I'd love to chat.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="/Sasikanth-Kankatala-Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:opacity-90 transition"
              >
                <Download className="size-4" /> Resume · PDF
              </a>
              <a
                href="/Sasikanth-Kankatala-Resume.docx"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 bg-primary/5 text-sm font-medium hover:bg-primary/10 hover:border-primary/60 transition"
              >
                <FileText className="size-4" /> Resume · DOCX
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <a href="mailto:sasikanth.kankatala1@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-background/60 border border-border hover:border-primary/40 transition">
              <Mail className="size-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-mono text-sm">sasikanth.kankatala1@gmail.com</div>
              </div>
            </a>
            <a href="tel:+918897390906" className="flex items-center gap-3 p-4 rounded-xl bg-background/60 border border-border hover:border-primary/40 transition">
              <Phone className="size-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="font-mono text-sm">+91 8897390906</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sasikanth-kankatala-62135b191" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-background/60 border border-border hover:border-primary/40 transition">
              <Linkedin className="size-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="font-mono text-sm">sasikanth-kankatala</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div className="font-mono">© {new Date().getFullYear()} Sasikanth Kankatala</div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <Terminal className="size-3.5" /> Sasikanth.kankatala.professional
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sasikanth Kankatala — Tech Lead & Architect</title>
        <meta name="description" content="Tech Lead & Architect specializing in full-stack engineering, MES platforms, and AI systems with Ollama and local LLMs." />
        <meta property="og:title" content="Sasikanth Kankatala — Tech Lead & Architect" />
        <meta property="og:description" content="Full-stack architect building scalable platforms and self-hosted AI with Ollama." />
      </Helmet>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
