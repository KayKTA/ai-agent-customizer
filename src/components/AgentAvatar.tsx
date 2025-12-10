"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useAgentConfig } from "@/hooks/useAgentConfig";

const toneColors: Record<string, string> = {
    friendly: "#a855f7",
    professional: "#6366f1",
    empathetic: "#22c55e",
    direct: "#f97316",
    playful: "#ec4899",
};

const levelLabels: Record<string, string> = {
    junior: "Jr",
    mid: "Mid",
    senior: "Sr",
    expert: "X",
};

export default function AgentAvatar() {
    const { config } = useAgentConfig();
    const color = toneColors[config.tone] ?? "#a855f7";

    const initialLetter = config.name
        ? config.name.trim()[0]?.toUpperCase()
        : "A";

    const levelLabel = levelLabels[config.level] ?? config.level;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 2,
            }}
        >
            {/* Anneau qui tourne doucement */}
            <Box
                component={motion.div}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                sx={{
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    border: `2px solid ${color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Noyau qui pulse quand la config change (key = tone+level+domains) */}
                <Box
                    component={motion.div}
                    key={`${config.tone}-${config.level}-${config.domains.join(",")}`}
                    initial={{ scale: 0.9, opacity: 0.9 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    sx={{
                        width: 90,
                        height: 90,
                        borderRadius: "50%",
                        bgcolor: "background.default",
                        border: "1px solid",
                        borderColor: "rgba(255,255,255,0.06)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        {initialLetter}
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{ opacity: 0.7, mt: 0.3, textTransform: "uppercase" }}
                    >
                        {levelLabel}
                    </Typography>
                </Box>
            </Box>

            <Typography
                variant="caption"
                sx={{ mt: 1, opacity: 0.8, textAlign: "center" }}
            >
                {config.tone} · {config.level}
            </Typography>
        </Box>
    );
}
