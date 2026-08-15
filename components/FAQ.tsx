"use client";
import { useState } from "react";

const items = [
  ["Is the consultation really free?", "Yes. The initial AI marketing consultation is completely free."],
  ["Who is this consultation for?", "It is designed for small and growing businesses that want clearer direction on digital marketing, customer acquisition, and practical ways to use AI."],
  ["What will I receive after the consultation?", "You'll receive a personalized AI marketing plan with practical areas to focus on next based on your business and current marketing situation."],
  ["Do I need to be running ads already?", "No. Whether you're already running ads, posting organically, or just getting started, we can identify the most useful next steps for your business."],
  ["Will you try to sell me something?", "The consultation is designed to give you useful direction first. If our services are a good fit for your business, we'll explain how we can help. There is no obligation to work with us."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="faq section"><div className="container faq-wrap"><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>Frequently Asked Questions</h2>{items.map(([question, answer], index) => <article className="faq-item" key={question}><button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{question}</span><b>{open === index ? "−" : "+"}</b></button>{open === index && <p>{answer}</p>}</article>)}</div></section>;
}
