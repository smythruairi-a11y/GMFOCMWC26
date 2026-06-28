// ============================================
// GMF OCM TEAM - WORLD CUP 2026 DRAW DATA
// ============================================

const TEAM_DATA = {
  // Group A
  "Mexico":            { owner: "Ricky",   tier: 2, group: "A", flag: "MX" },
  "South Africa":      { owner: "Eva",     tier: 3, group: "A", flag: "ZA" },
  "South Korea":       { owner: "Ruairi",  tier: 2, group: "A", flag: "KR" },
  "Czechia":           { owner: "Roger",   tier: 3, group: "A", flag: "CZ" },

  // Group B
  "Canada":            { owner: "Ibrahim", tier: 3, group: "B", flag: "CA" },
  "Bosnia-Herzegovina":{ owner: "Eva",     tier: 4, group: "B", flag: "BA" },
  "Qatar":             { owner: "William", tier: 4, group: "B", flag: "QA" },
  "Switzerland":       { owner: "Ricky",   tier: 2, group: "B", flag: "CH" },

  // Group C
  "Brazil":            { owner: "Claudia", tier: 1, group: "C", flag: "BR" },
  "Morocco":           { owner: "Elma",    tier: 2, group: "C", flag: "MA" },
  "Haiti":             { owner: "William", tier: 4, group: "C", flag: "HT" },
  "Scotland":          { owner: "Elma",    tier: 3, group: "C", flag: "SC" },

  // Group D
  "United States":     { owner: "Eva",     tier: 1, group: "D", flag: "US" },
  "Paraguay":          { owner: "Elma",    tier: 3, group: "D", flag: "PY" },
  "Australia":         { owner: "Roger",   tier: 2, group: "D", flag: "AU" },
  "Türkiye":           { owner: "Eva",     tier: 2, group: "D", flag: "TR" },

  // Group E
  "Germany":           { owner: "Ruairi",  tier: 1, group: "E", flag: "DE" },
  "Curaçao":           { owner: "Ibrahim", tier: 4, group: "E", flag: "CW" },
  "Ivory Coast":       { owner: "William", tier: 3, group: "E", flag: "CI" },
  "Ecuador":           { owner: "William", tier: 2, group: "E", flag: "EC" },

  // Group F
  "Netherlands":       { owner: "Ruairi",  tier: 1, group: "F", flag: "NL" },
  "Japan":             { owner: "Elma",    tier: 2, group: "F", flag: "JP" },
  "Sweden":            { owner: "Eva",     tier: 2, group: "F", flag: "SE" },
  "Tunisia":           { owner: "Ricky",   tier: 3, group: "F", flag: "TN" },

  // Group G
  "Belgium":           { owner: "Ibrahim", tier: 1, group: "G", flag: "BE" },
  "Egypt":             { owner: "Roger",   tier: 3, group: "G", flag: "EG" },
  "Iran":              { owner: "Ibrahim", tier: 3, group: "G", flag: "IR" },
  "New Zealand":       { owner: "Elma",    tier: 4, group: "G", flag: "NZ" },

  // Group H
  "Spain":             { owner: "Ibrahim", tier: 1, group: "H", flag: "ES" },
  "Cape Verde":        { owner: "Claudia", tier: 4, group: "H", flag: "CV" },
  "Saudi Arabia":      { owner: "Roger",   tier: 4, group: "H", flag: "SA" },
  "Uruguay":           { owner: "Claudia", tier: 1, group: "H", flag: "UY" },

  // Group I
  "France":            { owner: "William", tier: 1, group: "I", flag: "FR" },
  "Senegal":           { owner: "Elma",    tier: 2, group: "I", flag: "SN" },
  "Iraq":              { owner: "Ruairi",  tier: 4, group: "I", flag: "IQ" },
  "Norway":            { owner: "Claudia", tier: 2, group: "I", flag: "NO" },

  // Group J
  "Argentina":         { owner: "Ricky",   tier: 1, group: "J", flag: "AR" },
  "Algeria":           { owner: "Ricky",   tier: 3, group: "J", flag: "DZ" },
  "Austria":           { owner: "Claudia", tier: 2, group: "J", flag: "AT" },
  "Jordan":            { owner: "Ricky",   tier: 4, group: "J", flag: "JO" },

  // Group K
  "Portugal":          { owner: "Roger",   tier: 1, group: "K", flag: "PT" },
  "DR Congo":          { owner: "Ibrahim", tier: 4, group: "K", flag: "CD" },
  "Uzbekistan":        { owner: "Claudia", tier: 4, group: "K", flag: "UZ" },
  "Colombia":          { owner: "William", tier: 1, group: "K", flag: "CO" },

  // Group L
  "England":           { owner: "Eva",     tier: 1, group: "L", flag: "EN" },
  "Croatia":           { owner: "Roger",   tier: 3, group: "L", flag: "HR" },
  "Ghana":             { owner: "Ruairi",  tier: 3, group: "L", flag: "GH" },
  "Panama":            { owner: "Ruairi",  tier: 4, group: "L", flag: "PA" }
};

// Owner colour classes (matches CSS)
const OWNER_CLASS = {
  "Claudia": "oc-claudia",
  "Eva":     "oc-eva",
  "Elma":    "oc-elma",
  "Ibrahim": "oc-ibrahim",
  "Ricky":   "oc-ricky",
  "Roger":   "oc-roger",
  "Ruairi":  "oc-ruairi",
  "William": "oc-william"
};

const ALL_OWNERS = ["Claudia","Eva","Elma","Ibrahim","Ricky","Roger","Ruairi","William"];

const ALL_GROUPS = ["A","B","C","D","E","F","G","H","I","J","K","L"];

// Alternate spellings/names that football-data.org (or other sources) might use,
// mapped to the canonical key used in TEAM_DATA above.
const TEAM_ALIASES = {
  "Korea Republic": "South Korea",
  "Republic of Korea": "South Korea",
  "Czech Republic": "Czechia",
  "Bosnia and Herzegovina": "Bosnia-Herzegovina",
  "Bosnia & Herzegovina": "Bosnia-Herzegovina",
  "USA": "United States",
  "US": "United States",
  "Turkey": "Türkiye",
  "Curacao": "Curaçao",
  "Côte d'Ivoire": "Ivory Coast",
  "Cote d'Ivoire": "Ivory Coast",
  "Congo DR": "DR Congo",
  "Democratic Republic of the Congo": "DR Congo",
  "Cabo Verde": "Cape Verde",
  "Cape Verde Islands": "Cape Verde",
  "Saudi-Arabia": "Saudi Arabia"
};

// Strip accents/diacritics and lowercase for robust matching
function foldName(name) {
  return (name || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

// Build a folded lookup index: foldedName -> canonical TEAM_DATA key
const FOLDED_INDEX = {};
Object.keys(TEAM_DATA).forEach(name => { FOLDED_INDEX[foldName(name)] = name; });
Object.entries(TEAM_ALIASES).forEach(([alt, canonical]) => {
  FOLDED_INDEX[foldName(alt)] = canonical;
});

// Look up a team in TEAM_DATA, trying aliases and folded matches if not found directly
function lookupTeam(name) {
  if (TEAM_DATA[name]) return TEAM_DATA[name];
  const alias = TEAM_ALIASES[name];
  if (alias && TEAM_DATA[alias]) return TEAM_DATA[alias];
  const folded = FOLDED_INDEX[foldName(name)];
  if (folded && TEAM_DATA[folded]) return TEAM_DATA[folded];
  return null;
}
