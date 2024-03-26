import { alpha, createTheme } from "@mui/material";
import palette from "@themes/palette.theme";
import { COLORS } from "@utils/constants/colors.constant";
import button from "./button.theme";
import textfield from "@themes/textfield.theme.ts";
import iconButton from "@themes/iconButton.theme.ts";
import chip from "@themes/chip.theme.ts";
import switchTheme from "@themes/switch.theme.ts";
import selectTheme from "@themes/select.theme.ts";
import inputLabel from "./inputLabel.theme";
import tabs from "./tabs.theme";
import { CssOverrides } from "./cssOverrides.theme";
import fonts from "@assets/fonts";
import { frFR } from "@mui/material/locale";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    ld: true;
    xl: true;
  }
}

const theme = createTheme(
  {
    palette,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        ld: 1200,
        lg: 1500,
        xl: 1700,
      },
    },
    typography: { fontFamily: "'Poppins', sans-serif" },
    components: {
      MuiCssBaseline: {
        styleOverrides: `${fonts}
      html {
          height: 100vh;
          -webkit-font-smoothing: auto;
          scroll-behavior: smooth;
        }
        body {
          height: 100vh;
          scrollbar-color: ${COLORS.primary} ${alpha(COLORS.primary, 0.1)};
          scrollbar-width: thin;
          background-color: #ffffff;
        }
        ${CssOverrides}
       `,
      },
      ...button,
      ...iconButton,
      ...chip,
      ...textfield,
      ...switchTheme,
      ...selectTheme,
      ...inputLabel,
      ...tabs,
    },
  },
  frFR
);

export default theme;
