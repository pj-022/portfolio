import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/work/CaseStudy";
import { getProject, projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
