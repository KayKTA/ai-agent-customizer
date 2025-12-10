"use client";

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#fdd835" },
        background: {
            default: "#050510",
            paper: "#11111c",
        },
    },
    shape: {
        borderRadius: 6,
    },
    typography: {
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    },
});


type Props = {
    children: ReactNode;
};

export default function AppThemeProvider({ children }: Props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
