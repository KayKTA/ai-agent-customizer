"use client";

import { useMemo, useState } from "react";
import {
    Box,
    IconButton,
    Tab,
    Tabs,
    Tooltip,
    Typography,
} from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import SectionCard from "@/components/layout/SectionCard";
import PromptPreview from "@/components/agent/PromptPreview";
import AgentSummary from "@/components/agent/AgentSummary";
import { useAgentConfig } from "@/hooks/useAgentConfig";
import { buildSystemPrompt } from "@/lib/prompt";

type TabKey = "prompt" | "summary";

export default function AgentInsightsCard() {
    const { config } = useAgentConfig();
    const [tab, setTab] = useState<TabKey>("prompt");
    const [copied, setCopied] = useState(false);

    const systemPrompt = useMemo(() => buildSystemPrompt(config), [config]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(systemPrompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch (e) {
            console.error("Failed to copy", e);
        }
    };

    const header = (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
            }}
        >
            {/* Icone + titre à gauche */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TerminalIcon color="primary" />
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Aperçu de l’agent
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Prompt système & résumé générés à partir de la configuration.
                    </Typography>
                </Box>
            </Box>

            {/* Tabs à droite */}
            <Box
                sx={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Tabs
                    value={tab}
                    onChange={(_, v) => setTab(v)}
                    aria-label="Aperçu de l'agent"
                    textColor="primary"
                    indicatorColor="primary"
                    sx={{
                        minHeight: 0,
                        "& .MuiTab-root": { minHeight: 0, py: 0.5 },
                    }}
                >
                    <Tab
                        value="prompt"
                        label="Prompt"
                        icon={<TerminalIcon fontSize="small" />}
                        iconPosition="start"
                    />
                    <Tab
                        value="summary"
                        label="Résumé"
                        icon={<InfoOutlinedIcon fontSize="small" />}
                        iconPosition="start"
                    />
                </Tabs>
            </Box>
        </Box>
    );

    return (
        <SectionCard customHeader={header}>
            {tab === "prompt" ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Tooltip title={copied ? "Copié !" : "Copier le prompt"}>
                            <IconButton size="small" onClick={handleCopy}>
                                <ContentCopyIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <PromptPreview />
                </Box>
            ) : (
                <AgentSummary />
            )}
        </SectionCard>
    );
}
