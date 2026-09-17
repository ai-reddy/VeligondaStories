"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/site-content";
import { liveGalleryUrl, submissionEndpoint } from "@/lib/public-url";

export function SubmissionForm({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"community" | "social">("community");
  const today = new Date().toISOString().split("T")[0];
  const copy = locale === "te" ? telugu : english;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("submissionMode", mode);

    try {
      const response = await fetch(submissionEndpoint(), { method: "POST", body: data });
      const result = await response.json().catch(() => null) as { error?: string; village?: string; id?: string } | null;
      if (!result) throw new Error(response.status === 413 ? copy.tooLarge : copy.genericError);
      if (!response.ok) throw new Error(result.error || copy.genericError);
      if ((result.village !== "gundancharla" && result.village !== "project-wide" && result.village !== "kalanuthala" && result.village !== "sukesula" && result.village !== "gottepadiya") || !result.id) throw new Error(copy.genericError);
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
      <input name="submissionMode" type="hidden" value={mode} />

      <div className="flex flex-wrap gap-3 rounded-2xl bg-paper p-2">
        <button
          type="button"
          onClick={() => setMode("community")}
          className={`flex-1 rounded-full px-4 py-2 text-sm font-bold transition ${mode === "community" ? "bg-river text-white" : "text-muted hover:bg-white/40"}`}
        >
          {copy.communityMode}
        </button>
        <button
          type="button"
          onClick={() => setMode("social")}
          className={`flex-1 rounded-full px-4 py-2 text-sm font-bold transition ${mode === "social" ? "bg-earth text-white" : "text-muted hover:bg-white/40"}`}
        >
          {copy.socialMode}
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {mode === "community" ? (
          <>
            <Field label={copy.title} required className="sm:col-span-2">
              <input name="title" required minLength={3} maxLength={160} className={inputClass} placeholder={copy.titlePlaceholder} />
            </Field>
            <Field label={copy.location} required>
              <select name="village" required defaultValue="project-wide" className={inputClass}>
                <option value="project-wide">{copy.projectWide}</option>
                <option value="gundancharla">{copy.gundancharla}</option>
                <option value="kalanuthala">{copy.kalanuthala}</option>
                <option value="sukesula">{copy.sukesula}</option>
                <option value="gottepadiya">{copy.gottepadiya}</option>
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
              <input name="eventDate" type="date" defaultValue={today} className={inputClass} />
            </Field>
            <Field label={copy.media} hint={copy.mediaHint}>
              <input name="media" type="file" accept="application/pdf,image/jpeg,image/png,image/webp,video/mp4" multiple className="block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-river file:px-4 file:py-2 file:font-bold file:text-white hover:file:bg-river-dark" />
            </Field>
            <Field label={copy.content} required className="sm:col-span-2">
              <textarea name="content" required minLength={10} maxLength={5000} rows={7} className={inputClass} placeholder={copy.contentPlaceholder} />
            </Field>
            <Field label={copy.socialLinksOptional} hint={copy.socialLinksHint} className="sm:col-span-2">
              <textarea name="socialLinks" maxLength={1500} rows={3} className={inputClass} placeholder={copy.socialLinksPlaceholder} />
            </Field>
          </>
        ) : (
          <>
            <Field label={copy.location} required className="sm:col-span-2">
              <select name="village" required defaultValue="project-wide" className={inputClass}>
                <option value="project-wide">{copy.projectWide}</option>
                <option value="gundancharla">{copy.gundancharla}</option>
                <option value="kalanuthala">{copy.kalanuthala}</option>
                <option value="sukesula">{copy.sukesula}</option>
                <option value="gottepadiya">{copy.gottepadiya}</option>
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
              <input name="eventDate" type="date" defaultValue={today} className={inputClass} />
            </Field>
            <Field label={copy.socialLinks} hint={copy.socialLinksHint} className="sm:col-span-2">
              <textarea name="socialLinks" required maxLength={1500} rows={3} className={inputClass} placeholder={copy.socialLinksPlaceholder} />
            </Field>
            <Field label={copy.title} className="sm:col-span-2">
              <input name="title" maxLength={160} className={inputClass} placeholder={copy.titleOptionalPlaceholder} />
            </Field>
          </>
        )}
      </div>

      {mode === "community" ? (
        <label className="flex items-start gap-3 rounded-2xl bg-paper p-4 text-sm leading-6 text-muted">
          <input name="rightsConfirmed" type="checkbox" className="mt-1 size-4 accent-river" />
          <span>{copy.rights}</span>
        </label>
      ) : null}

      <p className="rounded-2xl border border-gold/40 bg-gold/10 p-4 text-sm leading-6 text-muted">{copy.publicNotice}</p>
      {error ? <p role="alert" className="rounded-2xl bg-earth/10 p-4 text-sm font-bold text-earth">{error}</p> : null}
      <button type="submit" disabled={submitting} className="rounded-full bg-earth px-7 py-3 font-black text-white transition hover:bg-ink disabled:cursor-wait disabled:opacity-60">
        {submitting ? copy.submitting : mode === "social" ? copy.socialSubmit : copy.submit}
      </button>
    </form>
  );
}

function Field({ label, hint, required, className = "", children }: { label: string; hint?: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return <label className={`block ${className}`}><span className="mb-2 block text-sm font-black">{label}{required ? " *" : ""}</span>{children}{hint ? <span className="mt-2 block text-xs leading-5 text-muted">{hint}</span> : null}</label>;
}

const inputClass = "w-full rounded-2xl border border-line bg-white px-4 py-3 text-ink shadow-sm outline-none transition placeholder:text-muted/60 focus:border-river";

const english = {
  title: "Update title", titlePlaceholder: "What happened?", titleOptionalPlaceholder: "Optional title for this social post", location: "Location", gundancharla: "Gundamcharla", kalanuthala: "Kalanuthala", sukesula: "Sukesula", gottepadiya: "Gottepadiya", projectWide: "Project-wide", category: "Category", date: "Event date", media: "Photos, videos or documents (optional)", mediaHint: "Up to 6 files. JPEG, PNG, WebP, MP4 or PDF; 10 MB total per submission.", content: "Update details", contentPlaceholder: "Describe what happened, where, when, who reported it, and any source or evidence available.", socialLinks: "Social media link", socialLinksOptional: "Social media link (optional)", socialLinksHint: "Paste one public Instagram, Facebook, YouTube, X or Twitter link.", socialLinksPlaceholder: "https://www.instagram.com/reel/…", rights: "If I attach media, I confirm I have permission to submit it for archiving and public display, and that it does not expose private identity, bank, Aadhaar, signature, phone or children’s sensitive information without consent.", publicNotice: "The update is published immediately as a Community Report. This label does not mean VeligondaStories has independently verified it.", submit: "Publish community update", socialSubmit: "Publish social link", communityMode: "Community update", socialMode: "Social media link", submitting: "Publishing…", genericError: "The update could not be submitted. Please try again; nothing was removed from earlier submissions.", tooLarge: "The upload is too large for the publishing service. Keep all attached files under 10 MB total.", categories: { ground: "Ground reality", rehabilitation: "Rehabilitation / R&R", development: "Project development", document: "Document update", story: "Village story", other: "Other" },
};

const telugu = {
  title: "అప్‌డేట్ శీర్షిక", titlePlaceholder: "ఏం జరిగింది?", titleOptionalPlaceholder: "ఈ సోషల్ పోస్టుకు ఐచ్చిక శీర్షిక", location: "ప్రాంతం", gundancharla: "గుండమచర్ల", kalanuthala: "కలనుతాల", sukesula: "సుకెసుల", gottepadiya: "గోట్టెపాడియా", projectWide: "ప్రాజెక్టు మొత్తం", category: "వర్గం", date: "సంఘటన తేదీ", media: "ఫోటోలు లేదా వీడియోలు (ఐచ్చికం)", mediaHint: "గరిష్ఠంగా 6 ఫైళ్లు. JPEG, PNG, WebP లేదా MP4; ప్రతి సమర్పణ మొత్తం 5 MB.", content: "అప్‌డేట్ వివరాలు", contentPlaceholder: "ఏం జరిగింది, ఎక్కడ, ఎప్పుడు, ఎవరు నివేదించారు, అందుబాటులో ఉన్న మూలం లేదా ఆధారం వివరించండి.", socialLinks: "సోషల్ మీడియా లింక్", socialLinksOptional: "సోషల్ మీడియా లింక్ (ఐచ్చికం)", socialLinksHint: "ఒక పబ్లిక్ Instagram, Facebook, YouTube, X లేదా Twitter లింకుని జోడించండి.", socialLinksPlaceholder: "https://www.instagram.com/reel/…", rights: "మీడియా జతచేస్తే, ఆర్కైవ్ మరియు ప్రజా ప్రదర్శన కోసం సమర్పించే అనుమతి నాకు ఉందని, సమ్మతి లేకుండా వ్యక్తిగత గుర్తింపు, బ్యాంకు, ఆధార్, సంతకం, ఫోన్ లేదా పిల్లల సున్నితమైన సమాచారం లేదని నిర్ధారిస్తున్నాను.", publicNotice: "ఈ అప్‌డేట్ వెంటనే సామాజిక నివేదికగా ప్రచురించబడుతుంది. ఈ లేబుల్ VeligondaStories స్వతంత్రంగా ధృవీకరించిందని అర్థం కాదు.", submit: "సామాజిక అప్‌డేట్ ప్రచురించండి", socialSubmit: "సోషల్ లింక్ ప్రచురించండి", communityMode: "సామాజిక అప్‌డేట్", socialMode: "సోషల్ మీడియా లింక్", submitting: "ప్రచురిస్తోంది…", genericError: "అప్‌డేట్ సమర్పించలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి; పాత సమర్పణలు తొలగించబడవు.", tooLarge: "అప్‌లోడ్ చాలా పెద్దది. జతచేసిన అన్ని ఫైళ్ల మొత్తం 5 MB లోపు ఉంచండి.", categories: { ground: "నేలమీద పరిస్థితి", rehabilitation: "పునరావాసం / ఆర్ అండ్ ఆర్", development: "ప్రాజెక్టు అభివృద్ధి", document: "పత్రం అప్‌డేట్", story: "గ్రామ కథ", other: "ఇతర" },
};
