import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Boxes, Layers, Sparkles } from "lucide-react";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — Case Study · Sasikanth Kankatala` : "Case Study";
    const desc = p?.tagline ?? "Project case study.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold">Project not found</h1>
      <p className="text-muted-foreground">That case study doesn't exist.</p>
      <Link to="/" className="text-primary font-mono text-sm hover:underline">← Back home</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold">Something broke</h1>
      <p className="text-muted-foreground">{error.message}</p>
      <Link to="/" className="text-primary font-mono text-sm hover:underline">← Back home</Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm font-semibold flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary animate-glow" />
            <span className="text-gradient">sasikanth.pro</span>
          </Link>
          <Link to="/" hash="projects" className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-2">
            <ArrowLeft className="size-4" /> All projects
          </Link>
        </nav>
      </header>

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card p-8 md:p-12">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute -top-32 -right-32 size-80 bg-primary/15 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-primary border border-primary/30 rounded-full px-3 py-1 mb-5 bg-primary/5">
                <Sparkles className="size-3" /> {project.domain}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                {project.name}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">{project.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <div><span className="text-muted-foreground">Role · </span><span className="font-medium">{project.role}</span></div>
                <div><span className="text-muted-foreground">Timeline · </span><span className="font-medium">{project.timeline}</span></div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 border border-border/50">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <section className="mt-12">
            <div className="font-mono text-xs text-primary mb-3">// outcomes</div>
            <div className="grid grid-cols-3 gap-4">
              {project.outcomes.map((o) => (
                <div key={o.label} className="p-5 md:p-6 rounded-2xl border border-border bg-card shadow-card">
                  <div className="text-3xl md:text-4xl font-bold text-gradient font-mono">{o.metric}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{o.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Context */}
          <section className="mt-12 grid md:grid-cols-[2fr_1fr] gap-8">
            <div>
              <div className="font-mono text-xs text-primary mb-3">// context</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What it is</h2>
              <p className="text-muted-foreground leading-relaxed">{project.desc}</p>
            </div>
            <div>
              <div className="font-mono text-xs text-primary mb-3">// highlights</div>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Screenshots (mocked tiles) */}
          <section className="mt-16">
            <div className="font-mono text-xs text-primary mb-3">// screens</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A look inside</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {project.screens.map((s) => (
                <figure key={s.title} className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card">
                  <div className={`relative aspect-[4/3] overflow-hidden ${s.accent === "primary" ? "bg-gradient-primary" : "bg-gradient-to-br from-accent to-primary"}`}>
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <div className="absolute inset-3 rounded-xl bg-background/80 backdrop-blur border border-border/60 flex flex-col p-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="size-2 rounded-full bg-destructive/60" />
                        <span className="size-2 rounded-full bg-primary/60" />
                        <span className="size-2 rounded-full bg-accent/60" />
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-1.5">
                        <div className="col-span-1 space-y-1.5">
                          <div className="h-2 rounded bg-secondary/70" />
                          <div className="h-2 rounded bg-secondary/50 w-3/4" />
                          <div className="h-2 rounded bg-secondary/50 w-1/2" />
                          <div className="h-10 rounded bg-primary/20 border border-primary/30" />
                        </div>
                        <div className="col-span-2 space-y-1.5">
                          <div className="h-3 rounded bg-secondary/60 w-2/3" />
                          <div className="h-14 rounded bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50" />
                          <div className="grid grid-cols-2 gap-1.5">
                            <div className="h-6 rounded bg-secondary/60" />
                            <div className="h-6 rounded bg-secondary/60" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption className="p-4">
                    <div className="font-semibold text-sm">{s.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.caption}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 font-mono">// stylized previews — actual screens under NDA</p>
          </section>

          {/* Architecture */}
          <section className="mt-16">
            <div className="font-mono text-xs text-primary mb-3">// architecture</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
              <Layers className="size-7 text-primary" /> How it's built
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">{project.architecture.summary}</p>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-card relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative space-y-4">
                {project.architecture.layers.map((layer, li) => (
                  <div key={layer.title}>
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                      <div className="md:w-32 shrink-0">
                        <div className="font-mono text-xs text-primary">L{li + 1}</div>
                        <div className="font-semibold text-sm">{layer.title}</div>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3">
                        {layer.nodes.map((n) => (
                          <div key={n.id} className="p-3 rounded-xl border border-border bg-background/60 backdrop-blur">
                            <div className="text-sm font-medium">{n.label}</div>
                            {n.sub && <div className="text-[11px] font-mono text-muted-foreground mt-0.5">{n.sub}</div>}
                          </div>
                        ))}
                      </div>
                    </div>
                    {li < project.architecture.layers.length - 1 && (
                      <div className="flex md:pl-32 mt-3 mb-1">
                        <div className="text-primary/60 font-mono text-lg leading-none">↓</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Next */}
          <section className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 md:p-8 rounded-2xl border border-border bg-card shadow-card">
            <div>
              <div className="font-mono text-xs text-primary mb-1">// up next</div>
              <div className="text-xl font-bold">{next.name}</div>
              <div className="text-sm text-muted-foreground">{next.domain} · {next.tagline}</div>
            </div>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition"
            >
              Read case study <ArrowRight className="size-4" />
            </Link>
          </section>

          <div className="mt-10">
            <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              <ArrowLeft className="size-4" /> Back to all projects
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div className="font-mono">© {new Date().getFullYear()} Sasikanth Kankatala</div>
          <div className="font-mono text-xs flex items-center gap-2">
            <Boxes className="size-3.5" /> case study · {project.slug}
          </div>
        </div>
      </footer>
    </div>
  );
}
