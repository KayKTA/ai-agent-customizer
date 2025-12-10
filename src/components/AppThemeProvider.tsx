"use client";

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            // violet néon
            main: "#a855f7",
        },
        secondary: {
            // bleu cyan accent
            main: "#22d3ee",
        },
        background: {
            // fond global
            default: "#050014",
            paper: "#0b031f",
        },
    },
    shape: {
        borderRadius: 6,
    },
    typography: {
        fontFamily:
            "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    },
});

export default function AppThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
