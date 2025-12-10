"use client";

import { ReactNode } from "react";
import { Box, Paper, Typography, SxProps, Theme } from "@mui/material";

type SectionCardProps = {
    title?: string;
    subtitle?: string;
    icon?: ReactNode;
    action?: ReactNode;
    customHeader?: ReactNode;
    children: ReactNode;
    sx?: SxProps<Theme>;
};

export default function SectionCard({
    title,
    subtitle,
    icon,
    action,
    customHeader,
    children,
    sx,
}: SectionCardProps) {
    return (
        <Paper
            elevation={0}
            sx={{
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                ...sx,
            }}
        >
            <Box
                sx={{
                    px: 2.5,
                    py: 1.7,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                }}
            >
                {customHeader ? (
                    customHeader
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                        }}
                    >
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
                        <Box sx={{ flex: 1 }}>
                            {title && (
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600, letterSpacing: 0.2 }}
                                >
                                    {title}
                                </Typography>
                            )}
                            {subtitle && (
                                <Typography
                                    variant="body2"
                                    sx={{ opacity: 0.7, mt: 0.2, lineHeight: 1.3 }}
                                >
                                    {subtitle}
                                </Typography>
                            )}
                        </Box>
                        {action && <Box>{action}</Box>}
                    </Box>
                )}
            </Box>

            <Box sx={{ p: 2.5 }}>{children}</Box>
        </Paper>
    );
}
