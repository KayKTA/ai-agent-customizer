"use client";

import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    IconButton,
    Tooltip,
} from "@mui/material";

import AgentConfigForm from "@/components/agent/AgentConfigForm";
import ChatWindow from "@/components/chat/ChatWindow";
import SectionCard from "@/components/layout/SectionCard";
import { useAgentStore } from "@/store/agentStore";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { MessageRounded } from "@mui/icons-material";
import AgentInsightsCard from "@/components/agent/AgentInsightsCard";
import HeroSection from "@/components/layout/HeroSection";

export default function HomePage() {
    const { resetChat } = useAgentStore();

    const scrollToConfig = () => {
        const el = document.getElementById("agent-config");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <>
            <HeroSection onScrollToConfig={scrollToConfig} />
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
                {/* MAIN GRID */}
                <Grid container spacing={3} id="agent-config">
                    {/* left column: agent config */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <SectionCard
                            title="Configuration de l'agent"
                            subtitle="Personnalisez la personnalité et le comportement de votre agent IA."
                            icon={<SettingsSuggestIcon />}
                            sx={{
                                // position: { md: "sticky" },
                                // top: { md: 24 },
                                bgcolor: "background.default",
                                boxShadow: 4,
                                borderColor: "rgba(148,163,184,0.5)",
                            }}
                        >
                            <AgentConfigForm />
                        </SectionCard>
                    </Grid>

                    {/* right column: prompt preview + chat */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Stack spacing={3}>
                            <AgentInsightsCard />

                            <SectionCard
                                title="Playground"
                                subtitle="Teste l'agent avec de vraies questions."
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
        </>
    );
}
