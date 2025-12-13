import { NextRequest, NextResponse } from "next/server";
import { agentConfigSchema } from "@/types/agent";
import { buildSystemPrompt } from "@/lib/prompt";
import { DOMAIN_CONTEXT } from "@/config/domainContext";

type OllamaChatResponse = {
    message?: { role: string; content: string };
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const parsedConfig = agentConfigSchema.parse(body.config);
        const userMessage: string = body.message;
        const domainContext = DOMAIN_CONTEXT[parsedConfig.domains[0]];
        // const systemPrompt = buildSystemPrompt(parsedConfig);
        const systemPrompt = `${domainContext}\n\n${buildSystemPrompt(parsedConfig)}`;

        const ollamaRes = await fetch("http://127.0.0.1:11434/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "llama3.1:8b",
                stream: false,
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userMessage },
                ],
                // options: { temperature: 0.3 }
            }),
        });

        if (!ollamaRes.ok) {
            const errText = await ollamaRes.text();
            return NextResponse.json(
                { error: "Ollama request failed", details: errText },
                { status: 502 }
            );
        }

        const data = (await ollamaRes.json()) as OllamaChatResponse;
        const reply = data.message?.content ?? "";

        return NextResponse.json({ reply });
    } catch (error: any) {
        console.error("API /agent-chat error:", error);
        return NextResponse.json(
            { error: "Something went wrong", details: error?.message ?? "Unknown error" },
            { status: 500 }
        );
    }
}
