import CodeViewer from '../components/common/CodeViewer.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

const viteConfig = `import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
`

const cssSnippet = `@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
`

const usageSnippet = `import Button from './Button.jsx'

const Example = () => {
  return <Button variant="primary">Save changes</Button>
}

export default Example
`

const GettingStartedPage = () => {
  usePageTitle('Getting started')

  return (
    <article className="max-w-3xl space-y-4">
      <PageHeader
        eyebrow="Documentation"
        title="Getting started"
        description="DevKit UI does not publish an npm package. Copy the source files from a component page into a React + Vite + Tailwind CSS app. Each file uses public imports only: React, and lucide-react when the installation panel lists it."
      />

      <Section title="1. Create the app">
        <CodeViewer
          files={[{ filename: 'terminal.txt', language: 'text', code: 'npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\n' }]}
        />
      </Section>

      <Section title="2. Add Tailwind CSS v4">
        <p>Install the official Vite plugin, then register it beside the React plugin.</p>
        <CodeViewer files={[{ filename: 'terminal.txt', language: 'text', code: 'npm install tailwindcss @tailwindcss/vite\n' }]} />
        <div className="mt-3">
          <CodeViewer files={[{ filename: 'vite.config.js', language: 'javascript', code: viteConfig }]} />
        </div>
        <p className="mt-3">Replace the contents of <code className="font-mono text-[13px]">src/index.css</code> and keep the import in <code className="font-mono text-[13px]">src/main.jsx</code>.</p>
        <div className="mt-3">
          <CodeViewer files={[{ filename: 'src/index.css', language: 'css', code: cssSnippet }]} />
        </div>
      </Section>

      <Section title="3. Optional packages">
        <p>
          Install <code className="font-mono text-[13px]">lucide-react</code> only when a component lists it. The command is on that component&apos;s page. Dashboard examples keep their sample data in a second file and do not call an API.
        </p>
      </Section>

      <Section title="4. Copy a component">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open a component, block, or template.</li>
          <li>Switch to Source code and choose a file.</li>
          <li>Copy the current file, or copy all files when the entry has more than one.</li>
          <li>Save each file under the filename shown. Multi-file bundles are labeled and are not a single module.</li>
          <li>Import the exported component. Paths in the source match those filenames when files sit in the same folder.</li>
        </ol>
        <div className="mt-3">
          <CodeViewer files={[{ filename: 'Example.jsx', language: 'jsx', code: usageSnippet }]} />
        </div>
      </Section>

      <Section title="5. Dark mode">
        <p>
          Copied components use Tailwind <code className="font-mono text-[13px]">dark:</code> utilities. A new Tailwind v4 project follows the operating system. The snippet above also enables a <code className="font-mono text-[13px]">.dark</code> class on a parent. Toggle it on the <code className="font-mono text-[13px]">html</code> element when you want a manual switch.
        </p>
      </Section>

      <Section title="6. Playground, favorites, and the page builder">
        <p>
          Supported components include a playground. Changing a control updates the live preview and the <code className="font-mono text-[13px]">Usage.jsx</code> file. Reset restores the default props. Favorites and named collections are stored in this browser. The page builder stacks registered blocks and exports <code className="font-mono text-[13px]">BuiltPage.jsx</code> plus each block file.
        </p>
      </Section>

      <Section title="7. Preview widths">
        <p>
          Desktop, tablet, and mobile buttons on a detail page resize a real iframe. Breakpoints such as <code className="font-mono text-[13px]">md:</code> follow that iframe width. Template previews stay at a fixed height and scroll inside the frame. Components and blocks grow with their content.
        </p>
      </Section>
    </article>
  )
}

const Section = ({ title, children }) => {
  return (
    <section className="rounded-xl border border-stone-200/90 bg-paper p-5 shadow-sm dark:border-stone-800 dark:bg-paper-dark">
      <h2 className="text-lg font-semibold tracking-tight text-ink dark:text-stone-50">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-6 text-stone-600 dark:text-stone-400">{children}</div>
    </section>
  )
}

export default GettingStartedPage
