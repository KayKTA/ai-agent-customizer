"use client";

import { FormEvent, useState } from "react";
import {
    Box,
    TextField,
    IconButton,
    List,
    CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useAgentStore } from "@/store/agentStore";
import { useAgentChat } from "@/hooks/useAgentChat";
import MessageBubble from "./MessageBubble";

export default function ChatWindow() {
    const { messages } = useAgentStore();
    const { sendMessage, loading } = useAgentChat();
    const [input, setInput] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        sendMessage(input);
        setInput("");
    };

    return (
        <Box display="flex" flexDirection="column" height={360}>
            <List
                sx={{
                    flex: 1,
                    overflow: "auto",
                    mb: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                }}
            >
                {messages.map((m) => (
                    <MessageBubble key={m.id} text={m.text} from={m.from} />
                ))}
            </List>


            <Box
                component="form"
                onSubmit={handleSubmit}
                display="flex"
                alignItems="center"
                gap={1}
            >
                <TextField
                    size="small"
                    fullWidth
                    placeholder="Ask your agent something..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <IconButton type="submit" disabled={loading}>
                    {loading ? <CircularProgress size={20} /> : <SendIcon />}
                </IconButton>
            </Box>
        </Box>
    );
}
