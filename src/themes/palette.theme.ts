import { PaletteColorOptions, PaletteOptions } from "@mui/material";
import { COLORS } from "@utils/constants/colors.constant";

declare module "@mui/material/styles" {
  interface CustomPalette {
    black: PaletteColorOptions;
    red: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

const palette: PaletteOptions = {
  primary: { main: COLORS.primary, contrastText: COLORS.white },
  black: { main: COLORS.black, contrastText: COLORS.white },
  red: { main: COLORS.red, contrastText: COLORS.white },
  error: { main: COLORS.red },
  background: { default: "rgb(249, 249, 249)" },
  text: { secondary: COLORS.black },
};

export default palette;
