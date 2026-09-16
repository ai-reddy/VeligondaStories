import type { JourneyStage } from "@/lib/journey-content";
import type { Locale } from "@/lib/site-content";

const labels = {
  en: {
    "official-and-reported": "Official / media reporting",
    "community-report": "Community report",
    "editorial-framework": "Archive framework",
  },
  te: {
    "official-and-reported": "అధికారిక / మీడియా నివేదిక",
    "community-report": "సామాజిక నివేదిక",
    "editorial-framework": "ఆర్కైవ్ విధానం",
  },
} as const;

export function VerificationBadge({ classification, locale }: { classification: JourneyStage["classification"]; locale: Locale }) {
  const color = classification === "community-report" ? "bg-gold/20 text-ink" : classification === "official-and-reported" ? "bg-river/10 text-river-dark" : "bg-ink/8 text-muted";

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${color}`}>{labels[locale][classification]}</span>;
}
