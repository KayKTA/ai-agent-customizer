import { AgentConfig } from "@/types/agent";

export function buildSystemPrompt(config: AgentConfig): string {
    const { name, role, tone, level, domains, extraInstructions } = config;

    return [
        `You are ${name}, an AI agent.`,
        `Your main role: ${role}.`,
        `Tone: ${tone}.`,
        `Expertise level: ${level}.`,
        `Domains of expertise: ${domains.join(", ")}.`,
        "",
        "General rules:",
        "- Answer clearly and concisely.",
        "- Adapt your explanations to the user's level.",
        "- Ask clarification questions if the user's request is ambiguous.",
        "- Provide concrete examples when relevant.",
        "",
        extraInstructions && `Additional instructions from the user: ${extraInstructions}`,
    ]
        .filter(Boolean)
        .join("\n");
}
