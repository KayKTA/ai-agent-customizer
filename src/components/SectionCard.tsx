"use client";

import { ReactNode } from "react";
import { Box, Paper, Typography } from "@mui/material";

type SectionCardProps = {
    title: string;
    subtitle?: string;
    icon?: ReactNode;   // icon displayed next to the title
    action?: ReactNode;
    children: ReactNode;
};

export default function SectionCard({
    title,
    subtitle,
    icon,
    action,
    children,
}: SectionCardProps) {
    return (
        <Paper
            elevation={0}
            sx={{
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
            }}
        >
            {/* === HEADER === */}
            <Box
                sx={{
                    px: 2.5,
                    py: 1.7,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                }}
            >
                {/* ICON */}
                {icon && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "primary.main",
                        }}
                    >
                        {icon}
                    </Box>
                )}

                {/* TITLE + SUBTITLE */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, letterSpacing: 0.2 }}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography
                            variant="body2"
                            sx={{ opacity: 0.7, mt: 0.2, lineHeight: 1.3 }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                {/* ACTION (copy, reset…) */}
                {action && <Box>{action}</Box>}
            </Box>

            {/* === CONTENT === */}
            <Box sx={{ p: 2.5 }}>{children}</Box>
        </Paper>
    );
}
