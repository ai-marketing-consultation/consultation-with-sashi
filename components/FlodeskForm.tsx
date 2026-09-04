"use client";

import { useEffect } from "react";

const FORM_ID = "6a9abadefb641b4bf319c365";
const CONTAINER_ID = `fd-form-${FORM_ID}`;

declare global {
  interface Window {
    fd?: (event: string, options: Record<string, string>) => void;
    FlodeskObject?: string;
  }
}

export function FlodeskForm() {
  useEffect(() => {
    if (!document.querySelector("script[data-flodesk-universal]")) {
      const runtime = window as Window & Record<string, any>;
      (function (w, d, t, h, s, n) {
        w.FlodeskObject = n;
        const fn = function () {
          (w[n].q = w[n].q || []).push(arguments);
        };
        w[n] = w[n] || fn;
        const firstScript = d.getElementsByTagName(t)[0];
        const version = `?v=${Math.floor(new Date().getTime() / (120 * 1000)) * 60}`;
        const moduleScript = d.createElement(t);
        moduleScript.async = true;
        moduleScript.type = "module";
        moduleScript.src = `${h}${s}.mjs${version}`;
        moduleScript.dataset.flodeskUniversal = "true";
        firstScript.parentNode?.insertBefore(moduleScript, firstScript);
        const fallbackScript = d.createElement(t);
        fallbackScript.async = true;
        fallbackScript.noModule = true;
        fallbackScript.src = `${h}${s}.js${version}`;
        firstScript.parentNode?.insertBefore(fallbackScript, firstScript);
      })(runtime, document, "script", "https://assets.flodesk.com", "/universal", "fd");
    }

    window.fd?.("form", { formId: FORM_ID, containerEl: `#${CONTAINER_ID}` });
  }, []);

  return <div id={CONTAINER_ID} className="flodesk-host" aria-label="Free AI marketing consultation form" data-form-id={FORM_ID} />;
}
