import { createContext, useState } from "react";
import { Appearance } from "react-native";
import { colors } from "../constants/color";

interface ThemeContextType {
  colorScheme: 'light' | 'dark' | null;
  setColorScheme: (scheme: 'light' | 'dark' | null) => void;
  theme: typeof colors.light | typeof colors.dark;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  {} as ThemeContextType
);

export const ThemeProvider = ({ children }: any) => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark' | null>(Appearance.getColorScheme() ?? 'light');

  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return (
    
    <ThemeContext.Provider value={{ colorScheme, setColorScheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
