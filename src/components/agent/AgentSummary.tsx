"use client";

import { Box, Typography } from "@mui/material";
import {
    DOMAIN_LABELS_FR,
    DOMAIN_USE_CASES,
    EXAMPLE_SNIPPETS,
    TONE_LABELS_FR,
    LEVEL_LABELS_FR,
} from "@/config/agentConfig";
import { useAgentConfig } from "@/hooks/useAgentConfig";

export default function AgentSummary() {
    const { config } = useAgentConfig();
    const { name, role, tone, level, domains, extraInstructions } = config;

    const toneLabelFr = TONE_LABELS_FR[tone];
    const levelLabelFr = LEVEL_LABELS_FR[level];

    const domainsFr = domains.map((d) => DOMAIN_LABELS_FR[d] ?? d);

    const mainUseCases =
        domains.length > 0
            ? domains
                .map((d) => DOMAIN_USE_CASES[d])
                .filter(Boolean)
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
                <strong>{toneLabelFr}</strong> et un niveau d&apos;expertise{" "}
                <strong>{levelLabelFr}</strong>.
            </Typography>

            {domains.length > 0 && (
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    Il est particulièrement adapté aux domaines suivants :{" "}
                    <strong>{domainsFr.join(", ")}</strong>.
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

            <Box sx={{ mt: 3 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    💬 <strong>Exemple de réponse générée :</strong>
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                    }}
                >
                    {/* Avatar cercle */}
                    <Box
                        sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background:
                                "linear-gradient(135deg, rgba(168,85,247,0.8), rgba(139,92,246,0.8))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: 16,
                            flexShrink: 0,
                            fontWeight: 600,
                        }}
                    >
                        A
                    </Box>

                    {/* Bubble chat */}
                    <Box
                        sx={{
                            p: 2,
                            borderRadius: 3,
                            bgcolor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            backdropFilter: "blur(8px)",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                            maxWidth: "100%",
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                opacity: 0.9,
                                fontStyle: "italic",
                                lineHeight: 1.55,
                            }}
                        >
                            "{example}"
                        </Typography>
                    </Box>
                </Box>
            </Box>


        </Box>
    );
}
