import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import { DEFAULT_AGENT_CONFIG } from "@/types/agent";
import { useAgentStore } from "@/store/agentStore";
import { useAgentConfig } from "@/hooks/useAgentConfig";

function ChatStoryProvider({ children }: { children: ReactNode }) {
    const { resetChat, addMessage } = useAgentStore();
    const { updateAgentConfig } = useAgentConfig();

    useEffect(() => {
        // init state for the story
        resetChat();
        updateAgentConfig({
            ...DEFAULT_AGENT_CONFIG,
            name: "Agent de démo",
            role: "Agent conversationnel de démonstration pour Storybook",
        });

        addMessage(
            "agent",
            "Bonjour 👋 Je suis l’agent de démo. Envoie-moi un message pour voir la réponse simulée."
        );

        // mock fetch for the story
        const originalFetch = window.fetch.bind(window);

        window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
            if (typeof input === "string" && input === "/api/agent-chat") {
                // simulate AI response
                return Promise.resolve(
                    new Response(
                        JSON.stringify({
                            reply:
                                "✨ (Réponse simulée Storybook) Je réponds en tant qu’agent de démo à ton message.",
                        }),
                        {
                            status: 200,
                            headers: { "Content-Type": "application/json" },
                        }
                    )
                ) as Promise<Response>;
            }

            // fallback to original fetch for other requests
            return originalFetch(input, init);
        };

        // cleanup on unmount
        return () => {
            window.fetch = originalFetch;
        };
    }, [resetChat, addMessage, updateAgentConfig]);

    return <>{children}</>;
}

const meta: Meta<typeof ChatWindow> = {
    title: "Agent/ChatWindow",
    component: ChatWindow,
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <ChatStoryProvider>
                <div style={{ width: 500, height: 600 }}>
                    <Story />
                </div>
            </ChatStoryProvider>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof ChatWindow>;

export const Default: Story = {};
