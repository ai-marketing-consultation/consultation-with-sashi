"use client";
import { useState } from "react";

const items = [
  ["Is the consultation really free?", "Yes. The initial AI marketing consultation is completely free."],
  ["Who is this consultation for?", "It is designed for small and growing businesses that want clearer direction on digital marketing, customer acquisition, and practical ways to use AI."],
  ["Do I need to understand AI?", "No. The consultation is designed to explain practical AI opportunities in clear, business-focused language."],
  ["What happens after I submit the form?", "Sashi will review your information and contact you to arrange your free consultation."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="faq section"><div className="container faq-wrap"><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>Frequently Asked Questions</h2>{items.map(([question, answer], index) => <article className="faq-item" key={question}><button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{question}</span><b>{open === index ? "−" : "+"}</b></button>{open === index && <p>{answer}</p>}</article>)}</div></section>;
}
