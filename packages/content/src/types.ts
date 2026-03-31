export type Locale = "en" | "fr";

export type LocalizedString = Record<Locale, string>;

export interface Project {
  slug: string;
  title: string;
  description: LocalizedString;
  category: "fullstack" | "mobile" | "blockchain" | "ia-auto";
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface StackDomain {
  slug: string;
  title: string;
  icon: string;
  description: LocalizedString;
  technologies: string[];
  accentColor: "primary" | "secondary" | "tertiary";
}

export interface TimelineEntry {
  number: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface ManifestoStatement {
  number: string;
  text: LocalizedString;
  highlight: boolean;
}

export interface CraftValue {
  title: string;
  description: LocalizedString;
}

export interface SiteMeta {
  title: string;
  description: LocalizedString;
  author: string;
  email: string;
  github: string;
  linkedin: string;
  availability: LocalizedString;
}
