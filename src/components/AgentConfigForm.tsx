"use client";

import {
    Box,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    Checkbox,
    ListItemText,
} from "@mui/material";
import { useAgentStore } from "@/store/agentStore";
import { levels, tones } from "@/types/agent";

const AVAILABLE_DOMAINS = [
    "general",
    "web development",
    "data & AI",
    "project management",
    "agile / SAFe",
    "career coaching",
];

export default function AgentConfigForm() {
    const { config, setConfig } = useAgentStore();

    return (
        <Box component="form" display="flex" flexDirection="column" gap={2}>
            <TextField
                label="Agent name"
                value={config.name}
                onChange={(e) => setConfig({ name: e.target.value })}
                fullWidth
            />

            <TextField
                label="Role / persona"
                value={config.role}
                onChange={(e) => setConfig({ role: e.target.value })}
                fullWidth
                placeholder="Ex: Senior AI coach for developers..."
            />

            <FormControl fullWidth>
                <InputLabel>Tone</InputLabel>
                <Select
                    label="Tone"
                    value={config.tone}
                    onChange={(e) =>
                        setConfig({ tone: e.target.value as (typeof tones)[number] })
                    }
                >
                    {tones.map((tone) => (
                        <MenuItem key={tone} value={tone}>
                            {tone}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Expertise level</InputLabel>
                <Select
                    label="Expertise level"
                    value={config.level}
                    onChange={(e) =>
                        setConfig({ level: e.target.value as (typeof levels)[number] })
                    }
                >
                    {levels.map((lvl) => (
                        <MenuItem key={lvl} value={lvl}>
                            {lvl}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Domains</InputLabel>
                <Select
                    multiple
                    value={config.domains}
                    onChange={(e) =>
                        setConfig({
                            domains:
                                typeof e.target.value === "string"
                                    ? e.target.value.split(",")
                                    : (e.target.value as string[]),
                        })
                    }
                    input={<OutlinedInput label="Domains" />}
                    renderValue={(selected) => (selected as string[]).join(", ")}
                >
                    {AVAILABLE_DOMAINS.map((domain) => (
                        <MenuItem key={domain} value={domain}>
                            <Checkbox checked={config.domains.includes(domain)} />
                            <ListItemText primary={domain} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                label="Extra instructions"
                value={config.extraInstructions ?? ""}
                onChange={(e) => setConfig({ extraInstructions: e.target.value })}
                fullWidth
                multiline
                minRows={3}
                placeholder="Ex: always answer in French, use concrete examples, etc."
            />
        </Box>
    );
}
