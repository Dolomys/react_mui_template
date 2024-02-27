import { COLORS } from '@constants/colors.constant';
import { Components } from '@mui/material';

const inputLabel: Components = {
  MuiInputLabel: {
    styleOverrides: {
      root: {
        paddingLeft: 0,
        alignItems: 'center',
        color: COLORS.black,
        fontSize: '14px',
        fontWeight: 400,
        height: 20,
        lineHeight: '21px',
        overflow: 'visible',
        minWidth: 'fit-content',
        letterspacing: '-0.266px'
      }
    }
  }
};

export default inputLabel;
