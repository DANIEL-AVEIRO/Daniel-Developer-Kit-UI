import { Highlight, themes } from "prism-react-renderer";
import { useId, useState } from "react";
import { useTheme } from "../../hooks/useTheme.js";
import { cx } from "../../utils/cx.js";
import { formatSourceBundle } from "../../utils/formatSource.js";
import CopyButton from "./CopyButton.jsx";

const CodeViewer = ({
  files = [],
  emptyLabel = "Source is still loading.",
}) => {
  const { theme } = useTheme();
  const reactId = useId();
  const panelId = `${reactId}-panel`;
  const fileKey = files.map((item) => item.filename).join("|");
  const [index, setIndex] = useState(0);
  const [indexKey, setIndexKey] = useState(fileKey);

  if (indexKey !== fileKey) {
    setIndexKey(fileKey);
    setIndex(0);
  }

  const file = files[index] ?? files[0];
  const prismTheme = theme === "dark" ? themes.oneDark : themes.github;

  function onTabKeyDown(event) {
    if (files.length < 2) return;
    if (
      event.key !== "ArrowRight" &&
      event.key !== "ArrowLeft" &&
      event.key !== "Home" &&
      event.key !== "End"
    )
      return;
    event.preventDefault();
    const last = files.length - 1;
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? last
          : event.key === "ArrowRight"
            ? (index + 1) % files.length
            : (index - 1 + files.length) % files.length;
    setIndex(next);
    event.currentTarget.parentElement
      ?.querySelectorAll('[role="tab"]')
      [next]?.focus();
  }

  if (!file) {
    return <p className="px-4 py-6 text-sm text-stone-500">{emptyLabel}</p>;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-stone-200/90 bg-paper shadow-sm dark:border-stone-800 dark:bg-paper-dark">
      <div className="flex flex-col gap-3 border-b border-stone-200 px-3 py-3 sm:flex-row sm:items-center sm:justify-between dark:border-stone-800">
        <div
          className="flex gap-1 overflow-x-auto"
          role="tablist"
          aria-label="Source files"
        >
          {files.map((item, fileIndex) => (
            <button
              key={item.filename}
              type="button"
              role="tab"
              id={`${reactId}-tab-${fileIndex}`}
              aria-selected={fileIndex === index}
              aria-controls={panelId}
              tabIndex={fileIndex === index ? 0 : -1}
              onKeyDown={onTabKeyDown}
              onClick={() => setIndex(fileIndex)}
              className={cx(
                "rounded-md px-2.5 py-1.5 font-mono text-xs whitespace-nowrap",
                fileIndex === index
                  ? "bg-indigo-100 text-indigo-950 dark:bg-indigo-500/20 dark:text-indigo-100"
                  : "text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-900",
              )}
            >
              {item.filename}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <CopyButton text={file.code} label="Copy file" />
          {files.length > 1 ? (
            <CopyButton
              text={formatSourceBundle(files)}
              label="Copy all files"
            />
          ) : null}
        </div>
      </div>
      {files.length > 1 ? (
        <p className="border-b border-stone-200 px-3 py-2 text-xs text-stone-500 dark:border-stone-800">
          Copy all files adds a filename header above each file. Save each
          section as its own file. Do not run the bundle as one module.
        </p>
      ) : null}
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${reactId}-tab-${index}`}
        className="overflow-x-auto"
      >
        <Highlight
          theme={prismTheme}
          code={file.code.replace(/\s+$/, "")}
          language={file.language || "jsx"}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              style={{ ...style, background: "transparent", margin: 0 }}
              className="min-w-full px-4 py-4 text-[13px] leading-6"
            >
              {tokens.map((line, lineIndex) => (
                <div
                  key={`${file.filename}-${lineIndex}`}
                  {...getLineProps({ line })}
                  className="table-row"
                >
                  <span className="table-cell w-10 pr-4 text-right text-stone-400 select-none">
                    {lineIndex + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeViewer;
