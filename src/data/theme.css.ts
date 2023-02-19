import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    background: "white",
    text: "black",
    primary: "blue",
    secondary: "red",
  },
  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "32px",
  },
  width: {
    medium: "1024px",
    large: "1200px",
  },
});
