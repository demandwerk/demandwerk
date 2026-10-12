// Company details, the site map and homepage copy. Edit here and every page updates.

export const company = {
  name: 'DemandWerk',
  tagline: 'Client growth for law firms',
  description: 'DemandWerk builds the websites, search presence, ad campaigns and lead tracking that bring law firms qualified new clients.',
  email: '', // e.g. 'hello@demandwerk.com'. Shown in the footer and contact section when set.
  // Access key from https://web3forms.com: enter the email that should receive
  // inquiries and paste the key here. It is safe to be public.
  formKey: '',
};

// ---------------------------------------------------------------------------
// Site map. Each entry becomes a page at /<parent slugs>/<slug>/ and appears in
// the menus in this order. `blurb` is the page's intro and its card text on the
// parent page. Longer page copy goes in src/content/pages/<same path>.md.

export interface PageNode {
  title: string;
  slug: string;
  blurb: string;
  menuTitle?: string; // shorter label for the menus, when the title is long
  children?: PageNode[];
}

export const about: PageNode = {
  title: 'About', slug: 'about',
  blurb: 'Who we are, what we believe and who you’ll work with.',
  children: [
    { title: 'Who We Are', slug: 'who-we-are', blurb: 'A marketing team that talks in plain language and measures what matters.' },
    { title: 'Our Values', slug: 'our-values', blurb: 'The principles behind how we plan, build and report.' },
    { title: 'Nick Werker', slug: 'nick-werker', blurb: 'Meet Nick Werker.' },
  ],
};

export const services: PageNode = {
  title: 'Services', slug: 'services',
  blurb: 'Strategy, content, search, paid media and reporting, planned together so every channel pulls toward your goals.',
  children: [
    {
      title: 'Marketing Strategy & Fractional CMO', menuTitle: 'Marketing Strategy', slug: 'marketing-strategy',
      blurb: 'Senior marketing leadership without a full-time hire: a plan, a budget and someone accountable for both.',
    },
    {
      title: 'Content', slug: 'content',
      blurb: 'A content architecture that maps what your buyers ask to the pages, posts and videos that answer it.',
      children: [
        { title: 'Pillar Pages', slug: 'pillar-pages', blurb: 'In-depth guides on your core topics that anchor your site and rank for the searches that matter.' },
        { title: 'Blog', slug: 'blog', blurb: 'Regular articles that answer real questions and support your pillar pages.' },
        { title: 'Video', slug: 'video', blurb: 'Short and long-form video for your website, YouTube and social.' },
      ],
    },
    {
      title: 'SEO', slug: 'seo',
      blurb: 'A documented, repeatable process for getting found in search.',
      children: [
        { title: 'On-Page SEO', menuTitle: 'On-Page', slug: 'on-page', blurb: 'Titles, headings, content and internal links tuned to what people actually search.' },
        { title: 'Off-Page SEO', menuTitle: 'Off-Page', slug: 'off-page', blurb: 'Links and mentions from relevant sites that build your authority.' },
        { title: 'Technical SEO', menuTitle: 'Technical', slug: 'technical', blurb: 'Speed, crawling, indexing and structured data, so search engines can read your site.' },
        { title: 'Content Syndication', menuTitle: 'Syndication', slug: 'syndication', blurb: 'Republishing your content on trusted platforms to reach more of the right people.' },
      ],
    },
    {
      title: 'Local SEO', slug: 'local-seo',
      blurb: 'Show up in the map pack and local results where nearby customers are looking.',
      children: [
        { title: 'Google Business Profile', slug: 'google-business-profile', blurb: 'A complete, active profile with the right categories, photos, posts and reviews.' },
        { title: 'Bing Places', slug: 'bing-places', blurb: 'The same care for Bing, and the apps and assistants that use its data.' },
      ],
    },
    {
      title: 'ChatGPT & AI Search (GEO)', menuTitle: 'ChatGPT & GEO', slug: 'ai-search',
      blurb: 'Get your brand found and recommended in ChatGPT, Gemini, Perplexity and AI Overviews.',
      children: [
        { title: 'Context', slug: 'context', blurb: 'Give AI models clear, consistent facts about who you are and what you do.' },
        { title: 'Brand Mentions', slug: 'brand-mentions', blurb: 'Earn mentions on the sites and communities AI models learn from.' },
        { title: 'Dark Social', slug: 'dark-social', blurb: 'Reach people in DMs, group chats and private communities, where many buying conversations happen.' },
        { title: 'Reputation Management', slug: 'reputation-management', blurb: 'Monitor and improve what reviews, forums and AI answers say about you.' },
      ],
    },
    {
      title: 'Paid Media', slug: 'paid-media',
      blurb: 'Campaigns planned and bought around your goals, not the platform’s.',
      children: [
        { title: 'Media Buying', slug: 'media-buying', blurb: 'Planning, negotiating and placing media across channels to get the most from your budget.' },
        { title: 'Paid Search', slug: 'paid-search', blurb: 'Google and Microsoft Ads campaigns built around high-intent searches.' },
        { title: 'Paid Social', slug: 'paid-social', blurb: 'Meta, LinkedIn and other social ads aimed at your buyers.' },
        { title: 'Retargeting', slug: 'retargeting', blurb: 'Stay in front of people who visited but haven’t taken the next step yet.' },
        { title: 'YouTube Ads', slug: 'youtube-ads', blurb: 'Video ads that reach your audience where they watch.' },
      ],
    },
    {
      title: 'Branding', slug: 'branding',
      blurb: 'Messaging, identity and voice that make it obvious what you do and why you’re the right choice.',
    },
    {
      title: 'Positioning & Demand Generation', menuTitle: 'Positioning & Demand Gen', slug: 'positioning-demand-generation',
      blurb: 'Define the space you own, then build demand among buyers who don’t know they need you yet.',
    },
    {
      title: 'Lead Generation', slug: 'lead-generation',
      blurb: 'Turn more of the traffic you already have into qualified leads.',
      children: [
        { title: 'Conversion Rate Optimization', menuTitle: 'CRO', slug: 'cro', blurb: 'Test and improve pages and forms so more visitors take the next step.' },
        { title: 'Offer Refinement', slug: 'offer-refinement', blurb: 'Sharpen what you offer and how you present it, so it’s easy to say yes.' },
        { title: 'Buyer’s Journey Mapping', slug: 'buyers-journey-mapping', blurb: 'Map how your buyers find, compare and choose, and meet them at each step.' },
      ],
    },
    {
      title: 'Reporting & Analytics', slug: 'reporting-analytics',
      blurb: 'Dashboards in AgencyAnalytics, call and form tracking in WhatConverts, and your CRM, tied together.',
      children: [
        { title: 'Business Reporting', slug: 'business-reporting', blurb: 'Reports on leads, revenue and cost per acquisition, not just clicks and impressions.' },
        { title: 'Web Form & Call Tracking', slug: 'call-tracking', blurb: 'Know which channel, campaign and keyword produced every call and form.' },
      ],
    },
  ],
};

export const learn: PageNode = {
  title: 'Learn', slug: 'learn',
  blurb: 'Free resources to help you plan, do it yourself, or decide what to hand off.',
  children: [
    { title: 'Marketing Resources', slug: 'marketing-resources', blurb: 'Guides, templates and checklists.' },
    { title: 'DIY: How-Tos & Why-Nots', menuTitle: 'DIY', slug: 'diy', blurb: 'What you can do yourself, how to do it, and when it’s better not to.' },
    { title: 'Platforms & Tools', slug: 'platforms-and-tools', blurb: 'Website builders, research tools like Semrush and SparkToro, and the best free tools.' },
  ],
};

// Blog categories. Posts in src/content/posts set `category` to one of these slugs.
export const blogCategories = [
  { title: 'Opinions', slug: 'opinions', blurb: 'What we think about the state of marketing, and why.' },
];

// Every page generated from the site map above, with its URL and breadcrumb trail.
export interface SitePage extends PageNode { path: string; href: string; trail: { title: string; href: string }[] }
function flatten(node: PageNode, parents: SitePage[] = []): SitePage[] {
  const path = [...parents.map((p) => p.slug), node.slug].join('/');
  const page: SitePage = { ...node, path, href: `/${path}/`, trail: parents.map((p) => ({ title: p.title, href: p.href })) };
  return [page, ...(node.children ?? []).flatMap((c) => flatten(c, [...parents, page]))];
}
export const sitePages = [about, services, learn].flatMap((n) => flatten(n));

// Main menu. Entries with a `node` get a dropdown built from the site map.
export const nav: { label: string; href: string; node?: PageNode; links?: { title: string; href: string }[] }[] = [
  { label: 'About', href: '/about/', node: about },
  { label: 'Services', href: '/services/', node: services },
  { label: 'Learn', href: '/learn/', node: learn },
  { label: 'Blog', href: '/blog/', links: blogCategories.map((c) => ({ title: c.title, href: `/blog/${c.slug}/` })) },
];

// ---------------------------------------------------------------------------
// Homepage copy.

// "We hate platitudes. Here's what we do, in plain language."
export const whatWeDo = [
  { text: 'We understand your business goals.', links: [{ label: 'Free consult, no badgering', href: '/contact/' }] },
  { text: 'We set up or build websites that actually succeed.', links: [{ label: 'How? Site architecture', href: '/services/content/' }, { label: 'SEO', href: '/services/seo/' }] },
  { text: 'We make you visible in search.', links: [{ label: 'SEO', href: '/services/seo/' }, { label: 'Local SEO', href: '/services/local-seo/' }] },
  { text: 'We help you stand out from your competition.', links: [{ label: 'Positioning', href: '/services/positioning-demand-generation/' }, { label: 'Branding', href: '/services/branding/' }] },
  { text: 'We help you run paid ads.', links: [{ label: 'PPC & paid media', href: '/services/paid-media/' }] },
  { text: 'We make it all make sense, in your language.', links: [{ label: 'Reporting', href: '/services/reporting-analytics/' }] },
];

export const guarantees = [
  { title: 'Accountability', body: 'We own our results, and we tell you when something isn’t working.' },
  { title: 'Reasonableness', body: 'Recommendations sized to your goals and budget, not ours.' },
  { title: 'Expertise', body: 'Experienced marketers doing the work across search, content, ads and analytics.' },
  { title: 'Transparency', body: 'You see what we do, what it costs and what it produces.' },
];

export const steps = [
  { title: 'Audit', body: 'We review your site, search visibility, ad accounts and intake process, and agree on the goals worth chasing.' },
  { title: 'Build', body: 'We fix the foundations first: the website, tracking and local listings. Then we launch content and campaigns on top of them.' },
  { title: 'Measure & tune', body: 'A live dashboard shows leads by source. We shift effort toward what produces clients and report back in plain English.' },
];

export const reasons = [
  { title: 'Law firms only', body: 'We know how people search for a lawyer, how intake works and what attorney advertising rules allow.' },
  { title: 'Built for intake', body: 'Click-to-call, bilingual pages and short forms make it easy for a potential client to reach you the moment they decide to.' },
  { title: 'You own it', body: 'Your website, domain, ad accounts and data stay in your name.' },
  { title: 'Plain reporting', body: 'One dashboard, real numbers, no vanity metrics.' },
];

export const practiceAreas = [
  'Employment & labor',
  'Personal injury',
  'Workers’ compensation',
  'Family law',
  'Criminal defense',
  'Immigration',
  'Estate planning',
];
