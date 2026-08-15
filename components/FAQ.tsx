"use client";
import { useState } from "react";

const items = [
  ["Is the consultation really free?", "Yes. The initial AI marketing consultation is completely free."],
  ["Who is this consultation for?", "It is designed for small and growing businesses that want clearer direction on digital marketing, customer acquisition, and practical ways to use AI."],
  ["What will we discuss?", "We'll discuss your business, current marketing, challenges, goals, and practical opportunities to improve your next steps."],
  ["Do I need to be using AI already?", "No. The consultation is designed to help you understand practical ways AI could support your business, wherever you are today."],
  ["Is this suitable for small businesses?", "Yes. This consultation is designed for small and growing businesses that want practical marketing direction."],
  ["Will I be required to buy a service?", "No. The consultation gives you useful direction first. If my services are a good fit, I’ll explain how I can help, with no obligation to work together."],
  ["How will the consultation be conducted?", "After reviewing your request, Sashi will contact you to arrange the consultation."],
  ["What happens after I submit the form?", "Sashi will review your information and contact you to arrange your free consultation."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="faq section"><div className="container faq-wrap"><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>Frequently Asked Questions</h2>{items.map(([question, answer], index) => <article className="faq-item" key={question}><button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{question}</span><b>{open === index ? "−" : "+"}</b></button>{open === index && <p>{answer}</p>}</article>)}</div></section>;
}
