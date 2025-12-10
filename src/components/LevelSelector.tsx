"use client";

import { Stack, Chip, Box } from "@mui/material";
import { levels } from "@/types/agent";

type Props = {
    value: (typeof levels)[number];
    onChange: (lvl: (typeof levels)[number]) => void;
};
const LEVEL_LABELS: Record<(typeof levels)[number], string> = {
    junior: "Junior",
    mid: "Intermédiaire",
    senior: "Senior",
    expert: "Expert",
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
            {levels.map((lvl) => (
                <Chip
                    key={lvl}
                    label={LEVEL_LABELS[lvl]}
                    color={lvl === value ? "primary" : "default"}
                    onClick={() => onChange(lvl)}
                    sx={{
                        textTransform: "none",
                        cursor: "pointer",
                    }}
                />
            ))}
        </Box>
    );
}
