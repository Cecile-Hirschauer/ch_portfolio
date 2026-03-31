import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "omni-desk",
    title: "Omni Desk",
    description: {
      en: "AI hotel concierge SaaS. Multi-PMS MCP aggregation server, n8n workflows, AI agents.",
      fr: "SaaS de conciergerie hoteliere IA. Serveur MCP d'agregation multi-PMS, workflows n8n, agents IA.",
    },
    category: "ia-auto",
    tags: ["React", "Supabase", "MCP", "n8n", "Python"],
    links: { github: "https://github.com/..." },
  },
  {
    slug: "ch-digital",
    title: "CH-Digital-Solutions",
    description: {
      en: "Showcase website with technical SEO + GEO strategy. End-to-end automation pipelines for SMBs.",
      fr: "Site vitrine avec strategie SEO technique + GEO. Automatisation end-to-end pour PME.",
    },
    category: "fullstack",
    tags: ["React", "Make", "Supabase", "Brevo", "n8n"],
  },
];
