import type { Meta, StoryObj } from "@storybook/react";
import SectionCard from "./SectionCard";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Typography } from "@mui/material";

const meta: Meta<typeof SectionCard> = {
    title: "Layout/SectionCard",
    component: SectionCard,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        title: "Titre de section",
        subtitle: "Un sous-titre pour expliquer le contexte.",
    },
};

export default meta;

type Story = StoryObj<typeof SectionCard>;

export const Default: Story = {
    args: {
        icon: <SettingsSuggestIcon />,
        children: (
            <Typography variant="body2">
                Contenu de la carte. Tu peux y mettre un formulaire, un tableau de bord,
                etc.
            </Typography>
        ),
    },
};

export const WithoutIcon: Story = {
    args: {
        icon: undefined,
        children: (
            <Typography variant="body2">
                Variante sans icône, pour les sections plus neutres.
            </Typography>
        ),
    },
};

export const DenseContent: Story = {
    args: {
        children: (
            <>
                <Typography variant="body2" gutterBottom>
                    Ligne 1 de contenu.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Ligne 2 de contenu avec un peu plus de texte pour voir la hauteur.
                </Typography>
                <Typography variant="body2">
                    Ligne 3 de contenu pour tester le padding interne.
                </Typography>
            </>
        ),
    },
};
