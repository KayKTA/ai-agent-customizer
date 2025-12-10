import type { Metadata } from "next";
import { ReactNode } from "react";
import AppThemeProvider from "@/components/AppThemeProvider";

export const metadata: Metadata = {
    title: "AI Agent Customizer",
    description: "Build and test your custom AI agents",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AppThemeProvider>{children}</AppThemeProvider>
            </body>
        </html>
    );
}
