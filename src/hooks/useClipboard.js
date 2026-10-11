import { useEffect, useRef, useState } from "react";
import { copyText } from "../utils/copyText.js";

export function useClipboard() {
  const [status, setStatus] = useState("idle");
  const [reason, setReason] = useState("");
  const timer = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  async function copy(text) {
    const result = await copyText(text);
    setStatus(result.ok ? "copied" : "error");
    setReason(result.ok ? "" : result.reason);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setStatus("idle");
      setReason("");
    }, 2000);
    return result.ok;
  }

  return { status, reason, copy };
}
