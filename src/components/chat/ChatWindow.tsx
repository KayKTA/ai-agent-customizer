"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
    Box,
    TextField,
    IconButton,
    List,
    CircularProgress,
    Tooltip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useAgentStore } from "@/store/agentStore";
import { useAgentChat } from "@/hooks/useAgentChat";
import MessageBubble from "@/components/chat/MessageBubble";
import SectionCard from "../layout/SectionCard";
import { MessageRounded, RestartAlt } from "@mui/icons-material";

export default function ChatWindow() {
    const { messages, resetChat } = useAgentStore();
    const { sendMessage, loading } = useAgentChat();

    const [input, setInput] = useState("");

    const listRef = useRef<HTMLUListElement | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        sendMessage(input);
        setInput("");
    };

    // auto-scroll to bottom on new message
    useEffect(() => {
        const listEl = listRef.current;
        if (!listEl) return;
        listEl.scrollTop = listEl.scrollHeight;
    }, [messages]);

    return (
        <SectionCard
            title="Playground"
            subtitle="Teste l'agent avec de vraies questions."
            icon={<MessageRounded />}
            action={
                <Tooltip title="Réinitialiser la conversation">
                    <IconButton size="small" onClick={resetChat}>
                        <RestartAlt fontSize="small" />
                    </IconButton>
                </Tooltip>
            }
        >

            <Box display="flex" flexDirection="column" height={360}>
                <List
                    ref={listRef}
                    sx={{
                        flex: 1,
                        overflow: "auto",
                        mb: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        pr: 0.5,
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
                        placeholder="Pose une question à ton agent..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <IconButton type="submit" disabled={loading}>
                        {loading ? <CircularProgress size={20} /> : <SendIcon />}
                    </IconButton>
                </Box>
            </Box>
        </SectionCard>
    );
}
