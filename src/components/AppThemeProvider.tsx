"use client";

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fdd835",
        },
        background: {
            default: "#0b0b10",
            paper: "#14141f",
        },
    },
    shape: {
        borderRadius: 12,
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
