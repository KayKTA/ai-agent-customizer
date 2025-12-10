"use client";

import { Box, Typography } from "@mui/material";

type MessageBubbleProps = {
    text: string;
    from: "user" | "agent";
};

export default function MessageBubble({ text, from }: MessageBubbleProps) {
    const isUser = from === "user";

    return (
        <Box
            sx={{
                maxWidth: "75%",
                p: 1.5,
                borderRadius: 2,
                bgcolor: isUser ? "primary.main" : "background.paper",
                color: isUser ? "black" : "text.primary",
                alignSelf: isUser ? "flex-end" : "flex-start",
            }}
        >
            <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                {text}
            </Typography>
        </Box>
    );
}
