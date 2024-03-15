import PoppinsRegular from "./Poppins/Poppins-Regular.ttf";
import PoppinsBold from "./Poppins/Poppins-Bold.ttf";
import PoppinsItalic from "./Poppins/Poppins-Italic.ttf";
const fonts = `
    @font-face {
        font-family: 'Poppins';
        font-weight: 400;
        src: local('Poppins'),
        url(${PoppinsRegular}) format('ttf');
    }
    @font-face {
        font-family: 'PoppinsBold';
        font-weight: 700;
        src: local('PoppinsBold'),
        url(${PoppinsBold}) format('ttf');
    }
    @font-face {
        font-family: 'PoppinsItalic';
        font-weight: 400;
        src: local('PoppinsItalic'),
        url(${PoppinsItalic}) format('ttf');
    }
`;

export default fonts;
