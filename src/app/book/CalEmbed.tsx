"use client";

import { useEffect, useState } from "react";
import { CAL_LINK, CAL_URL } from "../site";

type Queue = ((...args: unknown[]) => void) & { q: unknown[][] };
type CalApi = Queue & { ns: Record<string, Queue>; loaded?: boolean };

const NS = "discovery";
const EMBED_SRC = "https://app.cal.com/embed/embed.js";

// Cal.com's official loader, typed: calls are queued until embed.js arrives and replays them.
function getCal(): CalApi {
  const w = window as Window & { Cal?: CalApi };
  if (w.Cal) return w.Cal;
  const cal = function (...args: unknown[]) {
    if (!cal.loaded) {
      document.head.appendChild(Object.assign(document.createElement("script"), { src: EMBED_SRC, async: true }));
      cal.loaded = true;
    }
    if (args[0] === "init" && typeof args[1] === "string") {
      const api = function (...a: unknown[]) {
        api.q.push(a);
      } as Queue;
      api.q = [];
      cal.ns[args[1]] ??= api;
      cal.ns[args[1]].q.push(args);
      cal.q.push(["initNamespace", args[1]]);
      return;
    }
    cal.q.push(args);
  } as CalApi;
  cal.q = [];
  cal.ns = {};
  w.Cal = cal;
  return cal;
}

export function CalEmbed() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = document.getElementById("cal-inline");
    // Guard against a second mount (React dev double-invokes effects) creating a second iframe.
    if (!el || el.dataset.mounted) return;
    el.dataset.mounted = "true";

    const Cal = getCal();
    Cal("init", NS, { origin: "https://app.cal.com" });
    const api = Cal.ns[NS];
    api("inline", { elementOrSelector: "#cal-inline", calLink: CAL_LINK, config: { layout: "month_view", theme: "light" } });
    api("ui", { theme: "light", layout: "month_view", hideEventTypeDetails: true, cssVarsPerTheme: { light: { "cal-brand": "#ea580c" } } });
    api("on", { action: "linkReady", callback: () => setReady(true) });
  }, []);

  return (
    <div className="book-cal" aria-busy={!ready}>
      <div className="book-cal-head">
        <span className="book-cal-title">Pick a time</span>
        <span className="book-cal-meta">Shown in your local time</span>
      </div>
      {!ready && (
        <p className="book-cal-loading">
          Loading the calendar…
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer">
            Not loading? Open it on Cal.com
          </a>
        </p>
      )}
      <div id="cal-inline" className="book-cal-frame" />
    </div>
  );
}
