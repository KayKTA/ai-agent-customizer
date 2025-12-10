"use client";

import { Box } from "@mui/material";
import { useAgentConfig } from "@/hooks/useAgentConfig";

export default function PromptPreview() {
    const { config } = useAgentConfig();

    const { name, role, tone, level, domains, extraInstructions } = config;

    const Highlight = ({ children }: { children: React.ReactNode }) => (
        <Box
            component="span"
            sx={{
                color: "primary.main",
                fontWeight: 600,
            }}
        >
            {children}
        </Box>
    );

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

            You are <Highlight>{name || "Unnamed agent"}</Highlight>, an AI agent.
            <br />
            Your main role: <Highlight>{role || "No role defined yet"}</Highlight>.
            <br />
            Tone: <Highlight>{tone}</Highlight>.
            <br />
            Expertise level: <Highlight>{level}</Highlight>.
            <br />
            Domains of expertise:{" "}
            <Highlight>
                {domains.length ? domains.join(", ") : "No domains selected"}
            </Highlight>
            .
            <br /><br />
            General rules:
            <br />
            - Answer clearly and concisely.
            <br />
            - Adapt your explanations to the user's level.
            <br />
            - Ask clarification questions if the user's request is ambiguous.
            <br />
            - Provide concrete examples when relevant.
            <br /><br />
            {extraInstructions && (
                <>
                    Additional instructions from the user:{" "}
                    <Highlight>{extraInstructions}</Highlight>
                </>
            )}
        </Box>
    );
}
