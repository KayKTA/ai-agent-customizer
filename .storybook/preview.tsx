import type { Preview } from '@storybook/nextjs-vite';
import React from 'react';
import { Box } from '@mui/material';
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
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#050312' },
                { name: 'light', value: '#ffffff' },
            ],
        },
    },

    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
