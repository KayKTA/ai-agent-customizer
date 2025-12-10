"use client";

import { Box, Typography } from "@mui/material";
import { useAgentConfig } from "@/hooks/useAgentConfig";

const EXAMPLE_SNIPPETS: Record<
    string,
    Partial<Record<"friendly" | "professional" | "empathetic" | "direct" | "playful", string>>
> = {
    general: {
        friendly:
            "Bien sûr ! Dis-moi simplement ce dont tu as besoin et je t’explique étape par étape 😊",
        professional:
            "Je vais vous proposer une réponse structurée et adaptée à votre contexte.",
    },
    "web development": {
        friendly:
            "On peut regarder ton code ensemble et je t’explique ce qui bloque, pas à pas.",
        professional:
            "Voici une approche recommandée pour structurer votre composant et éviter ces erreurs.",
    },
    "data & AI": {
        friendly:
            "Je peux t’aider à comprendre ce que signifient ces métriques et comment les améliorer.",
        professional:
            "Je vais analyser les données et détailler les implications principales pour votre cas d’usage.",
    },
    "project management": {
        friendly:
            "On peut clarifier tes priorités et organiser ton backlog tranquillement 😉",
        professional:
            "Voici un plan d’action priorisé pour structurer votre projet et suivre l’avancement.",
    },
    "agile / SAFe": {
        friendly:
            "Je peux t’expliquer les cérémonies Agile et comment les adapter à ton équipe.",
        professional:
            "Je vais vous proposer des ajustements concrets pour améliorer votre pratique Agile / SAFe.",
    },
    "career coaching": {
        friendly:
            "Parle-moi de ton parcours et je t’aide à mettre en valeur tes forces.",
        professional:
            "Je vais vous suggérer des axes d’amélioration pour votre CV et votre positionnement.",
    },
};

export default function AgentExamples() {
    const { config } = useAgentConfig();
    const { tone, domains } = config;

    const firstDomain = domains[0] || "general";
    const snippetsForDomain = EXAMPLE_SNIPPETS[firstDomain] || {};
    const example =
        snippetsForDomain[tone as keyof typeof snippetsForDomain] ??
        "Configure un domaine et un ton pour voir un exemple de réponse typique de cet agent.";

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
                Voici un exemple du style de réponse que pourrait produire cet agent :
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
    );
}
