"use client";

import { useCallback } from "react";
import { useAgentStore } from "@/store/agentStore";
import type { AgentConfig } from "@/types/agent";

export function useAgentConfig() {
    const { config, setConfig } = useAgentStore();

    const updateAgentConfig = useCallback(
        (partial: Partial<AgentConfig>) => {
            setConfig(partial);
        },
        [setConfig],
    );

    return {
        config,
        updateAgentConfig,
    };
}
