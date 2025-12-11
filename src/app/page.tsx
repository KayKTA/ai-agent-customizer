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

    const scrollToConfig = () => {
        const el = document.getElementById("agent-config");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <>
            <HeroSection onScrollToConfig={scrollToConfig} />
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box sx={{ mb: 4 }} id="agent-config">
                    <AgentConfigForm />
                </Box>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <AgentInsightsCard />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ChatWindow />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
