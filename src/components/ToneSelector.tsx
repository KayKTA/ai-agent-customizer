"use client";

import { Box, Chip } from "@mui/material";
import { tones } from "@/types/agent";

type Props = {
    value: (typeof tones)[number];
    onChange: (tone: (typeof tones)[number]) => void;
};

const TONE_LABELS: Record<(typeof tones)[number], string> = {
    friendly: "Amical",
    professional: "Professionnel",
    empathetic: "Empathique",
    direct: "Direct",
    playful: "Ludique",
};

export default function ToneSelector({ value, onChange }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                rowGap: "8px",
            }}
        >
            {tones.map((tone) => (
                <Chip
                    key={tone}
                    label={TONE_LABELS[tone]}
                    color={tone === value ? "primary" : "default"}
                    onClick={() => onChange(tone)}
                    sx={{
                        textTransform: "none",
                        cursor: "pointer",
                    }}
                />
            ))}
        </Box>
    );
}
