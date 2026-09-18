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


export const gundancharlaGroundReality = {
    nameEn: "గుండంచర్ల | GUNDANCHARLA",
    nameTe: "గుండంచర్ల | GUNDANCHARLA",
    titleEn: "A village displaced — a community trying to rebuild.",
    titleTe: "నిర్వాసితమైన గ్రామం — తిరిగి నిర్మించుకోవడానికి ప్రయత్నిస్తున్న సమాజం.",
    summaryEn: "Compensation is only one step in the journey. The next challenge is rebuilding a stable place, patta, home, basic services, livelihoods and the village community. September 2026 reporting about pattas for Veligonda displaced families means Gundancharla should not be described with a blanket ‘no pattas’ statement; family-wise status needs to be tracked.",
    summaryTe: "పరిహారం పొందడం ప్రయాణంలో ఒక దశ మాత్రమే. కొత్త స్థలం, పట్టా, ఇల్లు, మౌలిక వసతులు, జీవనోపాధి మరియు గ్రామ సమాజాన్ని తిరిగి నిర్మించుకోవడం తదుపరి సవాలు. 2026 సెప్టెంబర్‌లో ఇతర వెలిగొండ నిర్వాసితులకు పట్టాల పంపిణీ, వాటి కోసం వేచి ఉన్న కుటుంబాలపై వార్తలు వచ్చాయి. కాబట్టి గుండంచర్లకు మొత్తం మీద ‘పట్టాలు లేవు’ అనే blanket statement కాకుండా, కుటుంబాల వారీ స్థితిని ట్రాక్ చేయాలి.",
    quoteEn: "We lost the village; we should not lose the identity of Gundancharla.",
    quoteTe: "ఊరు కోల్పోయాం… కానీ గుండంచర్ల అనే గుర్తింపును కోల్పోకూడదు.",
    sourceEn: "Affected-village archive card combining source-linked reporting and community concerns; family-wise status requires verification.",
    sourceTe: "మూలాలతో అనుసంధానించిన నివేదికలు, గ్రామంలో వ్యక్తమవుతున్న ఆందోళనల ఆధారంగా రూపొందించిన ప్రభావిత గ్రామ కార్డు; కుటుంబాల వారీ స్థితికి ధృవీకరణ అవసరం.",
    trackerTitleEn: "Family-wise rehabilitation status tracker",
    trackerTitleTe: "కుటుంబాల వారీ పునరావాస స్థితి ట్రాకర్",
    trackerNoteEn: "Track each family separately: house site received, patta pending or issued, house completed, rental status, and unresolved R&R rights.",
    trackerNoteTe: "ప్రతి కుటుంబానికి విడిగా నమోదు చేయాలి: స్థలం వచ్చిందా, పట్టా జారీ అయిందా లేదా పెండింగ్‌లో ఉందా, ఇల్లు పూర్తయ్యిందా, అద్దెలో ఉన్నారా, ఇంకా పరిష్కారం కావాల్సిన R&R హక్కులు ఏమిటి.",
    realityTitleEn: "Gundancharla — Ground Reality",
    realityTitleTe: "గుండంచర్ల — Ground Reality",
    realityEn: "The main concern expressed by displaced residents is not compensation alone — it is clarity about when they will have a permanent place, patta and home for a new life. Reports from August 2026 described displaced residents approaching officials for clarity on house sites, pattas and rehabilitation as the village was being vacated. Pattas were later distributed in phases to different submerged villages.\n\nThe questions that need a family-level answer are: Who received a site? Whose patta is pending? Whose house is complete? Who is living in rented accommodation? Whose R&R rights still need resolution?\n\nAnother strong view in the village is that everyone should build a new Gundancharla together in one place. That requires trust, unity and calmly but continuously asking officials for answers.\n\nA new village is not only new plots. Patta + home + water + electricity + roads + livelihood + village relationships together make real rehabilitation. Gundancharla has lost the old village; how the new Gundancharla is built is the real story now.",
    realityTe: "గుండంచర్లలో నిర్వాసితుల ప్రధాన ఆందోళన పరిహారం మాత్రమే కాదు — కొత్త జీవితానికి శాశ్వతమైన స్థలం, పట్టా, ఇల్లు ఎప్పుడు అనే స్పష్టత. గ్రామం ఖాళీ చేయాల్సిన సమయంలో ఇంటి స్థలాలు, పట్టాలు, పునరావాసంపై స్పష్టత కోసం నిర్వాసితులు అధికారులను సంప్రదించినట్లు ఆగస్టు 2026లో వార్తలు వచ్చాయి. తరువాత వివిధ ముంపు గ్రామాలకు దశలవారీగా పట్టాల పంపిణీ కూడా జరిగింది.\n\nఅయితే ఈ ప్రక్రియలో ఎవరికి స్థలం వచ్చింది? ఎవరి పట్టా పెండింగ్‌లో ఉంది? ఎవరి ఇల్లు పూర్తయింది? ఎవరు అద్దెలో ఉన్నారు? ఎవరి R&R హక్కులు ఇంకా పరిష్కారం కావాలి? అనే ప్రశ్నలు ప్రతి కుటుంబానికి స్పష్టంగా ఉండాల్సిన అవసరం ఉంది.\n\nగ్రామంలో మరో బలమైన అభిప్రాయం — అందరూ కలిసి ఒకే చోట కొత్త గుండంచర్లను నిర్మించుకోవాలి అనేది. దానికి అవసరమైనది పరస్పర నమ్మకం, ఐక్యత, మరియు అధికారులను ప్రశాంతంగా కానీ నిరంతరం ప్రశ్నించడం.\n\nకొత్త ఊరు అంటే కేవలం కొత్త ప్లాట్లు కాదు. పట్టా + ఇల్లు + నీరు + విద్యుత్ + రోడ్డు + జీవనోపాధి + మన గ్రామ బంధాలు — ఇవన్నీ కలిసే నిజమైన పునరావాసం. గుండంచర్ల పాత ఊరిని కోల్పోయింది. కొత్త గుండంచర్లను ఎలా నిర్మించుకుంటుందనేదే ఇప్పుడు అసలు కథ.",
  } as const;

export const groundRealityVillages = [
  gundancharlaGroundReality,
  {
    nameEn: "Kalanuthala",
    nameTe: "కలనూతల",
    titleEn: "A village saying goodbye",
    titleTe: "వీడ్కోలు చెబుతున్న గ్రామం",
    summaryEn: "Kalanuthala is listed among the submerged habitations. Recent reporting described families moving beds, furniture, fans and household goods by vehicle while old homes were dismantled during evacuation.",
    summaryTe: "కలనూతలను ముంపు ఆవాసాల్లో ఒకటిగా పేర్కొన్నారు. ఇటీవలి నివేదికల్లో కుటుంబాలు మంచాలు, ఫర్నిచర్, ఫ్యాన్లు, గృహోపకరణాలను వాహనాల్లో తరలించడం, పాత ఇళ్లను కూల్చివేయడం నమోదైంది.",
    quoteEn: "Emptying a house takes hours. Leaving the lives of generations behind is not so simple.",
    quoteTe: "ఒక ఇంటిని ఖాళీ చేయడం కొన్ని గంటల పని. కానీ ఆ ఇంటిలో గడిచిన తరాల జీవితాన్ని వదిలి రావడం అంత సులభం కాదు.",
    sourceEn: "Dated media reporting named in the supplied journey record; evacuation details remain source-linked reports.",
    sourceTe: "అందించిన ప్రయాణ పత్రంలో పేర్కొన్న తేదీతో కూడిన మీడియా నివేదికలు; తరలింపు వివరాలు మూలంతో కూడిన నివేదికలుగా ఉన్నాయి.",
  },
  {
    nameEn: "Sunkesula",
    nameTe: "సుంకేశుల",
    titleEn: "Where water changed everything",
    titleTe: "నీరు అన్నింటినీ మార్చిన చోటు",
    summaryEn: "Sunkesula appears both in the submerged-habitation record and as one of the three Nallamala gaps in the project description. Reporting described water reaching the area, access disruption and people moving belongings and livestock.",
    summaryTe: "సుంకేశుల ముంపు ఆవాసాల రికార్డులోనూ, ప్రాజెక్టు వివరణలోని నల్లమల మూడు గ్యాప్‌లలో ఒకటిగానూ కనిపిస్తుంది. నీరు చేరడం, రాకపోకలకు అంతరాయం, ప్రజలు సామాన్లు మరియు పశువులతో బయటకు రావడం గురించి నివేదికలు ఉన్నాయి.",
    quoteEn: "Land that once waited for water eventually left its village because of that water.",
    quoteTe: "ఒకప్పుడు నీటి కోసం ఎదురు చూసిన నేల… చివరకు అదే నీటి కోసం తన ఊరిని వదిలింది.",
    sourceEn: "Project description and dated reporting cited in the supplied journey document.",
    sourceTe: "అందించిన ప్రయాణ పత్రంలో పేర్కొన్న ప్రాజెక్టు వివరణ, తేదీతో కూడిన నివేదికలు.",
  },
  {
    nameEn: "Gottipadiya",
    nameTe: "గొట్టిపడియ",
    titleEn: "When livelihood had to move too",
    titleTe: "జీవనాధారం కూడా తరలాల్సి వచ్చినప్పుడు",
    summaryEn: "Gottipadiya is listed among the submerged habitations and Gottipadia Gap is a named engineering component. Reporting highlighted livestock and livelihood disruption, including concerns about fodder, sheds, transport and income after relocation.",
    summaryTe: "గొట్టిపడియను ముంపు ఆవాసాల్లో ఒకటిగా పేర్కొన్నారు; గొట్టిపడియ గ్యాప్ ప్రాజెక్టు ఇంజినీరింగ్ భాగాల్లో ఒకటి. పశుపోషణ, మేత, షెడ్లు, రవాణా, తరలింపు తర్వాత ఆదాయంపై ఆందోళనలు నివేదికల్లో కనిపించాయి.",
    quoteEn: "Livestock is not only an asset; it is a family’s daily income. Rehabilitation must carry that livelihood too.",
    quoteTe: "పశువు ఒక ఆస్తి మాత్రమే కాదు — ఒక కుటుంబానికి రోజువారీ ఆదాయం. పునరావాసం ఆ జీవనోపాధిని కూడా వెంట తీసుకెళ్లాలి.",
    sourceEn: "Dated reporting cited in the supplied journey record; livestock figures are not reproduced here without the original article attached.",
    sourceTe: "అందించిన ప్రయాణ పత్రంలో పేర్కొన్న తేదీతో కూడిన నివేదికలు; అసలు కథనం జతచేయనందున పశువుల సంఖ్యలను ఇక్కడ పునరావృతం చేయలేదు.",
  },
] as const;
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
      "Follow the route described in the supplied journey record: Krishna floodwater through the Nallamala gaps, tunnels and feeder canal to Nallamala Sagar, then onward through canals. Project milestones and family-level rehabilitation are tracked separately.",
    waterStages: [
      ["Krishna floodwater", "The project is described as bringing Krishna floodwater through the Nallamala system for irrigation and drinking-water objectives.", "Supplied displacement journey · development promise"],
      ["Nallamala gaps", "The documented route names the Sunkesula, Gottipadia and Kakarla gaps in the Nallamala ranges.", "Markapuram district project description cited in supplied journey document"],
      ["Twin tunnels and feeder canal", "Water is carried through twin tunnels and a feeder canal before reaching the reservoir system.", "Markapuram district project description cited in supplied journey document"],
      ["Nallamala Sagar Reservoir", "The reservoir is the central storage point in the route; the archive keeps engineering imagery separate from field reports about affected villages.", "Project media archive · verification labels shown on each item"],
      ["Canals and distribution", "The supplied record identifies Teegaleru, Gottipadia and Eastern Main Canal as downstream components.", "Markapuram district project description cited in supplied journey document"],
      ["Water release and human transition", "The supplied journey document records 31 August 2026 as a Phase-I water-release milestone and a major transition for affected villages.", "Supplied journey document · dated media reporting is retained as reported evidence"],
    ],
    stageStatus: "Source verification pending",
    villagesEyebrow: "People and place",
    villagesTitle: "Affected villages",
    villagesIntro:
      "Village names are shown as an archive index, not as a final official affected-habitation list. Each page will carry its own dated sources and unresolved spelling aliases.",
    villageNames: ["Gundancharla", "Kalanuthala", "Sunkesula", "Gottepadiya"],
    featuredVillage: "Flagship archive",
    villageName: "Gundancharla",
    villageTe: "గుండంచర్ల",
    villageCopy:
      "A source-led record of village history, life before displacement, transition, rehabilitation layouts, present conditions and community memory.",
    archiveSections: ["History", "Before", "Displacement", "R&R", "New layout", "Current status"],
    storyEyebrow: "Signature story",
    storyTitle: "The displacement journey: before, during and after",
    storyItems: [
      ["Before", "Homes, farms, streets, temples, crops and everyday village life before water release."],
      ["During", "Evacuation, belongings, livestock, unfinished layouts, rental housing and the last days in the old villages."],
      ["After", "Pattas, housing, utilities, livelihoods, culture and what families still report after relocation."],
    ],
    evidenceEyebrow: "Trust through transparency",
    evidenceTitle: "Claims and evidence",
    evidenceCopy:
      "Official information, documents, media reports and community accounts are not treated as equivalent. Every item keeps its provenance and review status.",
    evidenceTypes: ["Official source", "Document verified", "Field verified", "Community report", "Disputed", "Verification pending"],
    evidenceCta: "Open claims and evidence",
    footerCopy:
      "Development should be documented. Sacrifice should be remembered. Stories should be preserved. Evidence should remain accessible.",
    methodology: "Methodology",
    privacy: "Privacy",
    corrections: "Corrections",
    status: "Foundation preview",
    instagram: "Latest social media sources",
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
      "అందించిన ప్రయాణ పత్రంలో ఉన్న మార్గాన్ని చూడండి: నల్లమల గ్యాప్‌లు, సొరంగాలు, ఫీడర్ కాలువ ద్వారా నల్లమల సాగర్‌కు, అక్కడి నుంచి కాలువలకు. ప్రాజెక్టు మైలురాళ్లను కుటుంబ స్థాయి పునరావాసం నుంచి విడిగా చూపిస్తాము.",
    waterStages: [
      ["కృష్ణా వరద నీరు", "సాగు, తాగునీటి లక్ష్యాల కోసం నల్లమల వ్యవస్థ ద్వారా కృష్ణా వరద నీటిని తీసుకురావడమే ప్రాజెక్టు లక్ష్యంగా పత్రంలో ఉంది.", "అందించిన నిర్వాసన ప్రయాణ పత్రం · అభివృద్ధి కల"],
      ["నల్లమల గ్యాప్‌లు", "నల్లమల శ్రేణిలో సుంకేసుల, గొట్టిపడియ, కాకర్ల గ్యాప్‌లను మార్గంలో పేర్కొన్నారు.", "అందించిన ప్రయాణ పత్రంలో ఉదహరించిన మార్కాపురం జిల్లా ప్రాజెక్టు వివరణ"],
      ["జంట సొరంగాలు, ఫీడర్ కాలువ", "జలాశయ వ్యవస్థకు చేరే ముందు నీరు జంట సొరంగాలు, ఫీడర్ కాలువ ద్వారా వెళ్తుంది.", "అందించిన ప్రయాణ పత్రంలో ఉదహరించిన మార్కాపురం జిల్లా ప్రాజెక్టు వివరణ"],
      ["నల్లమల సాగర్ జలాశయం", "మార్గంలో ఇది ప్రధాన నిల్వ కేంద్రం. ఇంజినీరింగ్ చిత్రాలను ప్రభావిత గ్రామాల క్షేత్ర నివేదికల నుంచి విడిగా చూపిస్తాము.", "ప్రాజెక్టు మీడియా ఆర్కైవ్ · ప్రతి అంశంలో ధృవీకరణ స్థితి"],
      ["కాలువలు, పంపిణీ", "తిగలేరు, గొట్టిపడియ, ఈస్టర్న్ మెయిన్ కెనాల్‌లను దిగువ భాగాలుగా పత్రం గుర్తిస్తుంది.", "అందించిన ప్రయాణ పత్రంలో ఉదహరించిన మార్కాపురం జిల్లా ప్రాజెక్టు వివరణ"],
      ["నీటి విడుదల, మానవ మార్పు", "31 ఆగస్టు 2026ను ఫేజ్-I నీటి విడుదల మైలురాయిగా, ప్రభావిత గ్రామాలకు కీలక మార్పు దశగా పత్రం నమోదు చేస్తుంది.", "అందించిన ప్రయాణ పత్రం · తేదీతో కూడిన మీడియా నివేదికలు నివేదించిన ఆధారాలుగా"],
    ],
    stageStatus: "మూలం ధృవీకరణలో ఉంది",
    villagesEyebrow: "ప్రజలు మరియు ప్రాంతం",
    villagesTitle: "ప్రభావిత గ్రామాలు",
    villagesIntro:
      "ఇవి ఆర్కైవ్ సూచికగా చూపిస్తున్న గ్రామ పేర్లు మాత్రమే; తుది అధికారిక ప్రభావిత ఆవాసాల జాబితా కాదు. ప్రతి పేజీలో తేదీతో కూడిన మూలాలు, పేర్ల వేరియంట్లు ఉంటాయి.",
    villageNames: ["గుండంచర్ల", "కలనూతల", "సుంకేసుల", "గొట్టెపడియ"],
    featuredVillage: "ప్రధాన గ్రామ ఆర్కైవ్",
    villageName: "Gundancharla",
    villageTe: "గుండంచర్ల",
    villageCopy:
      "గ్రామ చరిత్ర, నిర్వాసనానికి ముందు జీవితం, మార్పు, పునరావాస లేఅవుట్లు, ప్రస్తుత పరిస్థితులు, సామూహిక జ్ఞాపకాల ఆధారపూర్వక రికార్డు.",
    archiveSections: ["చరిత్ర", "అప్పుడు", "నిర్వాసనం", "ఆర్ అండ్ ఆర్", "కొత్త లేఅవుట్", "ప్రస్తుత స్థితి"],
    storyEyebrow: "ప్రత్యేక కథనం",
    storyTitle: "నిర్వాసన ప్రయాణం: ముందు, మధ్యలో, తర్వాత",
    storyItems: [
      ["ముందు", "నీటి విడుదలకు ముందు ఇళ్లు, పొలాలు, వీధులు, ఆలయాలు, పంటలు, గ్రామ జీవితం."],
      ["మధ్యలో", "తరలింపు, సామాన్లు, పశువులు, అసంపూర్తి లేఅవుట్లు, అద్దె ఇళ్లు, పాత ఊరి చివరి రోజులు."],
      ["తర్వాత", "పట్టాలు, ఇళ్లు, వసతులు, జీవనాధారం, సంస్కృతి, తరలింపు తర్వాత ప్రజలు చెబుతున్న విషయాలు."],
    ],
    evidenceEyebrow: "పారదర్శకతతో నమ్మకం",
    evidenceTitle: "వాదనలు మరియు ఆధారాలు",
    evidenceCopy:
      "అధికారిక సమాచారం, పత్రాలు, మీడియా నివేదికలు, సామాజిక కథనాలను సమానంగా పరిగణించము. ప్రతి అంశం తన మూలం, పరిశీలన స్థితిని నిలుపుకుంటుంది.",
    evidenceTypes: ["అధికారిక మూలం", "పత్ర ధృవీకరణ", "క్షేత్ర ధృవీకరణ", "సామాజిక నివేదిక", "వివాదాస్పదం", "ధృవీకరణలో ఉంది"],
    evidenceCta: "వాదనలు, ఆధారాలు తెరవండి",
    footerCopy:
      "అభివృద్ధిని నమోదు చేయాలి. త్యాగాన్ని గుర్తుంచుకోవాలి. కథలను భద్రపరచాలి. ఆధారాలు అందుబాటులో ఉండాలి.",
    methodology: "పద్ధతి",
    privacy: "గోప్యత",
    corrections: "సవరణలు",
    status: "ప్రాథమిక నమూనా",
    instagram: "తాజా సోషల్ మీడియా మూలాలు",
  },
} as const;
