export const locales = ["te", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const instagramReels = normalizeInstagramReels([
  "https://www.instagram.com/reel/DdURhElzU6A/",
  "https://www.instagram.com/reel/DdTN2fyxrIM/",
  "https://www.instagram.com/reel/DccZoDrpsih/",
  "https://www.instagram.com/reel/Dc_UlDQS5f1/",
  "https://www.instagram.com/reel/DdL1rlLyoTF/",
  "https://www.instagram.com/reel/Dcphpi7vcNs/",
  "https://www.instagram.com/reel/Dc6c0zwThpg/",
  "https://www.instagram.com/reel/DcqwIv6yeFT/",
  "https://www.instagram.com/reel/DcrCPaKqaaH/",
  // To add a new reel, paste its share link (with or without ?stkn=...) as another entry above.
]);

// Strips tracking params and dedupes by shortcode, so pasted share links always work.
function normalizeInstagramReels(urls: string[]) {
  const seen = new Set<string>();
  const normalized: string[] = [];
  for (const raw of urls) {
    const match = raw.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/i);
    const shortcode = match?.[1];
    if (!shortcode || seen.has(shortcode)) continue;
    seen.add(shortcode);
    normalized.push(`https://www.instagram.com/reel/${shortcode}/`);
  }
  return normalized;
}


export const siteContent = {
  en: {
    skip: "Skip to main content",
    language: "తెలుగు",
    languageLabel: "Read in Telugu",
    nav: [
      ["Project", "project"],
      ["Villages", "villages"],
      ["Stories", "stories"],
      ["Gallery", "gallery"],
      ["Documents", "evidence"],
      ["Updates", "updates"],
    ],
    submit: "Submit an update",
    masthead: "A living public archive",
    title: "Development changes landscapes. People carry the story.",
    intro:
      "VeligondaStories documents the project, affected villages, displacement, rehabilitation and the records that help us understand what happened.",
    exploreProject: "Explore the project",
    exploreVillages: "Explore villages",
    principles: ["Development", "Sacrifice", "Rehabilitation", "Reality", "Evidence"],
    sourceNote: "Every published fact should show its source, date and verification status.",
    latestEyebrow: "Live archive",
    latestTitle: "Latest updates",
    latestIntro:
      "Field reports, official records, photographs and videos will appear here after editorial review.",
    pending: "Collection in progress",
    updates: [
      ["FIELD REPORT", "Ground updates", "Village-level reports with dates, sources and verification status."],
      ["VIDEO", "Project footage", "Water, reservoir, tunnels and canal footage with original attribution."],
      ["DOCUMENT", "Public records", "Government records, representations, acknowledgements and responses."],
    ],
    projectEyebrow: "The project",
    projectTitle: "Follow the journey of water",
    projectIntro:
      "Explore the engineering story through dated milestones and primary sources—without invented progress percentages.",
    waterStages: ["Source", "Tunnels", "Feeder canal", "Reservoir", "Canals", "Irrigation"],
    stageStatus: "Source verification pending",
    villagesEyebrow: "People and place",
    villagesTitle: "Affected villages",
    villagesIntro:
      "Each village will have a permanent bilingual archive. Names and classifications will be published only after reconciliation with official records.",
    featuredVillage: "Flagship archive",
    villageName: "Gundancharla",
    villageTe: "గుండంచర్ల",
    villageCopy:
      "A source-led record of village history, life before displacement, transition, rehabilitation layouts, present conditions and community memory.",
    archiveSections: ["History", "Before", "Displacement", "R&R", "New layout", "Current status"],
    storyEyebrow: "Signature story",
    storyTitle: "Before → Transition → Today",
    storyItems: [
      ["Before", "Homes, farms, streets, temples and everyday village life."],
      ["Transition", "Notices, movement, displacement and the records surrounding change."],
      ["Today", "New layouts, amenities, livelihoods and current community reports."],
    ],
    evidenceEyebrow: "Trust through transparency",
    evidenceTitle: "Claims should lead to evidence",
    evidenceCopy:
      "Official information, documents, media reports and community accounts are not treated as equivalent. Every item keeps its provenance and review status.",
    evidenceTypes: ["Official source", "Document verified", "Field verified", "Community report", "Disputed", "Verification pending"],
    evidenceCta: "Explore the evidence model",
    footerCopy:
      "Development should be documented. Sacrifice should be remembered. Stories should be preserved. Evidence should remain accessible.",
    methodology: "Methodology",
    privacy: "Privacy",
    corrections: "Corrections",
    status: "Foundation preview",
    instagram: "Watch on Instagram",
  },
  te: {
    skip: "ప్రధాన విషయానికి వెళ్లండి",
    language: "English",
    languageLabel: "Read in English",
    nav: [
      ["ప్రాజెక్టు", "project"],
      ["గ్రామాలు", "villages"],
      ["కథలు", "stories"],
      ["గ్యాలరీ", "gallery"],
      ["పత్రాలు", "evidence"],
      ["తాజా సమాచారం", "updates"],
    ],
    submit: "సమాచారం పంపండి",
    masthead: "సజీవ ప్రజా డిజిటల్ ఆర్కైవ్",
    title: "అభివృద్ధి భూభాగాన్ని మారుస్తుంది. ప్రజలు ఆ కథను మోస్తారు.",
    intro:
      "వెలిగొండ ప్రాజెక్టు, ప్రభావిత గ్రామాలు, నిర్వాసనం, పునరావాసం మరియు జరిగిన మార్పును అర్థం చేసుకునే ఆధారాలను VeligondaStories భద్రపరుస్తుంది.",
    exploreProject: "ప్రాజెక్టును చూడండి",
    exploreVillages: "గ్రామాలను చూడండి",
    principles: ["అభివృద్ధి", "త్యాగం", "పునరావాసం", "వాస్తవం", "ఆధారాలు"],
    sourceNote: "ప్రచురించే ప్రతి వాస్తవానికి మూలం, తేదీ, ధృవీకరణ స్థితి ఉండాలి.",
    latestEyebrow: "సజీవ ఆర్కైవ్",
    latestTitle: "తాజా సమాచారం",
    latestIntro:
      "క్షేత్ర నివేదికలు, అధికారిక రికార్డులు, ఛాయాచిత్రాలు, వీడియోలు సంపాదకీయ పరిశీలన తర్వాత ఇక్కడ కనిపిస్తాయి.",
    pending: "సమాచార సేకరణ జరుగుతోంది",
    updates: [
      ["క్షేత్ర నివేదిక", "క్షేత్ర సమాచారం", "తేదీ, మూలం, ధృవీకరణ స్థితితో గ్రామస్థాయి నివేదికలు."],
      ["వీడియో", "ప్రాజెక్టు దృశ్యాలు", "నీరు, జలాశయం, సొరంగాలు, కాలువల దృశ్యాలకు అసలు మూలం."],
      ["పత్రం", "ప్రజా రికార్డులు", "ప్రభుత్వ రికార్డులు, వినతులు, రసీదులు మరియు స్పందనలు."],
    ],
    projectEyebrow: "ప్రాజెక్టు",
    projectTitle: "నీటి ప్రయాణాన్ని తెలుసుకోండి",
    projectIntro:
      "కల్పిత శాతాలు లేకుండా తేదీలతో కూడిన మైలురాళ్లు, ప్రాథమిక ఆధారాల ద్వారా ఇంజినీరింగ్ కథను చూడండి.",
    waterStages: ["మూలం", "సొరంగాలు", "ఫీడర్ కాలువ", "జలాశయం", "కాలువలు", "సాగునీరు"],
    stageStatus: "మూలం ధృవీకరణలో ఉంది",
    villagesEyebrow: "ప్రజలు మరియు ప్రాంతం",
    villagesTitle: "ప్రభావిత గ్రామాలు",
    villagesIntro:
      "ప్రతి గ్రామానికి శాశ్వత ద్విభాషా ఆర్కైవ్ ఉంటుంది. అధికారిక రికార్డులతో సరిపోల్చిన తర్వాతే పేర్లు, వర్గీకరణలు ప్రచురిస్తాము.",
    featuredVillage: "ప్రధాన గ్రామ ఆర్కైవ్",
    villageName: "Gundancharla",
    villageTe: "గుండంచర్ల",
    villageCopy:
      "గ్రామ చరిత్ర, నిర్వాసనానికి ముందు జీవితం, మార్పు, పునరావాస లేఅవుట్లు, ప్రస్తుత పరిస్థితులు, సామూహిక జ్ఞాపకాల ఆధారపూర్వక రికార్డు.",
    archiveSections: ["చరిత్ర", "అప్పుడు", "నిర్వాసనం", "ఆర్ అండ్ ఆర్", "కొత్త లేఅవుట్", "ప్రస్తుత స్థితి"],
    storyEyebrow: "ప్రత్యేక కథనం",
    storyTitle: "అప్పుడు → మార్పు → నేడు",
    storyItems: [
      ["అప్పుడు", "ఇళ్లు, పొలాలు, వీధులు, ఆలయాలు మరియు గ్రామ జీవితం."],
      ["మార్పు", "నోటీసులు, తరలింపు, నిర్వాసనం మరియు మార్పుకు సంబంధించిన రికార్డులు."],
      ["నేడు", "కొత్త లేఅవుట్లు, సదుపాయాలు, జీవనోపాధి మరియు ప్రస్తుత సామాజిక నివేదికలు."],
    ],
    evidenceEyebrow: "పారదర్శకతతో నమ్మకం",
    evidenceTitle: "ప్రతి వాదన ఆధారానికి దారి చూపాలి",
    evidenceCopy:
      "అధికారిక సమాచారం, పత్రాలు, మీడియా నివేదికలు, సామాజిక కథనాలను సమానంగా పరిగణించము. ప్రతి అంశం తన మూలం, పరిశీలన స్థితిని నిలుపుకుంటుంది.",
    evidenceTypes: ["అధికారిక మూలం", "పత్ర ధృవీకరణ", "క్షేత్ర ధృవీకరణ", "సామాజిక నివేదిక", "వివాదాస్పదం", "ధృవీకరణలో ఉంది"],
    evidenceCta: "ఆధారాల విధానాన్ని చూడండి",
    footerCopy:
      "అభివృద్ధిని నమోదు చేయాలి. త్యాగాన్ని గుర్తుంచుకోవాలి. కథలను భద్రపరచాలి. ఆధారాలు అందుబాటులో ఉండాలి.",
    methodology: "పద్ధతి",
    privacy: "గోప్యత",
    corrections: "సవరణలు",
    status: "ప్రాథమిక నమూనా",
    instagram: "ఇన్‌స్టాగ్రామ్‌లో చూడండి",
  },
} as const;
