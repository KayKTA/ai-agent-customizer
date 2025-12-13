import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ToneSelector from "./ToneSelector";
import { Tone, TONE_LABELS_FR } from "@/config/agentConfig";

const meta: Meta<typeof ToneSelector> = {
    title: "Agent/ToneSelector",
    component: ToneSelector,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        value: "friendly",
    },
};

export default meta;

type Story = StoryObj<typeof ToneSelector>;


/**
 * Tone selector showcasing all available tones from TONES.
 */
export const AllTones: Story = {
    render: (args) => {
        const [tone, setTone] = useState<Tone>(args.value as Tone);

        return (
            <div style={{ padding: 16 }}>
                <p style={{ marginBottom: 8, fontSize: 13, opacity: 0.8 }}>
                    Ton actuel : <strong>{TONE_LABELS_FR[tone]}</strong>{" "}
                    <span style={{ opacity: 0.6 }}>({tone})</span>
                </p>
                <ToneSelector value={tone} onChange={setTone} />
            </div>
        );
    },
};
