"use client";

import { Stack, Chip, Box } from "@mui/material";
import { levels } from "@/types/agent";

type Props = {
    value: (typeof levels)[number];
    onChange: (lvl: (typeof levels)[number]) => void;
};

export default function LevelSelector({ value, onChange }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",    // space between chips
                rowGap: "8px", // space between rows
            }}
        >
            {levels.map((lvl) => (
                <Chip
                    key={lvl}
                    label={lvl}
                    color={lvl === value ? "primary" : "default"}
                    onClick={() => onChange(lvl)}
                    sx={{
                        textTransform: "capitalize",
                        cursor: "pointer",
                        m: 0,
                    }}
                />
            ))}
        </Box>
    );
}
