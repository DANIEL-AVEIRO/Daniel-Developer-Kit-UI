import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSidebar } from "../../hooks/useSidebar.js";
import AppFooter from "./AppFooter.jsx";
import AppHeader from "./AppHeader.jsx";
import AppSidebar from "./AppSidebar.jsx";
import MobileSidebar from "./MobileSidebar.jsx";

const RootLayout = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuLocation, setMenuLocation] = useState(location.key);
  const { collapsed, toggleCollapsed } = useSidebar();

  if (menuLocation !== location.key) {
    setMenuLocation(location.key);
    if (menuOpen) setMenuOpen(false);
  }

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-paper focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-md dark:focus:bg-paper-dark dark:focus:text-stone-50"
      >
        Skip to content
      </a>
      <AppHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
      />
      <div className="flex w-full items-start">
        <AppSidebar collapsed={collapsed} onToggle={toggleCollapsed} />
        <div className="min-w-0 flex-1">
          <main
            id="main"
            key={location.pathname}
            className="page-enter mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8"
          >
            <Outlet />
          </main>
          <AppFooter />
        </div>
      </div>
      <MobileSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default RootLayout;
