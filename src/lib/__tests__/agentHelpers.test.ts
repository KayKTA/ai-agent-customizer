import { describe, it, expect } from "vitest";
import { buildSystemPrompt } from "../prompt";
import type { AgentConfig } from "@/types/agent";

const baseConfig: AgentConfig = {
    name: "Custom AI Agent",
    role: "Helpful assistant",
    tone: "friendly",
    level: "mid",
    domains: ["web development"] as any,
    extraInstructions:
        "Explique les concepts de manière simple pour des non-techs.",
};

describe("buildSystemPrompt", () => {
    it("generates correct prompt without extra instructions", () => {
        const prompt = buildSystemPrompt(baseConfig);

        expect(prompt).toContain("Custom AI Agent");
        expect(prompt).toContain("Helpful assistant");
        expect(prompt.toLowerCase()).toContain("friendly");
        expect(prompt.toLowerCase()).toContain("mid");
        expect(prompt).toContain("web development");
        expect(prompt).toContain("Explique les concepts de manière simple pour des non-techs.");

    });
    it("does not include extra instructions when none are provided", () => {
        const config: AgentConfig = {
            ...baseConfig,
            extraInstructions: "",
        };
        const prompt = buildSystemPrompt(config);
        expect(prompt).not.toContain("Additional instructions from the user:");
    });
    it("generates correct prompt with extra instructions", () => {
        const prompt = buildSystemPrompt(baseConfig);
        expect(prompt).toContain("Additional instructions from the user: Explique les concepts de manière simple pour des non-techs.");
    });
    it("handles multiple domains correctly", () => {
        const config: AgentConfig = {
            ...baseConfig,
            domains: ["web development", "project management"] as any,
        };
        const prompt = buildSystemPrompt(config);
        expect(prompt).toContain("Domains of expertise: web development, project management.");
    });
    it("handles empty domains array", () => {
        const config: AgentConfig = {
            ...baseConfig,
            domains: [] as any,
        };
        const prompt = buildSystemPrompt(config);
        expect(prompt).toContain("Domains of expertise: .");
    });
});
