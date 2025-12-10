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
    Divider,
    Typography
} from "@mui/material";
import { useAgentConfig } from "@/hooks/useAgentConfig";
import { levels, tones } from "@/types/agent";
import ToneSelector from "@/components/ToneSelector";
import LevelSelector from "@/components/LevelSelector";

const AVAILABLE_DOMAINS = [
    "general",
    "web development",
    "data & AI",
    "project management",
    "agile / SAFe",
    "career coaching",
];

export default function AgentConfigForm() {
    const { config, updateAgentConfig } = useAgentConfig();

    return (
        <Box component="form" display="flex" flexDirection="column" gap={3}>
            <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.7 }}>
                Identity
            </Typography>
            <TextField
                label="Agent name"
                value={config.name}
                onChange={(e) => updateAgentConfig({ name: e.target.value })}
                fullWidth
            />

            <TextField
                label="Role / persona"
                value={config.role}
                onChange={(e) => updateAgentConfig({ role: e.target.value })}
                fullWidth
                placeholder="Ex: Senior AI coach for developers..."
                sx={{ mt: 2 }}
            />
            <Divider textAlign="left">Style</Divider>
            <Box>
                <Typography variant="body2" sx={{ mb: 1, opacity: 0.7 }}>
                    Tone
                </Typography>
                <ToneSelector
                    value={config.tone}
                    onChange={(tone) => updateAgentConfig({ tone })}
                />
            </Box>

            <Box>
                <Typography variant="body2" sx={{ mb: 1, opacity: 0.7 }}>
                    Expertise level
                </Typography>
                <LevelSelector
                    value={config.level}
                    onChange={(level) => updateAgentConfig({ level })}
                />
            </Box>
            <Divider textAlign="left">Scope</Divider>
            <FormControl fullWidth>
                <InputLabel>Domains</InputLabel>
                <Select
                    multiple
                    value={config.domains}
                    onChange={(e) =>
                        updateAgentConfig({
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
            <Divider textAlign="left">Rules</Divider>
            <TextField
                label="Extra instructions"
                value={config.extraInstructions ?? ""}
                onChange={(e) => updateAgentConfig({ extraInstructions: e.target.value })}
                fullWidth
                multiline
                minRows={3}
                placeholder="Ex: always answer in French, use concrete examples, etc."
            />
        </Box>
    );
}
