import { z } from "zod";

export const tones = [
    "friendly",
    "professional",
    "empathetic",
    "direct",
    "playful",
] as const;

export const levels = ["junior", "mid", "senior", "expert"] as const;

export const agentConfigSchema = z.object({
    name: z.string().min(1, "Required"),
    role: z.string().min(1, "Required"),
    tone: z.enum(tones),
    level: z.enum(levels),
    domains: z.array(z.string()).min(1, "Select at least one domain"),
    extraInstructions: z.string().optional().default(""),
});

export type AgentConfig = z.infer<typeof agentConfigSchema>;
