import type { Locale } from "@/lib/site-content";

export type JourneyStage = {
  number: number;
  title: string;
  summary: string;
  classification: "official-and-reported" | "community-report" | "editorial-framework";
  mediaSlug?: string;
};

const english: JourneyStage[] = [
  { number: 1, title: "The development promise", summary: "The project’s stated purpose connects water infrastructure, irrigation and drinking-water objectives with a long regional development story.", classification: "official-and-reported", mediaSlug: "nallamala-sagar-illumination" },
  { number: 2, title: "Years of waiting", summary: "Families continued farming, raising children and maintaining village life while living with the prospect of eventual submergence.", classification: "community-report", mediaSlug: "cotton-field-landscape-one" },
  { number: 3, title: "Identifying affected families", summary: "Beneficiary identification and R&R processing brought questions about household definitions, eligibility and newer family units.", classification: "official-and-reported" },
  { number: 4, title: "Compensation and R&R", summary: "Dated reports describe several sanctions and disbursement stages. Figures must remain attached to their date, category and original source.", classification: "official-and-reported" },
  { number: 5, title: "Colonies and house sites", summary: "Rehabilitation layouts, plot allocation, pattas, construction readiness and essential infrastructure became practical family-level concerns.", classification: "official-and-reported" },
  { number: 6, title: "The final weeks", summary: "As water release approached, the project timetable and the time available for relocation converged.", classification: "official-and-reported" },
  { number: 7, title: "Leaving the village", summary: "Community material records movement of belongings and the dismantling of homes during the transition.", classification: "community-report", mediaSlug: "partly-dismantled-house" },
  { number: 8, title: "The last days", summary: "Last photographs, harvests, family gatherings, temple visits and memories belong in a permanent historical archive.", classification: "editorial-framework", mediaSlug: "quiet-village-lane" },
  { number: 9, title: "Livelihood transition", summary: "Displacement can change farming, crops, livestock, local work and the everyday costs of sustaining a household.", classification: "community-report", mediaSlug: "cotton-crop-field" },
  { number: 10, title: "Temporary accommodation", summary: "Reported experiences include rental housing, unfinished layouts and waiting for permanent construction; individual cases require verification.", classification: "community-report" },
  { number: 11, title: "Pattas and permanent homes", summary: "Housing completion and patta status must be tracked separately and updated from family-level evidence.", classification: "community-report" },
  { number: 12, title: "Water release", summary: "The supplied documentation describes 31 August 2026 as both a project milestone and a major human transition for affected villages.", classification: "official-and-reported" },
  { number: 13, title: "Physical submergence", summary: "The archive distinguishes planned submergence from the point at which water physically reached village areas.", classification: "official-and-reported" },
  { number: 14, title: "The final goodbye", summary: "A village carries homes, farms, temples, memories, festivals and relationships—not buildings alone.", classification: "editorial-framework" },
  { number: 15, title: "Life after relocation", summary: "The continuing record covers housing, utilities, schools, transport, livelihoods, health and community institutions.", classification: "editorial-framework" },
  { number: 16, title: "Temples and culture", summary: "Cultural relocation and worship facilities are documented as community reports until corroborating records are attached.", classification: "community-report" },
  { number: 17, title: "The information gap", summary: "Project-level milestones and family-level rehabilitation outcomes are related, but they are not the same measure.", classification: "editorial-framework" },
  { number: 18, title: "Two realities", summary: "Development gains and the human cost of displacement can be documented at the same time.", classification: "editorial-framework" },
  { number: 19, title: "Government actions", summary: "Sanctions, payments, layouts, infrastructure, immediate assistance, reviews and responses belong in the record alongside unresolved issues.", classification: "official-and-reported" },
  { number: 20, title: "Continuing concerns", summary: "Issues are recorded by village, date, evidence, status and any official response—never as unsupported conclusions.", classification: "community-report" },
  { number: 21, title: "Elders and oral history", summary: "Consented audio and video histories can preserve village life and memory before physical traces disappear.", classification: "editorial-framework" },
  { number: 22, title: "Village-by-village archive", summary: "Every officially confirmed affected habitation receives a permanent page; missing information is labelled not yet documented.", classification: "editorial-framework" },
  { number: 23, title: "The human timeline", summary: "The journey links the water dream, waiting, identification, R&R, relocation, submergence and continuing rehabilitation.", classification: "editorial-framework" },
  { number: 24, title: "Archive standard", summary: "Every update records date, village, event, source, media, documents, family impact, response and current status where available.", classification: "editorial-framework" },
  { number: 25, title: "A continuing story", summary: "The archive measures success through both delivered infrastructure and the security and dignity with which families rebuild.", classification: "editorial-framework", mediaSlug: "village-house-after-dismantling" },
];

const telugu: JourneyStage[] = [
  { number: 1, title: "అభివృద్ధి కల", summary: "ప్రాజెక్టు లక్ష్యం నీటి మౌలిక వసతులు, సాగు, తాగునీటి ఆశయాలను ప్రాంతీయ అభివృద్ధి కథతో అనుసంధానిస్తుంది.", classification: "official-and-reported", mediaSlug: "nallamala-sagar-illumination" },
  { number: 2, title: "సంవత్సరాల ఎదురుచూపు", summary: "భవిష్యత్తులో ముంపు ఉంటుందని తెలిసినా కుటుంబాలు వ్యవసాయం, పిల్లల పెంపకం, గ్రామ జీవితాన్ని కొనసాగించాయి.", classification: "community-report", mediaSlug: "cotton-field-landscape-one" },
  { number: 3, title: "ప్రభావిత కుటుంబాల గుర్తింపు", summary: "లబ్ధిదారుల గుర్తింపు, ఆర్ అండ్ ఆర్ ప్రక్రియలో కుటుంబ నిర్వచనం, అర్హత, కొత్త కుటుంబ యూనిట్లపై ప్రశ్నలు వచ్చాయి.", classification: "official-and-reported" },
  { number: 4, title: "పరిహారం మరియు ఆర్ అండ్ ఆర్", summary: "వివిధ తేదీల నివేదికలు మంజూరు, చెల్లింపుల దశలను పేర్కొన్నాయి. ప్రతి సంఖ్య తన తేదీ, వర్గం, అసలు మూలంతోనే ఉండాలి.", classification: "official-and-reported" },
  { number: 5, title: "కాలనీలు మరియు ఇంటి స్థలాలు", summary: "పునరావాస లేఅవుట్లు, ప్లాట్లు, పట్టాలు, నిర్మాణ సిద్ధత, మౌలిక వసతులు కుటుంబస్థాయి అంశాలయ్యాయి.", classification: "official-and-reported" },
  { number: 6, title: "చివరి వారాలు", summary: "నీటి విడుదల సమీపించడంతో ప్రాజెక్టు సమయపట్టిక, తరలింపుకు అందుబాటులో ఉన్న సమయం కలిశాయి.", classification: "official-and-reported" },
  { number: 7, title: "గ్రామాన్ని వదిలివెళ్లడం", summary: "సామూహిక సమాచారం సామాన్ల తరలింపు, ఇళ్ల తొలగింపు దృశ్యాలను నమోదు చేస్తుంది.", classification: "community-report", mediaSlug: "partly-dismantled-house" },
  { number: 8, title: "ఊర్లో చివరి రోజులు", summary: "చివరి ఫోటోలు, పంటలు, కుటుంబ సమావేశాలు, ఆలయ దర్శనాలు, జ్ఞాపకాలు శాశ్వత చారిత్రక ఆర్కైవ్‌లో ఉండాలి.", classification: "editorial-framework", mediaSlug: "quiet-village-lane" },
  { number: 9, title: "జీవనాధారం మార్పు", summary: "నిర్వాసనం వ్యవసాయం, పంటలు, పశువులు, స్థానిక ఉపాధి, కుటుంబ రోజువారీ ఖర్చులను మార్చవచ్చు.", classification: "community-report", mediaSlug: "cotton-crop-field" },
  { number: 10, title: "తాత్కాలిక వసతి", summary: "అద్దె ఇళ్లు, అసంపూర్తి లేఅవుట్లు, శాశ్వత నిర్మాణం కోసం నిరీక్షణ వంటి అనుభవాలు నివేదించబడ్డాయి; ప్రతి కేసు ధృవీకరించాలి.", classification: "community-report" },
  { number: 11, title: "పట్టాలు మరియు శాశ్వత ఇళ్లు", summary: "ఇంటి నిర్మాణ స్థితి, పట్టా స్థితిని విడివిడిగా కుటుంబ ఆధారాలతో ట్రాక్ చేయాలి.", classification: "community-report" },
  { number: 12, title: "నీటి విడుదల", summary: "అందించిన పత్రం 31 ఆగస్టు 2026ను ప్రాజెక్టు మైలురాయిగా, ప్రభావిత గ్రామాల మానవ మార్పు దశగా వివరిస్తుంది.", classification: "official-and-reported" },
  { number: 13, title: "భౌతిక ముంపు", summary: "ప్రణాళికలోని ముంపు, గ్రామ ప్రాంతాలకు నీరు వాస్తవంగా చేరిన దశను ఆర్కైవ్ విడిగా చూపుతుంది.", classification: "official-and-reported" },
  { number: 14, title: "చివరి వీడ్కోలు", summary: "గ్రామం అంటే భవనాలు మాత్రమే కాదు—ఇళ్లు, పొలాలు, ఆలయాలు, జ్ఞాపకాలు, పండుగలు, బంధాలు.", classification: "editorial-framework" },
  { number: 15, title: "తరలింపు తర్వాత జీవితం", summary: "ఇళ్లు, సేవలు, పాఠశాలలు, రవాణా, జీవనాధారం, ఆరోగ్యం, సామాజిక సంస్థలను కొనసాగిస్తూ నమోదు చేయాలి.", classification: "editorial-framework" },
  { number: 16, title: "ఆలయాలు మరియు సంస్కృతి", summary: "సాంస్కృతిక తరలింపు, పూజా వసతులను సంబంధిత పత్రాలు జతచేసే వరకు సామాజిక నివేదికలుగా చూపాలి.", classification: "community-report" },
  { number: 17, title: "సమాచార అంతరం", summary: "ప్రాజెక్టు స్థాయి మైలురాళ్లు, కుటుంబ స్థాయి పునరావాస ఫలితాలు సంబంధితమైనవి; కానీ ఒకే కొలమానం కావు.", classification: "editorial-framework" },
  { number: 18, title: "రెండు వాస్తవాలు", summary: "అభివృద్ధి ప్రయోజనాలు, నిర్వాసనం మానవ ప్రభావాన్ని ఒకేసారి నమోదు చేయవచ్చు.", classification: "editorial-framework" },
  { number: 19, title: "ప్రభుత్వ చర్యలు", summary: "మంజూరులు, చెల్లింపులు, లేఅవుట్లు, వసతులు, తక్షణ సహాయం, సమీక్షలు, స్పందనలు పరిష్కారం కాని అంశాలతో పాటు రికార్డులో ఉండాలి.", classification: "official-and-reported" },
  { number: 20, title: "కొనసాగుతున్న సమస్యలు", summary: "ప్రతి అంశాన్ని గ్రామం, తేదీ, ఆధారం, స్థితి, అధికారిక స్పందనతో నమోదు చేస్తాము.", classification: "community-report" },
  { number: 21, title: "వృద్ధుల మౌఖిక చరిత్ర", summary: "సమ్మతితో తీసిన ఆడియో, వీడియో కథనాలు భౌతిక ఆనవాళ్లు కనుమరుగయ్యే ముందు గ్రామ జ్ఞాపకాలను భద్రపరుస్తాయి.", classification: "editorial-framework" },
  { number: 22, title: "గ్రామాల వారీ ఆర్కైవ్", summary: "అధికారికంగా నిర్ధారించిన ప్రతి ప్రభావిత ఆవాసానికి శాశ్వత పేజీ; సమాచారం లేకపోతే ఇంకా డాక్యుమెంట్ చేయలేదు అని చూపుతాము.", classification: "editorial-framework" },
  { number: 23, title: "మానవ టైమ్‌లైన్", summary: "నీటి కల, ఎదురుచూపు, గుర్తింపు, ఆర్ అండ్ ఆర్, తరలింపు, ముంపు, కొనసాగుతున్న పునరావాసాన్ని ఈ ప్రయాణం కలుపుతుంది.", classification: "editorial-framework" },
  { number: 24, title: "ఆర్కైవ్ ప్రమాణం", summary: "అందుబాటులో ఉన్నప్పుడు ప్రతి అప్‌డేట్ తేదీ, గ్రామం, సంఘటన, మూలం, మీడియా, పత్రం, కుటుంబ ప్రభావం, స్పందన, స్థితిని నమోదు చేస్తుంది.", classification: "editorial-framework" },
  { number: 25, title: "కొనసాగుతున్న కథ", summary: "మౌలిక వసతులతో పాటు కుటుంబాలు ఎంత భద్రంగా, గౌరవంగా కొత్త జీవితం నిర్మించుకున్నాయన్నదీ విజయానికి కొలమానం.", classification: "editorial-framework", mediaSlug: "village-house-after-dismantling" },
];

export const journeyContent: Record<Locale, { title: string; intro: string; sourceNotice: string; realityNote: string; stages: JourneyStage[] }> = {
  en: {
    title: "The displacement journey",
    intro: "This is not a polished success story. It is a working record of water infrastructure alongside homes left behind, hurried movement, unfinished rehabilitation and the questions families still report.",
    sourceNotice: "Source boundary · Built from the supplied English/Telugu journey documents, the project source register and dated media references named there. Reported figures and community accounts remain dated claims until the underlying record is attached.",
    realityNote: "Read each stage as a record, not a conclusion: project milestones describe infrastructure; community-report stages describe what people said or what supplied media shows; missing evidence is marked instead of filled with optimistic language.",
    stages: english,
  },
  te: {
    title: "నిర్వాసిత గ్రామాల ప్రయాణం",
    intro: "ఇది మెరుగుపరిచిన విజయకథ కాదు. నీటి మౌలిక వసతులతో పాటు వదిలిన ఇళ్లు, తొందరపాటు తరలింపు, అసంపూర్తి పునరావాసం, ప్రజలు ఇంకా చెబుతున్న ప్రశ్నల పని ఆర్కైవ్.",
    sourceNotice: "మూలాల పరిమితి · అందించిన తెలుగు/ఇంగ్లీష్ ప్రయాణ పత్రాలు, ప్రాజెక్టు మూలాల రిజిస్టర్, అందులో పేర్కొన్న తేదీతో కూడిన మీడియా ఆధారాలపై నిర్మించబడింది. అసలు పత్రం జతచేసే వరకు సంఖ్యలు, ప్రజల నివేదికలు తేదీతో కూడిన వాదనలుగానే ఉంటాయి.",
    realityNote: "ప్రతి దశను తుది తీర్పుగా కాకుండా రికార్డుగా చదవండి: ప్రాజెక్టు మైలురాళ్లు మౌలిక వసతులను, సామాజిక నివేదిక దశలు ప్రజలు చెప్పినది లేదా అందించిన మీడియాను చూపిస్తాయి. ఆధారం లేని చోట ఆశావాద భాషతో నింపము.",
    stages: telugu,
  },
};
