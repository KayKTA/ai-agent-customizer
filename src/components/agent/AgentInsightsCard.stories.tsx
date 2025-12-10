import type { Meta, StoryObj } from "@storybook/react";
import AgentInsightsCard from "./AgentInsightsCard";
import { useAgentConfig } from "@/hooks/useAgentConfig";
import { AgentConfig, DEFAULT_AGENT_CONFIG } from "@/types/agent";
import { ReactNode, useEffect } from "react";

/**
 * A helper component to set the agent configuration preset for a story.
 */
function ConfigPresetProvider({
    preset,
    children,
}: {
    preset: AgentConfig;
    children: ReactNode;
}) {
    const { updateAgentConfig } = useAgentConfig();

    useEffect(() => {
        updateAgentConfig(preset);
    }, [updateAgentConfig, preset]);

    return <>{children}</>;
}

const meta: Meta<typeof AgentInsightsCard> = {
    title: "Agent/AgentInsightsCard",
    component: AgentInsightsCard,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof AgentInsightsCard>;

// ---------- AGENTS PRESETS ---------- //

const DEFAULT_PRESET: AgentConfig = {
    ...DEFAULT_AGENT_CONFIG,
};

const AGILE_PRESET: AgentConfig = {
    ...DEFAULT_AGENT_CONFIG,
    name: "Coach Agile IA",
    role: "Coach Agile et SAFe pour équipes tech et produit",
    tone: "empathetic",
    level: "senior",
    domains: ["agile / SAFe", "project management"],
    extraInstructions:
        "Réponds en français, donne des exemples concrets et propose toujours une action simple à mettre en place dès aujourd’hui.",
};

const WEBDEV_PRESET: AgentConfig = {
    ...DEFAULT_AGENT_CONFIG,
    name: "Mentor Dev Web",
    role: "Mentor en développement web (React, Next.js, TypeScript)",
    tone: "friendly",
    level: "senior",
    domains: ["web development"],
    extraInstructions:
        "Explique les concepts avec des analogies simples, propose des snippets de code et signale les bonnes pratiques sans être condescendant.",
};

const DATA_AI_PRESET: AgentConfig = {
    ...DEFAULT_AGENT_CONFIG,
    name: "Coach Data & IA",
    role: "Assistant pour comprendre les concepts Data & IA et analyser des résultats",
    tone: "professional",
    level: "mid",
    domains: ["data & AI"],
    extraInstructions:
        "Commence par une explication simple, puis détaille les notions avancées. Propose des visualisations ou tableaux quand c’est utile.",
};

const CAREER_COACH_PRESET: AgentConfig = {
    ...DEFAULT_AGENT_CONFIG,
    name: "Coach Carrière IA",
    role: "Coach pour la réflexion carrière, CV et préparation d’entretiens",
    tone: "empathetic",
    level: "senior",
    domains: ["career coaching"],
    extraInstructions:
        "Reste bienveillant, évite les jugements. Propose des pistes concrètes, des questions de réflexion et des mini-plans d’action.",
};

// ---------- STORIES ---------- //

export const Default: Story = {
    name: "Agent vide",
    decorators: [
        (Story) => (
            <ConfigPresetProvider preset={DEFAULT_PRESET}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <Story />
                </div>
            </ConfigPresetProvider>
        ),
    ],
};

export const AgileCoachAgent: Story = {
    name: "Coach Agile / SAFe",
    decorators: [
        (Story) => (
            <ConfigPresetProvider preset={AGILE_PRESET}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <Story />
                </div>
            </ConfigPresetProvider>
        ),
    ],
};

export const WebDevMentorAgent: Story = {
    name: "Mentor Dév Web",
    decorators: [
        (Story) => (
            <ConfigPresetProvider preset={WEBDEV_PRESET}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <Story />
                </div>
            </ConfigPresetProvider>
        ),
    ],
};

export const DataAiCoachAgent: Story = {
    name: "Coach Data & IA",
    decorators: [
        (Story) => (
            <ConfigPresetProvider preset={DATA_AI_PRESET}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <Story />
                </div>
            </ConfigPresetProvider>
        ),
    ],
};

export const CareerCoachAgent: Story = {
    name: "Coach Carrière",
    decorators: [
        (Story) => (
            <ConfigPresetProvider preset={CAREER_COACH_PRESET}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <Story />
                </div>
            </ConfigPresetProvider>
        ),
    ],
};
