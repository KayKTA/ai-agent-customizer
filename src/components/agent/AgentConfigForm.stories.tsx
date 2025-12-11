import type { Meta, StoryObj } from "@storybook/react";
import AgentConfigForm from "./AgentConfigForm";
import { DEFAULT_AGENT_CONFIG } from "@/types/agent";
import { useAgentConfig } from "@/hooks/useAgentConfig";
import { useEffect, ReactNode } from "react";

/**
 * Decorator that resets the agent configuration to default before
 * rendering the story.
 */
function AgentConfigDecorator({ children }: { children: ReactNode }) {
    const { updateAgentConfig } = useAgentConfig();

    useEffect(() => {
        updateAgentConfig(DEFAULT_AGENT_CONFIG);
    }, [updateAgentConfig]);

    return <>{children}</>;
}

const meta: Meta<typeof AgentConfigForm> = {
    title: "Agent/AgentConfigForm",
    component: AgentConfigForm,
    decorators: [
        (Story) => (
            <AgentConfigDecorator>
                <div style={{ maxWidth: 1000 }}>
                    <Story />
                </div>
            </AgentConfigDecorator>
        ),
    ],
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof AgentConfigForm>;

/**
 * Config form with default agent configuration.
 */
export const Default: Story = {
    args: {},
};
