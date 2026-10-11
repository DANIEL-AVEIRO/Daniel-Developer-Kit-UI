export const pageEntries = [
  {
    id: 'template-login-page',
    name: "Login page",
    slug: 'login-page',
    kind: 'template',
    category: 'complete-pages',
    description: "Full-page sign-in layout with local validation messaging.",
    tags: ["login", "auth", "page"],
    dependencies: [],
    setup: "Copy LoginPage.jsx. Point links to your routes and connect submit later.",
    responsiveNotes: "Centered card; comfortable on phones.",
    related: ["login-forms", "registration-page"],
    loadPreview: () => import('./loginPage/LoginPage.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./loginPage/LoginPage.jsx?raw')])
      return [{ filename: 'LoginPage.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'template-registration-page',
    name: "Registration page",
    slug: 'registration-page',
    kind: 'template',
    category: 'complete-pages',
    description: "Split registration layout with form and supporting copy.",
    tags: ["register", "auth", "page"],
    dependencies: [],
    setup: "Copy RegistrationPage.jsx and replace the success message with your flow.",
    responsiveNotes: "Stacks to one column below lg.",
    related: ["registration-forms", "login-page"],
    loadPreview: () => import('./registrationPage/RegistrationPage.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./registrationPage/RegistrationPage.jsx?raw')])
      return [{ filename: 'RegistrationPage.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'template-forgot-password-page',
    name: "Forgot-password page",
    slug: 'forgot-password-page',
    kind: 'template',
    category: 'complete-pages',
    description: "Password reset request page with a local success state.",
    tags: ["password", "auth", "page"],
    dependencies: [],
    setup: "Copy ForgotPasswordPage.jsx and connect the submit handler.",
    responsiveNotes: "Centered card.",
    related: ["login-page"],
    loadPreview: () => import('./forgotPasswordPage/ForgotPasswordPage.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./forgotPasswordPage/ForgotPasswordPage.jsx?raw')])
      return [{ filename: 'ForgotPasswordPage.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'template-user-profile-page',
    name: "User profile page",
    slug: 'user-profile-page',
    kind: 'template',
    category: 'complete-pages',
    description: "Profile cover, avatar, and tabbed content sections.",
    tags: ["profile", "page", "tabs"],
    dependencies: [],
    setup: "Copy UserProfilePage.jsx and replace sample person data.",
    responsiveNotes: "Header actions wrap; tabs scroll if needed.",
    related: ["user-profile-cards", "settings-page"],
    loadPreview: () => import('./userProfilePage/UserProfilePage.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./userProfilePage/UserProfilePage.jsx?raw')])
      return [{ filename: 'UserProfilePage.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'template-settings-page',
    name: "Settings page",
    slug: 'settings-page',
    kind: 'template',
    category: 'complete-pages',
    description: "Settings shell with sidebar and a saveable profile form.",
    tags: ["settings", "form", "page"],
    dependencies: [],
    setup: "Copy SettingsPage.jsx and persist values with your API when ready.",
    responsiveNotes: "Sidebar stacks above the form below lg.",
    related: ["user-profile-page", "switches"],
    loadPreview: () => import('./settingsPage/SettingsPage.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./settingsPage/SettingsPage.jsx?raw')])
      return [{ filename: 'SettingsPage.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'template-contact-page',
    name: "Contact page",
    slug: 'contact-page',
    kind: 'template',
    category: 'complete-pages',
    description: "Contact details beside a working local message form.",
    tags: ["contact", "page", "form"],
    dependencies: [{"name": "lucide-react", "reason": "Contact detail icons."}],
    setup: "Install lucide-react and copy ContactPage.jsx.",
    responsiveNotes: "Two columns from lg.",
    related: ["contact-forms"],
    loadPreview: () => import('./contactPage/ContactPage.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./contactPage/ContactPage.jsx?raw')])
      return [{ filename: 'ContactPage.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'template-landing-page',
    name: "Landing page",
    slug: 'landing-page',
    kind: 'template',
    category: 'complete-pages',
    description: "Complete marketing landing page with features and waitlist form.",
    tags: ["landing", "marketing", "page"],
    dependencies: [{"name": "lucide-react", "reason": "Hero arrow icon."}],
    setup: "Install lucide-react and copy LandingPage.jsx.",
    responsiveNotes: "Content width constrained; grids collapse on small screens.",
    related: ["hero-sections", "feature-grids"],
    loadPreview: () => import('./landingPage/LandingPage.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./landingPage/LandingPage.jsx?raw')])
      return [{ filename: 'LandingPage.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'template-404-page',
    name: "404 page",
    slug: '404-page',
    kind: 'template',
    category: 'complete-pages',
    description: "Centered not-found page with a home action.",
    tags: ["404", "error", "page"],
    dependencies: [],
    setup: "Copy NotFoundTemplate.jsx and update the home link.",
    responsiveNotes: "Centered on all widths.",
    related: ["empty-states"],
    loadPreview: () => import('./notFoundTemplate/NotFoundTemplate.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./notFoundTemplate/NotFoundTemplate.jsx?raw')])
      return [{ filename: 'NotFoundTemplate.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
]
