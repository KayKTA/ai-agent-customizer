"use client";

import { FormEvent, useState } from "react";
import {
    Box,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useAgentStore } from "@/store/agentStore";

export default function ChatWindow() {
    const { config, messages, addMessage, resetChat } = useAgentStore();
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || loading) return;

        addMessage("user", trimmed);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/agent-chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    config,
                    message: trimmed,
                }),
            });

            const data = await res.json();

            if (data.reply) {
                addMessage("agent", data.reply);
            } else {
                addMessage("agent", "⚠️ Error: no reply from the AI.");
            }
        } catch (err) {
            console.error(err);
            addMessage("agent", "⚠️ Error calling the AI API.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box display="flex" flexDirection="column" height={360}>
            <List
                sx={{
                    flex: 1,
                    overflow: "auto",
                    mb: 1,
                }}
            >
                {messages.map((m) => (
                    <ListItem
                        key={m.id}
                        sx={{
                            justifyContent: m.from === "user" ? "flex-end" : "flex-start",
                        }}
                    >
                        <ListItemText
                            primary={m.text}
                            sx={{
                                maxWidth: "75%",
                                p: 1,
                                borderRadius: 2,
                                bgcolor:
                                    m.from === "user" ? "primary.main" : "background.default",
                            }}
                        />
                    </ListItem>
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
