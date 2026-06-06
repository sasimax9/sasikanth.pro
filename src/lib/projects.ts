export type ArchNode = { id: string; label: string; sub?: string };
export type ArchEdge = { from: string; to: string; label?: string };

export type Project = {
  slug: string;
  name: string;
  domain: string;
  tagline: string;
  desc: string;
  stack: string[];
  role: string;
  timeline: string;
  outcomes: { metric: string; label: string }[];
  highlights: string[];
  screens: { title: string; caption: string; accent: "primary" | "accent" }[];
  architecture: {
    summary: string;
    layers: { title: string; nodes: ArchNode[] }[];
    flow: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "ollama-model-ops",
    name: "Ollama Model Ops",
    domain: "AI Infrastructure",
    tagline: "Self-hosted LLM gateway for enterprise teams.",
    desc: "A control plane that runs Llama 3, Mistral, Qwen and DeepSeek on internal GPUs, routes requests by intent, and gives engineering visibility into every token.",
    stack: ["Ollama", "Node.js", "Docker", "Postgres", "n8n", "Prometheus"],
    role: "Architect & Tech Lead",
    timeline: "2024 — Present",
    outcomes: [
      { metric: "100%", label: "On-prem inference" },
      { metric: "4×", label: "Faster dev workflows" },
      { metric: "$0", label: "External AI spend" },
    ],
    highlights: [
      "Designed a model router that picks the right Ollama model per task — code, chat, embedding.",
      "Built quantization + GPU scheduling pipeline so one host serves 6+ models reliably.",
      "Integrated GitHub Copilot, n8n agents and IDE plugins through a unified OpenAI-compatible API.",
      "Added Prometheus + Grafana dashboards for tokens/sec, queue depth and model health.",
    ],
    screens: [
      { title: "Model Router", caption: "Live routing across llama3, mistral, qwen2.5-coder", accent: "primary" },
      { title: "Ops Dashboard", caption: "Tokens/sec · GPU temp · queue depth", accent: "accent" },
      { title: "n8n Agents", caption: "Workflow agents calling local models", accent: "primary" },
    ],
    architecture: {
      summary: "Edge clients → API gateway → model router → Ollama fleet, with Postgres for audit and n8n for agentic workflows.",
      layers: [
        { title: "Clients", nodes: [
          { id: "ide", label: "IDE / Copilot" },
          { id: "n8n", label: "n8n Agents" },
          { id: "web", label: "Internal Web UI" },
        ]},
        { title: "Gateway", nodes: [
          { id: "api", label: "API Gateway", sub: "OpenAI-compatible" },
          { id: "router", label: "Model Router", sub: "intent + cost" },
        ]},
        { title: "Inference", nodes: [
          { id: "ollama1", label: "Ollama · llama3" },
          { id: "ollama2", label: "Ollama · mistral" },
          { id: "ollama3", label: "Ollama · qwen-coder" },
        ]},
        { title: "Platform", nodes: [
          { id: "pg", label: "Postgres", sub: "audit + RAG" },
          { id: "prom", label: "Prometheus", sub: "metrics" },
        ]},
      ],
      flow: ["Clients", "Gateway", "Inference", "Platform"],
    },
  },
  {
    slug: "ardex-mes",
    name: "Ardex — Plant Operations",
    domain: "Building Materials · MES",
    tagline: "Adhesives manufacturing brought online with Operations Hub.",
    desc: "Rolled out GE Proficy Operations Hub across Ardex plants — batch tracking, OEE, downtime reasoning and shift dashboards unifying historian data with operator workflows.",
    stack: ["Angular 16", "Spring Boot 3", "Proficy Historian", "Kafka", "SQL Server", "Operations Hub"],
    role: "UI Architect & Tech Lead",
    timeline: "2023 — Present",
    outcomes: [
      { metric: "8", label: "Production lines live" },
      { metric: "25%", label: "Less downtime logged manually" },
      { metric: "<1s", label: "Sensor → dashboard latency" },
    ],
    highlights: [
      "Designed batch genealogy screens linking raw material lots to finished pallets.",
      "Built downtime-reason capture with one-tap operator UX on shop-floor tablets.",
      "Integrated Historian tags with Operations Hub widgets for live KPI streaming.",
      "Led release planning with Ardex IT for global rollout across regions.",
    ],
    screens: [
      { title: "Batch Genealogy", caption: "Lot → pallet traceability", accent: "primary" },
      { title: "Downtime Capture", caption: "Tap-to-classify operator UI", accent: "accent" },
      { title: "Shift Dashboard", caption: "OEE · scrap · throughput", accent: "primary" },
    ],
    architecture: {
      summary: "Plant sensors feed Proficy Historian; Operations Hub widgets render live KPIs through Spring Boot APIs and Kafka events.",
      layers: [
        { title: "Floor", nodes: [
          { id: "plc", label: "PLCs / Sensors" },
          { id: "hist", label: "Proficy Historian" },
        ]},
        { title: "Stream", nodes: [
          { id: "kafka", label: "Kafka", sub: "tag events" },
          { id: "etl", label: "Stream ETL" },
        ]},
        { title: "Services", nodes: [
          { id: "svc", label: "Spring Boot APIs" },
          { id: "auth", label: "Keycloak SSO" },
        ]},
        { title: "Operators", nodes: [
          { id: "hub", label: "Operations Hub" },
          { id: "tab", label: "Tablet UI" },
        ]},
      ],
      flow: ["Floor", "Stream", "Services", "Operators"],
    },
  },
  {
    slug: "tei-mes",
    name: "TEI — Engine Overhaul MES",
    domain: "Aerospace · MES",
    tagline: "Engine teardown and overhaul, fully traced.",
    desc: "Turbine Engine Industries (TEI) overhaul operations on Operations Hub — work orders, serialized parts, NDT results and certification packs in one UI.",
    stack: ["Angular 14", "Spring Boot 3", ".NET", "SQL Server", "Operations Hub", "Keycloak"],
    role: "Tech Lead",
    timeline: "2022 — 2024",
    outcomes: [
      { metric: "100%", label: "Serialized part tracking" },
      { metric: "35%", label: "Faster certification packs" },
      { metric: "Multi-site", label: "Single MES backbone" },
    ],
    highlights: [
      "Modeled engine teardown workflows with serialized sub-assemblies and NDT inspection steps.",
      "Built certification-pack generator pulling sign-offs, photos and test data into a single PDF.",
      "Integrated legacy .NET shop systems behind a unified REST facade.",
      "Hardened RBAC with Keycloak for engineers, inspectors and quality auditors.",
    ],
    screens: [
      { title: "Engine Workbench", caption: "Teardown tree + station status", accent: "primary" },
      { title: "NDT Inspection", caption: "Capture & sign-off in one view", accent: "accent" },
      { title: "Cert Pack", caption: "Auto-generated traceability bundle", accent: "primary" },
    ],
    architecture: {
      summary: "Operations Hub front-end orchestrates Spring Boot + .NET services; SQL Server stores serialized history with Keycloak-backed RBAC.",
      layers: [
        { title: "Shop", nodes: [
          { id: "stat", label: "Workstations" },
          { id: "ndt", label: "NDT Devices" },
        ]},
        { title: "Backend", nodes: [
          { id: "sb", label: "Spring Boot" },
          { id: "net", label: ".NET Adapters" },
        ]},
        { title: "Data", nodes: [
          { id: "sql", label: "SQL Server" },
          { id: "kc", label: "Keycloak" },
        ]},
        { title: "Users", nodes: [
          { id: "hub", label: "Operations Hub" },
          { id: "cert", label: "Cert Pack PDF" },
        ]},
      ],
      flow: ["Shop", "Backend", "Data", "Users"],
    },
  },
  {
    slug: "sofia-med-mes",
    name: "Sofia Med — Copper Plant MES",
    domain: "Metals · MES",
    tagline: "Copper rolling and extrusion on a unified MES.",
    desc: "Sofia Med copper processing on Operations Hub — coil tracking, furnace KPIs and quality holds connecting hot-rolling, cold-rolling and finishing lines.",
    stack: ["Angular 14", "Spring Boot", "Proficy Historian", "SQL Server", "Operations Hub", "Kafka"],
    role: "Tech Lead",
    timeline: "2022 — 2023",
    outcomes: [
      { metric: "3", label: "Mills integrated" },
      { metric: "20%", label: "Less off-spec material" },
      { metric: "Live", label: "Furnace KPI streaming" },
    ],
    highlights: [
      "Coil-level genealogy from melt to slit strip with QR/RFID scan points.",
      "Furnace KPI widgets streaming temperatures, atmospheres and energy use.",
      "Quality-hold workflow blocking downstream consumption until release.",
      "Tuned Historian tag aggregations for high-rate furnace signals.",
    ],
    screens: [
      { title: "Coil Genealogy", caption: "Melt → coil → strip traceability", accent: "primary" },
      { title: "Furnace KPIs", caption: "Live temperature & energy", accent: "accent" },
      { title: "Quality Holds", caption: "Block + release with audit", accent: "primary" },
    ],
    architecture: {
      summary: "Furnace and rolling-mill sensors stream through Historian and Kafka into Spring Boot services rendered in Operations Hub.",
      layers: [
        { title: "Mill", nodes: [
          { id: "furn", label: "Furnace Sensors" },
          { id: "mill", label: "Rolling Mill" },
          { id: "rfid", label: "RFID Scanners" },
        ]},
        { title: "Stream", nodes: [
          { id: "hist", label: "Proficy Historian" },
          { id: "kafka", label: "Kafka" },
        ]},
        { title: "Backend", nodes: [
          { id: "svc", label: "Spring Boot APIs" },
          { id: "rules", label: "Quality Rules" },
        ]},
        { title: "Users", nodes: [
          { id: "hub", label: "Operations Hub" },
          { id: "qa", label: "QA Console" },
        ]},
      ],
      flow: ["Mill", "Stream", "Backend", "Users"],
    },
  },
  {
    slug: "lotus-mes",
    name: "Lotus — Manufacturing MES",
    domain: "CPG · MES",
    tagline: "Lotus production lines on Operations Hub.",
    desc: "Operations Hub deployment for Lotus production — line scheduling, OEE, changeover tracking and SAP-aligned order execution across multiple SKUs.",
    stack: ["Angular 16", "Spring Boot 3", "Proficy Historian", "SAP Connector", "Operations Hub"],
    role: "Tech Lead",
    timeline: "2024 — Present",
    outcomes: [
      { metric: "6", label: "Lines digitized" },
      { metric: "18%", label: "OEE uplift" },
      { metric: "ERP-synced", label: "Orders → shop floor" },
    ],
    highlights: [
      "Bridged SAP production orders into Operations Hub line schedules.",
      "Changeover wizard cutting model-change idle time with checklists.",
      "OEE benchmarking dashboards comparing lines and shifts.",
      "Mobile-friendly supervisor view for floor walks.",
    ],
    screens: [
      { title: "Line Schedule", caption: "SAP orders synced to lines", accent: "primary" },
      { title: "Changeover Wizard", caption: "Guided model changes", accent: "accent" },
      { title: "OEE Benchmark", caption: "Line vs line vs shift", accent: "primary" },
    ],
    architecture: {
      summary: "SAP orders sync into Operations Hub through Spring Boot connectors; Historian feeds OEE and changeover analytics.",
      layers: [
        { title: "ERP", nodes: [
          { id: "sap", label: "SAP", sub: "production orders" },
        ]},
        { title: "Bridge", nodes: [
          { id: "conn", label: "SAP Connector" },
          { id: "svc", label: "Spring Boot APIs" },
        ]},
        { title: "Plant", nodes: [
          { id: "hist", label: "Proficy Historian" },
          { id: "kpi", label: "OEE Engine" },
        ]},
        { title: "Users", nodes: [
          { id: "hub", label: "Operations Hub" },
          { id: "sup", label: "Supervisor Mobile" },
        ]},
      ],
      flow: ["ERP", "Bridge", "Plant", "Users"],
    },
  },
  {
    slug: "rag-knowledge-assistant",
    name: "RAG Knowledge Assistant",
    domain: "Enterprise AI",
    tagline: "Air-gapped answers grounded in internal documents.",
    desc: "A retrieval-augmented assistant that indexes confluence, PDFs and code, runs entirely on local Ollama, and cites every source — no data leaves the network.",
    stack: ["Ollama", "LangChain", "pgvector", "Next.js", "n8n", "Docker"],
    role: "Solution Architect",
    timeline: "2024",
    outcomes: [
      { metric: "0", label: "Bytes to cloud" },
      { metric: "12k+", label: "Docs indexed" },
      { metric: "<1.2s", label: "P95 latency" },
    ],
    highlights: [
      "Built ingest pipelines in n8n for confluence, SharePoint, Git and PDFs with delta sync.",
      "Used Ollama nomic-embed-text + pgvector for local embeddings — no external API.",
      "Designed a citation-first UI so every answer links back to the source paragraph.",
      "Hardened for air-gapped deployment with offline model packs and signed updates.",
    ],
    screens: [
      { title: "Ask Anything", caption: "Cited answers from internal docs", accent: "accent" },
      { title: "Source Inspector", caption: "Trace every chunk used", accent: "primary" },
      { title: "Ingest Pipeline", caption: "n8n flows pulling docs nightly", accent: "accent" },
    ],
    architecture: {
      summary: "Documents flow through n8n ingest into pgvector; queries hit a LangChain orchestrator that grounds Ollama answers in retrieved chunks.",
      layers: [
        { title: "Sources", nodes: [
          { id: "conf", label: "Confluence" },
          { id: "git", label: "Git Repos" },
          { id: "pdf", label: "PDFs / Drive" },
        ]},
        { title: "Ingest", nodes: [
          { id: "n8n", label: "n8n Workflows" },
          { id: "embed", label: "Ollama Embeddings" },
        ]},
        { title: "Retrieval", nodes: [
          { id: "pgv", label: "pgvector" },
          { id: "lc", label: "LangChain Orchestrator" },
        ]},
        { title: "Answer", nodes: [
          { id: "llm", label: "Ollama · llama3" },
          { id: "ui", label: "Next.js Chat UI" },
        ]},
      ],
      flow: ["Sources", "Ingest", "Retrieval", "Answer"],
    },
  },
  {
    slug: "aviation-engine-mes",
    name: "Aviation Engine MES",
    domain: "Aerospace",
    tagline: "Raw material to finished engine — fully traceable.",
    desc: "GE Aviation MES tracking spare parts and engine assemblies, with multi-user work queues, OEE and real-time alerting across the shop floor.",
    stack: ["Java", "Spring Boot", "Angular 8", ".NET", "SQL Server", "Jenkins"],
    role: "Full-Stack Developer",
    timeline: "2018 — 2020",
    outcomes: [
      { metric: "100%", label: "Part traceability" },
      { metric: "40%", label: "Fewer manual logs" },
      { metric: "24/7", label: "Shop-floor alerts" },
    ],
    highlights: [
      "Built operator work queues with role-based logins and parallel station support.",
      "Integrated OEE calculations against live machine data for shift dashboards.",
      "Wired alerting that pages technicians on tolerance breaches in seconds.",
      "Set up Jenkins + Docker pipelines for repeatable plant deployments.",
    ],
    screens: [
      { title: "Engine Tracker", caption: "Serialized assemblies, end-to-end", accent: "primary" },
      { title: "Operator Console", caption: "Work queues by station", accent: "accent" },
      { title: "Alert Center", caption: "Real-time tolerance breaches", accent: "primary" },
    ],
    architecture: {
      summary: "Shop-floor machines feed Spring Boot services; operators interact via Angular while .NET handles legacy plant integrations.",
      layers: [
        { title: "Machines", nodes: [
          { id: "cnc", label: "CNC / Test Rigs" },
          { id: "scan", label: "Barcode / RFID" },
        ]},
        { title: "Backend", nodes: [
          { id: "sb", label: "Spring Boot" },
          { id: "net", label: ".NET Bridge" },
        ]},
        { title: "Data", nodes: [
          { id: "sql", label: "SQL Server" },
          { id: "alert", label: "Alert Engine" },
        ]},
        { title: "Operators", nodes: [
          { id: "ng", label: "Angular MES UI" },
          { id: "dash", label: "Shift Dashboards" },
        ]},
      ],
      flow: ["Machines", "Backend", "Data", "Operators"],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
