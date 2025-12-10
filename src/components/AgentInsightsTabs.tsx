"use client";

import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import PromptPreview from "@/components/PromptPreview";
import AgentSummary from "@/components/AgentSummary";

function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
    const { children, value, index } = props;
    return (
        <Box hidden={value !== index} sx={{ mt: 2 }}>
            {value === index && <Box>{children}</Box>}
        </Box>
    );
}

export default function AgentInsightsTabs() {
    const [tab, setTab] = useState(0);

    return (
        <Box>
            <Tabs
                value={tab}
                onChange={(_, v) => setTab(v)}
                aria-label="Aperçu de l'agent"
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab label="Prompt" />
                <Tab label="Résumé" />
            </Tabs>

            <TabPanel value={tab} index={0}>
                <PromptPreview />
            </TabPanel>

            <TabPanel value={tab} index={1}>
                <AgentSummary />
            </TabPanel>
        </Box>
    );
}
