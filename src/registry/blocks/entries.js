export const blockEntries = [
  {
    id: 'block-hero-sections',
    name: "Hero sections",
    slug: 'hero-sections',
    kind: 'block',
    category: 'website-blocks',
    description: "Marketing hero with headline, supporting copy, and two CTAs.",
    tags: ["hero", "marketing", "cta"],
    dependencies: [{"name": "lucide-react", "reason": "Arrow icon on the primary CTA."}],
    setup: "Install lucide-react and copy HeroSection.jsx. Update the links.",
    responsiveNotes: "Type scales down on small screens; buttons wrap.",
    related: ["cta-sections", "feature-grids"],
    loadPreview: () => import('./heroSection/HeroSection.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./heroSection/HeroSection.jsx?raw')])
      return [{ filename: 'HeroSection.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'block-feature-grids',
    name: "Feature grids",
    slug: 'feature-grids',
    kind: 'block',
    category: 'website-blocks',
    description: "Three-up feature grid with icons and short explanations.",
    tags: ["features", "grid", "marketing"],
    dependencies: [{"name": "lucide-react", "reason": "Feature icons."}],
    setup: "Install lucide-react and copy FeatureGrid.jsx.",
    responsiveNotes: "One column on small screens, three from md.",
    related: ["hero-sections"],
    loadPreview: () => import('./featureGrid/FeatureGrid.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./featureGrid/FeatureGrid.jsx?raw')])
      return [{ filename: 'FeatureGrid.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'block-testimonials',
    name: "Testimonials",
    slug: 'testimonials',
    kind: 'block',
    category: 'website-blocks',
    description: "Quote carousel with selectable student testimonials.",
    tags: ["testimonial", "quote", "social-proof"],
    dependencies: [{"name": "lucide-react", "reason": "Quote icon."}],
    setup: "Install lucide-react and copy Testimonials.jsx.",
    responsiveNotes: "Quote text wraps; controls stay under the quote.",
    related: ["team-sections"],
    loadPreview: () => import('./testimonials/Testimonials.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./testimonials/Testimonials.jsx?raw')])
      return [{ filename: 'Testimonials.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'block-pricing-sections',
    name: "Pricing sections",
    slug: 'pricing-sections',
    kind: 'block',
    category: 'website-blocks',
    description: "Marketing pricing section with monthly and yearly sample prices.",
    tags: ["pricing", "marketing"],
    dependencies: [{"name": "lucide-react", "reason": "Feature checkmarks."}],
    setup: "Install lucide-react and copy PricingSection.jsx.",
    responsiveNotes: "Stacks below lg.",
    related: ["pricing-tables", "cta-sections"],
    loadPreview: () => import('./pricingSection/PricingSection.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./pricingSection/PricingSection.jsx?raw')])
      return [{ filename: 'PricingSection.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'block-faq-sections',
    name: "FAQ sections",
    slug: 'faq-sections',
    kind: 'block',
    category: 'website-blocks',
    description: "FAQ accordion for common student questions.",
    tags: ["faq", "accordion", "docs"],
    dependencies: [{"name": "lucide-react", "reason": "Chevron indicators."}],
    setup: "Install lucide-react and copy FaqSection.jsx.",
    responsiveNotes: "Full width text.",
    related: ["accordions"],
    loadPreview: () => import('./faqSection/FaqSection.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./faqSection/FaqSection.jsx?raw')])
      return [{ filename: 'FaqSection.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'block-cta-sections',
    name: "CTA sections",
    slug: 'cta-sections',
    kind: 'block',
    category: 'website-blocks',
    description: "Dark call-to-action band with two destination links.",
    tags: ["cta", "marketing"],
    dependencies: [],
    setup: "Copy CtaSection.jsx and update the href values.",
    responsiveNotes: "Buttons wrap and center.",
    related: ["hero-sections"],
    loadPreview: () => import('./ctaSection/CtaSection.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./ctaSection/CtaSection.jsx?raw')])
      return [{ filename: 'CtaSection.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'block-team-sections',
    name: "Team sections",
    slug: 'team-sections',
    kind: 'block',
    category: 'website-blocks',
    description: "Mentor grid with initials avatars and roles.",
    tags: ["team", "people", "about"],
    dependencies: [],
    setup: "Copy TeamSection.jsx and replace the people list.",
    responsiveNotes: "Two columns from sm.",
    related: ["testimonials", "user-profile-cards"],
    loadPreview: () => import('./teamSection/TeamSection.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./teamSection/TeamSection.jsx?raw')])
      return [{ filename: 'TeamSection.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'block-footers',
    name: "Footers",
    slug: 'footers',
    kind: 'block',
    category: 'website-blocks',
    description: "Site footer with brand blurb and link columns.",
    tags: ["footer", "links"],
    dependencies: [],
    setup: "Copy SiteFooter.jsx and update the link lists.",
    responsiveNotes: "Columns stack on small screens.",
    related: ["basic-navbar"],
    loadPreview: () => import('./siteFooter/SiteFooter.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./siteFooter/SiteFooter.jsx?raw')])
      return [{ filename: 'SiteFooter.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
]
