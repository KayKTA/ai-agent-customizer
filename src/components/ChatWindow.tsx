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
import { useAgentChat } from "@/hooks/useAgentChat";

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
