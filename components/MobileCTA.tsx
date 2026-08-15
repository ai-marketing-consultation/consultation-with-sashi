"use client";
import { useEffect, useState } from "react";

export function MobileCTA() {
  const [visible, setVisible] = useState(false); const [dismissed, setDismissed] = useState(false);
  useEffect(() => { const update = () => setVisible(window.scrollY > 420); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  if (!visible || dismissed) return null;
  return <div className="mobile-cta"><a href="#consultation">Get My Free AI Marketing Plan <span>→</span></a><button type="button" aria-label="Dismiss consultation button" onClick={() => setDismissed(true)}>×</button></div>;
}
