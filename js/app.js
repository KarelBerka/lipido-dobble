// js/app.js — Main Application Controller for LipidoDobble

const _VALID_LANGS = ["cs", "en", "de", "fr"];
const _urlLang = new URLSearchParams(window.location.search).get("lang");
const _storedLang = localStorage.getItem("lipido_dobble_lang");
const _resolvedLang = _VALID_LANGS.includes(_urlLang) ? _urlLang : (_VALID_LANGS.includes(_storedLang) ? _storedLang : "cs");

window.currentLang = _resolvedLang;
window.currentLipidoVersion = localStorage.getItem("lipido_dobble_version") || "signaling"; // membrane (q=3), signaling (q=5), atlas (q=7), massspec (q=8)

const TRANSLATIONS = {
  cs: {
    tab_home: "Úvod", tab_encyclopedia: "Encyklopedie", tab_game: "Tréninková Hra", tab_generator: "Generátor Karet",
    hero_title: "Lipido-Dobble s lipidy",
    hero_desc: "Interaktivní trenažér a generátor karet Dobble pro lipidomiku. Poznávejte mastné kyseliny, fosfolipidy, sfingolipidy, steroly a hmotnostně-spektrometrické druhy!",
    hero_btn_play: "Hrát Hru", hero_btn_print: "Tisknout Karty",
    ver_membrane: "Membrána (q=3, 13 lipidů)", ver_signaling: "Signalizace (q=5, 31 lipidů)", ver_atlas: "LIPID MAPS (q=7, 57 lipidů)", ver_massspec: "Mass Spec Nightmare (q=8, 73 druhů)",
    search_placeholder: "Hledat podle názvu, zkratky nebo vzorce...", filter_all: "Všechny",
    btn_print: "Tisknout sadu karet", preview_title: "Náhled karet", btn_regenerate: "Přegenerovat sady",
    footer_text: "<p>&copy; 2026 Lipido-Dobble. Součást <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/lipido-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  en: {
    tab_home: "Home", tab_encyclopedia: "Encyclopedia", tab_game: "Training Game", tab_generator: "Card Generator",
    hero_title: "Lipido-Dobble with Lipids",
    hero_desc: "Interactive card generator and training deck simulator for lipidomics. Practice recognizing fatty acids, phospholipids, sphingolipids, sterols and mass-spec molecular species!",
    hero_btn_play: "Play Game", hero_btn_print: "Print Cards",
    ver_membrane: "Membrane (q=3, 13 lipids)", ver_signaling: "Signaling (q=5, 31 lipids)", ver_atlas: "LIPID MAPS (q=7, 57 lipids)", ver_massspec: "Mass Spec Nightmare (q=8, 73 species)",
    search_placeholder: "Search by name, code, or formula...", filter_all: "All",
    btn_print: "Print Card Deck", preview_title: "Card Preview", btn_regenerate: "Regenerate Decks",
    footer_text: "<p>&copy; 2026 Lipido-Dobble. Part of <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Author: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/lipido-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  de: {
    tab_home: "Startseite", tab_encyclopedia: "Enzyklopädie", tab_game: "Trainingsspiel", tab_generator: "Kartengenerator",
    hero_title: "Lipido-Dobble mit Lipiden",
    hero_desc: "Interaktiver Kartengenerator und Trainingssimulator für die Lipidomik.",
    hero_btn_play: "Spiel starten", hero_btn_print: "Karten drucken",
    ver_membrane: "Membran (q=3, 13 Lipide)", ver_signaling: "Signalwege (q=5, 31 Lipide)", ver_atlas: "LIPID MAPS (q=7, 57 Lipide)", ver_massspec: "Mass Spec Nightmare (q=8, 73 Arten)",
    search_placeholder: "Suchen nach Name, Code oder Formel...", filter_all: "Alle",
    btn_print: "Kartensatz drucken", preview_title: "Kartenvorschau", btn_regenerate: "Decks neu generieren",
    footer_text: "<p>&copy; 2026 Lipido-Dobble. Teil von <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/lipido-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  fr: {
    tab_home: "Accueil", tab_encyclopedia: "Encyclopédie", tab_game: "Jeu d'entraînement", tab_generator: "Générateur de cartes",
    hero_title: "Lipido-Dobble avec les lipides",
    hero_desc: "Générateur de cartes interactif pour la lipidomique.",
    hero_btn_play: "Jouer", hero_btn_print: "Imprimer les cartes",
    ver_membrane: "Membrane (q=3, 13 lipides)", ver_signaling: "Signalisation (q=5, 31 lipides)", ver_atlas: "LIPID MAPS (q=7, 57 lipides)", ver_massspec: "Mass Spec Nightmare (q=8, 73 espèces)",
    search_placeholder: "Rechercher par nom...", filter_all: "Tous",
    btn_print: "Imprimer le jeu", preview_title: "Aperçu des cartes", btn_regenerate: "Régénérer",
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

function initLanguage() {
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.value = window.currentLang;
    translatePage();
    langToggle.addEventListener("change", () => {
      window.currentLang = langToggle.value;
      localStorage.setItem("lipido_dobble_lang", window.currentLang);
      translatePage();
      renderEncyclopedia("all", "");
      if (activeGameInstance) activeGameInstance.updateLang();
    });
  }
}

function translatePage() {
  const lang = window.currentLang;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (dict[key]) el.innerHTML = dict[key];
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

  filtered.forEach(l => {
    const card = document.createElement("div");
    card.className = "lipid-card";
    const cleanCode = l.code3.toLowerCase().replace("(", "_").replace(")", "_").replace(":", "_").replace("/", "_");
    card.innerHTML = `
      <div class="lipid-header">
        <div class="lipid-title">
          <span class="lipid-cz-name">${getLipidName(l, lang)}</span>
          <span class="lipid-eng-name">${l.engName}</span>
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
        <strong>Třída:</strong> ${l.groupCz || l.group} | <strong>Vzorec:</strong> ${l.formula}<br>
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

  let positions = [];
  if (k === 4) positions = [{x:30,y:30},{x:70,y:30},{x:30,y:70},{x:70,y:70}];
  else if (k === 6) positions = [{x:50,y:25},{x:75,y:40},{x:75,y:70},{x:50,y:80},{x:25,y:70},{x:25,y:40}];
  else if (k === 8) positions = [{x:50,y:50},{x:50,y:20},{x:78,y:32},{x:82,y:62},{x:62,y:82},{x:38,y:82},{x:18,y:62},{x:22,y:32}];
  else positions = [{x:50,y:50},{x:50,y:20},{x:78,y:28},{x:85,y:50},{x:78,y:75},{x:50,y:83},{x:22,y:75},{x:15,y:50},{x:22,y:28}];

  const isSquare = document.getElementById("set-card-shape")?.value === "square";
  const rotateEnabled = document.getElementById("set-random-rotation")?.checked !== false;
  const showCheat = document.getElementById("set-show-cheat")?.checked === true;

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
      const scale = k === 9 ? 0.7 : 0.85;

      let content = "";
      // 0: Local Name, 1: Eng Name, 2: Code3, 3: 2D, 4: 3D, 5: Formula, 6: SMILES
      if (rep === 0) content = `<span class="item-text" style="${k===9?'font-size:0.6rem;':''}">${getLipidName(l, lang)}</span>`;
      else if (rep === 1) content = `<span class="item-text" style="${k===9?'font-size:0.6rem;':''}">${l.engName}</span>`;
      else if (rep === 2) content = `<span class="item-code3" style="${k===9?'font-size:0.7rem;':''}">${l.code3}</span>`;
      else if (rep === 3) content = renderStructureToSVG(l.structure, k===9?52:68, k===9?52:68);
      else if (rep === 4) {
        const cleanCode = l.code3.toLowerCase().replace("(", "_").replace(")", "_").replace(":", "_").replace("/", "_");
        content = `<img src="assets/structures/${cleanCode}.png" style="width:${k===9?48:62}px;height:${k===9?48:62}px;object-fit:contain;" onerror="this.style.display='none'">`;
      }
      else if (rep === 5) content = `<span class="item-condensed" style="${k===9?'font-size:0.6rem;':''}">${l.formula}</span>`;
      else content = `<span class="item-smiles" style="font-size:0.5rem;word-break:break-all;line-height:1.1;display:block;max-width:65px;">${l.smiles}</span>`;

      itemsHTML += `
        <div class="card-item" style="--x: ${pos.x}%; --y: ${pos.y}%; --scale: ${scale}; --rot: ${rot}deg;">
          ${content}
        </div>
      `;
    });

    if (showCheat) {
      const listNames = cardData.items.map(it => it.symbol.code3).join(", ");
      itemsHTML += `<span style="position: absolute; top: 8px; left: 8px; font-size: 0.5rem; color: var(--text-muted); max-width: 80%; text-align: left; pointer-events: none;">${listNames}</span>`;
    }

    itemsHTML += `<span style="position: absolute; bottom: 8px; left: 0; right: 0; font-size: 0.6rem; text-align: center; color: var(--text-muted);">Karta ${idx+1}</span>`;
    card.innerHTML = itemsHTML;
    grid.appendChild(card);
  });
}
