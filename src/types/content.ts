export type NavItem = { label: string; href: string };

export type ProjectMetric = { value: string; label: string };

export type ProjectPhase = { title: string; description: string };

export type ProjectMedia = {
  hero: string;
  gallery: string[];
  loomEmbedId: string | null;
  videoCaption: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  accent: string;
  gradient: string;
  overview: string;
  challenge: string;
  approach: ProjectPhase[];
  capabilities: string[];
  stack: string[];
  outcomes: string[];
  metrics: ProjectMetric[];
  meta: {
    domain: string;
    scope: string;
    role: string;
    engagementType: string;
  };
  media: ProjectMedia;
};

export type SiteContent = {
  site: {
    name: string;
    title: string;
    headerSubtitle: string;
    tagline: string;
    description: string;
    url: string;
    links: { github: string; linkedin: string };
    workIntro: string;
    location: string;
  };
  nav: NavItem[];
  footer: {
    headline: string;
    headlineMuted: string;
    description: string;
    connectLabel: string;
    exploreLabel: string;
    techNote: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    footnote: string;
    scrollLabel: string;
  };
  stats: {
    label: string;
    description: string;
    siteStats: { value: string; label: string; suffix: string }[];
    careerHighlights: { metric: string; label: string; context: string }[];
  };
  philosophy: {
    label: string;
    title: string;
    titleMuted: string;
    paragraphs: string[];
  };
  workPreview: {
    label: string;
    title: string;
    titleMuted: string;
    viewAllLink: string;
    spotlightBadge: string;
    readCaseStudy: string;
  };
  breadth: {
    label: string;
    title: string;
    titleMuted: string;
    spotlightNote: string;
    industriesLabel: string;
    alsoShippedLabel: string;
    industries: string[];
    deliveryTypes: { title: string; description: string; count: string }[];
    additionalWork: string[];
  };
  capabilities: {
    label: string;
    title: string;
    titleMuted: string;
    items: { title: string; description: string; icon: string }[];
  };
  process: {
    label: string;
    title: string;
    titleMuted: string;
    description: string;
    steps: { step: string; label: string; detail: string }[];
  };
  marquee: { items: string[] };
  workPage: {
    metaTitle: string;
    label: string;
    title: string;
    titleMuted: string;
    deepDivesLabel: string;
    readFullCaseStudy: string;
  };
  aboutPage: {
    metaTitle: string;
    metaDescription: string;
    label: string;
    headline: string;
    paragraphs: string[];
    connectLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    deliveryFootprintLabel: string;
    principlesLabel: string;
    principlesTitle: string;
    principles: { title: string; body: string }[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  caseStudy: {
    spotlightBadge: string;
    scopeLabel: string;
    contributionLabel: string;
    overviewLabel: string;
    overviewNote: string;
    interfaceLabel: string;
    challengeLabel: string;
    approachLabel: string;
    approachTitle: string;
    capabilitiesLabel: string;
    stackLabel: string;
    outcomesLabel: string;
    outcomesTitle: string;
    nextSpotlightLabel: string;
    allWorkLink: string;
    watchWalkthrough: string;
    viewPreview: string;
    loomHint: string;
  };
  projects: Project[];
};
