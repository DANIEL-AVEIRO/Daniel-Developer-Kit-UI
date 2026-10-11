import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/HomePage.jsx"));
export const CatalogPage = lazy(() => import("../pages/CatalogPage.jsx"));
export const DetailPage = lazy(() => import("../pages/DetailPage.jsx"));
export const GettingStartedPage = lazy(() => import("../pages/GettingStartedPage.jsx"));
export const DesignSystemPage = lazy(() => import("../pages/DesignSystemPage.jsx"));
export const LibraryPage = lazy(() => import("../pages/LibraryPage.jsx"));
export const SettingsPage = lazy(() => import("../pages/SettingsPage.jsx"));
export const FavoritesPage = lazy(() => import("../pages/FavoritesPage.jsx"));
export const BuilderPage = lazy(() => import("../pages/BuilderPage.jsx"));
export const NotFoundPage = lazy(() => import("../pages/NotFoundPage.jsx"));
export const PreviewPage = lazy(() => import("../pages/PreviewPage.jsx"));

export const PageFallback = () => {
  return <p className="py-8 text-sm text-stone-500">Loading page…</p>;
};
