import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { agentConfigSchema } from "@/types/agent";
import { buildSystemPrompt } from "@/lib/prompt";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const parsedConfig = agentConfigSchema.parse(body.config);
        const userMessage: string = body.message;

        const systemPrompt = buildSystemPrompt(parsedConfig);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage },
            ],
        });

        const reply = completion.choices[0]?.message?.content ?? "";

        return NextResponse.json({ reply });
    } catch (error: any) {
        console.error("API /agent-chat error:", error);
        return NextResponse.json(
            {
                error: "Something went wrong",
                details: error?.message ?? "Unknown error",
            },
            { status: 500 },
        );
    }
}
