"use client";

import { useMemo } from "react";
import { Box } from "@mui/material";
import { useAgentConfig } from "@/hooks/useAgentConfig";
import { buildSystemPrompt } from "@/lib/prompt";

export default function PromptPreview() {
    const { config } = useAgentConfig();

    const prompt = useMemo(() => buildSystemPrompt(config), [config]);

    return (
        <Box
            component="pre"
            sx={{
                whiteSpace: "pre-wrap",
                fontFamily: "monospace",
                fontSize: 14,
                maxHeight: 260,
                overflow: "auto",
                m: 0,
            }}
        >
            {prompt}
        </Box>
    );
}
