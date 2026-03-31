import type { StackDomain } from "./types";

export const stacks: StackDomain[] = [
  {
    slug: "frontend",
    title: "Frontend",
    icon: "Monitor",
    description: {
      en: "Building accessible, performant interfaces with modern frameworks.",
      fr: "Interfaces accessibles et performantes avec des frameworks modernes.",
    },
    technologies: ["React", "Next.js", "Astro", "TypeScript", "CSS Modules"],
    accentColor: "primary",
  },
  {
    slug: "backend",
    title: "Backend & API",
    icon: "Server",
    description: {
      en: "Robust APIs and server-side logic, from REST to edge functions.",
      fr: "APIs robustes et logique serveur, du REST aux edge functions.",
    },
    technologies: ["Node.js", "Python", "Supabase", "PostgreSQL", "Edge Functions"],
    accentColor: "secondary",
  },
  {
    slug: "automation",
    title: "AI & Automation",
    icon: "Zap",
    description: {
      en: "Workflow automation and AI agent orchestration for real-world impact.",
      fr: "Automatisation de workflows et orchestration d'agents IA.",
    },
    technologies: ["n8n", "MCP", "LangChain", "Make", "Claude API"],
    accentColor: "tertiary",
  },
];
