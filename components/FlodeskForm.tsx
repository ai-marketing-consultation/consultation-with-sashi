"use client";

import { useEffect, useRef } from "react";

const FORM_ID = "6a9abadefb641b4bf319c365";

export function FlodeskForm() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    async function mount() {
      const response = await fetch("/flodesk-embed.html");
      let embed = await response.text();
      if (cancelled || !host.current) return;
      const scripts = [...embed.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)];
      host.current.innerHTML = embed.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
      const root = host.current.querySelector<HTMLElement>(`[data-ff-el="root"].ff-${FORM_ID}`);
      if (!root) return;
      scripts.forEach((match) => {
        const script = document.createElement("script");
        if (/type="module"/.test(match[1])) script.type = "module";
        if (/nomodule/.test(match[1])) script.noModule = true;
        script.text = match[2];
        document.body.appendChild(script);
      });
    }
    mount();
    return () => { cancelled = true; };
  }, []);

  return <div ref={host} className="flodesk-host" aria-label="Free AI marketing consultation form" data-form-id={FORM_ID} />;
}
