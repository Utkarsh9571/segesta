export interface ThemeTokens {
  name: "daylight" | "nocturne";
  className: string;
  bgGradient: string;
  textPrimary: string;
  textSecondary: string;
}

export const THEME_DAYLIGHT: ThemeTokens = {
  name: "daylight",
  className: "theme-daylight",
  bgGradient: "linear-gradient(180deg, #6D4E8B 0%, #A16885 45%, #B27790 100%)",
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255, 255, 255, 0.85)",
};

export const THEME_NOCTURNE: ThemeTokens = {
  name: "nocturne",
  className: "theme-nocturne",
  bgGradient: "linear-gradient(180deg, #161232 0%, #0D0B1F 100%)",
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255, 255, 255, 0.70)",
};
