// js/database.js — Comprehensive Lipidomics Database (73 Lipids)
// Supports 4 Dobble game versions:
// Verze 1: Membrána (q=3, 13 lipids) — IDs 0..12
// Verze 2: Signalizace (q=5, 31 lipids) — IDs 0..30
// Verze 3: LIPID MAPS Atlas (q=7, 57 lipids) — IDs 0..56
// Verze 4: Mass Spec Nightmare (q=8, 73 lipid species/abbreviations) — IDs 0..72

const ATOM_STYLES = {
  O: { color: "#ef4444", bg: "#fef2f2", radius: 7 },
  N: { color: "#3b82f6", bg: "#eff6ff", radius: 7 },
  P: { color: "#d97706", bg: "#fffbeb", radius: 7 },
  S: { color: "#eab308", bg: "#fefce8", radius: 7 },
  C: { color: "#334155", bg: "#f8fafc", radius: 6 }
};

const LIPIDS = [
  // ─── VERZE 1: MEMBRÁNA (q=3, 13 Lipidů) [0..12] ───────────────────────────
  {
    id: 0,
    name: "Cholesterol",
    engName: "Cholesterol",
    nameDe: "Cholesterin",
    nameFr: "Cholestérol",
    code3: "Chol",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C27H46O",
    condensed: "3β-hydroxy-cholest-5-en",
    desc: "Klíčový sterol eukaryotických membrán regulující jejich tekutost a mikrodomény (lipidové raftu). Prekurzor steroidních hormonů a žlučových kyselin.",
    descEn: "Essential eukaryotic membrane sterol modulating fluidity and raft microdomains. Precursor of steroid hormones and bile acids.",
    descDe: "Wichtiges Sterin eukaryotischer Membranen, das die Fluidität und Lipid Rafts reguliert. Vorläufer von Steroidhormonen und Gallensäuren.",
    descFr: "Stérol essentiel des membranes eucaryotes régulant la fluidité et les radeaux lipidiques. Précurseur des hormones stéroïdes.",
    smiles: "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    structure: {
      atoms: [
        { x: 15, y: 50, label: "HO", type: "O" },
        { x: 28, y: 50, label: "", type: "C" },
        { x: 38, y: 35, label: "", type: "C" },
        { x: 50, y: 35, label: "", type: "C" },
        { x: 60, y: 48, label: "", type: "C" },
        { x: 50, y: 62, label: "", type: "C" },
        { x: 38, y: 62, label: "", type: "C" },
        { x: 72, y: 48, label: "", type: "C" },
        { x: 82, y: 38, label: "", type: "C" },
        { x: 75, y: 62, label: "", type: "C" },
        { x: 92, y: 48, label: "", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 2 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 1, type: 1 },
        { from: 4, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 10, type: 1 },
        { from: 10, to: 9, type: 1 }, { from: 9, to: 7, type: 1 }
      ]
    }
  },
  {
    id: 1,
    name: "Palmitát",
    engName: "Palmitate (16:0)",
    nameDe: "Palmitat",
    nameFr: "Palmitate",
    code3: "PA(16:0)",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C16H32O2",
    condensed: "CH₃(CH₂)₁₄COOH",
    desc: "Nasycená 16-uhlíkatá mastná kyselina. Hlavní produkt syntézy mastných kyselin v de novo lipogenezi.",
    descEn: "16-carbon saturated fatty acid. Primary product of de novo fatty acid synthesis.",
    descDe: "Gesättigte Fettsäure mit 16 Kohlenstoffatomen. Hauptprodukt der De-novo-Fettsäuresynthese.",
    descFr: "Acide gras saturé à 16 carbones. Produit principal de la lipogenèse de novo.",
    smiles: "CCCCCCCCCCCCCCCC(=O)O",
    structure: {
      atoms: [
        { x: 10, y: 55, label: "O⁻", type: "O" },
        { x: 20, y: 40, label: "", type: "C" },
        { x: 20, y: 22, label: "O", type: "O" },
        { x: 32, y: 55, label: "", type: "C" },
        { x: 44, y: 40, label: "", type: "C" },
        { x: 56, y: 55, label: "", type: "C" },
        { x: 68, y: 40, label: "", type: "C" },
        { x: 80, y: 55, label: "", type: "C" },
        { x: 92, y: 40, label: "CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 },
        { from: 1, to: 3, type: 1 }, { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 2,
    name: "Stearát",
    engName: "Stearate (18:0)",
    nameDe: "Stearat",
    nameFr: "Stéarate",
    code3: "SA(18:0)",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C18H36O2",
    condensed: "CH₃(CH₂)₁₆COOH",
    desc: "Nasycená 18-uhlíkatá mastná kyselina hojná v živočišných tucích a biologických membránách.",
    descEn: "18-carbon saturated fatty acid common in animal fats and biological membranes.",
    descDe: "Gesättigte 18-Kohlenstoff-Fettsäure, häufig in tierischen Fetten und Membranen.",
    descFr: "Acide gras saturé à 18 carbones abondant dans les graisses animales et les membranes.",
    smiles: "CCCCCCCCCCCCCCCCCC(=O)O",
    structure: {
      atoms: [
        { x: 8, y: 55, label: "O⁻", type: "O" },
        { x: 18, y: 40, label: "", type: "C" },
        { x: 18, y: 22, label: "O", type: "O" },
        { x: 29, y: 55, label: "", type: "C" },
        { x: 40, y: 40, label: "", type: "C" },
        { x: 51, y: 55, label: "", type: "C" },
        { x: 62, y: 40, label: "", type: "C" },
        { x: 73, y: 55, label: "", type: "C" },
        { x: 84, y: 40, label: "", type: "C" },
        { x: 94, y: 55, label: "CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 },
        { from: 1, to: 3, type: 1 }, { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }
      ]
    }
  },
  {
    id: 3,
    name: "Oleát",
    engName: "Oleate (18:1 Δ9)",
    nameDe: "Oleat",
    nameFr: "Oléate",
    code3: "OA(18:1)",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C18H34O2",
    condensed: "CH₃(CH₂)₇CH=CH(CH₂)₇COOH",
    desc: "Mononenasycená omega-9 mastná kyselina s cis-dvojnou vazbou způsobenou zalomením alifatického řetězce.",
    descEn: "Monounsaturated omega-9 fatty acid with a cis-double bond causing a characteristic chain kink.",
    descDe: "Einfach ungesättigte Omega-9-Fettsäure mit cis-Doppelbindung und charakteristischem Knick.",
    descFr: "Acide gras mono-insaturé oméga-9 avec une double liaison cis provoquant un coude dans la chaîne.",
    smiles: "CCCCCCCC=CCCCCCCCC(=O)O",
    structure: {
      atoms: [
        { x: 10, y: 35, label: "O⁻", type: "O" },
        { x: 20, y: 45, label: "", type: "C" },
        { x: 20, y: 62, label: "O", type: "O" },
        { x: 32, y: 35, label: "", type: "C" },
        { x: 44, y: 45, label: "", type: "C" },
        { x: 55, y: 35, label: "", type: "C" },
        { x: 62, y: 55, label: "", type: "C" }, // kink cis bond
        { x: 74, y: 65, label: "", type: "C" },
        { x: 86, y: 55, label: "", type: "C" },
        { x: 95, y: 70, label: "CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 },
        { from: 1, to: 3, type: 1 }, { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 2 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }
      ]
    }
  },
  {
    id: 4,
    name: "Phosphatidylcholin",
    engName: "Phosphatidylcholine",
    nameDe: "Phosphatidylcholin",
    nameFr: "Phosphatidylcholine",
    code3: "PC",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C42H80NO8P",
    condensed: "Glycerol-3-P-Cholin + 2 RCOO-",
    desc: "Nejhojnější fosfolipid v vnější vrstvě eukaryotické plazmatické membrány se zwitteriontovou cholinovou hlavou.",
    descEn: "Most abundant phospholipid in the outer leaflet of eukaryotic plasma membranes.",
    descDe: "Häufigstes Phospholipid in der äußeren Schicht eukaryotischer Plasmamembranen.",
    descFr: "Phospholipide le plus abondant du feuillet externe des membranes plasmiques eucaryotes.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 30, label: "N⁺(CH₃)₃", type: "N" },
        { x: 32, y: 30, label: "", type: "C" },
        { x: 42, y: 30, label: "O-P-O", type: "P" },
        { x: 55, y: 30, label: "", type: "C" },
        { x: 65, y: 30, label: "CH", type: "C" },
        { x: 75, y: 20, label: "O-CO-R1", type: "O" },
        { x: 65, y: 50, label: "CH₂", type: "C" },
        { x: 78, y: 55, label: "O-CO-R2", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 1 }, { from: 4, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }
      ]
    }
  },
  {
    id: 5,
    name: "Phosphatidylethanolamin",
    engName: "Phosphatidylethanolamine",
    nameDe: "Phosphatidylethanolamin",
    nameFr: "Phosphatidyléthanolamine",
    code3: "PE",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C41H78NO8P",
    condensed: "Glycerol-3-P-Ethanolamin + 2 RCOO-",
    desc: "Fosfolipid hojný ve vnitřní vrstvě membrán a v mitochondriích; má kónický tvar a podporuje zakřivení membrány.",
    descEn: "Abundant inner-leaflet membrane lipid promoting negative membrane curvature and fusion.",
    descDe: "Phospholipid der inneren Membranschicht; fördert die Membrankrümmung.",
    descFr: "Phospholipide abondant du feuillet interne favorisant la courbure membranaire.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 30, label: "H₃N⁺", type: "N" },
        { x: 30, y: 30, label: "", type: "C" },
        { x: 42, y: 30, label: "O-P-O", type: "P" },
        { x: 55, y: 30, label: "", type: "C" },
        { x: 65, y: 30, label: "CH", type: "C" },
        { x: 78, y: 20, label: "O-CO-R1", type: "O" },
        { x: 65, y: 50, label: "CH₂", type: "C" },
        { x: 78, y: 55, label: "O-CO-R2", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 1 }, { from: 4, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }
      ]
    }
  },
  {
    id: 6,
    name: "Phosphatidylserin",
    engName: "Phosphatidylserine",
    nameDe: "Phosphatidylserin",
    nameFr: "Phosphatidylsérine",
    code3: "PS",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C42H78NO10P",
    condensed: "Glycerol-3-P-Serin + 2 RCOO-",
    desc: "Záporně nabitý fosfolipid vnitřního listu plazmatické membrány. Při translokaci navenek slouží jako signál pro apoptózu (eat-me signál).",
    descEn: "Anionic inner-leaflet phospholipid; exteriorized during apoptosis as an 'eat-me' signal for phagocytes.",
    descDe: "Anionisches Phospholipid; dient bei Apoptose an der Außenmembran als Signal für Phagozyten.",
    descFr: "Phospholipide anionique du feuillet interne; exposé à l'extérieur lors de l'apoptose.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 12, y: 20, label: "COO⁻", type: "O" },
        { x: 18, y: 35, label: "NH₃⁺", type: "N" },
        { x: 28, y: 35, label: "", type: "C" },
        { x: 42, y: 35, label: "O-P-O", type: "P" },
        { x: 56, y: 35, label: "", type: "C" },
        { x: 68, y: 35, label: "CH", type: "C" },
        { x: 80, y: 22, label: "O-CO-R1", type: "O" },
        { x: 68, y: 55, label: "CH₂", type: "C" },
        { x: 80, y: 58, label: "O-CO-R2", type: "O" }
      ],
      bonds: [
        { from: 0, to: 2, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 5, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 7,
    name: "Phosphatidylinositol",
    engName: "Phosphatidylinositol",
    nameDe: "Phosphatidylinositol",
    nameFr: "Phosphatidylinositol",
    code3: "PI",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C45H83O13P",
    condensed: "Glycerol-3-P-Inositol + 2 RCOO-",
    desc: "Kyselý glycerofosfolipid obsahující inositolový kruh. Slouží jako prekurzor signálních fosfoinositidů (PIP, PIP2, PIP3).",
    descEn: "Acidic glycerophospholipid with myo-inositol headgroup; precursor to phosphoinositide second messengers.",
    descDe: "Saures Phospholipid mit Inositol-Kopfgruppe; Vorläufer für Inositol-Second-Messenger.",
    descFr: "Glycérophospholipide acide avec tête inositol; précurseur de phosphoinositides signalétiques.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)OC1C(O)C(O)C(O)C(O)C1O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 35, label: "Inositol", type: "C" },
        { x: 32, y: 35, label: "O-P-O", type: "P" },
        { x: 48, y: 35, label: "", type: "C" },
        { x: 62, y: 35, label: "CH", type: "C" },
        { x: 75, y: 22, label: "O-CO-R1", type: "O" },
        { x: 62, y: 55, label: "CH₂", type: "C" },
        { x: 75, y: 58, label: "O-CO-R2", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 3, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 8,
    name: "Sphingomyelin",
    engName: "Sphingomyelin",
    nameDe: "Sphingomyelin",
    nameFr: "Sphingomyéline",
    code3: "SM",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C41H83N2O6P",
    condensed: "Ceramid-1-Phosphocholin",
    desc: "Hlavní sfingolipid myelinových pochervů nervových vláken a plazmatických membrán, tvořený ceramidem a fosfocholinovou hlavou.",
    descEn: "Dominant sphingolipid of myelin sheaths and plasma membranes containing phosphocholine.",
    descDe: "Haupt-Sphingolipid von Myelinscheiden und Plasmamembranen mit Phosphocholin-Kopfgruppe.",
    descFr: "Sphingolipide majeur de la gaine de myéline et des membranes plasmiques.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(COP(=O)([O-])OCC[N+](C)(C)C)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 25, label: "Cholin-P", type: "N" },
        { x: 35, y: 25, label: "O-CH₂", type: "O" },
        { x: 50, y: 38, label: "CH-OH", type: "C" },
        { x: 50, y: 60, label: "CH-NH-COR", type: "N" },
        { x: 70, y: 38, label: "Sfingoidní řetězec", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 2, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 9,
    name: "Kyselina phosphatidová",
    engName: "Phosphatidic acid",
    nameDe: "Phosphatidsäure",
    nameFr: "Acide phosphatidique",
    code3: "PhA",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C39H75O8P",
    condensed: "Glycerol-3-Phosfát + 2 RCOO-",
    desc: "Nejjednodušší glycerofosfolipid a ústřední meziprodukt biosyntézy všech membrane phospholipids a triacylglycerolů.",
    descEn: "Simplest glycerophospholipid and central intermediate in phospholipid and TAG biosynthesis.",
    descDe: "Einfachstes Glycerophospholipid und zentrales Zwischenprodukt der Lipidsynthese.",
    descFr: "Le plus simple des glycérophospholipides et intermédiaire central de la biosynthèse lipidique.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 35, label: "HO-P-OH", type: "P" },
        { x: 38, y: 35, label: "CH₂", type: "C" },
        { x: 52, y: 35, label: "CH", type: "C" },
        { x: 68, y: 20, label: "O-CO-R1", type: "O" },
        { x: 52, y: 58, label: "CH₂", type: "C" },
        { x: 68, y: 60, label: "O-CO-R2", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 2, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 10,
    name: "Kardiolipin",
    engName: "Cardiolipin",
    nameDe: "Cardiolipin",
    nameFr: "Cardiolipine",
    code3: "CL",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C81H156O17P2",
    condensed: "1,3-bis(sn-3'-phosphatidyl)-glycerol",
    desc: "Dimerický fosfolipid se 4 mastnými kyselinami exkluzivní pro vnitřní mitochondriální membránu stabilizující dýchací řetězec.",
    descEn: "Dimeric phospholipid with 4 acyl chains restricted to inner mitochondrial membrane.",
    descDe: "Dimeres Phospholipid mit 4 Acylketten in der inneren Mitochondrienmembran.",
    descFr: "Phospholipide dimérique à 4 chaînes d'acyle exclusif à la membrane mitochondriale interne.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 10, y: 30, label: "PA1", type: "P" },
        { x: 30, y: 30, label: "Glycerol-OH", type: "C" },
        { x: 50, y: 30, label: "PA2", type: "P" },
        { x: 70, y: 18, label: "2 Acyl chainy", type: "O" },
        { x: 70, y: 45, label: "2 Acyl chainy", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 0, to: 3, type: 1 }, { from: 2, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 11,
    name: "Ergosterol",
    engName: "Ergosterol",
    nameDe: "Ergosterin",
    nameFr: "Ergostérol",
    code3: "Erg",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C28H44O",
    condensed: "3β-hydroxy-ergosta-5,7,22-trien",
    desc: "Hlavní sterol v membránách hub a kvasinek. Cíl antimykotických léčiv (nystatin, fluconazol) a provitamin D2.",
    descEn: "Primary fungal sterol; target of antifungal drugs and precursor to vitamin D2.",
    descDe: "Hauptsterin in Pilzen und Hefen; Zielstruktur von Antimykotika und Provitamin D2.",
    descFr: "Stérol principal des champignons et levures; cible des antifongiques et provitamine D2.",
    smiles: "CC(C)C=CC(C)C1CCC2C1(CCC3C2=CC=C4C3(CCC(C4)O)C)C",
    structure: {
      atoms: [
        { x: 15, y: 50, label: "HO", type: "O" },
        { x: 28, y: 50, label: "", type: "C" },
        { x: 38, y: 35, label: "", type: "C" },
        { x: 50, y: 35, label: "", type: "C" },
        { x: 60, y: 48, label: "", type: "C" },
        { x: 50, y: 62, label: "", type: "C" },
        { x: 72, y: 48, label: "", type: "C" },
        { x: 82, y: 38, label: "", type: "C" },
        { x: 92, y: 48, label: "Sidechain=", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 2 }, { from: 4, to: 5, type: 2 }, { from: 5, to: 1, type: 1 },
        { from: 4, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }
      ]
    }
  },
  {
    id: 12,
    name: "Galaktosylceramid",
    engName: "Galactosylceramide",
    nameDe: "Galactosylceramid",
    nameFr: "Galactosylcéramide",
    code3: "GalCer",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C40H77NO8",
    condensed: "Galaktóza-β1-1'-Ceramid",
    desc: "Glyceroglykolipid / glycofingolipid hojný v myelinové pochvě oligodendrocytů v centrální nervové soustavě.",
    descEn: "Major glycosphingolipid of nervous system myelin sheaths produced by oligodendrocytes.",
    descDe: "Glykosphingolipid der Myelinscheiden im zentralen Nervensystem.",
    descFr: "Glycosphingolipide majeur du système nerveux et des gaines de myéline.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(CO[C@@H]1O[C@H](CO)[C@H](O)[C@H](O)[C@H]1O)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 30, label: "Galaktóza", type: "O" },
        { x: 38, y: 30, label: "O-CH₂", type: "C" },
        { x: 55, y: 30, label: "CH-OH", type: "C" },
        { x: 55, y: 55, label: "CH-NH-COR", type: "N" },
        { x: 75, y: 30, label: "Sfingoidní tail", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 2, to: 4, type: 1 }
      ]
    }
  },

  // ─── VERZE 2: SIGNALIZACE (q=5, 31 Lipidů) [13..30] ────────────────────────
  {
    id: 13,
    name: "Arachidonát",
    engName: "Arachidonate (20:4)",
    nameDe: "Arachidonat",
    nameFr: "Arachidonate",
    code3: "AA(20:4)",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C20H32O2",
    condensed: "20:4 (cis-Δ5,8,11,14)",
    desc: "Polynenasycená omega-6 mastná kyselina se 4 dvojnými vazbami. Klíčový prekurzor eikosanoidů (prostaglandiny, leukotrieny).",
    descEn: "Polyunsaturated omega-6 fatty acid with 4 double bonds; key precursor to eicosanoid inflammatory mediators.",
    descDe: "Mehrfach ungesättigte Omega-6-Fettsäure; zentraler Vorläufer von Eicosanoiden.",
    descFr: "Acide gras polyinsaturé oméga-6 à 4 doubles liaisons; précurseur d'éicosanoïdes.",
    smiles: "CCCCCC=CCC=CCC=CCC=CCCCC(=O)O",
    structure: {
      atoms: [
        { x: 10, y: 40, label: "O⁻", type: "O" },
        { x: 20, y: 40, label: "", type: "C" },
        { x: 30, y: 30, label: "=", type: "C" },
        { x: 42, y: 45, label: "=", type: "C" },
        { x: 54, y: 30, label: "=", type: "C" },
        { x: 66, y: 45, label: "=", type: "C" },
        { x: 80, y: 30, label: "", type: "C" },
        { x: 92, y: 45, label: "CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 2 },
        { from: 4, to: 5, type: 2 }, { from: 5, to: 6, type: 2 },
        { from: 6, to: 7, type: 1 }
      ]
    }
  },
  {
    id: 14,
    name: "PIP2",
    engName: "PIP2 (PI-4,5-P2)",
    nameDe: "PIP2",
    nameFr: "PIP2",
    code3: "PIP2",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C45H85O19P3",
    condensed: "PI-4,5-bisfosfát",
    desc: "Membránový fosfoinositid štěpený fosfolipázou C (PLC) na signální molekuly IP3 a DAG.",
    descEn: "Membrane phosphoinositide cleaved by Phospholipase C into IP3 and DAG.",
    descDe: "Membran-Phosphoinositid, das von Phospholipase C in IP3 und DAG gespalten wird.",
    descFr: "Phosphoinositide membranaire clivé par la phospholipase C en IP3 et DAG.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)OC1C(O)C(OP(=O)(O)O)C(OP(=O)(O)O)C(O)C1O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 25, label: "PO₄²⁻", type: "P" },
        { x: 15, y: 55, label: "PO₄²⁻", type: "P" },
        { x: 30, y: 40, label: "Inositol", type: "C" },
        { x: 48, y: 40, label: "O-P-O", type: "P" },
        { x: 65, y: 40, label: "Glycerol", type: "C" },
        { x: 82, y: 25, label: "R1COO", type: "O" },
        { x: 82, y: 55, label: "R2COO", type: "O" }
      ],
      bonds: [
        { from: 0, to: 2, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 4, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 15,
    name: "Inositol-1,4,5-trisfosfát",
    engName: "Inositol 1,4,5-trisphosphate",
    nameDe: "Inositol-1,4,5-trisphosphat",
    nameFr: "Inositol 1,4,5-trisphosphate",
    code3: "IP3",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C6H15O15P3",
    condensed: "D-myo-inositol-1,4,5-P3",
    desc: "Rozpustný druhý posel uvolňující vápenaté ionty (Ca²⁺) z endoplazmatického retikula po aktivaci PLC.",
    descEn: "Soluble second messenger triggering calcium release from the endoplasmic reticulum.",
    descDe: "Löslicher Second Messenger, der Calcium aus dem ER freisetzt.",
    descFr: "Second messager soluble libérant le calcium du réticulum endoplasmique.",
    smiles: "C1C(C(C(C(C1OP(=O)(O)O)OP(=O)(O)O)O)OP(=O)(O)O)O",
    structure: {
      atoms: [
        { x: 50, y: 40, label: "Inositol", type: "C" },
        { x: 25, y: 25, label: "P1-O₄", type: "P" },
        { x: 75, y: 25, label: "P4-O₄", type: "P" },
        { x: 50, y: 70, label: "P5-O₄", type: "P" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 0, to: 2, type: 1 }, { from: 0, to: 3, type: 1 }
      ]
    }
  },
  {
    id: 16,
    name: "Diacylglycerol",
    engName: "Diacylglycerol",
    nameDe: "Diacylglycerol",
    nameFr: "Diglycéride",
    code3: "DAG",
    group: "glycerolipid",
    groupCz: "Glycerolipidy",
    formula: "C39H74O5",
    condensed: "1,2-Diacyl-sn-glycerol",
    desc: "Lipidový druhý posel v plazmatické membráně aktivující protein kinázu C (PKC).",
    descEn: "Lipid second messenger staying in the membrane to activate Protein Kinase C (PKC).",
    descDe: "Lipid-Second-Messenger, der die Proteinkinase C (PKC) aktiviert.",
    descFr: "Second messager lipidique membranaire activant la protéine kinase C (PKC).",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(CO)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "HO-CH₂", type: "O" },
        { x: 45, y: 50, label: "CH", type: "C" },
        { x: 70, y: 30, label: "O-CO-R1", type: "O" },
        { x: 45, y: 75, label: "CH₂", type: "C" },
        { x: 70, y: 75, label: "O-CO-R2", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 1, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 17,
    name: "Lysophosphatidová kyselina",
    engName: "Lysophosphatidic acid",
    nameDe: "Lysophosphatidsäure",
    nameFr: "Acide lysophosphatidique",
    code3: "LPA",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C21H43O7P",
    condensed: "1-Acyl-sn-glycerol-3-fosfát",
    desc: "Bioaktivní lysofosfolipid stimulující buněčnou proliferaci, migraci a přežití přes GPCR receptory.",
    descEn: "Potent extracellular signaling lyso-phospholipid targeting G-protein coupled receptors.",
    descDe: "Bioaktives Lysophospholipid, das Proliferation und Migration stimuliert.",
    descFr: "Lysophospholipide bioactif stimulant la prolifération via des récepteurs Couplés aux Protéines G.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(O)COP(=O)(O)O",
    structure: {
      atoms: [
        { x: 15, y: 40, label: "PO₄²⁻", type: "P" },
        { x: 35, y: 40, label: "CH₂", type: "C" },
        { x: 55, y: 40, label: "CH-OH", type: "C" },
        { x: 80, y: 40, label: "O-CO-R", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 }
      ]
    }
  },
  {
    id: 18,
    name: "Ceramid",
    engName: "Ceramide",
    nameDe: "Ceramid",
    nameFr: "Céramide",
    code3: "Cer",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C36H71NO3",
    condensed: "N-acylsfingosin",
    desc: "Základní stavební jednotka komplexních sfingolipidů a central mediátor proapoptotic signálních drah.",
    descEn: "Structural backbone of complex sphingolipids and key pro-apoptotic signal intermediate.",
    descDe: "Grundstruktur komplexer Sphingolipide und pro-apoptotischer Signalstoff.",
    descFr: "Squelette de base des sphingolipides complexes et médiateur pro-apoptotique.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(CO)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 40, label: "HO-CH₂", type: "O" },
        { x: 45, y: 40, label: "CH-OH", type: "C" },
        { x: 45, y: 65, label: "CH-NH-COR", type: "N" },
        { x: 75, y: 40, label: "Sfingoidní řetězec", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 1, to: 3, type: 1 }
      ]
    }
  },
  {
    id: 19,
    name: "Sphingosin",
    engName: "Sphingosine",
    nameDe: "Sphingosin",
    nameFr: "Sphingosine",
    code3: "Sph",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C18H37NO2",
    condensed: "(2S,3R,4E)-2-aminooctadec-4-en-1,3-diol",
    desc: "18-uhlíkatý aminoalkohol tvořící páteř všech sfingolipidů.",
    descEn: "18-carbon amino alcohol forming the primary backbone of sphingolipids.",
    descDe: "18-Kohlenstoff-Aminoalkohol; bildet das Rückgrat aller Sphingolipide.",
    descFr: "Amino-alcool à 18 carbones constituant le squelette des sphingolipides.",
    smiles: "CCCCCCCCCCCCCC=CC(C(CO)N)O",
    structure: {
      atoms: [
        { x: 15, y: 45, label: "HO-CH₂", type: "O" },
        { x: 35, y: 45, label: "CH-NH₂", type: "N" },
        { x: 55, y: 45, label: "CH-OH", type: "O" },
        { x: 72, y: 35, label: "CH=CH", type: "C" },
        { x: 90, y: 45, label: "C₁₃H₂₇", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 2 }
      ]
    }
  },
  {
    id: 20,
    name: "Sphingosin-1-phosphat",
    engName: "Sphingosine-1-phosphate",
    nameDe: "Sphingosin-1-phosphat",
    nameFr: "Sphingosine-1-phosphate",
    code3: "S1P",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C18H38NO5P",
    condensed: "Sphingosin-1-P",
    desc: "Vysoce potence extracellular signaling sfingolipid (sfingolipidový rheostat) podporující buněčnou vaskularizaci a imunitní trafficking.",
    descEn: "Potent signaling sphingolipid driving cell survival, angiogenesis, and lymphocyte egress.",
    descDe: "Starker Signal-Sphingolipid; reguliert Zellüberleben und Lymphozyten-Trafficking.",
    descFr: "Sphingolipide signalétique puissant contrôlant la survie cellulaire et l'immunité.",
    smiles: "CCCCCCCCCCCCCC=CC(C(COP(=O)(O)O)N)O",
    structure: {
      atoms: [
        { x: 15, y: 45, label: "PO₄²⁻", type: "P" },
        { x: 35, y: 45, label: "CH₂-NH₂", type: "N" },
        { x: 58, y: 45, label: "CH-OH", type: "O" },
        { x: 80, y: 45, label: "Sfingoid tail", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 }
      ]
    }
  },
  {
    id: 21,
    name: "Prostaglandin E2",
    engName: "Prostaglandin E2",
    nameDe: "Prostaglandin E2",
    nameFr: "Prostaglandine E2",
    code3: "PGE2",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C20H32O5",
    condensed: "PGE2",
    desc: "Hlavní pro-zánětlivý eikosanoid odvozený z arachidonátu působící přes EP1-4 receptory; vyvolává horečku a bolest.",
    descEn: "Principal pro-inflammatory arachidonic acid derivative inducing fever, pain, and vasodilation.",
    descDe: "Wichtigster entzündungsfördernder Eicosanoid; löst Fieber und Schmerz aus.",
    descFr: "Eicosanoïde pro-inflammatoire majeur dérivé de l'arachidonate provoquant fièvre et douleur.",
    smiles: "CCCCCC(C=CC1C(CC(=O)C1C=CCCCC(=O)O)O)O",
    structure: {
      atoms: [
        { x: 40, y: 40, label: "Cyklopentan-O", type: "O" },
        { x: 15, y: 25, label: "COOH chain", type: "O" },
        { x: 75, y: 60, label: "OH chain", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 0, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 22,
    name: "Thromboxan A2",
    engName: "Thromboxane A2",
    nameDe: "Thromboxan A2",
    nameFr: "Thromboxane A2",
    code3: "TXA2",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C20H32O5",
    condensed: "TXA2",
    desc: "Instabilní eikosanoid uvolňovaný trombocyty; způsobuje agregaci krevních destiček a vazokonstrikci.",
    descEn: "Unstable eicosanoid produced by activated platelets; stimulates platelet aggregation and vasoconstriction.",
    descDe: "Instabiler Eicosanoid aus Thrombozyten; fördert Blutgerinnung und Vasokonstriktion.",
    descFr: "Eicosanoïde instable produit par les plaquettes activées provoquant l'agrégation plaquettaire.",
    smiles: "CCCCCC(C=CC1C2CC(O1)OC2C=CCCCC(=O)O)O",
    structure: {
      atoms: [
        { x: 45, y: 40, label: "Oxan/Bicyklus", type: "O" },
        { x: 15, y: 25, label: "COOH", type: "O" },
        { x: 80, y: 60, label: "Tail-OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 0, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 23,
    name: "Leukotrien B4",
    engName: "Leukotriene B4",
    nameDe: "Leukotrien B4",
    nameFr: "Leucotriène B4",
    code3: "LTB4",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C20H32O4",
    condensed: "LTB4",
    desc: "Silný chemotaktický mediátor pro neutrofily syntetizovaný 5-lipoxygenázou (5-LOX).",
    descEn: "Potent neutrophil chemoattractant produced by 5-lipoxygenase.",
    descDe: "Starker neutrophilentravierender Botenstoff aus der 5-Lipoxygenase-Kaskade.",
    descFr: "Puissant agent chimiotactique des neutrophiles produit par la 5-lipoxygénase.",
    smiles: "CCCCCC(C=CC=CC=CC(CC=CCCCC(=O)O)O)O",
    structure: {
      atoms: [
        { x: 15, y: 35, label: "HOOC", type: "O" },
        { x: 35, y: 35, label: "C5-OH", type: "O" },
        { x: 55, y: 50, label: "Trien (3=)", type: "C" },
        { x: 75, y: 35, label: "C12-OH", type: "O" },
        { x: 90, y: 50, label: "C6H13", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 24,
    name: "Anandamid",
    engName: "Anandamide (AEA)",
    nameDe: "Anandamid",
    nameFr: "Anandamide",
    code3: "AEA",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C22H37NO2",
    condensed: "N-Arachidonoylethanolamin",
    desc: "Endogenní kanabinoid (endokanabinoid) v mozku aktivující CB1 a CB2 receptory.",
    descEn: "Endogenous cannabinoid neurotransmitter binding CB1 and CB2 cannabinoid receptors.",
    descDe: "Endogenes Cannabinoid (Endocannabinoid) im Gehirn.",
    descFr: "Endocannabinoïde cérébral se liant aux récepteurs CB1 et CB2.",
    smiles: "CCCCCC=CCC=CCC=CCC=CCCCC(=O)NCCO",
    structure: {
      atoms: [
        { x: 15, y: 40, label: "HO-CH₂CH₂-NH", type: "N" },
        { x: 40, y: 40, label: "C=O", type: "O" },
        { x: 65, y: 40, label: "Arachidonoyl=4", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 25,
    name: "2-Arachidonoylglycerol",
    engName: "2-Arachidonoylglycerol",
    nameDe: "2-Arachidonoylglycerol",
    nameFr: "2-Arachidonoylglycérol",
    code3: "2-AG",
    group: "glycerolipid",
    groupCz: "Glycerolipidy",
    formula: "C23H38O4",
    condensed: "2-AG",
    desc: "Nejhojnější endokanabinoid v centrálním nervovém systému pracující jako retrográdní meziprodukt synaptického přenosu.",
    descEn: "Most abundant endocannabinoid in the CNS acting as a retrograde synaptic messenger.",
    descDe: "Häufigstes Endocannabinoid im ZNS mit retrograder Signalwirkung.",
    descFr: "Endocannabinoïde le plus abondant du SNC agissant comme messager rétrograde.",
    smiles: "OCC(CO)OC(=O)CCCC=CCC=CCC=CCC=CCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "HO-CH₂", type: "O" },
        { x: 40, y: 45, label: "CH-O-CO-Arachidonát", type: "C" },
        { x: 20, y: 60, label: "HO-CH₂", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 26,
    name: "PAF",
    engName: "Platelet-Activating Factor",
    nameDe: "Thrombozytenaktivierender Faktor",
    nameFr: "Facteur d'activation des plaquettes",
    code3: "PAF",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C26H54NO7P",
    condensed: "1-O-Alkyl-2-acetyl-sn-glycero-3-phosphocholin",
    desc: "Ether-fosfolipidový mediátor anafylaxe, zánětu a destičkové agregace se sn-2 acetylskupinou.",
    descEn: "Potent ether-phospholipid mediator of inflammation, anaphylaxis, and platelet aggregation.",
    descDe: "Ether-Phospholipid-Mediator bei Anaphylaxie und Blutgerinnung.",
    descFr: "Éther-phospholipide médiateur de l'inflammation et de l'anaphylaxie.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(C)=O",
    structure: {
      atoms: [
        { x: 15, y: 35, label: "Cholin-P", type: "N" },
        { x: 40, y: 35, label: "Glycerol", type: "C" },
        { x: 65, y: 20, label: "sn-1 Ether", type: "O" },
        { x: 65, y: 55, label: "sn-2 Acetyl", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 1, to: 3, type: 1 }
      ]
    }
  },
  {
    id: 27,
    name: "Kyselina cholová",
    engName: "Cholic acid",
    nameDe: "Cholsäure",
    nameFr: "Acide cholique",
    code3: "CA",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C24H40O5",
    condensed: "3α,7α,12α-trihydroxy-5β-cholan-24-oic acid",
    desc: "Primární žlučová kyselina emulgující tuky v tenkém střevě při trávení.",
    descEn: "Primary bile acid facilitating dietary lipid emulsification and absorption in the intestine.",
    descDe: "Primäre Gallensäure zur Emulgierung von Speisefetten im Dünndarm.",
    descFr: "Acide biliaire primaire facilitant l'émulsification des lipides alimentaires.",
    smiles: "CC(CCC(=O)O)C1CCC2C1(C(CC3C2CCC4C3(CCC(C4)O)O)O)C",
    structure: {
      atoms: [
        { x: 15, y: 50, label: "3-OH", type: "O" },
        { x: 35, y: 35, label: "7-OH", type: "O" },
        { x: 55, y: 35, label: "12-OH", type: "O" },
        { x: 40, y: 60, label: "Steroid Core", type: "C" },
        { x: 80, y: 50, label: "COOH chain", type: "O" }
      ],
      bonds: [
        { from: 0, to: 3, type: 1 }, { from: 1, to: 3, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 28,
    name: "Aldosteron",
    engName: "Aldosterone",
    nameDe: "Aldosteron",
    nameFr: "Aldostérone",
    code3: "Aldo",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C21H28O5",
    condensed: "Mineralokortikoid",
    desc: "Mineralokortikoidní hormon kůry nadledvin řídící rovnováhu sodíku, draslíku a krevního tlaku v ledvinách.",
    descEn: "Mineralocorticoid hormone regulating sodium reabsorption and blood pressure in kidney tubules.",
    descDe: "Mineralocorticoid zur Regulation des Natrium-Kalium-Haushalts und Blutdrucks.",
    descFr: "Hormone minéralocorticoïde régulant la réabsorption du sodium et la pression artérielle.",
    smiles: "CC12CCC(=O)C=C1CCC3C2C(CC4(C3CC(C4=O)O)C=O)O",
    structure: {
      atoms: [
        { x: 15, y: 40, label: "=O", type: "O" },
        { x: 40, y: 40, label: "Steroid", type: "C" },
        { x: 70, y: 25, label: "CHO", type: "O" },
        { x: 70, y: 55, label: "COCH₂OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }, { from: 1, to: 3, type: 1 }
      ]
    }
  },
  {
    id: 29,
    name: "Kortisol",
    engName: "Cortisol",
    nameDe: "Cortisol",
    nameFr: "Cortisol",
    code3: "Cort",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C21H30O5",
    condensed: "Glukokortikoid",
    desc: "Hlavní glukokortikoidní stresoový hormon regulující glukoneogenezi, zánět a imunitní odpověď.",
    descEn: "Primary glucocorticoid stress hormone regulating metabolism, gluconeogenesis, and immunity.",
    descDe: "Wichtigstes Glucocorticoid (Stresshormon); regelt Stoffwechsel und Entzündungen.",
    descFr: "Hormone stéroïde glucocorticoïde majeure régulant le métabolisme et le stress.",
    smiles: "CC12CCC(=O)C=C1CCC3C2C(CC4(C3CCC4(C(=O)CO)O)C)O",
    structure: {
      atoms: [
        { x: 15, y: 40, label: "3=O", type: "O" },
        { x: 40, y: 40, label: "Steroid-11OH", type: "C" },
        { x: 75, y: 35, label: "17-OH", type: "O" },
        { x: 75, y: 60, label: "CO-CH₂OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }, { from: 1, to: 3, type: 1 }
      ]
    }
  },
  {
    id: 30,
    name: "Testosteron",
    engName: "Testosterone",
    nameDe: "Testosteron",
    nameFr: "Testostérone",
    code3: "Test",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C19H28O2",
    condensed: "17β-hydroxyandrost-4-en-3-on",
    desc: "Hlavní mužský pohlavní androgenní steroidní hormon odpovědný za vývoj sekundárních pohlavních znaků.",
    descEn: "Primary male sex steroid hormone driving anabolic growth and secondary sexual traits.",
    descDe: "Wichtigstes männliches Sexualhormon (Androgen).",
    descFr: "Principale hormone stéroïde sexuelle masculine (androgène).",
    smiles: "CC12CCC(=O)C=C1CCC3C2CCC4(C3CCC4O)C",
    structure: {
      atoms: [
        { x: 15, y: 40, label: "3=O", type: "O" },
        { x: 45, y: 40, label: "Steroid Core", type: "C" },
        { x: 80, y: 40, label: "17β-OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },

  // ─── VERZE 3: LIPID MAPS ATLAS (q=7, 57 Lipidů) [31..56] ──────────────────
  {
    id: 31,
    name: "Kyselina laurová",
    engName: "Laurate (12:0)",
    nameDe: "Laurat",
    nameFr: "Laurate",
    code3: "Laurate",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C12H24O2",
    condensed: "CH₃(CH₂)₁₀COOH",
    desc: "Středně dlouhá nasycená 12-uhlíkatá mastná kyselina hojná v kokosovém a palmojádrovém oleji.",
    descEn: "12-carbon medium-chain saturated fatty acid abundant in coconut oil.",
    descDe: "Mittelkettige gesättigte 12-Kohlenstoff-Fettsäure in Kokosöl.",
    descFr: "Acide gras saturé à chaîne moyenne à 12 carbones abondant dans l'huile de coco.",
    smiles: "CCCCCCCCCCCC(=O)O",
    structure: {
      atoms: [
        { x: 15, y: 45, label: "O⁻", type: "O" }, { x: 30, y: 35, label: "", type: "C" },
        { x: 50, y: 55, label: "", type: "C" }, { x: 70, y: 35, label: "", type: "C" },
        { x: 90, y: 55, label: "CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 32,
    name: "Kyselina myristová",
    engName: "Myristate (14:0)",
    nameDe: "Myristat",
    nameFr: "Myristate",
    code3: "Myristate",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C14H28O2",
    condensed: "CH₃(CH₂)₁₂COOH",
    desc: "Nasycená 14-uhlíkatá mastná kyselina využívaná pro kovalentní N-myristoylaci proteinů.",
    descEn: "14-carbon saturated fatty acid involved in covalent N-terminal myristoylation of proteins.",
    descDe: "14-Kohlenstoff-Fettsäure für die Protein-Myristoylierung.",
    descFr: "Acide gras saturé à 14 carbones impliqué dans la myristoylation des protéines.",
    smiles: "CCCCCCCCCCCCCC(=O)O",
    structure: {
      atoms: [
        { x: 12, y: 45, label: "O⁻", type: "O" }, { x: 28, y: 35, label: "", type: "C" },
        { x: 48, y: 55, label: "", type: "C" }, { x: 68, y: 35, label: "", type: "C" },
        { x: 88, y: 55, label: "CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 33,
    name: "Kyselina linolová",
    engName: "Linoleate (18:2)",
    nameDe: "Linolnat",
    nameFr: "Linoléate",
    code3: "LA(18:2)",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C18H32O2",
    condensed: "18:2 (cis,cis-Δ9,12)",
    desc: "Esenciální omega-6 polynenasycená mastná kyselina nutná v lidské potravě.",
    descEn: "Essential omega-6 polyunsaturated fatty acid required in human diet.",
    descDe: "Essenzielle Omega-6-Fettsäure der Nahrung.",
    descFr: "Acide gras polyinsaturé oméga-6 essentiel indispensable dans l'alimentation.",
    smiles: "CCCCCC=CCC=CCCCCCCCC(=O)O",
    structure: {
      atoms: [
        { x: 10, y: 40, label: "O⁻", type: "O" }, { x: 25, y: 40, label: "", type: "C" },
        { x: 45, y: 30, label: "=", type: "C" }, { x: 65, y: 50, label: "=", type: "C" },
        { x: 85, y: 35, label: "CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 2 }
      ]
    }
  },
  {
    id: 34,
    name: "Kyselina α-linolenová",
    engName: "α-Linolenate (18:3)",
    nameDe: "α-Linolenat",
    nameFr: "α-Linolénate",
    code3: "ALA(18:3)",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C18H30O2",
    condensed: "18:3 (cis-Δ9,12,15)",
    desc: "Esenciální omega-3 mastná kyselina ze lněného semínka a rostlinných olejů.",
    descEn: "Essential omega-3 polyunsaturated fatty acid found in seeds and plant oils.",
    descDe: "Essenzielle Omega-3-Fettsäure in Leinöl und Pflanzenölen.",
    descFr: "Acide gras oméga-3 essentiel présent dans les graines de lin et huiles végétales.",
    smiles: "CCC=CCC=CCC=CCCCCCCCC(=O)O",
    structure: {
      atoms: [
        { x: 10, y: 40, label: "O⁻", type: "O" }, { x: 25, y: 40, label: "", type: "C" },
        { x: 45, y: 25, label: "=", type: "C" }, { x: 65, y: 45, label: "=", type: "C" },
        { x: 85, y: 25, label: "=CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 2 }
      ]
    }
  },
  {
    id: 35,
    name: "EPA",
    engName: "Eicosapentaenoate (20:5)",
    nameDe: "EPA (20:5)",
    nameFr: "EPA (20:5)",
    code3: "EPA(20:5)",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C20H30O2",
    condensed: "20:5 (cis-Δ5,8,11,14,17)",
    desc: "Omega-3 fatty acid z rybího tuku s 5 dvojnými vazbami; působí kardioprotektivně.",
    descEn: "Omega-3 fatty acid from fish oil with 5 double bonds; cardioprotective effects.",
    descDe: "Omega-3-Fettsäure aus Fischöl mit 5 Doppelbindungen; herzzellschützend.",
    descFr: "Acide gras oméga-3 de l'huile de poisson à 5 doubles liaisons.",
    smiles: "CCC=CCC=CCC=CCC=CCC=CCCC(=O)O",
    structure: {
      atoms: [
        { x: 10, y: 40, label: "O⁻", type: "O" },
        { x: 30, y: 40, label: "5=bonds", type: "C" },
        { x: 80, y: 40, label: "CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 }
      ]
    }
  },
  {
    id: 36,
    name: "DHA",
    engName: "Docosahexaenoate (22:6)",
    nameDe: "DHA (22:6)",
    nameFr: "DHA (22:6)",
    code3: "DHA(22:6)",
    group: "fatty_acid",
    groupCz: "Mastné kyseliny",
    formula: "C22H32O2",
    condensed: "22:6 (cis-Δ4,7,10,13,16,19)",
    desc: "Omega-3 mastná kyselina se 6 dvojnými vazbami hojná v mozkové kůře a sítnici oka.",
    descEn: "Omega-3 fatty acid with 6 double bonds, essential for brain and retinal membranes.",
    descDe: "Omega-3-Fettsäure mit 6 Doppelbindungen; essenziell für Gehirn und Netzhaut.",
    descFr: "Acide gras oméga-3 à 6 doubles liaisons, majeur dans le cerveau et la rétine.",
    smiles: "CCC=CCC=CCC=CCC=CCC=CCC=CCC(=O)O",
    structure: {
      atoms: [
        { x: 10, y: 40, label: "O⁻", type: "O" },
        { x: 30, y: 40, label: "6=bonds", type: "C" },
        { x: 80, y: 40, label: "CH₃", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 }
      ]
    }
  },
  {
    id: 37,
    name: "Triacylglycerol",
    engName: "Triacylglycerol",
    nameDe: "Triacylglycerol",
    nameFr: "Triglycéride",
    code3: "TAG",
    group: "glycerolipid",
    groupCz: "Glycerolipidy",
    formula: "C55H104O6",
    condensed: "Tuk / Neutrální lipid",
    desc: "Zásobní neutrální tuk ukládaný v tukové tkáni (adipocytech) jako hlavní energetická rezerva organizmu.",
    descEn: "Primary energy storage neutral lipid stored in adipose tissue lipid droplets.",
    descDe: "Hauptspeicherfett im Fettgewebe.",
    descFr: "Lipide neutre de réserve énergétique majeure stocké dans les adipocytes.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COC(=O)CCCCCCCCCCCCCCC)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 25, y: 20, label: "O-CO-R1", type: "O" },
        { x: 25, y: 50, label: "CH-O-CO-R2", type: "C" },
        { x: 25, y: 80, label: "O-CO-R3", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 38,
    name: "Monoacylglycerol",
    engName: "Monoacylglycerol",
    nameDe: "Monoacylglycerol",
    nameFr: "Monoglycéride",
    code3: "MAG",
    group: "glycerolipid",
    groupCz: "Glycerolipidy",
    formula: "C21H40O4",
    condensed: "1-Acyl-sn-glycerol",
    desc: "Produkt trávení triacylglycerolů v tenkém střevě pankreatickou lipázou.",
    descEn: "Digestive product of triacylglycerols generated by pancreatic lipase.",
    descDe: "Verdauungsprodukt von Fetten im Darm.",
    descFr: "Produit de la digestion des triglycérides par la lipase pancréatique.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(O)CO",
    structure: {
      atoms: [
        { x: 20, y: 40, label: "HO-CH₂", type: "O" },
        { x: 45, y: 40, label: "CH-OH", type: "C" },
        { x: 75, y: 40, label: "O-CO-R", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 39,
    name: "Glucosylceramid",
    engName: "Glucosylceramide",
    nameDe: "Glucosylceramid",
    nameFr: "Glucosylcéramide",
    code3: "GlcCer",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C40H77NO8",
    condensed: "Glukóza-β1-1'-Ceramid",
    desc: "Prekurzor komplexních glykosfingolipidů a akumulační metabolit u Gaucherovy choroby.",
    descEn: "Precursor to neutral glycosphingolipids; accumulates in Gaucher disease.",
    descDe: "Vorläufer komplexer Glykosphingolipide; akkumuliert bei Morbus Gaucher.",
    descFr: "Précurseur des glycosphingolipides complexes; s'accumule dans la maladie de Gaucher.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(CO[C@@H]1O[C@H](CO)[C@H](O)[C@H](O)[C@H]1O)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 35, label: "Glukóza", type: "O" },
        { x: 45, y: 35, label: "Ceramid", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }
      ]
    }
  },
  {
    id: 40,
    name: "Lactosylceramid",
    engName: "Lactosylceramide",
    nameDe: "Lactosylceramid",
    nameFr: "Lactosylcéramide",
    code3: "LacCer",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C46H87NO13",
    condensed: "Gal-β1,4-Glc-Cer",
    desc: "Neutrální glykosfingolipid tvořený laktózou navázanou na ceramid.",
    descEn: "Neutral glycosphingolipid with lactose headgroup precursor to gangliosides.",
    descDe: "Neutraler Glykosphingolipid; Vorläufer von Gangliosiden.",
    descFr: "Glycosphingolipide neutre précurseur des gangliosides.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(CO[C@@H]1O[C@H](CO)[C@H](O)[C@H](O)[C@H]1O[C@@H]2O[C@H](CO)[C@H](O)[C@H](O)[C@H]2O)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 35, label: "Gal", type: "O" },
        { x: 35, y: 35, label: "Glc", type: "O" },
        { x: 65, y: 35, label: "Ceramid", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 41,
    name: "Gangliosid GM1",
    engName: "Ganglioside GM1",
    nameDe: "Gangliosid GM1",
    nameFr: "Ganglioside GM1",
    code3: "GM1",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C73H131N3O31",
    condensed: "Gal-GalNAc-(Neu5Ac)-Gal-Glc-Cer",
    desc: "Kyselý glycofingolipid s kyselinou sialovou v neuronálních membránách; receptor cholerového toxinu.",
    descEn: "Acidic sialic-acid-containing glycosphingolipid; receptor for cholera toxin.",
    descDe: "Sialinsäurehaltiges Glykosphingolipid; Cholera-Toxin-Rezeptor.",
    descFr: "Glycosphingolipide acide à acide sialique; récepteur de la toxine cholérique.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(CO[C@@H]1O[C@H](CO)[C@H](O)[C@H](O)[C@H]1O[C@@H]2O[C@H](CO)[C@H](O)[C@H](O)[C@H]2O[C@@H]3O[C@H](CO)[C@H](O)[C@H](O)[C@H]3O)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 20, label: "Sia (purple)", type: "N" },
        { x: 35, y: 40, label: "Tetrasacharid", type: "O" },
        { x: 70, y: 40, label: "Ceramid", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 42,
    name: "Gangliosid GM3",
    engName: "Ganglioside GM3",
    nameDe: "Gangliosid GM3",
    nameFr: "Ganglioside GM3",
    code3: "GM3",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C57H104N2O21",
    condensed: "Neu5Ac-Gal-Glc-Cer",
    desc: "Nejjednodušší gangliosid regulující dráhu inzulínového receptoru a receptorů růstových faktorů.",
    descEn: "Simplest ganglioside modulating insulin receptor activity.",
    descDe: "Einfachstes Gangliosid zur Regulation des Insulinrezeptors.",
    descFr: "Le plus simple des gangliosides régulant le récepteur de l'insuline.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(CO[C@@H]1O[C@H](CO)[C@H](O)[C@H](O)[C@H]1O[C@@H]2O[C@H](CO)[C@H](O)[C@H](O)[C@H]2O)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 35, label: "Sia", type: "N" },
        { x: 35, y: 35, label: "Lac", type: "O" },
        { x: 65, y: 35, label: "Ceramid", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 43,
    name: "Phosphatidylglycerol",
    engName: "Phosphatidylglycerol",
    nameDe: "Phosphatidylglycerin",
    nameFr: "Phosphatidylglycérol",
    code3: "PG",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C42H81O10P",
    condensed: "Glycerol-3-P-Glycerol",
    desc: "Fosfolipid hojný v bakteriálních membránách a plicním surfaktantu.",
    descEn: "Key phospholipid of bacterial membranes and pulmonary surfactant.",
    descDe: "Phospholipid bakterieller Membranen und des Lungensurfactants.",
    descFr: "Phospholipide majeur des bactéries et du surfactant pulmonaire.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)OCC(O)CO)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 35, label: "Glycerol-head", type: "O" },
        { x: 40, y: 35, label: "P", type: "P" },
        { x: 65, y: 35, label: "Glycerol-backbone", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 44,
    name: "Squalen",
    engName: "Squalene",
    nameDe: "Squalen",
    nameFr: "Squalène",
    code3: "SQ",
    group: "prenol",
    groupCz: "Prenolové lipidy",
    formula: "C30H50",
    condensed: "Triterpen (6 izoprenových jednotek)",
    desc: "Lineární triterpenický uhlovodík pracující jako přímý biochemický prekurzor při biosyntéze cholesterolu.",
    descEn: "Linear triterpene hydrocarbon serving as the direct precursor to cholesterol.",
    descDe: "Linearer Triterpen-Kohlenwasserstoff; Vorläufer von Cholesterin.",
    descFr: "Hydrocarbure triterpénique linéaire précurseur direct du cholestérol.",
    smiles: "CC(=CCCC(=CCCC(=CCCC=C(C)CCC=C(C)CCC=C(C)C)C)C)C",
    structure: {
      atoms: [
        { x: 10, y: 40, label: "Me₂C=", type: "C" },
        { x: 50, y: 40, label: "6 izoprenů=", type: "C" },
        { x: 90, y: 40, label: "=CMe₂", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 2 }
      ]
    }
  },
  {
    id: 45,
    name: "Koenzym Q10",
    engName: "Coenzyme Q10",
    nameDe: "Coenzym Q10",
    nameFr: "Coenzyme Q10",
    code3: "CoQ10",
    group: "prenol",
    groupCz: "Prenolové lipidy",
    formula: "C59H90O4",
    condensed: "Ubichinon-10",
    desc: "Lipofilní přenašeč elektronů ve vnitřní mitochondriální membráně při dýchacím řetězci.",
    descEn: "Lipophilic electron carrier in the mitochondrial respiratory chain.",
    descDe: "Lipophiler Elektronenträger in der inneren Mitochondrienmembran.",
    descFr: "Transporteur d'électrons lipophile de la chaîne respiratoire mitochondriale.",
    smiles: "CC1=C(C(=O)C(=C(C1=O)OC)OC)CC=C(C)CCC=C(C)CCC=C(C)CCC=C(C)CCC=C(C)CCC=C(C)CCC=C(C)CCC=C(C)CCC=C(C)CCC=C(C)C",
    structure: {
      atoms: [
        { x: 20, y: 40, label: "Benzochinon", type: "O" },
        { x: 60, y: 40, label: "10 izoprenových jednotek", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }
      ]
    }
  },
  {
    id: 46,
    name: "β-Karoten",
    engName: "Beta-Carotene",
    nameDe: "Beta-Carotin",
    nameFr: "Bêta-Carotène",
    code3: "β-Carotene",
    group: "prenol",
    groupCz: "Prenolové lipidy",
    formula: "C40H56",
    condensed: "Tetraterpenoid (Provitamin A)",
    desc: "Červeno-oranžový tetraterpenoidní pigment a provitamin A štěpený na dvě molekuly retinolu.",
    descEn: "Red-orange tetraterpenoid pigment and provitamin A precursor cleaved to retinal.",
    descDe: "Rot-orangefarbener Tetraterpen-Farbstoff; Provitamin A.",
    descFr: "Pigment tétraterpénoïde rouge-orange et provitamine A.",
    smiles: "CC1=C(C(CCC1)(C)C)C=CC(=CC=CC(=CC=CC=C(C)C=CC=C(C)C=CC2=C(CCCC2(C)C)C)C)C",
    structure: {
      atoms: [
        { x: 15, y: 40, label: "β-Ionen ring", type: "C" },
        { x: 50, y: 40, label: "Konjugovaný řetězec=", type: "C" },
        { x: 85, y: 40, label: "β-Ionen ring", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 2 }
      ]
    }
  },
  {
    id: 47,
    name: "α-Tokoferol",
    engName: "Alpha-Tocopherol",
    nameDe: "Alpha-Tocopherol",
    nameFr: "Alpha-Tocophérol",
    code3: "VitE",
    group: "prenol",
    groupCz: "Prenolové lipidy",
    formula: "C29H50O2",
    condensed: "Vitamin E",
    desc: "Hlavní lipofilní antioxidant štěpící řetězové reakce peroxidace lipofilitních membrán.",
    descEn: "Major lipid-soluble antioxidant breaking lipid peroxidation chain reactions.",
    descDe: "Hauptsächliches fettlösliches Antioxidans (Vitamin E).",
    descFr: "Principal antioxydant lipophile (Vitamine E) protégeant les membranes.",
    smiles: "CC1=C(C2=C(C(=C1C)O)CCC(O2)(C)CCCC(C)CCCC(C)CCCC(C)C)C",
    structure: {
      atoms: [
        { x: 25, y: 40, label: "Chromanol-OH", type: "O" },
        { x: 70, y: 40, label: "Fytylový tail", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }
      ]
    }
  },
  {
    id: 48,
    name: "Cholekalciferol",
    engName: "Cholecalciferol",
    nameDe: "Cholecalciferol",
    nameFr: "Cholécalciférol",
    code3: "VitD3",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C27H44O",
    condensed: "Vitamin D3 (Secosteroid)",
    desc: "Sekosteroid vznikající v kůži z 7-dehydrocholesterolu po UV záření; reguluje metabolismus vápníku.",
    descEn: "Secosteroid generated in skin by UV radiation regulating calcium homeostasis.",
    descDe: "Secosteroid aus der Haut durch UV-Licht; reguliert den Calciumhaushalt.",
    descFr: "Sécostéroïde synthétisé dans la peau sous l'effet des UV régulant le calcium.",
    smiles: "CC(C)CCCC(C)C1CCC2C1(CCCC2=CC=C3CC(CCC3=C)O)C",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "HO-RingA", type: "O" },
        { x: 50, y: 35, label: "=C-Seco", type: "C" },
        { x: 80, y: 50, label: "CD-Ring+tail", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 }
      ]
    }
  },
  {
    id: 49,
    name: "Retinol",
    engName: "Retinol",
    nameDe: "Retinol",
    nameFr: "Rétinol",
    code3: "VitA",
    group: "prenol",
    groupCz: "Prenolové lipidy",
    formula: "C20H30O",
    condensed: "Vitamin A1",
    desc: "Diterpenoidní alkohol (Vitamin A) esenciální pro vidění, fototransdukci a růst tkání.",
    descEn: "Diterpenoid alcohol (Vitamin A) essential for vision phototransduction.",
    descDe: "Diterpenoid-Alkohol (Vitamin A) essenziell für den Sehvorgang.",
    descFr: "Alcool diterpénoïde (Vitamine A) essentiel pour la vision.",
    smiles: "CC1=C(C(CCC1)(C)C)C=CC(=CC=CC(=CCO)C)C",
    structure: {
      atoms: [
        { x: 20, y: 40, label: "β-Ionen", type: "C" },
        { x: 50, y: 40, label: "Polyen", type: "C" },
        { x: 80, y: 40, label: "CH₂OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 50,
    name: "Kyselina retinoová",
    engName: "Retinoic acid",
    nameDe: "Retinsäure",
    nameFr: "Acide rétinoïque",
    code3: "RA",
    group: "prenol",
    groupCz: "Prenolové lipidy",
    formula: "C20H28O2",
    condensed: "all-trans-retinoic acid",
    desc: "Aktivní metabolit vitaminu A účinkující jako nukleární transkripční faktor přes RAR/RXR receptory.",
    descEn: "Active vitamin A metabolite functioning as a nuclear receptor ligand for gene expression.",
    descDe: "Aktiver Vitamin-A-Metabolit zur Genregulationssteuerung.",
    descFr: "Métabolite actif de la vitamine A régulant la transcription génique.",
    smiles: "CC1=C(C(CCC1)(C)C)C=CC(=CC=CC(=CC(=O)O)C)C",
    structure: {
      atoms: [
        { x: 20, y: 40, label: "β-Ionen", type: "C" },
        { x: 50, y: 40, label: "Polyen", type: "C" },
        { x: 80, y: 40, label: "COOH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 51,
    name: "Kys. deoxycholová",
    engName: "Deoxycholate",
    nameDe: "Deoxycholat",
    nameFr: "Désoxycholate",
    code3: "DCA",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C24H40O4",
    condensed: "3α,12α-dihydroxy-5β-cholan-24-oic acid",
    desc: "Sekundární žlučová kyselina vznikající dehydroxylací v střevním mikrobiomu.",
    descEn: "Secondary bile acid formed by bacterial 7-alpha-dehydroxylation in the gut.",
    descDe: "Sekundäre Gallensäure aus der mikrobiellen Umsetzung im Darm.",
    descFr: "Acide biliaire secondaire formé par le microbiote intestinal.",
    smiles: "CC(CCC(=O)O)C1CCC2C1(C(CC3C2CCC4C3(CCC(C4)O)C)O)C",
    structure: {
      atoms: [
        { x: 20, y: 45, label: "3-OH", type: "O" },
        { x: 50, y: 45, label: "12-OH", type: "O" },
        { x: 80, y: 45, label: "COOH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 52,
    name: "Estradiol",
    engName: "Estradiol (E2)",
    nameDe: "Estradiol (E2)",
    nameFr: "Œstradiol (E2)",
    code3: "E2",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C18H24O2",
    condensed: "17β-estradiol",
    desc: "Hlavní ženský pohlavní estrogenní hormon s aromatickým A-kruhem.",
    descEn: "Primary female sex estrogen steroid hormone featuring an aromatic A-ring.",
    descDe: "Wichtigstes weibliches Sexualhormon (Östrogen).",
    descFr: "Principale hormone stéroïde sexuelle féminine (œstrogène).",
    smiles: "CC12CCC3C(C1CCC2O)CCC4=C3C=CC(=C4)O",
    structure: {
      atoms: [
        { x: 15, y: 40, label: "Aromat-OH", type: "O" },
        { x: 45, y: 40, label: "Steroid Core", type: "C" },
        { x: 80, y: 40, label: "17β-OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 53,
    name: "Progesteron",
    engName: "Progesterone",
    nameDe: "Progesteron",
    nameFr: "Progestérone",
    code3: "P4",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C21H30O2",
    condensed: "Pregn-4-en-3,20-dion",
    desc: "Gestagenní steroidní hormon produkovaný žlutým tělískem pro udržení těhotenství.",
    descEn: "Endogenous progestogen steroid hormone essential for pregnancy maintenance.",
    descDe: "Gelbkörperhormon (Gestagen) zur Aufrechterhaltung der Schwangerschaft.",
    descFr: "Hormone stéroïde progestative indispensable au maintien de la grossesse.",
    smiles: "CC(=O)C1CCC2C1(CCC3C2CCC4=CC(=O)CCC34C)C",
    structure: {
      atoms: [
        { x: 15, y: 40, label: "3=O", type: "O" },
        { x: 45, y: 40, label: "Steroid", type: "C" },
        { x: 80, y: 40, label: "CO-CH₃", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 54,
    name: "Lipid A",
    engName: "Lipid A",
    nameDe: "Lipid A",
    nameFr: "Lipide A",
    code3: "Lipid A",
    group: "saccharolipid",
    groupCz: "Sacharolipidy",
    formula: "C110H202N2O39P2",
    condensed: "Endotoxin Gram-negativních bakterií",
    desc: "Sacharolipidová ukotvovací složka lipopolysacharidu (LPS) vyvolávající septický šok přes TLR4 receptory.",
    descEn: "Hydrophobic anchor of lipopolysaccharide (LPS) inducing immune response via TLR4.",
    descDe: "Endotoxin-Komponente von Gram-negativen Bakterien (LPS-Anker).",
    descFr: "Ancre hydrophobe du lipopolysaccharide (LPS) provoquant le choc septique via TLR4.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 15, y: 35, label: "P-GlcN-GlcN-P", type: "N" },
        { x: 60, y: 35, label: "6 Acyl chains", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }
      ]
    }
  },
  {
    id: 55,
    name: "Aflatoxin B1",
    engName: "Aflatoxin B1",
    nameDe: "Aflatoxin B1",
    nameFr: "Aflatoxine B1",
    code3: "AFB1",
    group: "polyketide",
    groupCz: "Polyketidy",
    formula: "C17H12O6",
    condensed: "Mykotoxin",
    desc: "Extrémně karcinogenní furanokumarinový polyketidový mykotoxin produkovaný plísní Aspergillus flavus.",
    descEn: "Potent hepatocarcinogenic polyketide mycotoxin produced by Aspergillus molds.",
    descDe: "Stark karzinogenes Mykotoxin aus Aspergillus-Schimmelpilzen.",
    descFr: "Mycotoxine polykétide fortement hépatocarcinogène produite par Aspergillus.",
    smiles: "O=C1C2=C(C3=C(O1)C=CC4=C3C(=O)CC4)C5=C(O2)C=CO5",
    structure: {
      atoms: [
        { x: 25, y: 40, label: "Furan", type: "O" },
        { x: 50, y: 40, label: "Coumarin", type: "C" },
        { x: 75, y: 40, label: "Cyclopentenone", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 56,
    name: "Erythromycin",
    engName: "Erythromycin",
    nameDe: "Erythromycin",
    nameFr: "Érythromycine",
    code3: "Erythromycin",
    group: "polyketide",
    groupCz: "Polyketidy",
    formula: "C37H67NO13",
    condensed: "Makrolidové antibiotikum",
    desc: "Makrolidové 14-členné polyketidové antibiotikum inhibující bakteriální proteosyntézu 50S podjednotky.",
    descEn: "14-membered macrolide polyketide antibiotic inhibiting bacterial ribosome 50S subunit.",
    descDe: "Makrolid-Antibiotikum zur Hemmung der bakteriellen Proteinsynthese.",
    descFr: "Antibiotique macrolide inhibant la sous-unité ribosomique 50S.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 40, y: 40, label: "14-Makrolakton", type: "O" },
        { x: 15, y: 60, label: "Desosamin", type: "N" },
        { x: 75, y: 60, label: "Kladinóza", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 0, to: 2, type: 1 }
      ]
    }
  },

  // ─── VERZE 4: MASS SPEC NIGHTMARE (q=8, 73 Lipidů) [57..72] ───────────────
  {
    id: 57,
    name: "PC(16:0/18:1)",
    engName: "PC(16:0/18:1)",
    nameDe: "PC(16:0/18:1)",
    nameFr: "PC(16:0/18:1)",
    code3: "PC(16:0/18:1)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C42H82NO8P",
    condensed: "1-palmitoyl-2-oleoyl-sn-glycero-3-phosphocholine",
    desc: "Klasická nejhojnější fosfatidylcholinová molekulární verze eukaryotických membrán (POPC).",
    descEn: "Prototypical fluid membrane phosphatidylcholine species (POPC).",
    descDe: "Prototypisches Phosphatidylcholin der Plasmamembran.",
    descFr: "Espèce prototypique de phosphatidylcholine membranaire.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "Cholin-P", type: "N" },
        { x: 50, y: 30, label: "sn-1 PA(16:0)", type: "C" },
        { x: 50, y: 60, label: "sn-2 OA(18:1=)", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 58,
    name: "PC(18:0/20:4)",
    engName: "PC(18:0/20:4)",
    nameDe: "PC(18:0/20:4)",
    nameFr: "PC(18:0/20:4)",
    code3: "PC(18:0/20:4)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C46H84NO8P",
    condensed: "1-stearoyl-2-arachidonoyl-sn-glycero-3-PC",
    desc: "SOPC druh bohatý na arachidonát v poloze sn-2 pro tvorbu eikosanoidů.",
    descEn: "Stearoyl-arachidonoyl PC species providing arachidonate for signaling.",
    descDe: "Arachidonsäurereiche PC-Spezies.",
    descFr: "Espèce PC riche en arachidonate en position sn-2.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "Cholin-P", type: "N" },
        { x: 50, y: 30, label: "sn-1 SA(18:0)", type: "C" },
        { x: 50, y: 60, label: "sn-2 AA(20:4=4)", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 59,
    name: "PE(16:0/18:1)",
    engName: "PE(16:0/18:1)",
    nameDe: "PE(16:0/18:1)",
    nameFr: "PE(16:0/18:1)",
    code3: "PE(16:0/18:1)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C39H76NO8P",
    condensed: "1-palmitoyl-2-oleoyl-sn-glycero-3-PE",
    desc: "Běžný druh phosphatidylethanolaminu (POPE) zkoumaný v MS lipidomice.",
    descEn: "Common phosphatidylethanolamine species (POPE) in lipidomics.",
    descDe: "Häufige PE-Spezies (POPE) in der Lipidomik.",
    descFr: "Espèce PE commune (POPE) en lipidomique.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCCN)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "Ethanolamin-P", type: "N" },
        { x: 50, y: 30, label: "sn-1 (16:0)", type: "C" },
        { x: 50, y: 60, label: "sn-2 (18:1)", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 60,
    name: "PE(P-16:0/22:6)",
    engName: "PE(P-16:0/22:6)",
    nameDe: "PE(P-16:0/22:6)",
    nameFr: "PE(P-16:0/22:6)",
    code3: "PE(P-16:0/22:6)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C43H76NO7P",
    condensed: "Plasmalogen PE",
    desc: "Ether-plasmalogenový druh v mozku s vinyl-etherovou vazbou v sn-1 a DHA v sn-2.",
    descEn: "Plasmalogen PE species with vinyl-ether linkage and DHA tail abundant in brain.",
    descDe: "Ether-Plasmalogen im Gehirn mit DHA.",
    descFr: "Plasmalogène PE du cerveau à liaison vinyl-éther et DHA.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "PE-P", type: "N" },
        { x: 50, y: 30, label: "sn-1 VinylEther", type: "O" },
        { x: 50, y: 60, label: "sn-2 DHA(22:6)", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 61,
    name: "PS(18:0/18:1)",
    engName: "PS(18:0/18:1)",
    nameDe: "PS(18:0/18:1)",
    nameFr: "PS(18:0/18:1)",
    code3: "PS(18:0/18:1)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C42H80NO10P",
    condensed: "1-stearoyl-2-oleoyl-PS",
    desc: "Dominantní druh phosphatidylserinu v savčích neuronech (SOPS).",
    descEn: "Dominant phosphatidylserine species in mammalian neuronal membranes.",
    descDe: "Dominante PS-Spezies in Säugetiergehirnen.",
    descFr: "Espèce majeure de PS dans les neurones de mammifères.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC(N)C(=O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "Serin-P", type: "N" },
        { x: 50, y: 30, label: "18:0", type: "C" },
        { x: 50, y: 60, label: "18:1", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 62,
    name: "PI(16:0/18:1)",
    engName: "PI(16:0/18:1)",
    nameDe: "PI(16:0/18:1)",
    nameFr: "PI(16:0/18:1)",
    code3: "PI(16:0/18:1)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C43H81O13P",
    condensed: "1-palmitoyl-2-oleoyl-PI",
    desc: "Phosphatidylinositolový druh měřený v negativním MS módu [M-H]⁻ m/z 835.5.",
    descEn: "Phosphatidylinositol species analyzed in negative ion LC-MS lipidomics.",
    descDe: "PI-Spezies in der negativen LC-MS-Analytik.",
    descFr: "Espèce PI mesurée en mode ionique négatif en spectrométrie de masse.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)OC1C(O)C(O)C(O)C(O)C1O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "Inositol-P", type: "P" },
        { x: 50, y: 30, label: "16:0", type: "C" },
        { x: 50, y: 60, label: "18:1", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 63,
    name: "PIP3(16:0/18:1)",
    engName: "PIP3(16:0/18:1)",
    nameDe: "PIP3(16:0/18:1)",
    nameFr: "PIP3(16:0/18:1)",
    code3: "PIP3(16:0/18:1)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C43H83O19P4",
    condensed: "PI(3,4,5)P3",
    desc: "Produkt PI3-kinázy zapojený v Akt/mTOR dráze rústového signálu.",
    descEn: "PI3-Kinase product key to Akt/mTOR survival pathway.",
    descDe: "PI3K-Produkt in der Akt/mTOR-Signalkaskade.",
    descFr: "Produit de la PI3K activant la voie Akt/mTOR.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)O)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "Inositol-3P", type: "P" },
        { x: 50, y: 30, label: "16:0", type: "C" },
        { x: 50, y: 60, label: "18:1", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 64,
    name: "SM(d18:1/16:0)",
    engName: "SM(d18:1/16:0)",
    nameDe: "SM(d18:1/16:0)",
    nameFr: "SM(d18:1/16:0)",
    code3: "SM(d18:1/16:0)",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C39H79N2O6P",
    condensed: "N-palmitoylsfingomyelin",
    desc: "Nejčastější druh sfingomyelinu plazmatické membrány tvořený d18:1 sfingosinem a palmitátem.",
    descEn: "Most abundant plasma membrane sphingomyelin species.",
    descDe: "Häufigste Sphingomyelin-Spezies der Membran.",
    descFr: "Espèce de sphingomyéline la plus abondante.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(COP(=O)([O-])OCC[N+](C)(C)C)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "PC-head", type: "N" },
        { x: 50, y: 30, label: "d18:1 base", type: "C" },
        { x: 50, y: 60, label: "16:0 fatty acid", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 65,
    name: "SM(d18:1/24:1)",
    engName: "SM(d18:1/24:1)",
    nameDe: "SM(d18:1/24:1)",
    nameFr: "SM(d18:1/24:1)",
    code3: "SM(d18:1/24:1)",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C47H93N2O6P",
    condensed: "N-nervonoylsfingomyelin",
    desc: "Velmi dlouhý sfingomyelinový druh s kyselinou nervonovou (24:1) zahušťující lipidový bilopayer.",
    descEn: "Very long chain SM species containing nervonic acid (24:1).",
    descDe: "Sehr langkettige SM-Spezies mit Nervonsäure.",
    descFr: "Espèce SM à très longue chaîne avec acide nervonique.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(COP(=O)([O-])OCC[N+](C)(C)C)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "PC-head", type: "N" },
        { x: 50, y: 30, label: "d18:1 base", type: "C" },
        { x: 50, y: 60, label: "24:1 (nervonoyl)", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 66,
    name: "Cer(d18:1/16:0)",
    engName: "Cer(d18:1/16:0)",
    nameDe: "Cer(d18:1/16:0)",
    nameFr: "Cer(d18:1/16:0)",
    code3: "Cer(d18:1/16:0)",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C34H67NO3",
    condensed: "C16-Ceramid",
    desc: "Pro-apoptotický ceramid syntetizovaný ceramid syntázou 5/6 (CerS5/6).",
    descEn: "Pro-apoptotic C16-ceramide produced by CerS5/CerS6.",
    descDe: "Pro-apoptotisches C16-Ceramid.",
    descFr: "C16-céramide pro-apoptotique produit par CerS5/6.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(CO)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "OH", type: "O" },
        { x: 50, y: 30, label: "d18:1 base", type: "C" },
        { x: 50, y: 60, label: "16:0 amide", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 67,
    name: "Cer(d18:1/24:0)",
    engName: "Cer(d18:1/24:0)",
    nameDe: "Cer(d18:1/24:0)",
    nameFr: "Cer(d18:1/24:0)",
    code3: "Cer(d18:1/24:0)",
    group: "sphingolipid",
    groupCz: "Sfingolipidy",
    formula: "C42H83NO3",
    condensed: "C24-Ceramid",
    desc: "VLC-ceramidový druh vytvářený CerS2 regulující jaterní metabolismus.",
    descEn: "Very long chain C24-ceramide produced by CerS2.",
    descDe: "Sehr langkettiges C24-Ceramid aus CerS2.",
    descFr: "C24-céramide à très longue chaîne produit par CerS2.",
    smiles: "CCCCCCCCCCCCCC=CC(O)C(CO)NC(=O)CCCCCCCCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "OH", type: "O" },
        { x: 50, y: 30, label: "d18:1 base", type: "C" },
        { x: 50, y: 60, label: "24:0 lignoceroyl", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 68,
    name: "TAG(16:0/18:1/18:1)",
    engName: "TAG(16:0/18:1/18:1)",
    nameDe: "TAG(16:0/18:1/18:1)",
    nameFr: "TAG(16:0/18:1/18:1)",
    code3: "TAG(52:2)",
    group: "glycerolipid",
    groupCz: "Glycerolipidy",
    formula: "C55H102O6",
    condensed: "POO-triacylglycerol",
    desc: "Specifický druh triacylglycerolu (POO) s m/z [M+NH4]⁺ 876.8 v LC-MS.",
    descEn: "Specific triacylglycerol species (POO) common in lipidomics.",
    descDe: "Spezifische TAG-Spezies (POO) in der MS-Analytik.",
    descFr: "Espèce spécifique de triglycéride (POO).",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COC(=O)CCCCCCCCCCCCCCC)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 20, label: "16:0", type: "C" },
        { x: 50, y: 50, label: "Glycerol", type: "C" },
        { x: 80, y: 20, label: "18:1", type: "C" },
        { x: 80, y: 80, label: "18:1", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 1, to: 3, type: 1 }
      ]
    }
  },
  {
    id: 69,
    name: "LPC(16:0)",
    engName: "LPC(16:0)",
    nameDe: "LPC(16:0)",
    nameFr: "LPC(16:0)",
    code3: "LPC(16:0)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C24H50NO7P",
    condensed: "1-palmitoyl-sn-glycero-3-phosphocholine",
    desc: "Lyso-phosphatidylcholinový metabolit v krevní plazmě spojený se zánětem.",
    descEn: "Lysophosphatidylcholine species prevalent in blood plasma.",
    descDe: "Lysophosphatidylcholin-Spezies im Blutplasma.",
    descFr: "Lysophosphatidylcholine majeure du plasma sanguin.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCC[N+](C)(C)C)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 40, label: "Cholin-P", type: "N" },
        { x: 50, y: 40, label: "Glycerol-OH", type: "C" },
        { x: 80, y: 40, label: "16:0", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 70,
    name: "LPE(18:1)",
    engName: "LPE(18:1)",
    nameDe: "LPE(18:1)",
    nameFr: "LPE(18:1)",
    code3: "LPE(18:1)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C23H46NO7P",
    condensed: "1-oleoyl-sn-glycero-3-PE",
    desc: "Lyso-phosphatidylethanolaminový druh vznikající z PE působením phospholipázy A2.",
    descEn: "Lysophosphatidylethanolamine product of Phospholipase A2.",
    descDe: "LPE-Spezies aus der Phospholipase A2-Spaltung.",
    descFr: "Lysophosphatidyléthanolamine produite par la PLA2.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)([O-])OCCN)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 40, label: "PE-P", type: "N" },
        { x: 50, y: 40, label: "Glycerol-OH", type: "C" },
        { x: 80, y: 40, label: "18:1", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 71,
    name: "CE(18:1)",
    engName: "CE(18:1)",
    nameDe: "CE(18:1)",
    nameFr: "CE(18:1)",
    code3: "CE(18:1)",
    group: "sterol",
    groupCz: "Steroly",
    formula: "C45H78O2",
    condensed: "Cholesteryl-oleát",
    desc: "Ester cholesterolu s kyselinou olejovou transportovaný v jádru LDL a HDL lipoproteinových částic.",
    descEn: "Cholesteryl ester species transported inside core of LDL and HDL lipoproteins.",
    descDe: "Cholesterinester im Kern von LDL und HDL.",
    descFr: "Ester de cholestérol transporté au cœur des lipoprotéines LDL et HDL.",
    smiles: "CCCCCCCC=CCCCCCCCC(=O)OC1CCC2(C)C3CCC4(C)C(CCC4C3CCC2C1)C(C)CCCC(C)C",
    structure: {
      atoms: [
        { x: 30, y: 40, label: "Cholesterol Nucleus", type: "C" },
        { x: 75, y: 40, label: "Oleát (18:1)", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }
      ]
    }
  },
  {
    id: 72,
    name: "CL(16:0/18:1/16:0/18:1)",
    engName: "CL(16:0/18:1/16:0/18:1)",
    nameDe: "CL(16:0/18:1/16:0/18:1)",
    nameFr: "CL(16:0/18:1/16:0/18:1)",
    code3: "CL(68:2)",
    group: "glycerophospholipid",
    groupCz: "Glycerofosfolipidy",
    formula: "C77H148O17P2",
    condensed: "Kardiolipinový molekulární druh (68:2)",
    desc: "Konkrétní molekulární druh kardiolipinu s m/z [M-H]⁻ 1400.0 charakteristický v MS lipidomice.",
    descEn: "Specific cardiolipin species with 4 acyl chains analyzed by tandem MS/MS.",
    descDe: "Spezifische Cardiolipin-Molekülspezies in der MS/MS-Analytik.",
    descFr: "Espèce spécifique de cardiolipine à 4 chaînes d'acyle.",
    smiles: "CCCCCCCCCCCCCCCC(=O)OCC(COP(=O)(O)OCC(O)COP(=O)(O)OCC(OC(=O)CCCCCCCC=CCCCCCCCC)COC(=O)CCCCCCCCCCCCCCCC)OC(=O)CCCCCCCC=CCCCCCCCC",
    structure: {
      atoms: [
        { x: 20, y: 30, label: "P1", type: "P" },
        { x: 50, y: 50, label: "Central Glycerol", type: "C" },
        { x: 80, y: 30, label: "P2", type: "P" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  }
];

/**
 * Render standard 2D chemical structure to SVG string.
 */
function renderStructureToSVG(structure, width = 140, height = 140, bondColor = "#000000", bondWidth = 2.0) {
  if (!structure || !structure.atoms || structure.atoms.length === 0) {
    return `<svg width="${width}" height="${height}"></svg>`;
  }

  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  
  structure.atoms.forEach(atom => {
    const cleanLabel = atom.label ? atom.label.replace(/[\u2080-\u2089]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x2080 + 48)) : "";
    const isAliphaticCarbon = atom.label && /^(CH\d*|H\d*C|C)$/i.test(cleanLabel);
    const hasVisibleLabel = atom.label && !isAliphaticCarbon;
    
    const padding = hasVisibleLabel ? 12 : 3;
    if (atom.x - padding < minX) minX = atom.x - padding;
    if (atom.x + padding > maxX) maxX = atom.x + padding;
    if (atom.y - padding < minY) minY = atom.y - padding;
    if (atom.y + padding > maxY) maxY = atom.y + padding;
  });

  const contentW = maxX - minX || 10;
  const contentH = maxY - minY || 10;
  
  const margin = 10;
  const vbX = minX - margin;
  const vbY = minY - margin;
  const vbW = contentW + 2 * margin;
  const vbH = contentH + 2 * margin;

  let svgContent = "";
  
  // Draw bonds
  (structure.bonds || []).forEach(bond => {
    const fromAtom = structure.atoms[bond.from];
    const toAtom = structure.atoms[bond.to];
    if (!fromAtom || !toAtom) return;
    
    if (bond.type === 2) {
      const dx = toAtom.x - fromAtom.x;
      const dy = toAtom.y - fromAtom.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const px = -dy / len * 2;
      const py = dx / len * 2;
      
      svgContent += `
        <line x1="${fromAtom.x - px}" y1="${fromAtom.y - py}" x2="${toAtom.x - px}" y2="${toAtom.y - py}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
        <line x1="${fromAtom.x + px}" y1="${fromAtom.y + py}" x2="${toAtom.x + px}" y2="${toAtom.y + py}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
      `;
    } else {
      svgContent += `
        <line x1="${fromAtom.x}" y1="${fromAtom.y}" x2="${toAtom.x}" y2="${toAtom.y}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
      `;
    }
  });

  // Draw atom text labels with background white mask
  structure.atoms.forEach(atom => {
    const cleanLabel = atom.label ? atom.label.replace(/[\u2080-\u2089]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x2080 + 48)) : "";
    const isAliphaticCarbon = atom.label && /^(CH\d*|H\d*C|C)$/i.test(cleanLabel);
    if (atom.label && !isAliphaticCarbon) {
      let color = "#000000";
      if (atom.type === "O") color = "#d32f2f"; // Wikipedia Red
      if (atom.type === "N") color = "#1976d2"; // Wikipedia Blue
      if (atom.type === "S") color = "#d97706"; // Wikipedia Gold
      if (atom.type === "P") color = "#7b1fa2"; // Wikipedia Purple

      let labelWidth = Math.max(16, atom.label.length * 7.5);
      let labelHeight = 13;
      
      svgContent += `
        <rect x="${atom.x - labelWidth/2}" y="${atom.y - labelHeight/2 - 1}" width="${labelWidth}" height="${labelHeight * 1.3}" fill="#FFFFFF" />
        <text x="${atom.x}" y="${atom.y + 1}" font-family="Arial, Helvetica, sans-serif" font-size="11px" font-weight="normal" fill="${color}" text-anchor="middle" dominant-baseline="middle">${atom.label}</text>
      `;
    }
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" width="${width}" height="${height}">${svgContent}</svg>`;
}

/**
 * Returns localized name for lipid based on language code.
 */
function getLipidName(lipid, lang = "cs") {
  switch (lang) {
    case "cs": return lipid.name;
    case "de": return lipid.nameDe || lipid.engName;
    case "fr": return lipid.nameFr || lipid.engName;
    case "en":
    default:   return lipid.engName;
  }
}

/**
 * Returns localized description for lipid.
 */
function getLipidDesc(lipid, lang = "cs") {
  switch (lang) {
    case "cs": return lipid.desc;
    case "de": return lipid.descDe || lipid.descEn;
    case "fr": return lipid.descFr || lipid.descEn;
    case "en":
    default:   return lipid.descEn;
  }
}

/**
 * Returns sub-array of lipids based on game version.
 * membrane: 13, signaling: 31, atlas: 57, massspec: 73
 */
function getLipidsForVersion(version) {
  if (version === "membrane") return LIPIDS.slice(0, 13);
  if (version === "signaling") return LIPIDS.slice(0, 31);
  if (version === "atlas") return LIPIDS.slice(0, 57);
  return LIPIDS;
}

