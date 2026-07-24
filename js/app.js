// js/app.js — Main Application Controller for LipidoDobble

const _VALID_LANGS = ["cs", "en", "de", "fr"];

function getLanguageFromURL() {
  const hashRaw = window.location.hash || "";
  if (hashRaw) {
    let hashClean = hashRaw.replace(/^#\/?/, '').split('?')[0].split('/')[0].trim().toLowerCase();
    if (hashClean.startsWith("lang=")) {
      hashClean = hashClean.replace("lang=", "");
    }
    if (hashClean === "cz") hashClean = "cs";
    if (_VALID_LANGS.includes(hashClean)) {
      return hashClean;
    }
  }

  const searchParams = new URLSearchParams(window.location.search);
  let urlLang = searchParams.get("lang");
  if (!urlLang) {
    for (const lang of ["cs", "cz", "en", "de", "fr"]) {
      if (searchParams.has(lang)) {
        urlLang = lang;
        break;
      }
    }
  }
  if (urlLang) {
    urlLang = urlLang.trim().toLowerCase();
    if (urlLang === "cz") urlLang = "cs";
    if (_VALID_LANGS.includes(urlLang)) {
      return urlLang;
    }
  }

  const path = window.location.pathname.toLowerCase();
  for (const lang of ["en", "de", "fr", "cs", "cz"]) {
    if (path.includes("/" + lang + "/") || path.endsWith("/" + lang)) {
      return lang === "cz" ? "cs" : lang;
    }
  }

  return null;
}

function resolveInitialLanguage(storageKey) {
  const urlLang = getLanguageFromURL();
  if (urlLang) {
    localStorage.setItem(storageKey, urlLang);
    return urlLang;
  }
  const storedLang = localStorage.getItem(storageKey);
  if (storedLang && _VALID_LANGS.includes(storedLang)) {
    return storedLang;
  }
  return "cs";
}

window.currentLang = resolveInitialLanguage("lipido_dobble_lang");
window.currentLipidoVersion = localStorage.getItem("lipido_dobble_version") || "signaling"; // membrane (q=3), signaling (q=5), atlas (q=7), massspec (q=8)

const TRANSLATIONS = {
  cs: {
    tab_home: "Úvod",
    tab_encyclopedia: "Encyklopedie",
    tab_game: "Tréninková Hra",
    tab_generator: "Generátor Karet",
    ver_label: "Verze hry:",
    ver_membrane: "Membrána (q=3, 13 lipidů)",
    ver_signaling: "Signalizace (q=5, 31 lipidů)",
    ver_atlas: "LIPID MAPS (q=7, 57 lipidů)",
    ver_massspec: "Mass Spec Nightmare (q=8, 73 druhů)",
    hero_title: "Lipido-Dobble s lipidy",
    hero_desc: "Interaktivní trenažér a generátor karet Dobble pro lipidomiku. Poznávejte mastné kyseliny, fosfolipidy, sfingolipidy, steroly a hmotnostně-spektrometrické druhy!",
    hero_btn_play: "Hrát Hru",
    hero_btn_print: "Tisknout Karty",
    search_placeholder: "Hledat podle názvu, zkratky nebo vzorce...",
    filter_all: "Všechny",
    filter_fa: "Mastné kyseliny (FA)",
    filter_gp: "Glycerofosfolipidy (GP)",
    filter_sp: "Sfingolipidy (SP)",
    filter_st: "Steroly (ST)",
    filter_gl: "Glycerolipidy (GL)",
    gen_title: "Nastavení tiskovin",
    card_shape_label: "Tvar karet",
    shape_square: "Čtvercové (Snazší stříhání)",
    shape_circle: "Kulaté (Tradiční Dobble)",
    print_layout_label: "Počet karet na stránku (A4)",
    layout_6: "6 karet (Velké - průměr 95 mm)",
    layout_4: "4 karty (Obří - průměr 100 mm)",
    layout_8: "8 karet (Střední - průměr 71 mm)",
    layout_12: "12 karet (Malé - průměr 66 mm)",
    rotate_symbols_label: "Náhodně otáčet symboly",
    rotate_symbols_sub: "Zvyšuje obtížnost otáčením textů a vzorců.",
    guarantee_diff_label: "Vždy odlišná reprezentace",
    guarantee_diff_sub: "Zaručí, že společný lipid má na dvou kartách jiný formát.",
    active_reps_label: "Aktivní reprezentace",
    rep_name_local: "Název lipidu (v jazyce stránky)",
    rep_name_alt: "Alternativní název lipidu",
    rep_code3: "Lipidová zkratka (code3)",
    rep_structure2d: "2D Strukturní vzorec",
    rep_structure3d: "3D Model (PyMOL)",
    rep_formula: "Sumární vzorec",
    rep_smiles: "SMILES řetězec",
    cheat_label: "Zobrazit tahák řešení",
    cheat_sub: "Vytiskne v rohu karty seznam zkratek lipidů.",
    btn_print: "Tisknout sadu karet",
    preview_title: "Náhled karet",
    btn_regenerate: "Přegenerovat sady",
    footer_text: "<p>&copy; 2026 Lipido-Dobble. Součást <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/lipido-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  en: {
    tab_home: "Home",
    tab_encyclopedia: "Encyclopedia",
    tab_game: "Training Game",
    tab_generator: "Card Generator",
    ver_label: "Game Version:",
    ver_membrane: "Membrane (q=3, 13 lipids)",
    ver_signaling: "Signaling (q=5, 31 lipids)",
    ver_atlas: "LIPID MAPS (q=7, 57 lipids)",
    ver_massspec: "Mass Spec Nightmare (q=8, 73 species)",
    hero_title: "Lipido-Dobble with Lipids",
    hero_desc: "Interactive card generator and training deck simulator for lipidomics. Practice recognizing fatty acids, phospholipids, sphingolipids, sterols and mass-spec molecular species!",
    hero_btn_play: "Play Game",
    hero_btn_print: "Print Cards",
    search_placeholder: "Search by name, code, or formula...",
    filter_all: "All",
    filter_fa: "Fatty Acids (FA)",
    filter_gp: "Glycerophospholipids (GP)",
    filter_sp: "Sphingolipids (SP)",
    filter_st: "Sterols (ST)",
    filter_gl: "Glycerolipids (GL)",
    gen_title: "Print Settings",
    card_shape_label: "Card Shape",
    shape_square: "Square (Easier to cut)",
    shape_circle: "Circular (Classic Dobble)",
    print_layout_label: "Cards per A4 Page",
    layout_6: "6 cards (Large - 95mm diameter)",
    layout_4: "4 cards (Giant - 100mm diameter)",
    layout_8: "8 cards (Medium - 71mm diameter)",
    layout_12: "12 cards (Small - 66mm diameter)",
    rotate_symbols_label: "Random Symbol Rotation",
    rotate_symbols_sub: "Increases difficulty by rotating text and formulas.",
    guarantee_diff_label: "Always Different Representation",
    guarantee_diff_sub: "Guarantees matching lipid has different representation formats.",
    active_reps_label: "Active Representations",
    rep_name_local: "Lipid Name (Current Language)",
    rep_name_alt: "Alternative Lipid Name",
    rep_code3: "Lipid Code (code3)",
    rep_structure2d: "2D Structural Formula",
    rep_structure3d: "3D Model (PyMOL)",
    rep_formula: "Molecular Formula",
    rep_smiles: "SMILES String",
    cheat_label: "Show Solution Cheat Key",
    cheat_sub: "Prints small list of lipid codes in the corner of cards.",
    btn_print: "Print Card Deck",
    preview_title: "Card Preview",
    btn_regenerate: "Regenerate Decks",
    footer_text: "<p>&copy; 2026 Lipido-Dobble. Part of <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Author: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/lipido-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  de: {
    tab_home: "Startseite",
    tab_encyclopedia: "Enzyklopädie",
    tab_game: "Trainingsspiel",
    tab_generator: "Kartengenerator",
    ver_label: "Spielversion:",
    ver_membrane: "Membran (q=3, 13 Lipide)",
    ver_signaling: "Signalwege (q=5, 31 Lipide)",
    ver_atlas: "LIPID MAPS (q=7, 57 Lipide)",
    ver_massspec: "Mass Spec Nightmare (q=8, 73 Arten)",
    hero_title: "Lipido-Dobble mit Lipiden",
    hero_desc: "Interaktiver Kartengenerator und Trainingssimulator für die Lipidomik. Üben Sie das Erkennen von Fettsäuren, Phospholipiden, Sphingolipiden und Sterolen!",
    hero_btn_play: "Spiel starten",
    hero_btn_print: "Karten drucken",
    search_placeholder: "Suchen nach Name, Code oder Formel...",
    filter_all: "Alle",
    filter_fa: "Fettsäuren (FA)",
    filter_gp: "Glycerophospholipide (GP)",
    filter_sp: "Sphingolipide (SP)",
    filter_st: "Sterole (ST)",
    filter_gl: "Glycerolipide (GL)",
    gen_title: "Druckeinstellungen",
    card_shape_label: "Kartenform",
    shape_square: "Quadratisch (Einfacher zu schneiden)",
    shape_circle: "Rund (Klassisches Dobble)",
    print_layout_label: "Karten pro A4-Seite",
    layout_6: "6 Karten (Groß - 95 mm)",
    layout_4: "4 Karten (Riesig - 100 mm)",
    layout_8: "8 Karten (Mittel - 71 mm)",
    layout_12: "12 Karten (Klein - 66 mm)",
    rotate_symbols_label: "Zufällige Symboldrehung",
    rotate_symbols_sub: "Erhöht den Schwierigkeitsgrad durch Drehen von Texten.",
    guarantee_diff_label: "Immer unterschiedliche Darstellungen",
    guarantee_diff_sub: "Garantiert unterschiedliche Darstellungsformen des gleichen Lipids.",
    active_reps_label: "Aktive Darstellungsarten",
    rep_name_local: "Lipidname (Aktuelle Sprache)",
    rep_name_alt: "Alternativer Lipidname",
    rep_code3: "Lipid-Code (code3)",
    rep_structure2d: "2D-Strukturformel",
    rep_structure3d: "3D-Modell (PyMOL)",
    rep_formula: "Summenformel",
    rep_smiles: "SMILES-Code",
    cheat_label: "Lösungsschlüssel anzeigen",
    cheat_sub: "Druckt kleine Lipid-Codes in die Kartenecke.",
    btn_print: "Kartensatz drucken",
    preview_title: "Kartenvorschau",
    btn_regenerate: "Decks neu generieren",
    footer_text: "<p>&copy; 2026 Lipido-Dobble. Teil von <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/lipido-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  fr: {
    tab_home: "Accueil",
    tab_encyclopedia: "Encyclopédie",
    tab_game: "Jeu d'entraînement",
    tab_generator: "Générateur de cartes",
    ver_label: "Version du jeu :",
    ver_membrane: "Membrane (q=3, 13 lipides)",
    ver_signaling: "Signalisation (q=5, 31 lipides)",
    ver_atlas: "LIPID MAPS (q=7, 57 lipides)",
    ver_massspec: "Mass Spec Nightmare (q=8, 73 espèces)",
    hero_title: "Lipido-Dobble avec les lipides",
    hero_desc: "Générateur de cartes interactif pour la lipidomique. Entraînez-vous à reconnaître les acides gras, phospholipides, sphingolipides, stérols et espèces moléculaires !",
    hero_btn_play: "Jouer",
    hero_btn_print: "Imprimer les cartes",
    search_placeholder: "Rechercher par nom, code...",
    filter_all: "Tous",
    filter_fa: "Acides gras (FA)",
    filter_gp: "Glycérophospholipides (GP)",
    filter_sp: "Sphingolipides (SP)",
    filter_st: "Stérols (ST)",
    filter_gl: "Glycérolipides (GL)",
    gen_title: "Paramètres d'impression",
    card_shape_label: "Forme des cartes",
    shape_square: "Carré (Plus facile à découper)",
    shape_circle: "Rond (Dobble classique)",
    print_layout_label: "Cartes par page A4",
    layout_6: "6 cartes (Grand - 95 mm)",
    layout_4: "4 cartes (Géant - 100 mm)",
    layout_8: "8 cartes (Moyen - 71 mm)",
    layout_12: "12 cartes (Petit - 66 mm)",
    rotate_symbols_label: "Rotation aléatoire des symboles",
    rotate_symbols_sub: "Augmente la difficulté en tournant les textes.",
    guarantee_diff_label: "Représentations toujours différentes",
    guarantee_diff_sub: "Garantit des formats de représentation différents pour le même lipide.",
    active_reps_label: "Représentations actives",
    rep_name_local: "Nom du lipide (Langue actuelle)",
    rep_name_alt: "Nom alternatif du lipide",
    rep_code3: "Code du lipide (code3)",
    rep_structure2d: "Formule structurale 2D",
    rep_structure3d: "Modèle 3D (PyMOL)",
    rep_formula: "Formule brute",
    rep_smiles: "Chaîne SMILES",
    cheat_label: "Afficher l'aide mémoire",
    cheat_sub: "Imprime la liste des codes dans le coin de la carte.",
    btn_print: "Imprimer le jeu",
    preview_title: "Aperçu des cartes",
    btn_regenerate: "Régénérer les jeux",
    footer_text: "<p>&copy; 2026 Lipido-Dobble. Fait partie de <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Auteur: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/lipido-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  }
};

let activeGameInstance = null;
let generatedDeck = [];

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initVersionSelector();
  initTabs();
  initLanguage();
  initEncyclopedia();
  initGenerator();

  activeGameInstance = new window.LipidoDobbleGame("game-container");
  activeGameInstance.init();
});

function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("lipido_dobble_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("lipido_dobble_theme", newTheme);
    });
  }
}

function initVersionSelector() {
  document.querySelectorAll(".version-btn").forEach(btn => {
    if (btn.getAttribute("data-version") === window.currentLipidoVersion) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
    btn.addEventListener("click", () => {
      document.querySelectorAll(".version-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      window.currentLipidoVersion = btn.getAttribute("data-version");
      localStorage.setItem("lipido_dobble_version", window.currentLipidoVersion);

      renderEncyclopedia("all", "");
      if (document.getElementById("generator-tab").classList.contains("active")) {
        renderGeneratorPreview(true);
      }
      if (activeGameInstance) activeGameInstance.updateLang();
    });
  });
}

function applyLanguageChange(newLang) {
  if (!_VALID_LANGS.includes(newLang)) return;
  window.currentLang = newLang;
  localStorage.setItem("lipido_dobble_lang", window.currentLang);
  document.documentElement.setAttribute("lang", window.currentLang);

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) langToggle.value = window.currentLang;

  translatePage();
  renderEncyclopedia("all", "");
  if (activeGameInstance) activeGameInstance.updateLang();
}

function initLanguage() {
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.value = window.currentLang;
    langToggle.addEventListener("change", () => {
      applyLanguageChange(langToggle.value);
    });
  }

  translatePage();

  window.addEventListener("hashchange", () => {
    const urlLang = getLanguageFromURL();
    if (urlLang && urlLang !== window.currentLang) {
      applyLanguageChange(urlLang);
    }
  });
}

function translatePage() {
  const lang = window.currentLang;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (dict[key]) {
      if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
}

function initTabs() {
  window.switchTab = function(tabId) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add("active");
    const activeContent = document.getElementById(tabId);
    if (activeContent) activeContent.classList.add("active");

    if (tabId === "generator-tab") renderGeneratorPreview(true);
  };

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
  });
}

function initEncyclopedia() {
  const searchInput = document.getElementById("ref-search");
  const filterBtns = document.querySelectorAll("#ref-filters .filter-btn");

  renderEncyclopedia("all", "");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const activeFilter = document.querySelector("#ref-filters .filter-btn.active")?.getAttribute("data-filter") || "all";
      renderEncyclopedia(activeFilter, query);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
      renderEncyclopedia(filter, query);
    });
  });
}

function renderEncyclopedia(filter, query) {
  const grid = document.getElementById("ref-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const lang = window.currentLang;
  const lipids = getLipidsForVersion(window.currentLipidoVersion);

  const filtered = lipids.filter(l => {
    if (filter !== "all" && l.group !== filter) return false;
    if (query) {
      return (
        l.name.toLowerCase().includes(query) ||
        l.engName.toLowerCase().includes(query) ||
        l.code3.toLowerCase().includes(query) ||
        l.formula.toLowerCase().includes(query)
      );
    }
    return true;
  });

  const categoryMap = {
    cs: { FA: "Mastné kyseliny (FA)", GP: "Glycerofosfolipidy (GP)", SP: "Sfingolipidy (SP)", ST: "Steroly (ST)", GL: "Glycerolipidy (GL)" },
    en: { FA: "Fatty Acids (FA)", GP: "Glycerophospholipids (GP)", SP: "Sphingolipids (SP)", ST: "Sterols (ST)", GL: "Glycerolipids (GL)" },
    de: { FA: "Fettsäuren (FA)", GP: "Glycerophospholipide (GP)", SP: "Sphingolipide (SP)", ST: "Sterole (ST)", GL: "Glycerolipide (GL)" },
    fr: { FA: "Acides gras (FA)", GP: "Glycérophospholipides (GP)", SP: "Sphingolipides (SP)", ST: "Stérols (ST)", GL: "Glycérolipides (GL)" }
  };
  const classLabelMap = { cs: "Třída", en: "Category", de: "Klasse", fr: "Catégorie" };
  const formulaLabelMap = { cs: "Vzorec", en: "Formula", de: "Formel", fr: "Formule" };

  filtered.forEach(l => {
    const card = document.createElement("div");
    card.className = "lipid-card";
    const cleanCode = l.code3.toLowerCase().replace("(", "_").replace(")", "_").replace(":", "_").replace("/", "_");
    const categoryName = categoryMap[lang]?.[l.group] || l.groupCz || l.group;
    const subTitle = lang === "cs" ? l.engName : (l.name !== getLipidName(l, lang) ? l.name : l.code3);

    card.innerHTML = `
      <div class="lipid-header">
        <div class="lipid-title">
          <span class="lipid-cz-name">${getLipidName(l, lang)}</span>
          <span class="lipid-eng-name">${subTitle}</span>
        </div>
        <span class="lipid-badge">${l.code3}</span>
      </div>
      <div class="lipid-previews" style="display: flex; gap: 1rem; justify-content: center; align-items: center; background: rgba(255,255,255,0.7); padding: 0.5rem; border-radius: 8px; border: 1px dashed var(--border-color); margin-bottom: 0.75rem;">
        <div title="Strukturní schéma">${renderStructureToSVG(l.structure, 100, 80)}</div>
        <div title="3D model (PyMOL)" style="width: 80px; height: 80px; display: flex; align-items: center; justify-content: center;">
          <img src="assets/structures/${cleanCode}.png" style="width: 100%; height: 100%; object-fit: contain;" onerror="this.style.display='none'">
        </div>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted);">
        <strong>${classLabelMap[lang] || "Category"}:</strong> ${categoryName} | <strong>${formulaLabelMap[lang] || "Formula"}:</strong> ${l.formula}<br>
        <strong>SMILES:</strong> <span style="font-family: monospace; font-size: 0.75rem; word-break: break-all;">${l.smiles}</span>
      </div>
      <p style="font-size: 0.85rem; line-height: 1.4; margin-top: 0.5rem;">${getLipidDesc(l, lang)}</p>
    `;
    grid.appendChild(card);
  });
}

function initGenerator() {
  const regenerateBtn = document.getElementById("btn-regenerate-deck");
  const printBtn = document.getElementById("btn-print-deck");
  const shapeSelect = document.getElementById("set-card-shape");
  const rotationCheckbox = document.getElementById("set-random-rotation");
  const diffRepsCheckbox = document.getElementById("set-guarantee-diff-reps");
  const cheatCheckbox = document.getElementById("set-show-cheat");

  if (regenerateBtn) regenerateBtn.addEventListener("click", () => renderGeneratorPreview(true));
  if (printBtn) printBtn.addEventListener("click", () => window.print());

  if (shapeSelect) shapeSelect.addEventListener("change", () => renderGeneratorPreview(false));
  if (rotationCheckbox) rotationCheckbox.addEventListener("change", () => renderGeneratorPreview(false));
  if (diffRepsCheckbox) diffRepsCheckbox.addEventListener("change", () => renderGeneratorPreview(true));
  if (cheatCheckbox) cheatCheckbox.addEventListener("change", () => renderGeneratorPreview(false));

  document.querySelectorAll(".set-rep-toggle").forEach(cb => {
    cb.addEventListener("change", () => renderGeneratorPreview(true));
  });
}

function getItemDimensions(k) {
  if (k === 4) { // q=3 (Membrane)
    return { scale: 1.15, struct2dSize: 100, img3dSize: 110, textClass: "item-text", code3Class: "item-code3" };
  } else if (k === 6) { // q=5 (Signaling)
    return { scale: 0.95, struct2dSize: 82, img3dSize: 90, textClass: "item-text", code3Class: "item-code3" };
  } else if (k === 8) { // q=7 (LIPID MAPS Atlas)
    return { scale: 0.78, struct2dSize: 64, img3dSize: 70, textClass: "item-text item-text-small", code3Class: "item-code3 item-code3-small" };
  } else { // k >= 9 (q=8, Mass Spec)
    return { scale: 0.72, struct2dSize: 58, img3dSize: 64, textClass: "item-text item-text-small", code3Class: "item-code3 item-code3-small" };
  }
}

function renderGeneratorPreview(recompute = true) {
  const grid = document.getElementById("generator-cards-grid");
  if (!grid) return;

  const currentVer = window.currentLipidoVersion || "signaling";
  const q = currentVer === "membrane" ? 3 : (currentVer === "signaling" ? 5 : (currentVer === "atlas" ? 7 : 8));

  // Gather allowed representations
  const checkedBoxes = document.querySelectorAll(".set-rep-toggle:checked");
  let allowedReps = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
  if (allowedReps.length === 0) {
    allowedReps = [0, 1, 2, 3, 4, 5];
    document.querySelectorAll(".set-rep-toggle").forEach((cb, idx) => { if (idx < 6) cb.checked = true; });
  }

  if (recompute || generatedDeck.length === 0) {
    const lipids = getLipidsForVersion(currentVer);
    const guaranteeDiff = document.getElementById("set-guarantee-diff-reps")?.checked !== false;
    generatedDeck = generateDobbleDeck(lipids, q, guaranteeDiff, allowedReps);
  }

  grid.innerHTML = "";
  const lang = window.currentLang;
  const k = q + 1;
  const dims = getItemDimensions(k);

  let positions = [];
  if (k === 4) positions = [{x:30,y:30},{x:70,y:30},{x:30,y:70},{x:70,y:70}];
  else if (k === 6) positions = [{x:50,y:25},{x:75,y:40},{x:75,y:70},{x:50,y:80},{x:25,y:70},{x:25,y:40}];
  else if (k === 8) positions = [{x:50,y:50},{x:50,y:20},{x:78,y:32},{x:82,y:62},{x:62,y:82},{x:38,y:82},{x:18,y:62},{x:22,y:32}];
  else positions = [{x:50,y:50},{x:50,y:20},{x:78,y:28},{x:85,y:50},{x:78,y:75},{x:50,y:83},{x:22,y:75},{x:15,y:50},{x:22,y:28}];

  const printLayoutSelect = document.getElementById("set-print-layout");
  const layoutVal = printLayoutSelect ? printLayoutSelect.value : "6";
  grid.setAttribute("data-layout", layoutVal);

  const isSquare = document.getElementById("set-card-shape") ? document.getElementById("set-card-shape").value === "square" : true;
  const rotateEnabled = document.getElementById("set-random-rotation") ? document.getElementById("set-random-rotation").checked === true : false;
  const showCheat = document.getElementById("set-show-cheat") ? document.getElementById("set-show-cheat").checked === true : false;

  grid.className = isSquare ? "cards-grid shape-square" : "cards-grid shape-circle";

  generatedDeck.forEach((cardData, idx) => {
    const card = document.createElement("div");
    card.className = `dobble-card ${isSquare ? 'square' : ''}`;

    let itemsHTML = "";
    cardData.items.forEach((item, posIdx) => {
      const pos = positions[posIdx] || {x:50,y:50};
      const l = item.symbol;
      const rep = item.repType;
      const rot = rotateEnabled ? Math.floor(Math.random() * 360) : 0;
      const scale = dims.scale;

      let content = "";
      // 0: Local Name, 1: Local Name (Alt), 2: Code3, 3: 2D, 4: 3D, 5: Formula, 6: SMILES
      if (rep === 0 || rep === 1) content = `<span class="${dims.textClass}">${getLipidName(l, lang)}</span>`;
      else if (rep === 2) content = `<span class="${dims.code3Class}">${l.code3}</span>`;
      else if (rep === 3) content = renderStructureToSVG(l.structure, dims.struct2dSize, dims.struct2dSize);
      else if (rep === 4) {
        const cleanCode = l.code3.toLowerCase().replace("(", "_").replace(")", "_").replace(":", "_").replace("/", "_");
        content = `<img src="assets/structures/${cleanCode}.png" style="width:${dims.img3dSize}px;height:${dims.img3dSize}px;object-fit:contain;" onerror="this.style.display='none'">`;
      }
      else if (rep === 5) content = `<span class="item-condensed">${l.formula}</span>`;
      else content = `<span class="item-smiles" style="font-size:0.55rem;word-break:break-all;line-height:1.1;display:block;max-width:75px;">${l.smiles}</span>`;

      itemsHTML += `
        <div class="card-item" style="--x: ${pos.x}%; --y: ${pos.y}%; --scale: ${scale}; --rot: ${rot}deg;">
          ${content}
        </div>
      `;
    });

    const labelPrefix = lang === "cs" ? "Karta" : (lang === "de" ? "Karte" : (lang === "fr" ? "Carte" : "Card"));
    let labelText = `${labelPrefix} ${idx + 1}`;
    if (showCheat) {
      const listNames = cardData.items.map(it => it.symbol.code3).join(", ");
      labelText += ` • ${listNames}`;
    }

    itemsHTML += `<span style="position: absolute; bottom: 8px; left: 0; right: 0; font-size: 0.6rem; text-align: center; color: var(--text-muted); pointer-events: none; padding: 0 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${labelText}</span>`;
    card.innerHTML = itemsHTML;
    grid.appendChild(card);
  });
}
