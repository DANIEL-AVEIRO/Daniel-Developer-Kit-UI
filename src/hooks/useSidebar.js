import { useEffect, useState } from "react";

const storageKey = "devkit-sidebar";
const changeEvent = "devkit-sidebar-change";

function readCollapsed() {
  try {
    return localStorage.getItem(storageKey) === "collapsed";
  } catch {
    return false;
  }
}

function writeCollapsed(collapsed) {
  localStorage.setItem(storageKey, collapsed ? "collapsed" : "expanded");
  window.dispatchEvent(new Event(changeEvent));
}

export function useSidebar() {
  const [collapsed, setCollapsed] = useState(readCollapsed);

  useEffect(() => {
    function sync() {
      setCollapsed(readCollapsed());
    }
    window.addEventListener(changeEvent, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(changeEvent, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function toggleCollapsed() {
    try {
      writeCollapsed(!readCollapsed());
      setCollapsed(readCollapsed());
    } catch {
      setCollapsed((current) => !current);
    }
  }

  return { collapsed, toggleCollapsed };
}
