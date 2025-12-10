"use client";

import { Box, Chip } from "@mui/material";
import { tones } from "@/types/agent";

type Props = {
    value: (typeof tones)[number];
    onChange: (tone: (typeof tones)[number]) => void;
};

export default function ToneSelector({ value, onChange }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",                // space between chips
                rowGap: "8px",             // space between rows
            }}
        >
            {tones.map((tone) => (
                <Chip
                    key={tone}
                    label={tone}
                    color={tone === value ? "primary" : "default"}
                    onClick={() => onChange(tone)}
                    sx={{
                        textTransform: "capitalize",
                        cursor: "pointer",
                        m: 0, // reset margin to use gap instead
                    }}
                />
            ))}
        </Box>
    );
}
