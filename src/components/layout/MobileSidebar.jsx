import { useEffect, useRef } from "react";
import SidebarNav from "./SidebarNav.jsx";

const focusableSelector =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

const MobileSidebar = ({ open, onClose }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () => [...panel.querySelectorAll(focusableSelector)];
    focusable()[0]?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="overlay-in absolute inset-0 bg-ink/40"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div
        id="mobile-sidebar"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Library navigation"
        className="drawer-in absolute inset-y-0 left-0 flex w-[min(20rem,88vw)] flex-col overflow-y-auto border-r border-stone-200/80 bg-paper px-3 py-5 shadow-[var(--shadow-overlay)] dark:border-stone-800 dark:bg-paper-dark"
      >
        <div className="mb-5 flex items-center justify-between border-b border-stone-200/80 px-2.5 pb-4 dark:border-stone-800">
          <div>
            <p className="text-sm font-semibold text-stone-950 dark:text-stone-50">
              Browse library
            </p>
            <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
              Docs, components, blocks
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-2.5 py-1.5 text-xs font-medium text-stone-500 transition-colors hover:bg-indigo-50 hover:text-accent dark:text-stone-400 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-100"
          >
            Close
          </button>
        </div>
        <SidebarNav onNavigate={onClose} />
      </div>
    </div>
  );
};

export default MobileSidebar;
