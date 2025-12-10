"use client";

import { useState, useCallback } from "react";
import { useAgentStore } from "@/store/agentStore";

export function useAgentChat() {
    const { config, addMessage } = useAgentStore();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = useCallback(
        async (rawText: string) => {
            const text = rawText.trim();
            if (!text || loading) return;

            setError(null);
            addMessage("user", text);
            setLoading(true);

            try {
                const res = await fetch("/api/agent-chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ config, message: text }),
                });

                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }

                const data = await res.json();
                addMessage("agent", data.reply ?? "⚠️ No reply from AI.");
            } catch (e: any) {
                console.error(e);
                setError("Error calling AI API");
                addMessage("agent", "⚠️ Error calling the AI API.");
            } finally {
                setLoading(false);
            }
        },
        [config, loading, addMessage],
    );

    return { sendMessage, loading, error };
}
