"use client";
import { useState, type FormEvent } from "react";
export function InquiryForm({ email, subject, topicLabel = "Product or project", topics = [], initialTopic = "", initialDetails = "" }: { email: string; subject: string; topicLabel?: string; topics?: string[]; initialTopic?: string; initialDetails?: string }) {
  const [draft, setDraft] = useState("");
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n${topicLabel}: ${data.get("topic")}\n\n${data.get("message")}`;
    setDraft(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }
  return <form onSubmit={prepare} onChange={() => setDraft("")} className="inquiry-form">
    <div className="form-pair"><label>Name<input name="name" autoComplete="name" required maxLength={120} /></label><label>Business email<input name="email" type="email" autoComplete="email" required maxLength={200} /></label></div>
    <label>{topicLabel}{topics.length ? <select name="topic" required defaultValue={initialTopic}><option value="" disabled>Select a topic</option>{topics.map(t => <option key={t}>{t}</option>)}</select> : <input name="topic" required maxLength={200} defaultValue={initialTopic} />}</label>
    <label>Details<textarea name="message" defaultValue={initialDetails} required rows={5} maxLength={3000} placeholder="Include requirements, destination, and timing where relevant." /></label>
    <button className="action" type="submit">Prepare inquiry <span aria-hidden="true">↗</span></button>
    <p className="form-help">Prepare an email draft with your details. Nothing is sent from this website.</p>
    {draft && <div className="draft-ready" role="status"><p>Your inquiry is ready.</p><a className="action" href={draft}>Open email draft ↗</a><p>You can review and send it in your email app, or email {email} directly.</p></div>}
  </form>;
}
