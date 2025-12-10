"use client";

import {
    Box,
    Container,
    Grid,
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
            <Container maxWidth="xl" sx={{ py: 6 }}>
                <Box sx={{ mb: 4 }} id="agent-config">
                    <SectionCard
                        icon={<SettingsSuggestIcon />}
                        title="Configuration de l’agent"
                        subtitle="Définis rapidement l’identité, le style et le périmètre de ton agent IA."
                    >
                        <AgentConfigForm />
                    </SectionCard>
                </Box>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <AgentInsightsCard />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
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
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
