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

const FASHION_PRESET: AgentConfig = {
    ...DEFAULT_AGENT_CONFIG,
    name: "Styliste Virtuel",
    role: "Un assistant IA expert en mode et tendances vestimentaires.",
    tone: "friendly",
    level: "mid",
    domains: ["fashion"],
    extraInstructions:
        "Fournis des conseils de mode personnalisés en fonction des préférences et du style de l'utilisateur. Sois à la fois tendance et pratique.",
};

const TECH_SUPPORT_PRESET: AgentConfig = {
    ...DEFAULT_AGENT_CONFIG,
    name: "Support Tech IA",
    role: "Un agent conversationnel spécialisé dans l'assistance technique pour les produits électroniques grand public.",
    tone: "professional",
    level: "expert",
    domains: ["software_development"],
    extraInstructions:
        "Aide les utilisateurs à résoudre des problèmes techniques liés à leurs appareils électroniques. Fournis des instructions claires et des solutions efficaces.",
};

const CAREER_COACH_PRESET: AgentConfig = {
    ...DEFAULT_AGENT_CONFIG,
    name: "Coach de Carrière",
    role: "Un assistant IA dédié à l'orientation professionnelle et au développement de carrière.",
    tone: "empathetic",
    level: "senior",
    domains: ["career", "general"],
    extraInstructions:
        "Guide les utilisateurs dans leur parcours professionnel en offrant des conseils sur la rédaction de CV, la préparation aux entretiens et le développement des compétences.",
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

export const FashionStylistAgent: Story = {
    name: "Styliste de Mode",
    decorators: [
        (Story) => (
            <ConfigPresetProvider preset={FASHION_PRESET}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <Story />
                </div>
            </ConfigPresetProvider>
        ),
    ],
};

export const TechSupportAgent: Story = {
    name: "Support Technique",
    decorators: [
        (Story) => (
            <ConfigPresetProvider preset={TECH_SUPPORT_PRESET}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <Story />
                </div>
            </ConfigPresetProvider>
        ),
    ],
};

export const CareerCoachAgent: Story = {
    name: "Coach de Carrière",
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
