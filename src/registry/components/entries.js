export const componentEntries = [
  {
    id: 'component-buttons',
    name: "Buttons",
    slug: 'buttons',
    kind: 'component',
    category: 'basic-ui',
    description: "Primary, secondary, outline, ghost, and danger buttons with sizes and a working click counter.",
    tags: ["button", "cta", "action"],
    dependencies: [],
    setup: "Copy Button.jsx into your project and import Button.",
    responsiveNotes: "Buttons wrap with flex-wrap in the preview. Keep labels short on narrow screens.",
    related: ["icon-buttons", "alerts"],
    loadPreview: () => import('./button/Button.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./button/Button.jsx?raw')])
      return [{ filename: 'Button.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-icon-buttons',
    name: "Icon buttons",
    slug: 'icon-buttons',
    kind: 'component',
    category: 'basic-ui',
    description: "Accessible icon-only controls with required text labels for screen readers.",
    tags: ["icon", "button", "toolbar"],
    dependencies: [{"name": "lucide-react", "reason": "The usage example imports Bell. IconButton.jsx does not.", "scope": "example"}],
    setup: "Copy IconButton.jsx and pass a label plus any icon element. Install lucide-react only if you keep the Bell icon from the usage example.",
    responsiveNotes: "Touch targets stay at least 32px. Place them with gap utilities.",
    related: ["buttons"],
    loadPreview: () => import('./iconButton/IconButton.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./iconButton/IconButton.jsx?raw')])
      return [{ filename: 'IconButton.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-badges',
    name: "Badges",
    slug: 'badges',
    kind: 'component',
    category: 'basic-ui',
    description: "Compact status labels with neutral, info, success, warning, and danger tones.",
    tags: ["badge", "status", "label"],
    dependencies: [],
    setup: "Copy Badge.jsx and import Badge.",
    responsiveNotes: "Badges wrap. Prefer short words.",
    related: ["status-badges", "alerts"],
    loadPreview: () => import('./badge/Badge.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./badge/Badge.jsx?raw')])
      return [{ filename: 'Badge.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-avatars',
    name: "Avatars",
    slug: 'avatars',
    kind: 'component',
    category: 'basic-ui',
    description: "Circular avatars with image support and initials fallback when the image fails.",
    tags: ["avatar", "profile", "image"],
    dependencies: [],
    setup: "Copy Avatar.jsx. Pass name and optional src.",
    responsiveNotes: "Sizes stay fixed; layout them with flex.",
    related: ["user-profile-cards"],
    loadPreview: () => import('./avatar/Avatar.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./avatar/Avatar.jsx?raw')])
      return [{ filename: 'Avatar.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-cards',
    name: "Cards",
    slug: 'cards',
    kind: 'component',
    category: 'basic-ui',
    description: "Composable card shell with header, content, and footer sections.",
    tags: ["card", "panel", "layout"],
    dependencies: [],
    setup: "Copy Card.jsx and import the named sections you need.",
    responsiveNotes: "The demo card is max-width constrained; nest content that can wrap.",
    related: ["stat-cards"],
    loadPreview: () => import('./card/Card.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./card/Card.jsx?raw')])
      return [{ filename: 'Card.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-alerts',
    name: "Alerts",
    slug: 'alerts',
    kind: 'component',
    category: 'basic-ui',
    description: "Inline feedback messages with optional dismiss control.",
    tags: ["alert", "feedback", "toast"],
    dependencies: [{"name": "lucide-react", "reason": "Tone icons and the dismiss control."}],
    setup: "Install lucide-react, copy Alert.jsx, and pass tone, title, and children.",
    responsiveNotes: "Content stacks cleanly; keep titles short.",
    related: ["badges"],
    loadPreview: () => import('./alert/Alert.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./alert/Alert.jsx?raw')])
      return [{ filename: 'Alert.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-tooltips',
    name: "Tooltips",
    slug: 'tooltips',
    kind: 'component',
    category: 'basic-ui',
    description: "Hover and focus tooltips for short helper text.",
    tags: ["tooltip", "hint", "hover"],
    dependencies: [],
    setup: "Copy Tooltip.jsx and wrap a focusable control.",
    responsiveNotes: "Tooltips use max-width and may clip near viewport edges in tight frames.",
    related: ["icon-buttons"],
    loadPreview: () => import('./tooltip/Tooltip.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./tooltip/Tooltip.jsx?raw')])
      return [{ filename: 'Tooltip.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-progress-bars',
    name: "Progress bars",
    slug: 'progress-bars',
    kind: 'component',
    category: 'basic-ui',
    description: "Labeled progress bars with an interactive value control in the preview.",
    tags: ["progress", "loading", "meter"],
    dependencies: [],
    setup: "Copy ProgressBar.jsx and pass a 0\u2013100 value.",
    responsiveNotes: "Full width of the parent container.",
    related: ["spinners", "skeletons"],
    loadPreview: () => import('./progressBar/ProgressBar.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./progressBar/ProgressBar.jsx?raw')])
      return [{ filename: 'ProgressBar.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-skeletons',
    name: "Skeletons",
    slug: 'skeletons',
    kind: 'component',
    category: 'basic-ui',
    description: "Pulse placeholders for loading content.",
    tags: ["skeleton", "loading", "placeholder"],
    dependencies: [],
    setup: "Copy Skeleton.jsx and size it with Tailwind width and height classes.",
    responsiveNotes: "Use percentage or relative widths for fluid layouts.",
    related: ["spinners"],
    loadPreview: () => import('./skeleton/Skeleton.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./skeleton/Skeleton.jsx?raw')])
      return [{ filename: 'Skeleton.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-spinners',
    name: "Spinners",
    slug: 'spinners',
    kind: 'component',
    category: 'basic-ui',
    description: "Accessible loading indicators with visible text labels.",
    tags: ["spinner", "loading"],
    dependencies: [],
    setup: "Copy Spinner.jsx and set the label to describe the pending action.",
    responsiveNotes: "Inline layout; wrap with flex if needed.",
    related: ["progress-bars", "skeletons"],
    loadPreview: () => import('./spinner/Spinner.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./spinner/Spinner.jsx?raw')])
      return [{ filename: 'Spinner.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-accordions',
    name: "Accordions",
    slug: 'accordions',
    kind: 'component',
    category: 'basic-ui',
    description: "Single-open accordion panels with keyboard-friendly disclosure buttons.",
    tags: ["accordion", "disclosure", "faq"],
    dependencies: [{"name": "lucide-react", "reason": "Chevron indicator."}],
    setup: "Install lucide-react and copy Accordion.jsx. Pass an items array.",
    responsiveNotes: "Full width; text wraps inside panels.",
    related: ["faq-sections", "tabs"],
    loadPreview: () => import('./accordion/Accordion.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./accordion/Accordion.jsx?raw')])
      return [{ filename: 'Accordion.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-tabs',
    name: "Tabs",
    slug: 'tabs',
    kind: 'component',
    category: 'basic-ui',
    description: "Accessible tabs with arrow-key navigation between tab stops.",
    tags: ["tabs", "navigation", "panels"],
    dependencies: [],
    setup: "Copy Tabs.jsx and pass a tabs array of id, label, and content.",
    responsiveNotes: "Tab labels may wrap or scroll horizontally if many are present.",
    related: ["accordions"],
    loadPreview: () => import('./tabs/Tabs.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./tabs/Tabs.jsx?raw')])
      return [{ filename: 'Tabs.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-dividers',
    name: "Dividers",
    slug: 'dividers',
    kind: 'component',
    category: 'basic-ui',
    description: "Horizontal rules with an optional centered label.",
    tags: ["divider", "separator"],
    dependencies: [],
    setup: "Copy Divider.jsx and optionally pass label.",
    responsiveNotes: "The labeled variant flexes to the container width.",
    related: ["empty-states"],
    loadPreview: () => import('./divider/Divider.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./divider/Divider.jsx?raw')])
      return [{ filename: 'Divider.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-empty-states',
    name: "Empty states",
    slug: 'empty-states',
    kind: 'component',
    category: 'basic-ui',
    description: "Dashed empty panels with title, description, and an optional action.",
    tags: ["empty", "placeholder", "zero-state"],
    dependencies: [],
    setup: "Copy EmptyState.jsx. Pass icon, title, description, and action as needed. The live preview uses a lucide icon, and that icon is not part of the copied file.",
    responsiveNotes: "Centers content; looks best with a max width.",
    related: ["dividers"],
    loadPreview: () => import('./emptyState/EmptyState.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./emptyState/EmptyState.jsx?raw')])
      return [{ filename: 'EmptyState.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-text-inputs',
    name: "Text inputs",
    slug: 'text-inputs',
    kind: 'component',
    category: 'forms',
    description: "Labeled text fields with hint and error text wiring.",
    tags: ["input", "form", "text"],
    dependencies: [],
    setup: "Copy TextField.jsx and wire id, label, and validation props.",
    responsiveNotes: "Full width of the parent.",
    related: ["textareas", "login-forms"],
    loadPreview: () => import('./textField/TextField.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./textField/TextField.jsx?raw')])
      return [{ filename: 'TextField.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-textareas',
    name: "Textareas",
    slug: 'textareas',
    kind: 'component',
    category: 'forms',
    description: "Multi-line fields with hint and error support.",
    tags: ["textarea", "form"],
    dependencies: [],
    setup: "Copy TextArea.jsx and set rows as needed.",
    responsiveNotes: "Full width; rows control height.",
    related: ["text-inputs", "contact-forms"],
    loadPreview: () => import('./textArea/TextArea.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./textArea/TextArea.jsx?raw')])
      return [{ filename: 'TextArea.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-select-fields',
    name: "Select fields",
    slug: 'select-fields',
    kind: 'component',
    category: 'forms',
    description: "Native select controls with custom chevron styling.",
    tags: ["select", "form", "dropdown"],
    dependencies: [{"name": "lucide-react", "reason": "Chevron icon."}],
    setup: "Install lucide-react, copy SelectField.jsx, and pass options.",
    responsiveNotes: "Full width of the parent.",
    related: ["radio-buttons"],
    loadPreview: () => import('./selectField/SelectField.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./selectField/SelectField.jsx?raw')])
      return [{ filename: 'SelectField.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-checkboxes',
    name: "Checkboxes",
    slug: 'checkboxes',
    kind: 'component',
    category: 'forms',
    description: "Checkbox fields with optional descriptions.",
    tags: ["checkbox", "form"],
    dependencies: [],
    setup: "Copy CheckboxField.jsx and control checked state.",
    responsiveNotes: "Labels wrap beside the control.",
    related: ["switches", "radio-buttons"],
    loadPreview: () => import('./checkboxField/CheckboxField.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./checkboxField/CheckboxField.jsx?raw')])
      return [{ filename: 'CheckboxField.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-radio-buttons',
    name: "Radio buttons",
    slug: 'radio-buttons',
    kind: 'component',
    category: 'forms',
    description: "Radio groups with bordered options and descriptions.",
    tags: ["radio", "form", "choice"],
    dependencies: [],
    setup: "Copy RadioGroup.jsx and manage the selected value.",
    responsiveNotes: "Options stack vertically.",
    related: ["select-fields", "checkboxes"],
    loadPreview: () => import('./radioGroup/RadioGroup.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./radioGroup/RadioGroup.jsx?raw')])
      return [{ filename: 'RadioGroup.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-switches',
    name: "Switches",
    slug: 'switches',
    kind: 'component',
    category: 'forms',
    description: "Toggle switches built as accessible switch buttons.",
    tags: ["switch", "toggle", "form"],
    dependencies: [],
    setup: "Copy SwitchField.jsx and pass checked plus onChange.",
    responsiveNotes: "Label and switch sit side by side and wrap on narrow parents.",
    related: ["checkboxes"],
    loadPreview: () => import('./switchField/SwitchField.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./switchField/SwitchField.jsx?raw')])
      return [{ filename: 'SwitchField.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-search-inputs',
    name: "Search inputs",
    slug: 'search-inputs',
    kind: 'component',
    category: 'forms',
    description: "Search form with clear control and submit handler.",
    tags: ["search", "form", "filter"],
    dependencies: [{"name": "lucide-react", "reason": "Search and clear icons."}],
    setup: "Install lucide-react and copy SearchField.jsx. Handle onSearch.",
    responsiveNotes: "Input and button stack only if the parent is extremely narrow; flex keeps them in a row.",
    related: ["text-inputs", "data-tables"],
    loadPreview: () => import('./searchField/SearchField.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./searchField/SearchField.jsx?raw')])
      return [{ filename: 'SearchField.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-login-forms',
    name: "Login forms",
    slug: 'login-forms',
    kind: 'component',
    category: 'forms',
    description: "Email and password form with client-side validation and show/hide password.",
    tags: ["login", "auth", "form"],
    dependencies: [{"name": "lucide-react", "reason": "Password visibility icons."}],
    setup: "Install lucide-react and copy LoginForm.jsx. Replace the success path with your auth call.",
    responsiveNotes: "Max-width form; full width on small screens.",
    related: ["registration-forms", "login-page"],
    loadPreview: () => import('./loginForm/LoginForm.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./loginForm/LoginForm.jsx?raw')])
      return [{ filename: 'LoginForm.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-registration-forms',
    name: "Registration forms",
    slug: 'registration-forms',
    kind: 'component',
    category: 'forms',
    description: "Account creation form with matching password and terms checks.",
    tags: ["register", "auth", "form"],
    dependencies: [],
    setup: "Copy RegistrationForm.jsx and connect submit to your backend when ready.",
    responsiveNotes: "Max-width form.",
    related: ["login-forms", "registration-page"],
    loadPreview: () => import('./registrationForm/RegistrationForm.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./registrationForm/RegistrationForm.jsx?raw')])
      return [{ filename: 'RegistrationForm.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-contact-forms',
    name: "Contact forms",
    slug: 'contact-forms',
    kind: 'component',
    category: 'forms',
    description: "Contact form with topic select and message validation.",
    tags: ["contact", "form"],
    dependencies: [{"name": "lucide-react", "reason": "Select chevron."}],
    setup: "Install lucide-react and copy ContactForm.jsx.",
    responsiveNotes: "Max-width form.",
    related: ["contact-page", "textareas"],
    loadPreview: () => import('./contactForm/ContactForm.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./contactForm/ContactForm.jsx?raw')])
      return [{ filename: 'ContactForm.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-basic-navbar',
    name: "Basic navbar",
    slug: 'basic-navbar',
    kind: 'component',
    category: 'navigation',
    description: "Simple top navigation with brand, links, and CTA.",
    tags: ["navbar", "header", "nav"],
    dependencies: [],
    setup: "Copy BasicNavbar.jsx and update the href values.",
    responsiveNotes: "Links wrap under the brand on small widths.",
    related: ["responsive-navbar"],
    loadPreview: () => import('./basicNavbar/BasicNavbar.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./basicNavbar/BasicNavbar.jsx?raw')])
      return [{ filename: 'BasicNavbar.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-responsive-navbar',
    name: "Responsive navbar",
    slug: 'responsive-navbar',
    kind: 'component',
    category: 'navigation',
    description: "Navbar that collapses into a mobile menu under the md breakpoint.",
    tags: ["navbar", "responsive", "menu"],
    dependencies: [{"name": "lucide-react", "reason": "Menu open and close icons."}],
    setup: "Install lucide-react and copy ResponsiveNavbar.jsx.",
    responsiveNotes: "Desktop links hide below md; the menu button reveals them.",
    related: ["basic-navbar", "mobile-navigation"],
    loadPreview: () => import('./responsiveNavbar/ResponsiveNavbar.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./responsiveNavbar/ResponsiveNavbar.jsx?raw')])
      return [{ filename: 'ResponsiveNavbar.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-sidebar',
    name: "Sidebar",
    slug: 'sidebar',
    kind: 'component',
    category: 'navigation',
    description: "Sidebar with grouped links and a content panel that updates on selection.",
    tags: ["sidebar", "nav", "layout"],
    dependencies: [],
    setup: "Copy SidebarNav.jsx and replace the sample panels.",
    responsiveNotes: "Stacks above content on small screens; side-by-side from md.",
    related: ["collapsible-sidebar"],
    loadPreview: () => import('./sidebarNav/SidebarNav.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./sidebarNav/SidebarNav.jsx?raw')])
      return [{ filename: 'SidebarNav.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-collapsible-sidebar',
    name: "Collapsible sidebar",
    slug: 'collapsible-sidebar',
    kind: 'component',
    category: 'navigation',
    description: "Sidebar that collapses to initials while keeping selection.",
    tags: ["sidebar", "collapse", "layout"],
    dependencies: [{"name": "lucide-react", "reason": "Collapse controls."}],
    setup: "Install lucide-react and copy CollapsibleSidebar.jsx.",
    responsiveNotes: "Designed for medium and larger screens; still usable when narrow.",
    related: ["sidebar"],
    loadPreview: () => import('./collapsibleSidebar/CollapsibleSidebar.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./collapsibleSidebar/CollapsibleSidebar.jsx?raw')])
      return [{ filename: 'CollapsibleSidebar.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-breadcrumbs',
    name: "Breadcrumbs",
    slug: 'breadcrumbs',
    kind: 'component',
    category: 'navigation',
    description: "Breadcrumb trail with current page indicated.",
    tags: ["breadcrumb", "nav"],
    dependencies: [{"name": "lucide-react", "reason": "Separators."}],
    setup: "Install lucide-react and copy Breadcrumbs.jsx.",
    responsiveNotes: "Items wrap to multiple lines.",
    related: ["pagination"],
    loadPreview: () => import('./breadcrumbs/Breadcrumbs.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./breadcrumbs/Breadcrumbs.jsx?raw')])
      return [{ filename: 'Breadcrumbs.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-pagination',
    name: "Pagination",
    slug: 'pagination',
    kind: 'component',
    category: 'navigation',
    description: "Page controls with previous, next, and numbered buttons.",
    tags: ["pagination", "nav", "pages"],
    dependencies: [{"name": "lucide-react", "reason": "Previous and next icons."}],
    setup: "Install lucide-react and copy Pagination.jsx.",
    responsiveNotes: "Controls wrap.",
    related: ["breadcrumbs", "data-tables"],
    loadPreview: () => import('./pagination/Pagination.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./pagination/Pagination.jsx?raw')])
      return [{ filename: 'Pagination.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-dropdown-menu',
    name: "Dropdown menu",
    slug: 'dropdown-menu',
    kind: 'component',
    category: 'navigation',
    description: "Action menu with keyboard and outside-click handling.",
    tags: ["dropdown", "menu", "actions"],
    dependencies: [{"name": "lucide-react", "reason": "Chevron indicator."}],
    setup: "Install lucide-react and copy DropdownMenu.jsx.",
    responsiveNotes: "Menu anchors to the trigger; ensure parent overflow allows it.",
    related: ["mobile-navigation"],
    loadPreview: () => import('./dropdownMenu/DropdownMenu.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./dropdownMenu/DropdownMenu.jsx?raw')])
      return [{ filename: 'DropdownMenu.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-mobile-navigation',
    name: "Mobile navigation",
    slug: 'mobile-navigation',
    kind: 'component',
    category: 'navigation',
    description: "Phone-style bottom tab navigation with content panels.",
    tags: ["mobile", "tabs", "nav"],
    dependencies: [{"name": "lucide-react", "reason": "Tab icons."}],
    setup: "Install lucide-react and copy MobileNavigation.jsx.",
    responsiveNotes: "Constrained to a phone-width frame by design.",
    related: ["responsive-navbar"],
    loadPreview: () => import('./mobileNavigation/MobileNavigation.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./mobileNavigation/MobileNavigation.jsx?raw')])
      return [{ filename: 'MobileNavigation.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-stat-cards',
    name: "Stat cards",
    slug: 'stat-cards',
    kind: 'component',
    category: 'data-display',
    description: "Metric cards with trend direction and helper text.",
    tags: ["stats", "metrics", "dashboard"],
    dependencies: [{"name": "lucide-react", "reason": "Trend icons."}],
    setup: "Install lucide-react and copy StatCard.jsx.",
    responsiveNotes: "Preview uses a responsive grid.",
    related: ["data-tables", "analytics-dashboard"],
    loadPreview: () => import('./statCard/StatCard.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./statCard/StatCard.jsx?raw')])
      return [{ filename: 'StatCard.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-data-tables',
    name: "Data tables",
    slug: 'data-tables',
    kind: 'component',
    category: 'data-display',
    description: "Filterable, sortable student table with empty filtering state.",
    tags: ["table", "sort", "filter"],
    dependencies: [{"name": "lucide-react", "reason": "Sort indicators."}],
    setup: "Install lucide-react and copy DataTable.jsx. Replace sampleRows.",
    responsiveNotes: "Table scrolls horizontally inside its container.",
    related: ["stat-cards", "status-badges"],
    loadPreview: () => import('./dataTable/DataTable.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./dataTable/DataTable.jsx?raw')])
      return [{ filename: 'DataTable.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-status-badges',
    name: "Status badges",
    slug: 'status-badges',
    kind: 'component',
    category: 'data-display',
    description: "Dot-and-label badges for online and payment-style statuses.",
    tags: ["status", "badge"],
    dependencies: [],
    setup: "Copy StatusBadge.jsx and pass a known status string.",
    responsiveNotes: "Inline wrapping.",
    related: ["badges"],
    loadPreview: () => import('./statusBadge/StatusBadge.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./statusBadge/StatusBadge.jsx?raw')])
      return [{ filename: 'StatusBadge.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-user-profile-cards',
    name: "User profile cards",
    slug: 'user-profile-cards',
    kind: 'component',
    category: 'data-display',
    description: "Profile summary card with follow toggle and sample stats.",
    tags: ["profile", "card", "user"],
    dependencies: [],
    setup: "Copy ProfileCard.jsx and replace the sample person.",
    responsiveNotes: "Max-width card.",
    related: ["avatars", "user-profile-page"],
    loadPreview: () => import('./profileCard/ProfileCard.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./profileCard/ProfileCard.jsx?raw')])
      return [{ filename: 'ProfileCard.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-activity-feeds',
    name: "Activity feeds",
    slug: 'activity-feeds',
    kind: 'component',
    category: 'data-display',
    description: "Filterable feed of sample review and comment events.",
    tags: ["feed", "activity", "timeline"],
    dependencies: [],
    setup: "Copy ActivityFeed.jsx and replace the events array.",
    responsiveNotes: "Full width list.",
    related: ["timelines", "notification-lists"],
    loadPreview: () => import('./activityFeed/ActivityFeed.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./activityFeed/ActivityFeed.jsx?raw')])
      return [{ filename: 'ActivityFeed.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-timelines',
    name: "Timelines",
    slug: 'timelines',
    kind: 'component',
    category: 'data-display',
    description: "Vertical timeline with expand control for later events.",
    tags: ["timeline", "history"],
    dependencies: [],
    setup: "Copy Timeline.jsx and edit the events list.",
    responsiveNotes: "Left border stays aligned while text wraps.",
    related: ["activity-feeds"],
    loadPreview: () => import('./timeline/Timeline.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./timeline/Timeline.jsx?raw')])
      return [{ filename: 'Timeline.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-pricing-tables',
    name: "Pricing tables",
    slug: 'pricing-tables',
    kind: 'component',
    category: 'data-display',
    description: "Three-plan pricing table with monthly and yearly toggle.",
    tags: ["pricing", "plans", "billing"],
    dependencies: [{"name": "lucide-react", "reason": "Feature checkmarks."}],
    setup: "Install lucide-react and copy PricingTable.jsx.",
    responsiveNotes: "Stacks to one column below lg.",
    related: ["pricing-sections"],
    loadPreview: () => import('./pricingTable/PricingTable.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./pricingTable/PricingTable.jsx?raw')])
      return [{ filename: 'PricingTable.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
  {
    id: 'component-notification-lists',
    name: "Notification lists",
    slug: 'notification-lists',
    kind: 'component',
    category: 'data-display',
    description: "Notification panel with unread markers and mark-all-read.",
    tags: ["notifications", "list", "inbox"],
    dependencies: [],
    setup: "Copy NotificationList.jsx and replace initialNotes.",
    responsiveNotes: "Max-width panel.",
    related: ["activity-feeds"],
    loadPreview: () => import('./notificationList/NotificationList.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./notificationList/NotificationList.jsx?raw')])
      return [{ filename: 'NotificationList.jsx', language: 'jsx', code: modules[0].default }]
    },
  },
]
