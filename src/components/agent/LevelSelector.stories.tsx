import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import LevelSelector from "./LevelSelector";
import { Level, LEVEL_LABELS_FR } from "@/config/agentConfig";

const meta: Meta<typeof LevelSelector> = {
    title: "Agent/LevelSelector",
    component: LevelSelector,
    parameters: {
        layout: "centered",
    },
    args: {
        value: "mid",
    },
};

export default meta;

type Story = StoryObj<typeof LevelSelector>;

/**
 * Level selector showcasing all available levels from LEVELS.
 */
export const AllLevels: Story = {
    render: () => {
        const [level, setLevel] = useState<Level>("mid");

        return (
            <div style={{ padding: 16 }}>
                <p style={{ marginBottom: 8, fontSize: 13, opacity: 0.8 }}>
                    Niveau actuel : <strong>{LEVEL_LABELS_FR[level]}</strong>{" "}
                    <span style={{ opacity: 0.6 }}>({level})</span>
                </p>
                <LevelSelector value={level} onChange={setLevel} />
            </div>
        );
    },
};
