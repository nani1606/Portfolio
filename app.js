const profile = {
  name: "Krishna Reddy Syamala",
  summary:
    "I enjoy building products where the engineering problem is tightly connected to a user problem: parsing messy documents, ranking jobs, improving ATS outcomes, or shaping LLM output into something structured and useful.",
  github: "https://github.com/nani1606",
  linkedin: "https://www.linkedin.com/in/s-krishna-reddy/",
  email: "krishna.r.syamala@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/71328481?v=4",
  metrics: [
    { value: "30+", label: "public repos" },
    { value: "AI + data", label: "core axis" },
    { value: "Full stack", label: "delivery style" },
  ],
};

const projects = [
  {
    name: "Agentic Jobs",
    year: "Current",
    stack: "FastAPI, React, Postgres, crawlers, alerting",
    status: "Live product",
    link: "https://agenticjobboard.com/",
    linkLabel: "Visit live",
    description:
      "A job intelligence platform that aggregates roles across fragmented sources, normalizes noisy data, scores trust, powers search and alerts, and forces me to think about real infrastructure constraints instead of toy demos.",
    points: [
      {
        label: "Goal",
        text: "Make job discovery more useful by turning inconsistent ATS and public API data into a searchable product with better filters, freshness, and alert delivery.",
      },
      {
        label: "Why I built it",
        text: "I wanted to solve a problem I actually care about while working through the hard operational parts: crawling reliability, scheduler design, delivery pipelines, and the gap between fetched data and useful product behavior.",
      },
      {
        label: "What it demonstrates",
        text: "End-to-end ownership across backend APIs, frontend UX, background jobs, data quality, debugging, and shipping features under tight resource limits.",
      },
    ],
  },
  {
    name: "ResuMatch - ATS Optimizer",
    year: "Current",
    stack: "FastAPI, SQLite, Next.js, OpenAI chat + embeddings",
    status: "Live product",
    link: "https://airesumegrader.com/",
    linkLabel: "Visit live",
    description:
      "A full-stack ATS optimization platform that helps job seekers upload resumes, score them against vendor-style checks, surface targeted improvements, generate rewrites, and edit the output in a resume-focused workflow.",
    points: [
      {
        label: "Goal",
        text: "Reduce the time between finding a role and producing a resume version that is aligned to both ATS constraints and the actual job description.",
      },
      {
        label: "Why I built it",
        text: "Resume tooling often feels generic. I wanted something that combined document parsing, structured scoring, LLM-powered rewriting, and practical editing flows instead of just producing a blob of text.",
      },
      {
        label: "What it demonstrates",
        text: "Prompt design, endpoint design, product flow thinking, file parsing, and building AI features that feel useful rather than decorative.",
      },
    ],
  },
  {
    name: "AgenticAI Shorts MVP",
    year: "2025",
    stack: "Python, FFmpeg, multi-agent orchestration, Pixabay, Pexels",
    status: "Public repo",
    link: "https://github.com/nani1606/content_creator",
    linkLabel: "View repo",
    description:
      "A personal-use agentic content pipeline that turns an input script into a draft YouTube Short by splitting the work across specialized agents for story improvement, clip selection, and review.",
    points: [
      {
        label: "Goal",
        text: "Shrink the time between an idea and a publishable short-form video draft without manually stitching every step together.",
      },
      {
        label: "Why I built it",
        text: "I wanted to explore multi-agent decomposition in a way that had visible output quality and clear tradeoffs around prompts, orchestration, and review loops.",
      },
      {
        label: "What it demonstrates",
        text: "Prompt engineering, agent coordination, tool usage, and thinking about AI systems as workflows instead of single prompts.",
      },
    ],
  },
  {
    name: "AI & NLP Research Pipelines",
    year: "2024",
    stack: "PyTorch, TensorFlow, FastAPI, MLflow, multimodal data",
    status: "Research project",
    link: null,
    linkLabel: "Project summary",
    description:
      "A research-heavy body of work focused on training, fine-tuning, and serving AI models across multimodal datasets, while improving the surrounding data preparation and LLM evaluation workflows.",
    points: [
      {
        label: "Goal",
        text: "Build repeatable AI pipelines for model training, preprocessing, evaluation, and inference instead of treating experimentation as one-off notebook work.",
      },
      {
        label: "Why I built it",
        text: "I wanted to work on the full path from raw data and embeddings to prompt templates, few-shot classification, model monitoring, and deployment workflows.",
      },
      {
        label: "What it demonstrates",
        text: "AI systems thinking, NLP workflow design, experiment discipline, serving models with APIs, and translating research into something operational.",
      },
    ],
  },
  {
    name: "Real-Time Weather Pipeline",
    year: "2024",
    stack: "AWS Kinesis, Lambda, DynamoDB, S3, Tableau",
    status: "Public repo",
    link: "https://github.com/nani1606/Real-time_weather_pipeline",
    linkLabel: "View repo",
    description:
      "A streaming weather pipeline built to ingest, transform, store, and visualize near real-time weather data using a cloud-native event-driven architecture.",
    points: [
      {
        label: "Goal",
        text: "Practice real-time ingestion and downstream analytics on a pipeline that had obvious operational stages and a business-style output layer.",
      },
      {
        label: "Why I built it",
        text: "I wanted hands-on experience with cloud streaming services and the mechanics of moving from ingestion to transformation to reporting.",
      },
      {
        label: "What it demonstrates",
        text: "Event-driven thinking, AWS familiarity, and the ability to build data flows that are more than static ETL exercises.",
      },
    ],
  },
  {
    name: "E-Commerce Sales Warehouse on AWS",
    year: "2024",
    stack: "Python, MySQL, S3, Glue, Redshift, Tableau",
    status: "Public repo",
    link: "https://github.com/nani1606/ecommerce_cloudstack",
    linkLabel: "View repo",
    description:
      "A cloud data warehouse project that models an e-commerce analytics pipeline from raw files and relational data to transformed warehouse tables and dashboards.",
    points: [
      {
        label: "Goal",
        text: "Build a practical analytics stack that mirrors how data teams move information into reliable reporting structures.",
      },
      {
        label: "Why I built it",
        text: "I wanted stronger intuition for storage layers, transformations, schema design, and analytics consumption in AWS.",
      },
      {
        label: "What it demonstrates",
        text: "Data engineering fundamentals, warehouse-oriented thinking, and clear understanding of pipeline stages from ingestion to presentation.",
      },
    ],
  },
  {
    name: "Lambda Sentiment Analysis",
    year: "2024",
    stack: "Python, X API, TextBlob, AWS Lambda, S3, RDS, Tableau",
    status: "Public repo",
    link: "https://github.com/nani1606/lambda_sentiment_analysis",
    linkLabel: "View repo",
    description:
      "A sentiment analysis pipeline around IPL-related tweets that collects text, scores sentiment, stores structured outputs, and surfaces results in dashboards.",
    points: [
      {
        label: "Goal",
        text: "Connect text analysis with a lightweight cloud execution model and produce outputs that can be explored visually.",
      },
      {
        label: "Why I built it",
        text: "It was a good way to combine API ingestion, NLP, Lambda orchestration, and structured reporting in one compact project.",
      },
      {
        label: "What it demonstrates",
        text: "Practical NLP application, serverless execution, and converting raw text streams into analytics-ready data.",
      },
    ],
  },
];

const signals = [
  {
    kicker: "Product sense",
    title: "I care about useful flows, not just successful API calls.",
    body:
      "A lot of my projects are really about reducing friction for a user: resume upload to rewrite, search to alert, script to short-form video draft. I pay attention to how the pieces feel together.",
  },
  {
    kicker: "Prompt engineering",
    title: "I think in terms of prompt systems, not isolated prompts.",
    body:
      "When I use LLMs, I care about prompt structure, role separation, few-shot strategy, output constraints, and what happens when the model is imperfect.",
  },
  {
    kicker: "Data pragmatism",
    title: "I like messy inputs and the discipline required to tame them.",
    body:
      "Document parsing, job normalization, streaming events, text analysis, and ATS-style scoring all involve input quality problems that need engineering judgment, not just models.",
  },
  {
    kicker: "Full-stack ownership",
    title: "I'm comfortable working across frontend, backend, and infra edges.",
    body:
      "I enjoy the layer where UI behavior, API design, scheduler logic, storage decisions, and deployment constraints meet each other.",
  },
  {
    kicker: "Operational curiosity",
    title: "I do not stop at the happy path.",
    body:
      "I care about why something is slow, why emails do not land, why a job fetch never reaches the UI, or why a scheduler silently skips work.",
  },
  {
    kicker: "Communication",
    title: "I like translating complex systems into clear product language.",
    body:
      "That shows up in the way I document repos, frame project goals, and explain AI or data systems to both technical and non-technical audiences.",
  },
];

const approach = [
  {
    title: "Start with the user-facing friction",
    body:
      "The common thread in my better projects is that they start with something annoying or broken in the real world: bad search, weak ATS alignment, repetitive content workflows, or hard-to-trust data.",
  },
  {
    title: "Use AI where structure is needed, not where novelty is enough",
    body:
      "I'm most interested in AI features when they create leverage inside a larger system: resume rewrites, suggestion generation, classification, agent routing, and constrained output formats.",
  },
  {
    title: "Treat reliability as part of product quality",
    body:
      "Schedulers, email delivery, deployment behavior, enrichment limits, and source failures all shape whether a product feels real. I like solving those problems too.",
  },
];

const footprint = [
  {
    title: "AI workflow track",
    body:
      "ResuMatch, AgenticAI Shorts, and the AI/NLP research work all point to a pattern: I like building with models when the surrounding system design matters.",
  },
  {
    title: "Data platform track",
    body:
      "Weather streaming, warehousing, and sentiment pipelines show the data side of how I think: ingestion, normalization, storage, reporting, and reliability.",
  },
  {
    title: "Product systems track",
    body:
      "The job platform and ATS tooling show the direction I care about most now: software that combines product judgment, AI leverage, and operational engineering.",
  },
];

function createMetricItem(metric) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="metric-value">${metric.value}</span>
    <span class="metric-label">${metric.label}</span>
  `;
  return li;
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const linkMarkup = project.link
    ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">${project.linkLabel}</a>`
    : `<span class="project-link">${project.linkLabel}</span>`;

  article.innerHTML = `
    <div class="meta-row">
      <span>${project.year}</span>
      <span class="tag">${project.status}</span>
      <span>${project.stack}</span>
    </div>
    <div class="project-title-row">
      <h3>${project.name}</h3>
      ${linkMarkup}
    </div>
    <p class="project-body">${project.description}</p>
    <div class="project-points">
      ${project.points
        .map(
          (point) => `
            <div class="project-point">
              <span class="project-point-label">${point.label}</span>
              <div>${point.text}</div>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  return article;
}

function createInfoCard(item, className, extra = "") {
  const article = document.createElement("article");
  article.className = className;
  article.innerHTML = extra
    ? `<p class="signal-kicker">${extra}</p><h3>${item.title}</h3><p>${item.body}</p>`
    : `<h3>${item.title}</h3><p>${item.body}</p>`;
  return article;
}

function createContactLink(label, href, isPrimary = false) {
  const anchor = document.createElement("a");
  anchor.className = isPrimary ? "button button-primary" : "button button-secondary";
  anchor.href = href;
  anchor.target = href.startsWith("http") ? "_blank" : "_self";
  anchor.rel = href.startsWith("http") ? "noreferrer" : "";
  anchor.textContent = label;
  return anchor;
}

function applyRevealAnimation() {
  const elements = Array.from(
    document.querySelectorAll(
      ".hero-copy, .hero-panel, .section-heading, .manifesto article, .project-card, .signal-card, .approach-card, .footprint-card, .contact, .footer"
    )
  );

  elements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.transitionDelay = `${Math.min((index % 6) * 90, 450)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));
}

document.getElementById("hero-summary").textContent = profile.summary;
document.getElementById("github-link").href = profile.github;
document.getElementById("avatar").src = profile.avatar;
document.getElementById("avatar").alt = `${profile.name} GitHub profile photo`;

const metricsList = document.getElementById("hero-metrics");
profile.metrics.forEach((metric) => metricsList.appendChild(createMetricItem(metric)));

const projectsGrid = document.getElementById("projects-grid");
projects.forEach((project) => projectsGrid.appendChild(createProjectCard(project)));

const signalsGrid = document.getElementById("signals-grid");
signals.forEach((signal) =>
  signalsGrid.appendChild(createInfoCard(signal, "signal-card", signal.kicker))
);

const approachGrid = document.getElementById("approach-grid");
approach.forEach((item) => approachGrid.appendChild(createInfoCard(item, "approach-card")));

const footprintGrid = document.getElementById("footprint-grid");
footprint.forEach((item) => footprintGrid.appendChild(createInfoCard(item, "footprint-card")));

const contactActions = document.getElementById("contact-actions");
contactActions.appendChild(createContactLink("GitHub", profile.github, true));
contactActions.appendChild(createContactLink("LinkedIn", profile.linkedin));
contactActions.appendChild(createContactLink("Email", `mailto:${profile.email}`));

document.getElementById(
  "footer-line"
).textContent = `${profile.name} | ${new Date().getFullYear()} | Built as a standalone static portfolio for easy GitHub hosting.`;

applyRevealAnimation();
