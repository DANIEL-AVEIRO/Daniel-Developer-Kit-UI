import { Monitor, Moon, Smartphone, Sun, Tablet } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { playgroundFor } from "../../playground/catalog.js";
import { cx } from "../../utils/cx.js";
import PlaygroundControls from "./PlaygroundControls.jsx";

const CodeViewer = lazy(() => import("./CodeViewer.jsx"));

const widths = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
};

const widthLabels = {
  desktop: "Full width",
  tablet: "768px",
  mobile: "375px",
};

const viewportOptions = [
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "tablet", label: "Tablet", icon: Tablet },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

const PreviewFrame = ({ entry }) => {
  const playground = playgroundFor(entry);
  const iframeRef = useRef(null);
  const [tab, setTab] = useState("preview");
  const [viewport, setViewport] = useState("desktop");
  const [previewTheme, setPreviewTheme] = useState("light");
  const [files, setFiles] = useState(null);
  const [sourceError, setSourceError] = useState(false);
  const [frameHeight, setFrameHeight] = useState(
    entry.kind === "template" ? 720 : 280,
  );
  const [playgroundValues, setPlaygroundValues] = useState(
    playground?.defaults ?? null,
  );

  useEffect(() => {
    let cancelled = false;
    entry
      .loadFiles()
      .then((nextFiles) => {
        if (!cancelled) {
          setSourceError(false);
          setFiles(nextFiles);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setFiles([]);
          setSourceError(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [entry]);

  function publishPlayground(values) {
    if (!playground || !values) return;
    iframeRef.current?.contentWindow?.postMessage(
      { type: "devkit-playground", slug: entry.slug, values },
      window.location.origin,
    );
  }

  useEffect(() => {
    function onReady(event) {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type !== "devkit-playground-ready") return;
      if (event.data.slug !== entry.slug) return;
      if (!playground || !playgroundValues) return;
      iframeRef.current?.contentWindow?.postMessage(
        {
          type: "devkit-playground",
          slug: entry.slug,
          values: playgroundValues,
        },
        window.location.origin,
      );
    }
    window.addEventListener("message", onReady);
    return () => window.removeEventListener("message", onReady);
  }, [entry.slug, playground, playgroundValues]);

  useEffect(() => {
    function onMessage(event) {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type !== "devkit-preview-height") return;
      if (event.data.slug !== entry.slug) return;
      if (entry.kind === "template") return;
      const next = Number(event.data.height);
      if (!Number.isFinite(next)) return;
      setFrameHeight(Math.min(Math.max(next, 160), 1400));
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [entry.kind, entry.slug]);

  const iframeHeight = entry.kind === "template" ? 720 : frameHeight;
  const previewSrc = `/preview/${entry.kind}/${entry.slug}?theme=${previewTheme}`;
  const usageCode = playground
    ? playground.formatUsage(playgroundValues)
    : entry.usage;
  const sourceFiles = [
    { filename: "Usage.jsx", language: "jsx", code: usageCode },
    ...(files ?? []),
  ];

  function onViewKeyDown(event) {
    const order = ["preview", "source"];
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const current = order.indexOf(tab);
    const next =
      event.key === "ArrowRight"
        ? (current + 1) % order.length
        : (current - 1 + order.length) % order.length;
    setTab(order[next]);
    event.currentTarget.parentElement
      ?.querySelectorAll('[role="tab"]')
      [next]?.focus();
  }

  return (
    <section className="overflow-hidden rounded-xl border border-stone-200/90 bg-paper shadow-sm dark:border-stone-800 dark:bg-paper-dark">
      <div className="flex flex-col gap-3 border-b border-stone-200/80 px-3 py-3 lg:flex-row lg:items-center lg:justify-between dark:border-stone-800">
        <div
          role="tablist"
          aria-label="Preview and source"
          className="flex gap-1"
        >
          {[
            ["preview", "Preview"],
            ["source", "Source code"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              aria-controls={`${id}-panel`}
              id={`${id}-tab`}
              tabIndex={tab === id ? 0 : -1}
              onKeyDown={onViewKeyDown}
              onClick={() => setTab(id)}
              className={cx(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                tab === id
                  ? "bg-accent text-white"
                  : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        {tab === "preview" ? (
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex gap-1" role="group" aria-label="Preview width">
              {viewportOptions.map((option) => {
                const Icon = option.icon;
                const selected = viewport === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setViewport(option.id)}
                    className={cx(
                      "inline-flex h-8 items-center gap-1.5 rounded-lg px-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      selected
                        ? "bg-indigo-100 text-indigo-950 dark:bg-indigo-500/20 dark:text-indigo-100"
                        : "text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-900",
                    )}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {option.label}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-1" role="group" aria-label="Preview theme">
              <button
                type="button"
                aria-pressed={previewTheme === "light"}
                onClick={() => setPreviewTheme("light")}
                className={themeButton(previewTheme === "light")}
              >
                <Sun className="size-3.5" aria-hidden="true" />
                Light
              </button>
              <button
                type="button"
                aria-pressed={previewTheme === "dark"}
                onClick={() => setPreviewTheme("dark")}
                className={themeButton(previewTheme === "dark")}
              >
                <Moon className="size-3.5" aria-hidden="true" />
                Dark
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {playground && tab === "preview" ? (
        <PlaygroundControls
          config={playground}
          values={playgroundValues}
          onChange={(key, value) => {
            setPlaygroundValues((current) => {
              const next = { ...current, [key]: value };
              publishPlayground(next);
              return next;
            });
          }}
          onReset={() => {
            setPlaygroundValues(playground.defaults);
            publishPlayground(playground.defaults);
          }}
        />
      ) : null}

      <div
        id="preview-panel"
        role="tabpanel"
        aria-labelledby="preview-tab"
        hidden={tab !== "preview"}
      >
        <div className="overflow-x-auto bg-stone-100/90 p-3 dark:bg-stone-900/80">
          <p className="mb-2 text-center text-xs text-stone-500">
            Viewport{" "}
            <span className="font-medium text-stone-700 dark:text-stone-300">
              {widthLabels[viewport]}
            </span>
          </p>
          <iframe
            ref={iframeRef}
            key={`${entry.slug}-${previewTheme}-${viewport}`}
            title={`Live preview of ${entry.name}`}
            src={previewSrc}
            onLoad={() => publishPlayground(playgroundValues)}
            style={{
              width: widths[viewport],
              maxWidth: viewport === "desktop" ? "100%" : "none",
              height: iframeHeight,
            }}
            className="mx-auto block rounded-lg border-0 bg-white shadow-sm dark:bg-stone-950"
          />
        </div>
      </div>

      <div
        id="source-panel"
        role="tabpanel"
        aria-labelledby="source-tab"
        hidden={tab !== "source"}
        className="p-3"
      >
        {tab !== "source" ? null : sourceError ? (
          <p className="text-sm text-red-700 dark:text-red-300">
            The source files could not be loaded.
          </p>
        ) : (
          <Suspense
            fallback={
              <p className="px-4 py-6 text-sm text-stone-500">
                Loading source…
              </p>
            }
          >
            <CodeViewer
              files={files ? sourceFiles : []}
              emptyLabel="Loading source…"
            />
          </Suspense>
        )}
      </div>
    </section>
  );
};

const themeButton = (selected) => {
  return cx(
    "inline-flex h-8 items-center gap-1.5 rounded-lg px-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    selected
      ? "bg-indigo-100 text-indigo-950 dark:bg-indigo-500/20 dark:text-indigo-100"
      : "text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-900",
  );
};

export default PreviewFrame;
