"use client";

import { Box, Chip } from "@mui/material";
import { LEVELS, LEVEL_LABELS_FR, Level } from "@/config/agentConfig";

type Props = {
    value: Level;
    onChange: (level: Level) => void;
};

export default function LevelSelector({ value, onChange }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                rowGap: "8px",
            }}
        >
            {LEVELS.map((lvl) => (
                <Chip
                    key={lvl}
                    label={LEVEL_LABELS_FR[lvl]}
                    color={lvl === value ? "primary" : "default"}
                    onClick={() => onChange(lvl)}
                    sx={{ textTransform: "none", cursor: "pointer" }}
                />
            ))}
        </Box>
    );
}
