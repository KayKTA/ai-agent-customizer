"use client";

import { Box, Typography } from "@mui/material";
import { useAgentConfig } from "@/hooks/useAgentConfig";

const DOMAIN_USE_CASES: Record<string, string> = {
    general: "Assistant polyvalent pour des questions générales.",
    "web development": "Copilote ou mentor pour développeurs web.",
    "data & AI": "Support pour l’analyse de données et l’explication de concepts IA.",
    "project management": "Aide à l’organisation, à la priorisation et au suivi de projets.",
    "agile / SAFe":
        "Coach pour accompagner les équipes dans les pratiques Agile et SAFe.",
    "career coaching":
        "Assistant pour la réflexion carrière, CV, entretiens et reconversion.",
};

// snippets[domain][tone]
const EXAMPLE_SNIPPETS: Record<
    string,
    Partial<
        Record<
            "friendly" | "professional" | "empathetic" | "direct" | "playful",
            string
        >
    >
> = {
    general: {
        friendly:
            "Super question ! Donne-moi un peu de contexte et je t’explique tout pas à pas 🙂",
        professional:
            "Je vais structurer la réponse en plusieurs points pour rester clair et efficace.",
        empathetic:
            "Je comprends que ce sujet puisse sembler complexe, je vais te le rendre aussi simple que possible.",
        direct:
            "Voici l’essentiel à retenir : je vais droit au but, sans blabla inutile.",
        playful:
            "On s’attaque à ça ensemble ? Promis, on va rendre ça beaucoup plus fun 😄",
    },
    "web development": {
        friendly:
            "On peut regarder ton code ensemble et je t’explique ce qui bloque, étape par étape.",
        professional:
            "Voici une approche recommandée pour structurer votre composant et éviter cette erreur.",
        empathetic:
            "C’est normal de se sentir un peu perdu avec ce genre de bug, on va le décomposer calmement.",
        direct:
            "Le problème vient de là. On le corrige en modifiant ces lignes de code.",
        playful:
            "Ton code a juste besoin d’un petit power-up 💪, je te montre comment faire.",
    },
    "data & AI": {
        friendly:
            "Je peux t’aider à comprendre ce que veulent dire ces métriques et comment les améliorer.",
        professional:
            "Je vais analyser ces données et vous proposer une interprétation claire des résultats.",
        empathetic:
            "Les notions d’IA peuvent être intimidantes, je vais les rendre abordables, une brique à la fois.",
        direct:
            "Voici les insights principaux qui ressortent de vos données, sans détour.",
        playful:
            "On va dompter ces données ensemble, comme un vrai data wizard 🪄",
    },
    "project management": {
        friendly:
            "On peut clarifier tes priorités et organiser ton backlog tranquillement 😉",
        professional:
            "Je vais structurer un plan d’action priorisé pour sécuriser l’avancement de votre projet.",
        empathetic:
            "C’est normal de se sentir débordé par un projet, on va remettre de l’ordre ensemble.",
        direct:
            "Voici ce qui doit être fait maintenant, ce qui peut attendre, et ce qu’il faut supprimer.",
        playful:
            "On transforme ton projet en level game : objectifs, quêtes, et prochaines actions 🎯",
    },
    "agile / SAFe": {
        friendly:
            "Je peux t’expliquer les cérémonies Agile et comment les adapter à ton équipe sans prise de tête.",
        professional:
            "Je vais vous proposer des ajustements concrets pour améliorer vos rituels Agile / SAFe.",
        empathetic:
            "Changer de façon de travailler n’est jamais simple, je t’accompagne étape par étape.",
        direct:
            "Voici ce qui ne fonctionne pas dans votre pratique actuelle, et comment l’améliorer.",
        playful:
            "On va remettre un peu de vie dans vos sprints, sans perdre en efficacité 🚀",
    },
    "career coaching": {
        friendly:
            "Parle-moi de ton parcours et je t’aide à mettre en valeur ce que tu sais déjà faire.",
        professional:
            "Je vais analyser votre profil et vous proposer des axes concrets d’amélioration.",
        empathetic:
            "Les transitions de carrière peuvent être stressantes, on va avancer à ton rythme.",
        direct:
            "Voici les points à renforcer en priorité pour atteindre ton objectif.",
        playful:
            "On traite ta carrière comme un RPG : compétences, points forts, et prochaines quêtes ✨",
    },
};

export default function AgentSummary() {
    const { config } = useAgentConfig();
    const { name, role, tone, level, domains, extraInstructions } = config;

    const mainUseCases =
        domains.length > 0
            ? domains.map((d) => DOMAIN_USE_CASES[d]).filter(Boolean)
            : [];

    const firstDomain = domains[0] || "general";
    const snippetsForDomain = EXAMPLE_SNIPPETS[firstDomain] || {};
    const example =
        snippetsForDomain[tone as keyof typeof snippetsForDomain] ??
        "Configure au moins un domaine et un ton pour voir un exemple de réponse typique.";

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
                <strong>{name || "Cet agent"}</strong> est configuré pour jouer le rôle
                de <strong>{role || "rôle non défini"}</strong>. Il adoptera un ton{" "}
                <strong>{tone}</strong> et un niveau d&apos;expertise{" "}
                <strong>{level}</strong>.
            </Typography>

            {domains.length > 0 && (
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    Il est particulièrement adapté aux domaines suivants :{" "}
                    <strong>{domains.join(", ")}</strong>.
                </Typography>
            )}

            {extraInstructions && (
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    Instructions spécifiques :{" "}
                    <strong>{extraInstructions}</strong>
                </Typography>
            )}

            <Typography variant="body2" sx={{ mt: 1 }}>
                ⭐ <strong>Idéal pour :</strong>
            </Typography>

            <Box sx={{ pl: 2 }}>
                {mainUseCases.length > 0 ? (
                    mainUseCases.map((text) => (
                        <Typography key={text} variant="body2">
                            • {text}
                        </Typography>
                    ))
                ) : (
                    <Typography variant="body2" sx={{ opacity: 0.6 }}>
                        Ajoutez au moins un domaine pour voir des cas d&apos;usage proposés.
                    </Typography>
                )}
            </Box>

            <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                    💬 <strong>Exemple de réponse :</strong>
                </Typography>
                <Box
                    sx={{
                        p: 2,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography variant="body2">{example}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
