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
import { useAgentConfig } from "@/hooks/useAgentConfig";
import { buildSystemPrompt } from "@/lib/prompt";
import { useAgentStore } from "@/store/agentStore";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TerminalIcon from "@mui/icons-material/Terminal";
import ChatIcon from "@mui/icons-material/Chat";

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
        <Container maxWidth="lg" sx={{ py: 4, pb: 6 }}>
            {/* HERO */}
            <Box
                sx={{
                    mb: 4,
                    borderRadius: 4,
                    px: { xs: 3, md: 5 },
                    py: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    alignItems: "center",
                    background: "linear-gradient(135deg, #171727, #14141f)",
                    border: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Box flex={1}>
                    <Typography
                        variant="overline"
                        sx={{ letterSpacing: 2, opacity: 0.7 }}
                    >
                        KayKTA Labs · AI Tools
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ mt: 1, mb: 2, fontWeight: 700, lineHeight: 1.1 }}
                    >
                        Design your own
                        <br />
                        <Box component="span" sx={{ color: "primary.main" }}>
                            {" "}
                            AI agent behaviour.
                        </Box>
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: 520 }}>
                        Configure le rôle, le ton et l'expertise d'un agent IA,
                        génère automatiquement son prompt système et teste-le en direct,
                        comme si tu paramétrais un agent pour une vraie app.
                    </Typography>

                    {/* <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: "wrap" }}>
                        <Button variant="contained" size="large">
                            Commencer la configuration
                        </Button>
                        <Button variant="outlined" size="large">
                            Voir l'export JSON
                        </Button>
                    </Stack> */}

                    <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: "wrap" }}>
                        <Chip label="Next.js + TypeScript" size="small" />
                        <Chip label="OpenAI" size="small" />
                        <Chip label="Zustand" size="small" />
                        <Chip label="Storybook-ready" size="small" />
                    </Stack>
                </Box>

                {/* right box for use cases */}
                <Box
                    sx={{
                        flexBasis: { xs: "100%", md: "40%" },
                        bgcolor: "background.paper",
                        borderRadius: 3,
                        p: 3,
                        border: "1px solid",
                        borderColor: "divider",
                    }}
                >
                    <Typography variant="subtitle2" sx={{ textTransform: "uppercase", mb: 1, opacity: 0.7 }}>
                        Cas d'usages
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        • Prototyper un agent de support IT ou FAQ interne.
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        • Configurer un coach IA (Agile, Data, carrière…).
                    </Typography>
                    <Typography variant="body2">
                        • Tester et affiner le comportement avant l'intégrer dans une
                        app métier (Slack bot, app interne, outil client).
                    </Typography>
                </Box>
            </Box>

            {/* MAIN GRID */}
            <Grid container spacing={3}>
                {/* left column: agent config */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <SectionCard
                        title="Agent setup"
                        subtitle="Définis la personnalité, le ton et le scope de ton agent IA."
                        icon={<SettingsSuggestIcon />}
                    >
                        <AgentConfigForm />
                    </SectionCard>
                </Grid>

                {/* right column: prompt preview + chat */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <Stack spacing={3}>
                        <SectionCard
                            title="System prompt"
                            subtitle="Prompt généré automatiquement à partir de la configuration."
                            icon={<TerminalIcon />}
                            action={
                                <Tooltip title={copied ? "Copié !" : "Copier le prompt"}>
                                    <IconButton size="small" onClick={handleCopyPrompt}>
                                        <ContentCopyIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            }
                        >
                            <PromptPreview />
                        </SectionCard>

                        <SectionCard
                            title="Playground"
                            subtitle="Teste ton agent avec de vraies questions."
                            icon={<ChatIcon />}
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
