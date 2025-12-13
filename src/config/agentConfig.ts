// 1) TONES & LEVELS =====================================================

export const TONES = [
    "friendly",
    "professional",
    "empathetic",
    "playful",
] as const;
export type Tone = (typeof TONES)[number];

export const TONE_LABELS_FR: Record<Tone, string> = {
    friendly: "Amical",
    professional: "Professionnel",
    empathetic: "Empathique",
    playful: "Ludique",
};

export const LEVELS = ["junior", "mid", "senior", "expert"] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_LABELS_FR: Record<Level, string> = {
    junior: "Junior",
    mid: "Intermédiaire",
    senior: "Senior",
    expert: "Expert",
};

// 2) DOMAINES ============================================================

export const AVAILABLE_DOMAINS = [
    "general",
    "software_development",
    "data",
    "gaming",
    "fashion",
    "project",
    "career",
] as const;
export type Domain = (typeof AVAILABLE_DOMAINS)[number];

export const DOMAIN_LABELS_FR = {
    general: "Général",
    software_development: "Développement logiciel",
    data: "Data & Intelligence Artificielle",
    gaming: "Gaming / Jeux vidéo",
    fashion: "Mode & Lifestyle",
    project: "Gestion de projet & produit",
    career: "Coaching carrière",
};


export const DOMAIN_USE_CASES = {
    general: "Assistant polyvalent pour des questions générales.",
    software_development:
        "Assistant technique pour le code, l’architecture, le debug et les bonnes pratiques.",
    data:
        "Assistant pédagogique pour expliquer les concepts Data, IA, LLM, RAG, biais et usages concrets.",
    gaming:
        "Assistant spécialisé jeux vidéo : mécaniques, stratégies, game design, univers.",
    fashion:
        "Conseiller mode : tendances, styles, associations, marques et inspirations.",
    project:
        "Aide à la priorisation, roadmap, delivery, communication et pilotage.",
    career:
        "Assistant pour CV, entretiens, reconversion et stratégie de carrière.",
};


// 3) EXEMPLES DE RÉPONSES ===============================================

// snippets[domain][tone]
export const EXAMPLE_SNIPPETS: Record<
    Domain,
    Partial<Record<Tone, string>>
> = {
    general: {
        friendly: "Super question ! Donne-moi un peu de contexte et je t'explique tout pas à pas 🙂",
        professional: "Je vais structurer la réponse en plusieurs points pour rester clair et efficace.",
        empathetic: "Je comprends que ce sujet puisse sembler complexe, je vais te le rendre aussi simple que possible.",
        playful: "On s'attaque à ça ensemble ? Promis, on va rendre ça beaucoup plus fun 😄",
    },
    software_development: {
        friendly: "On peut regarder ton code ensemble et je t'explique ce qui bloque, étape par étape.",
        professional: "Voici une approche recommandée pour structurer votre composant et éviter cette erreur.",
        empathetic: "C'est normal de se sentir un peu perdu avec ce genre de bug, on va le décomposer calmement.",
        playful: "Ton code a juste besoin d'un petit power-up 💪, je te montre comment faire.",
    },
    data: {
        friendly: "Je vais t’expliquer ce concept Data/IA simplement, avec un exemple concret.",
        professional: "Je vais définir le concept, expliquer son fonctionnement et ses cas d’usage.",
        empathetic: "C’est normal que ces notions soient floues au début, on va les clarifier pas à pas.",
        playful: "On va rendre l’IA moins mystérieuse, promis 🧠✨",
    },
    gaming: {
        friendly: "Tu veux parler gameplay, stratégie ou univers ? Je t’aide.",
        professional: "Je vais analyser les mécaniques de jeu et proposer une approche structurée.",
        empathetic: "Si le jeu te paraît complexe, on va le décortiquer ensemble.",
        playful: "Ready player one ? 🎮 On plonge dedans.",
    },
    fashion: {
        friendly: "Parle-moi de ton style et je t’aide à trouver des idées sympas.",
        professional: "Je vais analyser les tendances actuelles et proposer des associations adaptées.",
        empathetic: "Trouver son style peut être un défi, on va explorer ça ensemble.",
        playful: "On va pimper ton look avec des idées fun et originales 👗✨",
    },
    project: {
        friendly: "Dis-moi où tu en es dans ton projet et je t’aide à y voir plus clair.",
        professional: "Je vais structurer les priorités et proposer une roadmap claire.",
        empathetic: "Gérer un projet peut être stressant, on va simplifier ça ensemble.",
        playful: "On va transformer ta gestion de projet en une aventure épique 🚀",
    },
    career: {
        friendly: "Parle-moi de tes objectifs et je t’aide à avancer pas à pas.",
        professional: "Je vais analyser ton profil et proposer des stratégies concrètes.",
        empathetic: "Penser à sa carrière peut être intimidant, on va le faire ensemble.",
        playful: "On va booster ta carrière avec des idées fraîches et motivantes 🌟",
    },
};
