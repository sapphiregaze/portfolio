import { Theme, ThemeOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#6B705C",
    },
    secondary: {
      main: "#3F4238",
    },
    background: {
      default: "#B7B7A4",
      paper: "#D4C7B0",
    },
  },
  typography: {
    fontFamily: "Zilla Slab",
  },
};

const defaultTheme: Theme = createTheme(themeOptions);

export default defaultTheme;
