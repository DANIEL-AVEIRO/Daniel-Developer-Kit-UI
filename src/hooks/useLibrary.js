import { useEffect, useState } from "react";

const storageKey = "devkit-ui-library";
const changeEvent = "devkit-library-change";

const emptyLibrary = { favorites: [], collections: [] };

function isItem(value) {
  return (
    Boolean(value) &&
    typeof value.id === "string" &&
    typeof value.kind === "string" &&
    typeof value.slug === "string"
  );
}

function readLibrary() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return emptyLibrary;
    const parsed = JSON.parse(raw);
    const favorites = Array.isArray(parsed?.favorites)
      ? parsed.favorites.filter(isItem)
      : [];
    const collections = Array.isArray(parsed?.collections)
      ? parsed.collections
          .filter(
            (collection) =>
              collection &&
              typeof collection.id === "string" &&
              typeof collection.name === "string",
          )
          .map((collection) => ({
            id: collection.id,
            name: collection.name,
            items: Array.isArray(collection.items)
              ? collection.items.filter(isItem)
              : [],
          }))
      : [];
    return { favorites, collections };
  } catch {
    return emptyLibrary;
  }
}

function writeLibrary(next) {
  localStorage.setItem(storageKey, JSON.stringify(next));
  window.dispatchEvent(new Event(changeEvent));
}

function itemFrom(entry) {
  return { id: entry.id, kind: entry.kind, slug: entry.slug };
}

export function useLibrary() {
  const [library, setLibrary] = useState(readLibrary);
  const [storageError, setStorageError] = useState("");

  useEffect(() => {
    function sync() {
      setLibrary(readLibrary());
    }
    window.addEventListener(changeEvent, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(changeEvent, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function update(recipe) {
    try {
      const next = recipe(readLibrary());
      writeLibrary(next);
      setLibrary(next);
      setStorageError("");
      return true;
    } catch {
      setStorageError(
        "Browser storage is unavailable, so this change was not saved.",
      );
      return false;
    }
  }

  function isFavorite(entry) {
    return library.favorites.some((item) => item.id === entry?.id);
  }

  function toggleFavorite(entry) {
    if (!entry) return false;
    return update((current) => {
      const exists = current.favorites.some((item) => item.id === entry.id);
      return {
        ...current,
        favorites: exists
          ? current.favorites.filter((item) => item.id !== entry.id)
          : [...current.favorites, itemFrom(entry)],
      };
    });
  }

  function removeFavorite(id) {
    return update((current) => ({
      ...current,
      favorites: current.favorites.filter((item) => item.id !== id),
    }));
  }

  function createCollection(name) {
    const trimmed = name.trim();
    if (!trimmed) return false;
    return update((current) => ({
      ...current,
      collections: [
        ...current.collections,
        {
          id: crypto.randomUUID?.() ?? `collection-${Date.now()}`,
          name: trimmed,
          items: [],
        },
      ],
    }));
  }

  function removeCollection(id) {
    return update((current) => ({
      ...current,
      collections: current.collections.filter(
        (collection) => collection.id !== id,
      ),
    }));
  }

  function addToCollection(collectionId, entry) {
    if (!entry) return false;
    return update((current) => ({
      ...current,
      collections: current.collections.map((collection) => {
        if (collection.id !== collectionId) return collection;
        if (collection.items.some((item) => item.id === entry.id))
          return collection;
        return { ...collection, items: [...collection.items, itemFrom(entry)] };
      }),
    }));
  }

  function removeFromCollection(collectionId, entryId) {
    return update((current) => ({
      ...current,
      collections: current.collections.map((collection) =>
        collection.id === collectionId
          ? {
              ...collection,
              items: collection.items.filter((item) => item.id !== entryId),
            }
          : collection,
      ),
    }));
  }

  return {
    favorites: library.favorites,
    collections: library.collections,
    storageError,
    isFavorite,
    toggleFavorite,
    removeFavorite,
    createCollection,
    removeCollection,
    addToCollection,
    removeFromCollection,
  };
}
