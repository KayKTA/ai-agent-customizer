import { z } from "zod";

import {
  Tone,
  Level,
  Domain,
  TONES,
  LEVELS,
  AVAILABLE_DOMAINS,
} from "@/config/agentConfig";

export const DEFAULT_AGENT_CONFIG: AgentConfig = {
  name: "",
  role: "",
  tone: "friendly",
  level: "mid",
  domains: [],
  extraInstructions: "",
};

export const agentConfigSchema = z.object({
  name: z.string().min(1, "Required"),
  role: z.string().min(1, "Required"),
  tone: z.enum(TONES),
  level: z.enum(LEVELS),
  domains: z.array(z.enum(AVAILABLE_DOMAINS)).min(1, "Select at least one domain"),
  extraInstructions: z.string().optional().default(""),
});

export type AgentConfig = z.infer<typeof agentConfigSchema>;
export type { Tone, Level, Domain };
