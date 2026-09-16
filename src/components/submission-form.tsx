"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/site-content";
import { liveGalleryUrl, submissionEndpoint } from "@/lib/public-url";

export function SubmissionForm({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const copy = locale === "te" ? telugu : english;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const form = event.currentTarget;

    try {
      const response = await fetch(submissionEndpoint(), { method: "POST", body: new FormData(form) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || copy.genericError);
      const target = liveGalleryUrl(locale, result.village, result.id);
      if (target.startsWith("http")) window.location.assign(target);
      else { router.push(target); router.refresh(); }
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : copy.genericError);
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-7 rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-10">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={copy.title} required className="sm:col-span-2">
          <input name="title" required minLength={3} maxLength={160} className={inputClass} placeholder={copy.titlePlaceholder} />
        </Field>
        <Field label={copy.location} required>
          <select name="village" required defaultValue="gundancharla" className={inputClass}>
            <option value="gundancharla">{copy.gundancharla}</option>
            <option value="project-wide">{copy.projectWide}</option>
          </select>
        </Field>
        <Field label={copy.category} required>
          <select name="category" required defaultValue="ground-reality" className={inputClass}>
            <option value="ground-reality">{copy.categories.ground}</option>
            <option value="rehabilitation">{copy.categories.rehabilitation}</option>
            <option value="development">{copy.categories.development}</option>
            <option value="document-update">{copy.categories.document}</option>
            <option value="village-story">{copy.categories.story}</option>
            <option value="other">{copy.categories.other}</option>
          </select>
        </Field>
        <Field label={copy.date}>
          <input name="eventDate" type="date" className={inputClass} />
        </Field>
        <Field label={copy.media} hint={copy.mediaHint}>
          <input name="media" type="file" accept="image/jpeg,image/png,image/webp,video/mp4" multiple className="block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-river file:px-4 file:py-2 file:font-bold file:text-white hover:file:bg-river-dark" />
        </Field>
        <Field label={copy.content} required className="sm:col-span-2">
          <textarea name="content" required minLength={10} maxLength={5000} rows={7} className={inputClass} placeholder={copy.contentPlaceholder} />
        </Field>
      </div>

      <label className="flex items-start gap-3 rounded-2xl bg-paper p-4 text-sm leading-6 text-muted">
        <input name="rightsConfirmed" type="checkbox" className="mt-1 size-4 accent-river" />
        <span>{copy.rights}</span>
      </label>

      <p className="rounded-2xl border border-gold/40 bg-gold/10 p-4 text-sm leading-6 text-muted">{copy.publicNotice}</p>
      {error ? <p role="alert" className="rounded-2xl bg-earth/10 p-4 text-sm font-bold text-earth">{error}</p> : null}
      <button type="submit" disabled={submitting} className="rounded-full bg-earth px-7 py-3 font-black text-white transition hover:bg-ink disabled:cursor-wait disabled:opacity-60">
        {submitting ? copy.submitting : copy.submit}
      </button>
    </form>
  );
}

function Field({ label, hint, required, className = "", children }: { label: string; hint?: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return <label className={`block ${className}`}><span className="mb-2 block text-sm font-black">{label}{required ? " *" : ""}</span>{children}{hint ? <span className="mt-2 block text-xs leading-5 text-muted">{hint}</span> : null}</label>;
}

const inputClass = "w-full rounded-2xl border border-line bg-white px-4 py-3 text-ink shadow-sm outline-none transition placeholder:text-muted/60 focus:border-river";

const english = {
  title: "Update title", titlePlaceholder: "What happened?", location: "Location", gundancharla: "Gundancharla", projectWide: "Project-wide", category: "Category", date: "Event date (optional)", media: "Photos or videos (optional)", mediaHint: "Up to 6 files. JPEG, PNG, WebP or MP4; 5 MB total per submission.", content: "Update details", contentPlaceholder: "Describe what happened, where, when, who reported it, and any source or evidence available.", rights: "If I attach media, I confirm I have permission to submit it for archiving and public display, and that it does not expose private identity, bank, Aadhaar, signature, phone or children’s sensitive information without consent.", publicNotice: "The update is published immediately as a Community Report. This label does not mean VeligondaStories has independently verified it.", submit: "Publish update", submitting: "Publishing…", genericError: "The update could not be submitted.", categories: { ground: "Ground reality", rehabilitation: "Rehabilitation / R&R", development: "Project development", document: "Document update", story: "Village story", other: "Other" },
};

const telugu = {
  title: "అప్‌డేట్ శీర్షిక", titlePlaceholder: "ఏం జరిగింది?", location: "ప్రాంతం", gundancharla: "గుండంచర్ల", projectWide: "ప్రాజెక్టు మొత్తం", category: "వర్గం", date: "సంఘటన తేదీ (ఐచ్చికం)", media: "ఫోటోలు లేదా వీడియోలు (ఐచ్చికం)", mediaHint: "గరిష్ఠంగా 6 ఫైళ్లు. JPEG, PNG, WebP లేదా MP4; ప్రతి సమర్పణ మొత్తం 5 MB.", content: "అప్‌డేట్ వివరాలు", contentPlaceholder: "ఏం జరిగింది, ఎక్కడ, ఎప్పుడు, ఎవరు నివేదించారు, అందుబాటులో ఉన్న మూలం లేదా ఆధారం వివరించండి.", rights: "మీడియా జతచేస్తే, ఆర్కైవ్ మరియు ప్రజా ప్రదర్శన కోసం సమర్పించే అనుమతి నాకు ఉందని, సమ్మతి లేకుండా వ్యక్తిగత గుర్తింపు, బ్యాంకు, ఆధార్, సంతకం, ఫోన్ లేదా పిల్లల సున్నితమైన సమాచారం లేదని నిర్ధారిస్తున్నాను.", publicNotice: "ఈ అప్‌డేట్ వెంటనే సామాజిక నివేదికగా ప్రచురించబడుతుంది. ఈ లేబుల్ VeligondaStories స్వతంత్రంగా ధృవీకరించిందని అర్థం కాదు.", submit: "అప్‌డేట్ ప్రచురించండి", submitting: "ప్రచురిస్తోంది…", genericError: "అప్‌డేట్ సమర్పించలేకపోయాము.", categories: { ground: "నేలమీద పరిస్థితి", rehabilitation: "పునరావాసం / ఆర్ అండ్ ఆర్", development: "ప్రాజెక్టు అభివృద్ధి", document: "పత్రం అప్‌డేట్", story: "గ్రామ కథ", other: "ఇతర" },
};
