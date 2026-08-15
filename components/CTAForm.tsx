"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Errors = Record<string, string>;
export function CTAForm() {
  const router = useRouter(); const [errors, setErrors] = useState<Errors>({}); const [loading, setLoading] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const data = new FormData(e.currentTarget); const next: Errors = {};
    for (const key of ["name", "whatsapp", "business"]) if (!String(data.get(key) || "").trim()) next[key] = "This field is required.";
    const email = String(data.get("email") || ""); if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    setErrors(next); if (Object.keys(next).length) return; setLoading(true); setTimeout(() => router.push("/thank-you"), 500);
  }
  const field = (id: string, label: string, placeholder: string, type = "text", optional = false) => <label className="field" htmlFor={id}><span>{label}{optional && <em>Optional</em>}</span><input id={id} name={id} type={type} placeholder={placeholder} aria-invalid={!!errors[id]} />{errors[id] && <small>{errors[id]}</small>}</label>;
  return <form className="form-card" onSubmit={submit} noValidate>
    <div className="form-heading"><p className="eyebrow">FREE ONE-TO-ONE CONSULTATION</p><h2>Let&apos;s look at your marketing together.</h2><p>Tell us a little about your business and we&apos;ll use it to prepare a personalized AI marketing plan for your consultation.</p></div>
    <div className="form-grid">{field("name", "Full name", "Your full name")}{field("whatsapp", "WhatsApp number", "Your active WhatsApp number")}{field("business", "Business name", "Your business name")}{field("email", "Email Address", "you@business.com", "email", true)}</div>
    {field("url", "Website or Facebook URL", "https://", "url", true)}
    <label className="field" htmlFor="message"><span>Tell us about your business <em>Optional</em></span><textarea id="message" name="message" placeholder="Tell us about your current marketing, challenges, or goals..." rows={4} /></label>
    <button className="button submit" type="submit" disabled={loading}>{loading ? "Sending your request..." : "Get My Free AI Marketing Plan"}<span>→</span></button><p className="form-trust">Free consultation • Personalized for your business • No obligation</p><p className="privacy">We respect your privacy. No spam.</p>
  </form>;
}
