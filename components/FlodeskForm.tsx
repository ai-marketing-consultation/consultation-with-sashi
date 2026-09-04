"use client";

import { useEffect, useRef } from "react";

const FORM_ID = "6a9777453be98be7904bf639";

export function FlodeskForm() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    async function mount() {
      const response = await fetch("/flodesk-embed.html");
      let embed = await response.text();
      if (cancelled || !host.current) return;
      embed = embed.replace(/data-ff-config="([^"]+)"/, (_, encoded: string) => {
        const config = JSON.parse(atob(encoded));
        config.onSuccess = { ...config.onSuccess, mode: "message", redirectUrl: "" };
        return `data-ff-config="${btoa(JSON.stringify(config))}"`;
      });
      const scripts = [...embed.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)];
      host.current.innerHTML = embed.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
      const root = host.current.querySelector<HTMLElement>(`[data-ff-el="root"].ff-${FORM_ID}`);
      if (!root) return;
      // The embed's native field names are correct, but its exported display labels
      // are shifted. Keep Flodesk's submission payload untouched while showing
      // visitors the information each field actually collects.
      const fieldLabels = ["Email Address", "Full Name", "WhatsApp Number", "Website / Facebook Link"];
      root.querySelectorAll<HTMLElement>(`.ff-${FORM_ID}__field`).forEach((field, index) => {
        const label = fieldLabels[index];
        if (!label) return;
        const input = field.querySelector<HTMLInputElement>("input");
        const fieldLabel = field.querySelector<HTMLElement>(`.ff-${FORM_ID}__label`);
        if (input) input.placeholder = label;
        if (fieldLabel) fieldLabel.textContent = label;
      });
      scripts.forEach((match) => {
        const script = document.createElement("script");
        if (/type="module"/.test(match[1])) script.type = "module";
        if (/nomodule/.test(match[1])) script.noModule = true;
        script.text = match[2];
        document.body.appendChild(script);
      });
      const observer = new MutationObserver(() => {
        if (root.dataset.ffStage === "success") {
          observer.disconnect();
          window.setTimeout(() => window.location.assign("/thanks"), 1200);
        }
      });
      observer.observe(root, { attributes: true, attributeFilter: ["data-ff-stage"] });
    }
    mount();
    return () => { cancelled = true; };
  }, []);

  return <div ref={host} className="flodesk-host" aria-label="Free AI marketing consultation form" data-form-id={FORM_ID} />;
}
