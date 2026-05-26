import siteContent from "../../content/site.json";
import type { Project, SiteContent } from "@/types/content";

/** All editable site copy & data — change `content/site.json` only. */
export const content = siteContent as SiteContent;

export const site = content.site;
export const nav = content.nav;
export const footer = content.footer;
export const hero = content.hero;
export const stats = content.stats;
export const philosophy = content.philosophy;
export const workPreview = content.workPreview;
export const breadth = content.breadth;
export const capabilities = content.capabilities;
export const process = content.process;
export const marquee = content.marquee;
export const workPage = content.workPage;
export const aboutPage = content.aboutPage;
export const caseStudyLabels = content.caseStudy;

export const projects = content.projects;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectMedia(slug: string) {
  const project = getProject(slug);
  return project?.media;
}

export function getLoomEmbedUrl(embedId: string) {
  return `https://www.loom.com/embed/${embedId}?hide_owner=true&hide_share=true`;
}

// Re-export types for components
export type { Project, ProjectMetric } from "@/types/content";
