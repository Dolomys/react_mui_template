import PoppinsRegular from "./Poppins/Poppins-Regular.ttf";
import PoppinsBold from "./Poppins/Poppins-Bold.ttf";
import PoppinsItalic from "./Poppins/Poppins-Italic.ttf";
const fonts = `
    @font-face {
        font-family: 'Poppins';
        font-weight: 400;
        src: local('Poppins'),
        url(${PoppinsRegular}) format('truetype');
    }
    @font-face {
        font-family: 'PoppinsBold';
        font-weight: 700;
        src: local('PoppinsBold'),
        url(${PoppinsBold}) format('truetype');
    }
    @font-face {
        font-family: 'PoppinsItalic';
        font-weight: 400;
        src: local('PoppinsItalic'),
        url(${PoppinsItalic}) format('truetype');
    }
`;

export default fonts;
