import { COLORS } from "@utils/constants/colors.constant";

export const CssOverrides = `
* {
    min-width: 0;
}
#root {
    overflow: hidden;
}
.leaflet-popup-content-wrapper {
    background-color: ${COLORS.primary}
}
.leaflet-popup-content {
    color: ${COLORS.white};
}
.leaflet-popup-tip {
        width: 0px;
        height: 0px;
      }`;
