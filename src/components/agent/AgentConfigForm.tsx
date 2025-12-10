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
import {
    AVAILABLE_DOMAINS,
    Domain,
    DOMAIN_LABELS_FR,
} from "@/config/agentConfig";
import { color } from "framer-motion";

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

    const columnTitleSx = {
        mb: 1.5,
        display: "block",
        textTransform: "uppercase",
        letterSpacing: 0.8,
        fontSize: 12,
        fontWeight: 600,
        opacity: 0.8,
        color: "text.primary",
    } as const;

    const columnBoxBase = {
        pb: 1,
    } as const;

    const columnWithSeparator = {
        ...columnBoxBase,
        borderLeft: {
            xs: "none",
            md: "1px solid rgba(255,255,255,0.07)",
        },
        pl: {
            xs: 0,
            md: 3,
        },
    } as const;

    return (
        <Box
            sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "0.8fr 1fr 1.2fr", // Identity | Domains & Rules | Style
                },
            }}
        >
            {/* Col 1 : Identity */}
            <Box sx={columnBoxBase}>
                <Typography variant="overline" sx={columnTitleSx}>
                    Identité
                </Typography>

                <TextField
                    label="Nom"
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
                    helperText="Ex : Custom AI Agent, Coach Agile, Mentor Data..."
                />
            </Box>



            {/* Col 2 : Domains & Rules */}
            <Box sx={columnWithSeparator}>
                <Typography variant="overline" sx={columnTitleSx}>
                    Domaines & règles
                </Typography>

                <FormControl fullWidth size="small" sx={{ mb: 2 }}>
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

                <TextField
                    label="Instructions supplémentaires"
                    placeholder="Ex : Réponds toujours en français, reste concise, donne 1 exemple concret..."
                    fullWidth
                    size="small"
                    multiline
                    minRows={3}
                    value={config.extraInstructions}
                    onChange={handleExtraInstructionsChange}
                />
            </Box>

              {/* Col 3 : Style */}
            <Box sx={columnWithSeparator}>
                <Typography variant="overline" sx={columnTitleSx}>
                    Style
                </Typography>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
                        Ton
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
        </Box>
    );
}
