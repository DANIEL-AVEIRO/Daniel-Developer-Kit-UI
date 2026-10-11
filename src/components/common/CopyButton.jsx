import { Check, Copy, TriangleAlert } from "lucide-react";
import { useClipboard } from "../../hooks/useClipboard.js";
import { cx } from "../../utils/cx.js";

const CopyButton = ({ text, label = "Copy", className = "" }) => {
  const { status, reason, copy } = useClipboard();
  const failed = status === "error";
  const copied = status === "copied";

  return (
    <button
      type="button"
      onClick={() => copy(text)}
      title={failed ? reason : undefined}
      className={cx(
        "inline-flex h-8 items-center gap-1.5 rounded-xl border border-stone-300 bg-paper px-2.5 text-xs font-medium text-ink hover:bg-indigo-50 dark:border-stone-700 dark:bg-paper-dark dark:text-stone-100 dark:hover:bg-indigo-500/10",
        failed &&
          "border-red-300 text-red-800 dark:border-red-800 dark:text-red-200",
        className,
      )}
    >
      {copied ? <Check className="size-3.5" aria-hidden="true" /> : null}
      {failed ? (
        <TriangleAlert className="size-3.5" aria-hidden="true" />
      ) : null}
      {!copied && !failed ? (
        <Copy className="size-3.5" aria-hidden="true" />
      ) : null}
      <span>{copied ? "Copied" : failed ? "Copy failed" : label}</span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : failed ? "Copy failed" : ""}
      </span>
    </button>
  );
};

export default CopyButton;
