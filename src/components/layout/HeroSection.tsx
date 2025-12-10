// src/components/layout/HeroSection.tsx
"use client";

import {
    Box,
    Chip,
    Container,
    Stack,
    Typography,
    IconButton,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PsychologyIcon from "@mui/icons-material/Psychology";
import InsightsIcon from "@mui/icons-material/Insights";
import { motion } from "framer-motion";

type HeroSectionProps = {
    onScrollToConfig: () => void;
};

export default function HeroSection({ onScrollToConfig }: HeroSectionProps) {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                minHeight: "100vh",
                py: { xs: 6, md: 8 },
                px: { xs: 2, md: 0 },
                background:
                    "linear-gradient(135deg, #050014 0%, #10102a 40%, #050014 100%)",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 5,
                        alignItems: "stretch",
                    }}
                >
                    {/* LEFT COLUMN : main headline + description */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            maxWidth: 800,
                        }}
                    >
                        <Typography
                            variant="overline"
                            sx={{ letterSpacing: 2, opacity: 0.6 }}
                        >
                            Outil de configuration d'agent IA
                        </Typography>

                        <Typography
                            variant="h2"
                            sx={{
                                mt: 1.5,
                                mb: 2,
                                fontWeight: 700,
                                lineHeight: 1.05,
                                fontSize: { xs: 32, md: 40 },
                            }}
                        >
                            Concevez le comportement de votre{" "}
                            <Box component="span" sx={{ color: "primary.main" }}>
                                agent conversationnel
                            </Box>{" "}
                            avant de l'intégrer dans vos applications.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ opacity: 0.85, maxWidth: 640 }}
                        >
                            Définissez sa personnalité, son ton, son niveau d&apos;expertise
                            et ses domaines de compétence. Visualisez le prompt système
                            généré et testez immédiatement ses réponses dans un playground
                            intégré.
                        </Typography>

                        {/* use cases tags */}
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ mt: 3, flexWrap: "wrap" }}
                        >
                            <Chip label="Agents de support" size="small" />
                            <Chip label="Coachs IA" size="small" />
                            <Chip label="Prototypage rapide" size="small" />
                            <Chip label="Documentation produit" size="small" />
                        </Stack>
                    </Box>

                    {/* RIGHT COLUMN : example agents box */}
                    {/* <Box
                        sx={{
                            flexBasis: { xs: "100%", md: "38%" },
                            alignSelf: "center",
                            bgcolor: "rgba(255,255,255,0.05)",
                            borderRadius: 4,
                            p: 0.5,
                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                            // border: "1px solid rgba(255, 255, 255, 0.18)",
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: 4,
                                p: 3,
                                border: "1px solid",
                                borderColor: "rgba(148,163,184,0.4)",
                                bgcolor: "rgba(15,23,42,0.9)",
                                backdropFilter: "blur(10px)",
                                display: "flex",
                                flexDirection: "column",
                                gap: 2.5,
                            }}
                        >
                            <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
                                Exemples d'agents que vous pouvez créer
                            </Typography>

                            <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                <Box
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        border: "1px solid rgba(148,163,184,0.7)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <SupportAgentIcon fontSize="small" />
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        Agent de support produit / IT
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                        Répond aux questions fréquentes, applique vos règles
                                        métier et escalade les cas sensibles.
                                    </Typography>
                                </Box>
                            </Stack>

                            <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                <Box
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        border: "1px solid rgba(148,163,184,0.7)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <PsychologyIcon fontSize="small" />
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        Coach IA spécialisé
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                        Agile, carrière, data… avec une personnalité et un ton
                                        adaptés à votre audience.
                                    </Typography>
                                </Box>
                            </Stack>

                            <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                <Box
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        border: "1px solid rgba(148,163,184,0.7)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <InsightsIcon fontSize="small" />
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        Assistant interne documenté
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                        Un agent dont le comportement est clairement défini pour
                                        vos équipes Produit, Tech ou Support.
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Box> */}
                </Box>
            </Container>

            {/* arrow down */}
            <Box
                sx={{
                    position: "absolute",
                    left: "50%",
                    bottom: 32,
                    transform: "translateX(-50%)",
                }}
            >
                <IconButton
                    component={motion.button as any}
                    onClick={onScrollToConfig}
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.8,
                        ease: "easeInOut",
                    }}
                    sx={{
                        color: "inherit",
                        "&:hover": {
                            transform: "translateY(2px)",
                        },
                    }}
                >
                    <ArrowDownwardIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
