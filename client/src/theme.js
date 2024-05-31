import { createTheme } from '@mui/material/styles';

// Convert HSL values to CSS HSL function string
const hsl = (h, s, l) => `hsl(${h}, ${s}%, ${l}%)`;

// Define the theme colors
const lightThemeColors = {
  background: hsl(0, 0, 100),
  foreground: hsl(222.2, 84, 4.9),
  card: hsl(0, 0, 100),
  cardForeground: hsl(222.2, 84, 4.9),
  popover: hsl(0, 0, 100),
  popoverForeground: hsl(222.2, 84, 4.9),
  primary: hsl(222.2, 47.4, 11.2),
  primaryForeground: hsl(210, 40, 98),
  secondary: hsl(210, 40, 96.1),
  secondaryForeground: hsl(222.2, 47.4, 11.2),
  muted: hsl(210, 40, 96.1),
  mutedForeground: hsl(215.4, 16.3, 46.9),
  accent: hsl(210, 40, 96.1),
  accentForeground: hsl(222.2, 47.4, 11.2),
  destructive: hsl(0, 84.2, 60.2),
  destructiveForeground: hsl(210, 40, 98),
  border: hsl(214.3, 31.8, 91.4),
  input: hsl(214.3, 31.8, 91.4),
  ring: hsl(222.2, 84, 4.9),
};

const darkThemeColors = {
  background: hsl(222.2, 84, 4.9),
  foreground: hsl(210, 40, 98),
  card: hsl(222.2, 84, 4.9),
  cardForeground: hsl(210, 40, 98),
  popover: hsl(222.2, 84, 4.9),
  popoverForeground: hsl(210, 40, 98),
  primary: hsl(210, 40, 98),
  primaryForeground: hsl(222.2, 47.4, 11.2),
  secondary: hsl(217.2, 32.6, 17.5),
  secondaryForeground: hsl(210, 40, 98),
  muted: hsl(217.2, 32.6, 17.5),
  mutedForeground: hsl(215, 20.2, 65.1),
  accent: hsl(217.2, 32.6, 17.5),
  accentForeground: hsl(210, 40, 98),
  destructive: hsl(0, 62.8, 30.6),
  destructiveForeground: hsl(210, 40, 98),
  border: hsl(217.2, 32.6, 17.5),
  input: hsl(217.2, 32.6, 17.5),
  ring: hsl(212.7, 26.8, 83.9),
};

// Create the light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: lightThemeColors.background,
      paper: lightThemeColors.card,
    },
    text: {
      primary: lightThemeColors.foreground,
      secondary: lightThemeColors.secondaryForeground,
    },
    primary: {
      main: lightThemeColors.primary,
      contrastText: lightThemeColors.primaryForeground,
    },
    secondary: {
      main: lightThemeColors.secondary,
      contrastText: lightThemeColors.secondaryForeground,
    },
    error: {
      main: lightThemeColors.destructive,
      contrastText: lightThemeColors.destructiveForeground,
    },
    divider: lightThemeColors.border,
  },
  shape: {
    borderRadius: '0.5rem',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: lightThemeColors.background,
          color: lightThemeColors.foreground,
          borderColor: lightThemeColors.border,
        },
        '*': {
          borderColor: lightThemeColors.border,
        },
      },
    },
  },
});

// Create the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: darkThemeColors.background,
      paper: darkThemeColors.card,
    },
    text: {
      primary: darkThemeColors.foreground,
      secondary: darkThemeColors.secondaryForeground,
    },
    primary: {
      main: darkThemeColors.primary,
      contrastText: darkThemeColors.primaryForeground,
    },
    secondary: {
      main: darkThemeColors.secondary,
      contrastText: darkThemeColors.secondaryForeground,
    },
    error: {
      main: darkThemeColors.destructive,
      contrastText: darkThemeColors.destructiveForeground,
    },
    divider: darkThemeColors.border,
  },
  shape: {
    borderRadius: '0.5rem',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: darkThemeColors.background,
          color: darkThemeColors.foreground,
          borderColor: darkThemeColors.border,
        },
        '*': {
          borderColor: darkThemeColors.border,
        },
      },
    },
  },
});

// Export the themes
export { lightTheme, darkTheme };
