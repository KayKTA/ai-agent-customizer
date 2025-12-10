"use client";

import { create } from "zustand";
import { AgentConfig } from "@/types/agent";

export type ChatMessage = {
    id: string;
    from: "user" | "agent";
    text: string;
    createdAt: number;
};

type AgentState = {
    config: AgentConfig;
    messages: ChatMessage[];
    setConfig: (partial: Partial<AgentConfig>) => void;
    resetChat: () => void;
    addMessage: (from: ChatMessage["from"], text: string) => void;
};

const defaultConfig: AgentConfig = {
    name: "Custom AI Agent",
    role: "Helpful assistant",
    tone: "friendly",
    level: "mid",
    domains: ["general"],
    extraInstructions: "",
};

export const useAgentStore = create<AgentState>((set) => ({
    config: defaultConfig,
    messages: [],
    setConfig: (partial) =>
        set((state) => ({
            config: { ...state.config, ...partial },
        })),
    resetChat: () => set({ messages: [] }),
    addMessage: (from, text) =>
        set((state) => ({
            messages: [
                ...state.messages,
                {
                    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                    from,
                    text,
                    createdAt: Date.now(),
                },
            ],
        })),
}));
