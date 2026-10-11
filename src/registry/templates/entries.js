export const templateEntries = [
  {
    id: 'template-analytics-dashboard',
    name: "Analytics dashboard",
    slug: 'analytics-dashboard',
    kind: 'template',
    category: 'dashboards',
    description: "Analytics shell with sidebar, KPI cards, CSS bar chart, and page table using local sample data.",
    tags: ["dashboard", "analytics", "charts"],
    dependencies: [{"name": "lucide-react", "reason": "Sidebar icons."}],
    setup: "Install lucide-react. Copy AnalyticsDashboard.jsx and sampleData.js into the same folder.",
    responsiveNotes: "Sidebar stacks above content on small screens.",
    related: ["stat-cards", "data-tables"],
    loadPreview: () => import('./analyticsDashboard/AnalyticsDashboard.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./analyticsDashboard/AnalyticsDashboard.jsx?raw'), import('./analyticsDashboard/sampleData.js?raw')])
      return [{ filename: 'AnalyticsDashboard.jsx', language: 'jsx', code: modules[0].default }, { filename: 'sampleData.js', language: 'javascript', code: modules[1].default }]
    },
  },
  {
    id: 'template-admin-dashboard',
    name: "Admin dashboard",
    slug: 'admin-dashboard',
    kind: 'template',
    category: 'dashboards',
    description: "Admin console with filterable users and a daily task list.",
    tags: ["dashboard", "admin", "users"],
    dependencies: [{"name": "lucide-react", "reason": "Navigation and notification icons."}],
    setup: "Install lucide-react. Copy AdminDashboard.jsx and sampleData.js together.",
    responsiveNotes: "Sidebar stacks above main content below md.",
    related: ["data-tables", "notification-lists"],
    loadPreview: () => import('./adminDashboard/AdminDashboard.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./adminDashboard/AdminDashboard.jsx?raw'), import('./adminDashboard/sampleData.js?raw')])
      return [{ filename: 'AdminDashboard.jsx', language: 'jsx', code: modules[0].default }, { filename: 'sampleData.js', language: 'javascript', code: modules[1].default }]
    },
  },
  {
    id: 'template-student-management-dashboard',
    name: "Student management dashboard",
    slug: 'student-management-dashboard',
    kind: 'template',
    category: 'dashboards',
    description: "Roster search with a detail pane for attendance and grades.",
    tags: ["dashboard", "students", "education"],
    dependencies: [{"name": "lucide-react", "reason": "Header and search icons."}],
    setup: "Install lucide-react. Copy StudentManagementDashboard.jsx and sampleData.js.",
    responsiveNotes: "Detail pane stacks below the roster on small screens.",
    related: ["data-tables", "user-profile-cards"],
    loadPreview: () => import('./studentManagementDashboard/StudentManagementDashboard.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./studentManagementDashboard/StudentManagementDashboard.jsx?raw'), import('./studentManagementDashboard/sampleData.js?raw')])
      return [{ filename: 'StudentManagementDashboard.jsx', language: 'jsx', code: modules[0].default }, { filename: 'sampleData.js', language: 'javascript', code: modules[1].default }]
    },
  },
  {
    id: 'template-ecommerce-dashboard',
    name: "Ecommerce dashboard",
    slug: 'ecommerce-dashboard',
    kind: 'template',
    category: 'dashboards',
    description: "Store dashboard with orders and products tables plus sample inventory chips.",
    tags: ["dashboard", "ecommerce", "orders"],
    dependencies: [{"name": "lucide-react", "reason": "Store section icons."}],
    setup: "Install lucide-react. Copy EcommerceDashboard.jsx and sampleData.js.",
    responsiveNotes: "Tables scroll horizontally when needed.",
    related: ["data-tables", "status-badges"],
    loadPreview: () => import('./ecommerceDashboard/EcommerceDashboard.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./ecommerceDashboard/EcommerceDashboard.jsx?raw'), import('./ecommerceDashboard/sampleData.js?raw')])
      return [{ filename: 'EcommerceDashboard.jsx', language: 'jsx', code: modules[0].default }, { filename: 'sampleData.js', language: 'javascript', code: modules[1].default }]
    },
  },
  {
    id: 'template-project-management-dashboard',
    name: "Project management dashboard",
    slug: 'project-management-dashboard',
    kind: 'template',
    category: 'dashboards',
    description: "Kanban-style board with local add-task interaction.",
    tags: ["dashboard", "kanban", "projects"],
    dependencies: [{"name": "lucide-react", "reason": "Board and add icons."}],
    setup: "Install lucide-react. Copy ProjectManagementDashboard.jsx and sampleData.js.",
    responsiveNotes: "Columns scroll horizontally on small screens.",
    related: ["activity-feeds"],
    loadPreview: () => import('./projectManagementDashboard/ProjectManagementDashboard.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./projectManagementDashboard/ProjectManagementDashboard.jsx?raw'), import('./projectManagementDashboard/sampleData.js?raw')])
      return [{ filename: 'ProjectManagementDashboard.jsx', language: 'jsx', code: modules[0].default }, { filename: 'sampleData.js', language: 'javascript', code: modules[1].default }]
    },
  },
  {
    id: 'template-crm-dashboard',
    name: "CRM dashboard",
    slug: 'crm-dashboard',
    kind: 'template',
    category: 'dashboards',
    description: "Pipeline summary cards and a filterable deals table.",
    tags: ["dashboard", "crm", "sales"],
    dependencies: [{"name": "lucide-react", "reason": "Header icon."}],
    setup: "Install lucide-react. Copy CrmDashboard.jsx and sampleData.js.",
    responsiveNotes: "Stat cards reflow; table scrolls when needed.",
    related: ["data-tables", "stat-cards"],
    loadPreview: () => import('./crmDashboard/CrmDashboard.preview.jsx').then((mod) => mod.default),
    loadFiles: async () => {
      const modules = await Promise.all([import('./crmDashboard/CrmDashboard.jsx?raw'), import('./crmDashboard/sampleData.js?raw')])
      return [{ filename: 'CrmDashboard.jsx', language: 'jsx', code: modules[0].default }, { filename: 'sampleData.js', language: 'javascript', code: modules[1].default }]
    },
  },
]
