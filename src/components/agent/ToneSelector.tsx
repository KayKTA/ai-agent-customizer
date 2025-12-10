"use client";

import { Box, Chip } from "@mui/material";
import { TONES, TONE_LABELS_FR, Tone } from "@/config/agentConfig";

type Props = {
    value: Tone;
    onChange: (tone: Tone) => void;
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
            {TONES.map((tone) => (
                <Chip
                    key={tone}
                    label={TONE_LABELS_FR[tone]}
                    color={tone === value ? "primary" : "default"}
                    onClick={() => onChange(tone)}
                    sx={{ textTransform: "none", cursor: "pointer" }}
                />
            ))}
        </Box>
    );
}
