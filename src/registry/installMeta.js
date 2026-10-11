const tailwind =
  'Tailwind CSS v4. Add `@import "tailwindcss";` to your stylesheet. Dark-mode utilities expect the `.dark` class variant from the getting started snippet. No separate tailwind.config file is required.'

function docs({ file, name, body, helpers = [], prelude = '' }) {
  const importStatement = `import ${name} from './${file}'`
  const markup = body ?? `<${name} />`
  const usage = `${importStatement}\n${prelude ? `${prelude}\n` : ''}\nexport default function Example() {\n  return (\n    ${markup}\n  )\n}\n`

  return {
    exportName: name,
    sourceFiles: [file, ...helpers],
    internalFiles: helpers,
    importStatement,
    usage,
    tailwind,
    status: 'ready',
    helperNote:
      helpers.length > 0
        ? `Keep ${helpers.join(', ')} in the same folder. The component imports those files by filename.`
        : '',
  }
}

export const installMetaById = {
  'component-buttons': docs({
    file: 'Button.jsx',
    name: 'Button',
    body: '<Button variant="primary">Save changes</Button>',
  }),
  'component-icon-buttons': docs({
    file: 'IconButton.jsx',
    name: 'IconButton',
    prelude: "import { Bell } from 'lucide-react'",
    body: '<IconButton label="Notifications"><Bell className="size-4" aria-hidden="true" /></IconButton>',
  }),
  'component-badges': docs({ file: 'Badge.jsx', name: 'Badge', body: '<Badge tone="success">Paid</Badge>' }),
  'component-avatars': docs({ file: 'Avatar.jsx', name: 'Avatar', body: '<Avatar name="Amina Shah" size="md" />' }),
  'component-cards': docs({
    file: 'Card.jsx',
    name: 'Card',
    prelude: "import { CardContent, CardDescription, CardHeader, CardTitle } from './Card.jsx'",
    body: '<Card><CardHeader><CardTitle>Studio plan</CardTitle><CardDescription>Shared workspace</CardDescription></CardHeader><CardContent>3 active projects</CardContent></Card>',
  }),
  'component-alerts': docs({
    file: 'Alert.jsx',
    name: 'Alert',
    body: '<Alert tone="success" title="Saved">Your changes are stored in this browser.</Alert>',
  }),
  'component-tooltips': docs({
    file: 'Tooltip.jsx',
    name: 'Tooltip',
    body: '<Tooltip label="Copy link"><button type="button">Share</button></Tooltip>',
  }),
  'component-progress-bars': docs({
    file: 'ProgressBar.jsx',
    name: 'ProgressBar',
    body: '<ProgressBar value={40} label="Course progress" />',
  }),
  'component-skeletons': docs({
    file: 'Skeleton.jsx',
    name: 'Skeleton',
    body: '<Skeleton className="h-4 w-40" />',
  }),
  'component-spinners': docs({ file: 'Spinner.jsx', name: 'Spinner', body: '<Spinner label="Loading courses" size="md" />' }),
  'component-accordions': docs({ file: 'Accordion.jsx', name: 'Accordion' }),
  'component-tabs': docs({ file: 'Tabs.jsx', name: 'Tabs' }),
  'component-dividers': docs({ file: 'Divider.jsx', name: 'Divider', body: '<Divider label="Details" />' }),
  'component-empty-states': docs({ file: 'EmptyState.jsx', name: 'EmptyState' }),
  'component-text-inputs': docs({
    file: 'TextField.jsx',
    name: 'TextField',
    body: '<TextField id="email" label="Email" type="email" placeholder="you@school.edu" />',
  }),
  'component-textareas': docs({
    file: 'TextArea.jsx',
    name: 'TextArea',
    body: '<TextArea id="notes" label="Notes" placeholder="What should we know?" />',
  }),
  'component-select-fields': docs({
    file: 'SelectField.jsx',
    name: 'SelectField',
    body: '<SelectField id="track" label="Track" options={[{ value: "design", label: "Design" }]} />',
  }),
  'component-checkboxes': docs({
    file: 'CheckboxField.jsx',
    name: 'CheckboxField',
    body: '<CheckboxField id="terms" label="Accept the terms" />',
  }),
  'component-radio-buttons': docs({
    file: 'RadioGroup.jsx',
    name: 'RadioGroup',
    body: '<RadioGroup name="plan" label="Plan" options={[{ value: "free", label: "Free" }]} value="free" onChange={() => {}} />',
  }),
  'component-switches': docs({
    file: 'SwitchField.jsx',
    name: 'SwitchField',
    body: '<SwitchField id="updates" label="Email updates" checked={false} onChange={() => {}} />',
  }),
  'component-search-inputs': docs({ file: 'SearchField.jsx', name: 'SearchField' }),
  'component-login-forms': docs({ file: 'LoginForm.jsx', name: 'LoginForm' }),
  'component-registration-forms': docs({ file: 'RegistrationForm.jsx', name: 'RegistrationForm' }),
  'component-contact-forms': docs({ file: 'ContactForm.jsx', name: 'ContactForm' }),
  'component-basic-navbar': docs({ file: 'BasicNavbar.jsx', name: 'BasicNavbar' }),
  'component-responsive-navbar': docs({ file: 'ResponsiveNavbar.jsx', name: 'ResponsiveNavbar' }),
  'component-sidebar': docs({ file: 'SidebarNav.jsx', name: 'SidebarNav' }),
  'component-collapsible-sidebar': docs({ file: 'CollapsibleSidebar.jsx', name: 'CollapsibleSidebar' }),
  'component-breadcrumbs': docs({ file: 'Breadcrumbs.jsx', name: 'Breadcrumbs' }),
  'component-pagination': docs({ file: 'Pagination.jsx', name: 'Pagination' }),
  'component-dropdown-menu': docs({ file: 'DropdownMenu.jsx', name: 'DropdownMenu' }),
  'component-mobile-navigation': docs({ file: 'MobileNavigation.jsx', name: 'MobileNavigation' }),
  'component-stat-cards': docs({
    file: 'StatCard.jsx',
    name: 'StatCard',
    body: '<StatCard label="Active students" value="128" change="12%" hint="this week" />',
  }),
  'component-data-tables': docs({ file: 'DataTable.jsx', name: 'DataTable' }),
  'component-status-badges': docs({
    file: 'StatusBadge.jsx',
    name: 'StatusBadge',
    body: '<StatusBadge status="online" />',
  }),
  'component-user-profile-cards': docs({ file: 'ProfileCard.jsx', name: 'ProfileCard' }),
  'component-activity-feeds': docs({ file: 'ActivityFeed.jsx', name: 'ActivityFeed' }),
  'component-timelines': docs({ file: 'Timeline.jsx', name: 'Timeline' }),
  'component-pricing-tables': docs({ file: 'PricingTable.jsx', name: 'PricingTable' }),
  'component-notification-lists': docs({ file: 'NotificationList.jsx', name: 'NotificationList' }),
  'block-hero-sections': docs({ file: 'HeroSection.jsx', name: 'HeroSection' }),
  'block-feature-grids': docs({ file: 'FeatureGrid.jsx', name: 'FeatureGrid' }),
  'block-testimonials': docs({ file: 'Testimonials.jsx', name: 'Testimonials' }),
  'block-pricing-sections': docs({ file: 'PricingSection.jsx', name: 'PricingSection' }),
  'block-faq-sections': docs({ file: 'FaqSection.jsx', name: 'FaqSection' }),
  'block-cta-sections': docs({ file: 'CtaSection.jsx', name: 'CtaSection' }),
  'block-team-sections': docs({ file: 'TeamSection.jsx', name: 'TeamSection' }),
  'block-footers': docs({ file: 'SiteFooter.jsx', name: 'SiteFooter' }),
  'template-login-page': docs({ file: 'LoginPage.jsx', name: 'LoginPage' }),
  'template-registration-page': docs({ file: 'RegistrationPage.jsx', name: 'RegistrationPage' }),
  'template-forgot-password-page': docs({ file: 'ForgotPasswordPage.jsx', name: 'ForgotPasswordPage' }),
  'template-user-profile-page': docs({ file: 'UserProfilePage.jsx', name: 'UserProfilePage' }),
  'template-settings-page': docs({ file: 'SettingsPage.jsx', name: 'SettingsPage' }),
  'template-contact-page': docs({ file: 'ContactPage.jsx', name: 'ContactPage' }),
  'template-landing-page': docs({ file: 'LandingPage.jsx', name: 'LandingPage' }),
  'template-404-page': docs({ file: 'NotFoundTemplate.jsx', name: 'NotFoundTemplate' }),
  'template-analytics-dashboard': docs({
    file: 'AnalyticsDashboard.jsx',
    name: 'AnalyticsDashboard',
    helpers: ['sampleData.js'],
  }),
  'template-admin-dashboard': docs({
    file: 'AdminDashboard.jsx',
    name: 'AdminDashboard',
    helpers: ['sampleData.js'],
  }),
  'template-student-management-dashboard': docs({
    file: 'StudentManagementDashboard.jsx',
    name: 'StudentManagementDashboard',
    helpers: ['sampleData.js'],
  }),
  'template-ecommerce-dashboard': docs({
    file: 'EcommerceDashboard.jsx',
    name: 'EcommerceDashboard',
    helpers: ['sampleData.js'],
  }),
  'template-project-management-dashboard': docs({
    file: 'ProjectManagementDashboard.jsx',
    name: 'ProjectManagementDashboard',
    helpers: ['sampleData.js'],
  }),
  'template-crm-dashboard': docs({
    file: 'CrmDashboard.jsx',
    name: 'CrmDashboard',
    helpers: ['sampleData.js'],
  }),
}

const incomplete = {
  exportName: '',
  sourceFiles: [],
  internalFiles: [],
  importStatement: '',
  usage: '',
  tailwind,
  status: 'incomplete',
  helperNote: '',
}

export function installMetaFor(entry) {
  return installMetaById[entry?.id] ?? incomplete
}
