// 1) TONES & LEVELS =====================================================

export const TONES = [
    "friendly",
    "professional",
    "empathetic",
    // "direct",
    "playful",
] as const;
export type Tone = (typeof TONES)[number];

export const TONE_LABELS_FR: Record<Tone, string> = {
    friendly: "Amical",
    professional: "Professionnel",
    empathetic: "Empathique",
    // direct: "Direct",
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
    "web development",
    "data & AI",
    "project management",
    "agile / SAFe",
    "career coaching",
] as const;
export type Domain = (typeof AVAILABLE_DOMAINS)[number];

export const DOMAIN_LABELS_FR: Record<Domain, string> = {
    general: "Général",
    "web development": "Développement web",
    "data & AI": "Data & IA",
    "project management": "Gestion de projet",
    "agile / SAFe": "Agile / SAFe",
    "career coaching": "Coaching carrière",
};

export const DOMAIN_USE_CASES: Record<Domain, string> = {
    general: "Assistant polyvalent pour des questions générales.",
    "web development": "Copilote ou mentor pour développeurs web.",
    "data & AI": "Support pour l'analyse de données et l'explication de concepts IA.",
    "project management": "Aide à l'organisation, à la priorisation et au suivi de projets.",
    "agile / SAFe": "Coach pour accompagner les équipes dans les pratiques Agile et SAFe.",
    "career coaching": "Assistant pour la réflexion carrière, CV, entretiens et reconversion.",
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
        // direct: "Voici l'essentiel à retenir : je vais droit au but, sans blabla inutile.",
        playful: "On s'attaque à ça ensemble ? Promis, on va rendre ça beaucoup plus fun 😄",
    },
    "web development": {
        friendly: "On peut regarder ton code ensemble et je t'explique ce qui bloque, étape par étape.",
        professional: "Voici une approche recommandée pour structurer votre composant et éviter cette erreur.",
        empathetic: "C'est normal de se sentir un peu perdu avec ce genre de bug, on va le décomposer calmement.",
        // direct: "Le problème vient de là. On le corrige en modifiant ces lignes de code.",
        playful: "Ton code a juste besoin d'un petit power-up 💪, je te montre comment faire.",
    },
    "data & AI": {
        friendly: "Je peux t'aider à comprendre ce que veulent dire ces métriques et comment les améliorer.",
        professional: "Je vais analyser ces données et vous proposer une interprétation claire des résultats.",
        empathetic: "Les notions d'IA peuvent être intimidantes, je vais les rendre abordables, une brique à la fois.",
        // direct: "Voici les insights principaux qui ressortent de vos données, sans détour.",
        playful: "On va dompter ces données ensemble, comme un vrai data wizard 🪄",
    },
    "project management": {
        friendly: "On peut clarifier tes priorités et organiser ton backlog tranquillement 😉",
        professional: "Je vais structurer un plan d'action priorisé pour sécuriser l'avancement de votre projet.",
        empathetic: "C'est normal de se sentir débordé par un projet, on va remettre de l'ordre ensemble.",
        // direct: "Voici ce qui doit être fait maintenant, ce qui peut attendre, et ce qu'il faut supprimer.",
        playful: "On transforme ton projet en level game : objectifs, quêtes, et prochaines actions 🎯",
    },
    "agile / SAFe": {
        friendly: "Je peux t'expliquer les cérémonies Agile et comment les adapter à ton équipe sans prise de tête.",
        professional: "Je vais vous proposer des ajustements concrets pour améliorer vos rituels Agile / SAFe.",
        empathetic: "Changer de façon de travailler n'est jamais simple, je t'accompagne étape par étape.",
        // direct: "Voici ce qui ne fonctionne pas dans votre pratique actuelle, et comment l'améliorer.",
        playful: "On va remettre un peu de vie dans vos sprints, sans perdre en efficacité 🚀",
    },
    "career coaching": {
        friendly: "Parle-moi de ton parcours et je t'aide à mettre en valeur ce que tu sais déjà faire.",
        professional: "Je vais analyser votre profil et vous proposer des axes concrets d'amélioration.",
        empathetic: "Les transitions de carrière peuvent être stressantes, on va avancer à ton rythme.",
        // direct: "Voici les points à renforcer en priorité pour atteindre ton objectif.",
        playful: "On traite ta carrière comme un RPG : compétences, points forts, et prochaines quêtes ✨",
    },
};
