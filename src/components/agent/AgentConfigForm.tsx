"use client";

import { ChangeEvent } from "react";
import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";
import { useAgentConfig } from "@/hooks/useAgentConfig";
import ToneSelector from "@/components/agent/ToneSelector";
import LevelSelector from "@/components/agent/LevelSelector";
import { AVAILABLE_DOMAINS, Domain, DOMAIN_LABELS_FR } from "@/config/agentConfig";

export default function AgentConfigForm() {
    const { config, updateAgentConfig } = useAgentConfig();

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateAgentConfig({ name: e.target.value });
    };

    const handleRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateAgentConfig({ role: e.target.value });
    };

    const handleDomainsChange = (event: SelectChangeEvent<string[]>) => {
        const value = event.target.value as unknown as Domain[];
        updateAgentConfig({ domains: value });
    };

    const handleExtraInstructionsChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        updateAgentConfig({ extraInstructions: e.target.value });
    };

    return (
        <Box display="flex" flexDirection="column" gap={3}>
            {/* Identité */}
            <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.7 }}>
                    Identité
                </Typography>
                <TextField
                    label="Nom de l’agent"
                    fullWidth
                    size="small"
                    value={config.name}
                    onChange={handleNameChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Rôle / persona"
                    fullWidth
                    size="small"
                    value={config.role}
                    onChange={handleRoleChange}
                    helperText="Exemples : Coach Agile, Mentor Data junior, Assistant support IT..."
                />
            </Box>

            {/* Style */}
            <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.7 }}>
                    Style de l’agent
                </Typography>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
                        Ton de l’agent
                    </Typography>
                    <ToneSelector
                        value={config.tone}
                        onChange={(tone) => updateAgentConfig({ tone })}
                    />
                </Box>

                <Box>
                    <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
                        Niveau d’expertise
                    </Typography>
                    <LevelSelector
                        value={config.level}
                        onChange={(level) => updateAgentConfig({ level })}
                    />
                </Box>
            </Box>

            {/* Domaines */}
            <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.7 }}>
                    Domaines de compétence
                </Typography>
                <FormControl fullWidth size="small">
                    <InputLabel id="agent-domains-label">Domaines</InputLabel>
                    <Select
                        labelId="agent-domains-label"
                        multiple
                        value={config.domains}
                        onChange={handleDomainsChange}
                        input={<OutlinedInput label="Domaines" />}
                        renderValue={(selected) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "6px",
                                    rowGap: "6px",
                                }}
                            >
                                {selected.map((value) => (
                                    <Chip
                                        key={value}
                                        label={DOMAIN_LABELS_FR[value] ?? value}
                                        size="small"
                                    />
                                ))}
                            </Box>
                        )}
                    >
                        {AVAILABLE_DOMAINS.map((domain) => (
                            <MenuItem key={domain} value={domain}>
                                {DOMAIN_LABELS_FR[domain] ?? domain}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            {/* Règles supplémentaires */}
            <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.7 }}>
                    Règles et instructions
                </Typography>
                <TextField
                    label="Instructions supplémentaires"
                    placeholder="Exemples : Réponds toujours en français. Ne donne jamais de conseils médicaux. Donne systématiquement 3 exemples concrets..."
                    fullWidth
                    size="small"
                    multiline
                    minRows={3}
                    value={config.extraInstructions}
                    onChange={handleExtraInstructionsChange}
                />
            </Box>
        </Box>
    );
}
