"use client";

import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import AgentConfigForm from "@/components/AgentConfigForm";
import PromptPreview from "@/components/PromptPreview";
import ChatWindow from "@/components/ChatWindow";

export default function HomePage() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" gutterBottom fontWeight="bold">
                AI Agent Customizer
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Configure ton agent IA, génère son prompt système et teste-le en direct.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid size={{ xs:12, md: 5}}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            1. Paramètres de l'agent
                        </Typography>
                        <AgentConfigForm />
                    </Paper>
                </Grid>

                <Grid size={{ xs:12, md: 7}}>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                2. Prompt généré
                            </Typography>
                            <PromptPreview />
                        </Paper>

                        <Paper sx={{ p: 2, flex: 1 }}>
                            <Typography variant="h6" gutterBottom>
                                3. Tester l'agent
                            </Typography>
                            <ChatWindow />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
