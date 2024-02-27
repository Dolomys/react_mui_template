import { COLORS } from "@constants/colors.constant";
import { alpha, Components } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    containedLight: true;
    round: true;
  }

  interface ButtonPropsColorOverrides {
    black: true;
    red: true;
    white: true;
  }
}

const button: Components = {
  MuiButton: {
    defaultProps: { fullWidth: true, variant: "contained" },
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: "24px",
        width: "fit-content",
        padding: "0.75rem 1.75rem",
        gap: "0.625rem",
        whiteSpace: "nowrap",
        lineHeight: "150%",
      },
      contained: ({ theme, ownerState }: any) => ({
        color: theme.palette[ownerState.color ?? "primary"]?.contrastText,
        backgroundColor: theme.palette[ownerState.color ?? "primary"]?.main,
        fontWeight: 900,
        fontSize: "1rem",
        "&.Mui-disabled": {
          backgroundColor: alpha(theme.palette[ownerState.color ?? "primary"]?.main, 0.5),
          color: alpha(theme.palette[ownerState.color ?? "primary"]?.contrastText, 0.5),
        },
        "&:hover": {
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          backgroundColor: alpha(theme.palette[ownerState.color ?? "primary"]?.main, 0.9),
          color: theme.palette[ownerState.color ?? "primary"]?.contrastText,
        },
      }),
      text: { textDecoration: "underline" },
      sizeSmall: { height: "40px" },
    },
    variants: [
      {
        props: { variant: "containedLight" },
        style: () => ({
          color: COLORS.black,
          backgroundColor: COLORS.grey[300],
          fontWeight: 300,
          "&:hover": {
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            backgroundColor: alpha(COLORS.grey[300], 0.2),
          },
        }),
      },
      {
        props: { variant: "text" },
        style: () => ({
          color: COLORS.black,
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: 300,
          "&:hover": {
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            backgroundColor: alpha(COLORS.grey[300], 0.2),
          },
        }),
      },
    ],
  },
};

export default button;
