"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type ClientAlignment = {
  client: string;
  score: number;
  rationale: string;
};

type CandidateMatch = {
  jobId: string;
  score: number;
  summary: string;
  tailoredResume: string[];
  nextSteps: string[];
  clientAlignment: ClientAlignment[];
  aiInsights: {
    highlights: string[];
    risks: string[];
    interviewReadiness: string;
  };
};

type Candidate = {
  id: string;
  name: string;
  role: string;
  location: string;
  experienceYears: number;
  skills: string[];
  headline: string;
  resumeHighlights: string[];
  timeline: { label: string; detail: string }[];
  matches: CandidateMatch[];
};

type Job = {
  id: string;
  title: string;
  company: string;
  summary: string;
  priority: "Hot" | "Active" | "Exploratory";
  keySkills: string[];
  successMetrics: string[];
};

const jobs: Job[] = [
  {
    id: "job-product-design",
    title: "Lead Product Designer",
    company: "BlueWave Fintech",
    priority: "Hot",
    summary:
      "Design a multi-platform banking experience focused on digital trust, rapid experimentation, and enterprise accessibility standards.",
    keySkills: [
      "Design Systems",
      "Enterprise UX",
      "Stakeholder Facilitation",
      "Fintech Compliance",
    ],
    successMetrics: [
      "Launch an MVP onboarding flow within 90 days",
      "Drive 30% adoption of the new design system",
      "Improve verified conversion by 18% within six months",
    ],
  },
  {
    id: "job-ml-platform",
    title: "Applied ML Platform Engineer",
    company: "Northwind Analytics",
    priority: "Active",
    summary:
      "Build and productionize recommender systems that power personalization across the Northwind SaaS marketplace.",
    keySkills: [
      "Machine Learning Ops",
      "Feature Store Design",
      "Python",
      "Next.js",
    ],
    successMetrics: [
      "Cut model deployment time from weeks to days",
      "Increase recommendation click-through by 12%",
      "Stand up automated evaluation dashboards for stakeholders",
    ],
  },
  {
    id: "job-revops",
    title: "Revenue Operations Strategist",
    company: "Aurora HR Cloud",
    priority: "Exploratory",
    summary:
      "Create insights and playbooks that align sales, marketing, and customer success motions with a data-informed lens.",
    keySkills: [
      "RevOps Tooling",
      "Salesforce Automation",
      "Forecasting",
      "Executive Storytelling",
    ],
    successMetrics: [
      "Deliver a quarterly board-ready revenue forecast",
      "Operationalize a unified GTM dashboard",
      "Lift pipeline velocity by 15% in two quarters",
    ],
  },
];

const candidates: Candidate[] = [
  {
    id: "cand-reyes",
    name: "Alicia Reyes",
    role: "Senior Product Designer",
    location: "Austin, TX",
    experienceYears: 8,
    skills: [
      "Design Systems",
      "Figma",
      "User Research",
      "Workshop Facilitation",
      "Accessibility",
    ],
    headline:
      "Drives enterprise UX modernization with a systems mindset and measurable experimentation loops.",
    resumeHighlights: [
      "Scaled a unified component library across 4 product pods and improved delivery velocity by 22%.",
      "Co-led discovery sprints with product and compliance stakeholders across US and LATAM markets.",
      "Mentored six designers through a structured craft progression framework.",
    ],
    timeline: [
      { label: "Intro", detail: "Initial recruiter screen complete – scored 4.8/5" },
      { label: "Portfolio", detail: "Shared case study deck tailored to financial services" },
      {
        label: "References",
        detail: "Director-level reference confirmed strong enterprise stakeholder management",
      },
    ],
    matches: [
      {
        jobId: "job-product-design",
        score: 92,
        summary:
          "Stood up a design system in a regulated fintech environment with measurable conversion outcomes.",
        tailoredResume: [
          "Reframed onboarding case study to emphasize risk, compliance, and trust-building flows.",
          "Highlighted workshop format used with risk and fraud operations teams.",
          "Added accessibility audit results with WCAG 2.2 AA metrics.",
        ],
        nextSteps: [
          "Share annotated figma prototype emphasizing executive dashboards.",
          "Prep stakeholder alignment story for CFO and CRO personas.",
        ],
        clientAlignment: [
          {
            client: "BlueWave Fintech",
            score: 88,
            rationale: "Matches trust-focused onboarding initiative and global accessibility roadmap.",
          },
          {
            client: "Everest Bank",
            score: 76,
            rationale: "Needs additional proof-points on mobile-first flows.",
          },
        ],
        aiInsights: {
          highlights: [
            "Deep compliance collaboration experience",
            "Data-backed experimentation mindset",
          ],
          risks: ["Will need context on BlueWave's design tokens"],
          interviewReadiness: "Send 3 case snippets in advance to accelerate hiring manager conversation.",
        },
      },
      {
        jobId: "job-revops",
        score: 68,
        summary:
          "Transferable stakeholder skills but limited direct revenue operations exposure.",
        tailoredResume: [
          "Expanded cross-functional alignment narrative with GTM partners.",
          "Added metrics on experimentation velocity and ROI tracking.",
        ],
        nextSteps: ["Position as design-minded GTM strategist for exploratory conversations."],
        clientAlignment: [
          {
            client: "Aurora HR Cloud",
            score: 64,
            rationale: "Strong facilitation, moderate analytics depth.",
          },
        ],
        aiInsights: {
          highlights: ["Executive storytelling toolkit"],
          risks: ["Analytics stack ramp required"],
          interviewReadiness: "Pair Alicia with RevOps lead for mutual fit discovery.",
        },
      },
    ],
  },
  {
    id: "cand-cho",
    name: "Marcus Cho",
    role: "Applied ML Engineer",
    location: "Seattle, WA",
    experienceYears: 6,
    skills: [
      "MLOps",
      "Feature Stores",
      "Python",
      "Next.js",
      "GCP",
    ],
    headline:
      "Productionizes personalized ranking systems with real-time experimentation and LLM-driven features.",
    resumeHighlights: [
      "Delivered a feature store ingestion pipeline that cut model iteration cycle time by 60%.",
      "Launched an embeddings-based personalization engine driving a 14% lift in engagement.",
      "Championed incident playbooks reducing ML downtime to < 30 minutes.",
    ],
    timeline: [
      { label: "Sourced", detail: "Identified via outbound search – responded same day" },
      { label: "Tech Screen", detail: "Internal ML staff engineer endorsed systems thinking" },
      {
        label: "AI Tailoring",
        detail: "Resume regenerated to emphasize recommender platforms and observability wins.",
      },
    ],
    matches: [
      {
        jobId: "job-ml-platform",
        score: 95,
        summary:
          "Direct alignment with feature store initiative and marketplace personalization roadmap.",
        tailoredResume: [
          "Elevated case study on embeddings platform with marketplace taxonomy mapping.",
          "Added architecture diagram callouts for offline/online experimentation loops.",
          "Surfaced success metrics tied to product analytics stakeholders.",
        ],
        nextSteps: [
          "Schedule architecture deep-dive with Director of Data.",
          "Share sanitized Terraform modules as technical proof.",
        ],
        clientAlignment: [
          {
            client: "Northwind Analytics",
            score: 93,
            rationale: "Exact tech stack match with clear experimentation wins.",
          },
          {
            client: "Helios Retail",
            score: 82,
            rationale: "Recommender expertise relevant; would need AWS translation plan.",
          },
        ],
        aiInsights: {
          highlights: [
            "End-to-end ownership of ML platform lifecycle",
            "Cross-collaboration with product growth squads",
          ],
          risks: ["Prefers GCP; Northwind is on Azure"],
          interviewReadiness: "Provide Azure-focused onboarding guide to accelerate conversation.",
        },
      },
      {
        jobId: "job-product-design",
        score: 54,
        summary: "Great experimentation partner but not a primary design contributor.",
        tailoredResume: ["Positioned as technical collaborator for design analytics."],
        nextSteps: ["Keep as stretch collaborator for research analytics stream."],
        clientAlignment: [
          {
            client: "BlueWave Fintech",
            score: 58,
            rationale: "Could accelerate personalization backlog once design foundation is set.",
          },
        ],
        aiInsights: {
          highlights: ["Bridge between data and product"],
          risks: ["Not a visual design practitioner"],
          interviewReadiness: "Introduce as data partner post-design system implementation.",
        },
      },
    ],
  },
  {
    id: "cand-singh",
    name: "Priya Singh",
    role: "Revenue Operations Lead",
    location: "New York, NY",
    experienceYears: 9,
    skills: [
      "Salesforce",
      "RevOps Strategy",
      "Lifecycle Analytics",
      "Demand Forecasting",
      "Stakeholder Enablement",
    ],
    headline:
      "Aligns GTM teams around a unified data foundation and orchestrates predictable revenue cadences.",
    resumeHighlights: [
      "Unified marketing and sales attribution model, reducing reporting variance by 37%.",
      "Launched an enablement program tied to pipeline health dashboards, lifting win-rate by 9%.",
      "Introduced quarterly board narrative synthesizing finance, marketing, and CS data streams.",
    ],
    timeline: [
      { label: "Referral", detail: "Former client sponsor intro – high trust" },
      { label: "Briefing", detail: "Completed AI tailoring session against Aurora JD" },
      { label: "Client Share", detail: "Link sent to Aurora buying committee" },
    ],
    matches: [
      {
        jobId: "job-revops",
        score: 91,
        summary:
          "Brings the board-ready forecasting and GTM alignment Aurora requested during intake.",
        tailoredResume: [
          "Centered resume opening on RevOps transformation metrics.",
          "Attached dashboard screenshots highlighting marketing-to-CS handoffs.",
          "Added blurb on enablement program adoption scores.",
        ],
        nextSteps: [
          "Queue leadership panel focused on change management playbook.",
          "Prep 30-60-90 plan emphasizing CSAT alignment.",
        ],
        clientAlignment: [
          {
            client: "Aurora HR Cloud",
            score: 94,
            rationale: "Direct toolset and executive storytelling match.",
          },
          {
            client: "SignalOps",
            score: 78,
            rationale: "Would need deeper PLG experimentation evidence.",
          },
        ],
        aiInsights: {
          highlights: ["Executive-level storytelling", "Change management operator"],
          risks: ["Needs quick immersion into Aurora's product packaging"],
          interviewReadiness: "Share 30-60-90 day outline ahead of VP conversation.",
        },
      },
      {
        jobId: "job-ml-platform",
        score: 49,
        summary: "Operations leader, not a technical platform builder.",
        tailoredResume: [
          "Positioned as cross-functional program sponsor for ML commercialization.",
        ],
        nextSteps: ["Keep in nurture campaign for RevOps adjacent roles."],
        clientAlignment: [
          {
            client: "Northwind Analytics",
            score: 52,
            rationale: "Strategic but lacks hands-on ML engineering background.",
          },
        ],
        aiInsights: {
          highlights: ["Revenue analytics excellence"],
          risks: ["Not technical enough for platform charter"],
          interviewReadiness: "Offer as GTM stakeholder for ML rollout workshops.",
        },
      },
    ],
  },
];

const getJob = (jobId: string) => jobs.find((job) => job.id === jobId) ?? jobs[0];

export default function Home() {
  const [selectedJobId, setSelectedJobId] = useState<Job["id"]>(jobs[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCandidateId, setSelectedCandidateId] = useState<Candidate["id"]>(
    candidates[0].id,
  );
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredCandidates = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return candidates;
    return candidates.filter((candidate) => {
      const haystack = [
        candidate.name,
        candidate.role,
        candidate.location,
        candidate.headline,
        ...candidate.skills,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [searchTerm]);

  const selectedCandidate = useMemo(() => {
    const candidate = candidates.find((item) => item.id === selectedCandidateId) ?? candidates[0];
    const match = candidate.matches.find((item) => item.jobId === selectedJobId) ?? candidate.matches[0];
    return { candidate, match };
  }, [selectedCandidateId, selectedJobId]);

  const shareCandidates = useMemo(() => {
    return favorites.length > 0 ? favorites : [selectedCandidate.candidate.id];
  }, [favorites, selectedCandidate.candidate.id]);

  const shareUrl = useMemo(() => {
    const base = "https://share.ihearttalent.com/review";
    const params = new URLSearchParams({ job: selectedJobId, candidates: shareCandidates.join(",") });
    return `${base}?${params.toString()}`;
  }, [shareCandidates, selectedJobId]);

  const toggleFavorite = (candidateId: string) => {
    setFavorites((prev) =>
      prev.includes(candidateId)
        ? prev.filter((id) => id !== candidateId)
        : [...prev, candidateId],
    );
  };

  const job = getJob(selectedJobId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-16 pt-12 lg:flex-row">
        <aside className="lg:w-80 lg:flex-none">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40">
            <h1 className="text-2xl font-semibold text-white">Candidate Command Center</h1>
            <p className="mt-2 text-sm text-slate-300">
              Search, curate, and collaborate on AI-tailored candidate slates. Every selection updates
              the shareable workspace in real time.
            </p>
            <div className="mt-6 space-y-5">
              <div>
                <label className="text-xs uppercase tracking-wide text-slate-400">Active roles</label>
                <div className="mt-2 space-y-3">
                  {jobs.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedJobId(option.id)}
                      className={`w-full rounded-2xl border p-3 text-left transition ${
                        option.id === selectedJobId
                          ? "border-blue-400/80 bg-blue-500/10 text-white"
                          : "border-slate-800 bg-slate-900/30 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{option.title}</span>
                        <span
                          className={`rounded-full px-2 text-xs font-semibold ${
                            option.priority === "Hot"
                              ? "bg-red-500/20 text-red-300"
                              : option.priority === "Active"
                                ? "bg-emerald-500/20 text-emerald-300"
                                : "bg-slate-500/20 text-slate-200"
                          }`}
                        >
                          {option.priority}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs text-slate-400">{option.company}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-slate-400">Search talent</label>
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by skill, name, or location"
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Share</h2>
            <p className="mt-2 text-sm text-slate-300">
              Share this slate with clients or teammates. Link tracking feeds engagement analytics back into
              the recruiter dashboard.
            </p>
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Live share link</p>
              <p className="mt-1 break-words text-sm font-medium text-blue-200">{shareUrl}</p>
              <p className="mt-3 text-xs text-slate-500">
                Includes {shareCandidates.length} candidate{shareCandidates.length === 1 ? "" : "s"} and job context
                for {job.company}.
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Candidates</h2>
                <span className="text-xs text-slate-500">{filteredCandidates.length} shown</span>
              </div>
              <div className="mt-4 space-y-3">
                {filteredCandidates.map((candidate) => {
                  const isSelected = candidate.id === selectedCandidateId;
                  const isFavorite = favorites.includes(candidate.id);
                  return (
                    <button
                      key={candidate.id}
                      onClick={() => setSelectedCandidateId(candidate.id)}
                      className={`group w-full rounded-2xl border p-4 text-left transition ${
                        isSelected
                          ? "border-blue-400/80 bg-blue-500/10 text-white"
                          : "border-slate-800 bg-slate-950/40 text-slate-200 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold">{candidate.name}</p>
                          <p className="text-xs text-slate-400">{candidate.role}</p>
                          <p className="text-xs text-slate-500">{candidate.location}</p>
                        </div>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleFavorite(candidate.id);
                          }}
                          className={`rounded-full border px-2 py-1 text-xs font-semibold transition ${
                            isFavorite
                              ? "border-pink-400/80 bg-pink-500/10 text-pink-200"
                              : "border-slate-700 bg-slate-900/60 text-slate-400 hover:border-slate-500"
                          }`}
                        >
                          {isFavorite ? "★ Saved" : "☆ Save"}
                        </button>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {candidate.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-slate-800/80 px-2 py-1 text-[10px] font-medium text-slate-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-blue-900/20">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-blue-300">Currently Highlighted</p>
                    <h2 className="text-2xl font-semibold text-white">
                      {selectedCandidate.candidate.name}
                    </h2>
                    <p className="text-sm text-slate-300">
                      {selectedCandidate.candidate.role} • {selectedCandidate.candidate.location}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-right">
                    <p className="text-xs uppercase tracking-wide text-blue-200">AI Match Score</p>
                    <p className="text-2xl font-semibold text-white">{selectedCandidate.match.score}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-200">{selectedCandidate.candidate.headline}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Tailored Resume</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      {selectedCandidate.match.tailoredResume.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-blue-300">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">AI Guidance</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      {selectedCandidate.match.aiInsights.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-emerald-300">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                      {selectedCandidate.match.aiInsights.risks.map((item) => (
                        <li key={item} className="flex gap-2 text-amber-200">
                          <span>⚠</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-slate-400">
                      Interview readiness: {selectedCandidate.match.aiInsights.interviewReadiness}
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Resume Highlights</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      {selectedCandidate.candidate.resumeHighlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-blue-300">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Engagement Timeline</p>
                    <ol className="mt-2 space-y-2 text-sm text-slate-200">
                      {selectedCandidate.candidate.timeline.map((item) => (
                        <li key={item.label}>
                          <p className="font-medium text-slate-100">{item.label}</p>
                          <p className="text-xs text-slate-400">{item.detail}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`https://calendly.com/ihearttalent/${selectedCandidate.candidate.id}`}
                    target="_blank"
                    className="rounded-full bg-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/30"
                  >
                    Schedule via Calendly
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleFavorite(selectedCandidate.candidate.id)}
                    className="rounded-full border border-pink-400/60 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-200 transition hover:bg-pink-500/20"
                  >
                    {favorites.includes(selectedCandidate.candidate.id)
                      ? "Added to slate"
                      : "Add to client slate"}
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-xs uppercase tracking-wide text-blue-300">Client Alignment Radar</p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800/80">
                  <table className="min-w-full text-left text-sm text-slate-200">
                    <thead className="bg-slate-950/60 text-xs uppercase tracking-wide text-slate-400">
                      <tr>
                        <th className="px-4 py-3">Client</th>
                        <th className="px-4 py-3">Fit Score</th>
                        <th className="px-4 py-3">Why it works</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCandidate.match.clientAlignment.map((entry) => (
                        <tr key={entry.client} className="border-t border-slate-800/60">
                          <td className="px-4 py-3 font-medium text-slate-100">{entry.client}</td>
                          <td className="px-4 py-3 text-blue-200">{entry.score}</td>
                          <td className="px-4 py-3 text-slate-300">{entry.rationale}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Job Brief</p>
                    <p className="mt-2 text-sm text-slate-200">{job.summary}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Key Skills</p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-200">
                      {job.keySkills.map((skill) => (
                        <li key={skill} className="flex gap-2">
                          <span className="text-blue-300">◆</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Success Metrics</p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-200">
                      {job.successMetrics.map((metric) => (
                        <li key={metric} className="flex gap-2">
                          <span className="text-emerald-300">▲</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
