export const theme = {
  colors: {
    primary: {
      dark: "#02044A",
      light: "#16195C",
      lighter: "#494A7C",
    },
    success: "#25CD89",
    success_hover: "#1EA870",
    text: {
      primary: "#FFFFFF",
      secondary: "#B8B8D4",
      disabled: "#7A7A9D",
    },
    border: "#16195C",
    border_hover: "#496459",
    error: "#FF5A5F",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
    xxl: "3rem",
  },
  typography: {
    heading: {
      h1: {
        fontSize: "2rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "1.6rem",
        fontWeight: 700,
      },
      h3: {
        fontSize: "1rem",
        fontWeight: 700,
      },
    },
    body: {
      regular: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      small: {
        fontSize: "0.9rem",
        fontWeight: 400,
      },
      xs: {
        fontSize: "0.8rem",
        fontWeight: 400,
      },
    },
  },
  borderRadius: {
    sm: "1rem",
    md: "3rem",
    full: "50%",
  },
  transitions: {
    default: "0.3s ease-in-out",
  },
} as const;

export type Theme = typeof theme;
