"use client";

import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Stack,
    Typography,
    IconButton,
    Tooltip,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useMemo, useState } from "react";

import AgentConfigForm from "@/components/AgentConfigForm";
import PromptPreview from "@/components/PromptPreview";
import ChatWindow from "@/components/ChatWindow";
import SectionCard from "@/components/SectionCard";
import AgentInsightsTabs from "@/components/AgentInsightsTabs";
import { useAgentConfig } from "@/hooks/useAgentConfig";
import { buildSystemPrompt } from "@/lib/prompt";
import { useAgentStore } from "@/store/agentStore";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TerminalIcon from "@mui/icons-material/Terminal";
import ChatIcon from "@mui/icons-material/Chat";
import { InfoOutlineRounded, MessageRounded } from "@mui/icons-material";
import AgentSummary from "@/components/AgentSummary";
import AgentExamples from "@/components/AgentExamples";

export default function HomePage() {
    const { config } = useAgentConfig();
    const systemPrompt = useMemo(() => buildSystemPrompt(config), [config]);

    const [copied, setCopied] = useState(false);
    const { resetChat } = useAgentStore();

    const handleCopyPrompt = async () => {
        try {
            await navigator.clipboard.writeText(systemPrompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (e) {
            console.error("Failed to copy prompt", e);
        }
    };
    return (
        <Container
            maxWidth="lg"
            sx={{
                py: 4,
                pb: 6,
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "fixed",
                    inset: 0,
                    background:
                        "radial-gradient(circle at top, rgba(168,85,247,0.16), transparent 60%)",
                    pointerEvents: "none",
                    zIndex: -1,
                },
            }}

        >
            {/* HERO */}
            <Box
                sx={{
                    mb: 4,
                    borderRadius: 6,
                    px: { xs: 3, md: 5 },
                    py: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    background: "linear-gradient(135deg, #0b0b14 0%, #10102a 100%)",
                }}
            >
                <Typography
                    variant="overline"
                    sx={{ letterSpacing: 1.5, opacity: 0.6 }}
                >
                    Générateur d’Agent IA
                </Typography>

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        lineHeight: 1.15,
                        maxWidth: "650px",
                    }}
                >
                    Créez, configurez et testez votre propre{" "}
                    <Box component="span" sx={{ color: "primary.main" }}>
                        agent conversationnel
                    </Box>{" "}
                    en quelques minutes
                </Typography>

                <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 600 }}>
                    Définissez la personnalité, le ton, le niveau d’expertise et les règles
                    comportementales de votre agent. Visualisez son prompt système, testez ses
                    réponses et obtenez un aperçu clair de son rôle dans votre application.
                </Typography>

            </Box>



            {/* MAIN GRID */}
            <Grid container spacing={3}>
                {/* left column: agent config */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <SectionCard
                        title="Agent setup"
                        subtitle="Définis la personnalité, le ton et le scope de ton agent IA."
                        icon={<SettingsSuggestIcon />}
                    >
                        <AgentConfigForm />
                    </SectionCard>
                </Grid>

                {/* right column: prompt preview + chat */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <Stack spacing={3}>
                        <SectionCard
                            title="Aperçu de l’agent"
                            subtitle="Prompt système, résumé et exemple de réponse."
                            icon={<TerminalIcon />}
                            action={
                                <Tooltip title={copied ? "Copié !" : "Copier le prompt"}>
                                    <IconButton size="small" onClick={handleCopyPrompt}>
                                        <ContentCopyIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            }
                        >
                            <AgentInsightsTabs />
                        </SectionCard>

                        <SectionCard
                            title="Playground"
                            subtitle="Teste l’agent avec de vraies questions."
                            icon={<MessageRounded />}
                            action={
                                <Tooltip title="Réinitialiser la conversation">
                                    <IconButton size="small" onClick={resetChat}>
                                        <RestartAltIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            }
                        >
                            <ChatWindow />
                        </SectionCard>
                    </Stack>
                </Grid>

            </Grid>
        </Container>
    );
}
