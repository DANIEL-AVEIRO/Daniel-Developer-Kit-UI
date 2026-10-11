import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout.jsx";
import {
  BuilderPage,
  CatalogPage,
  DesignSystemPage,
  DetailPage,
  FavoritesPage,
  GettingStartedPage,
  HomePage,
  LibraryPage,
  NotFoundPage,
  PageFallback,
  PreviewPage,
  SettingsPage,
} from "./lazyPages.jsx";

const page = (node) => {
  return <Suspense fallback={<PageFallback />}>{node}</Suspense>;
};

export const router = createBrowserRouter([
  {
    path: "/preview/:kind/:slug",
    element: page(<PreviewPage />),
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: page(<HomePage />) },
      { path: "components", element: page(<CatalogPage kind="component" />) },
      { path: "components/:slug", element: page(<DetailPage kind="component" />) },
      { path: "blocks", element: page(<CatalogPage kind="block" />) },
      { path: "blocks/:slug", element: page(<DetailPage kind="block" />) },
      { path: "templates", element: page(<CatalogPage kind="template" />) },
      { path: "templates/:slug", element: page(<DetailPage kind="template" />) },
      { path: "getting-started", element: page(<GettingStartedPage />) },
      { path: "design-system", element: page(<DesignSystemPage />) },
      { path: "library", element: page(<LibraryPage />) },
      { path: "settings", element: page(<SettingsPage />) },
      { path: "favorites", element: page(<FavoritesPage />) },
      { path: "builder", element: page(<BuilderPage />) },
      { path: "*", element: page(<NotFoundPage />) },
    ],
  },
]);
