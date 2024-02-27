import { COLORS } from '@constants/colors.constant';
import { Components } from '@mui/material';

const tabs: Components = {
  MuiTabs: {
    styleOverrides: {
      root: (props) => ({
        ...(props.ownerState['aria-label'] === 'contained' || props.ownerState['aria-label'] === 'filled'
          ? {
              backgroundColor: COLORS.white,
              borderRadius: '15px'
            }
          : {})
      }),
      indicator: {
        backgroundColor: 'transparent'
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: (props) => ({
        ...(props.ownerState['aria-label'] === 'contained'
          ? {
              flex: 1,
              color: COLORS.black,
              backgroundColor: COLORS.white,
              textTransform: 'none',
              maxWidth: 'none',
              minWidth: 'fit-content',
              '&.Mui-selected': {
                minWidth: 'fit-content',
                maxWidth: 'none',
                color: COLORS.white,
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '15px',
                backgroundColor: COLORS.black
              }
            }
          : props.ownerState['aria-label'] === 'filled'
          ? {
              flex: 1,
              color: COLORS.black,
              backgroundColor: 'transparent',
              textTransform: 'none',
              borderRadius: '15px',
              minWidth: 'fit-content',
              maxWidth: 'none',
              '&.Mui-selected': {
                maxWidth: 'none',
                minWidth: 'fit-content',
                color: COLORS.white,
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '15px',
                backgroundColor: COLORS.black
              }
            }
          : {
              color: COLORS.black,
              fontSize: '14px',
              fontWeight: 400,
              textTransform: 'none',
              padding: '0 10px 0 0',
              '&.Mui-selected': {
                color: COLORS.black,
                fontSize: '14px',
                fontWeight: 600
              }
            })
      })
    }
  }
};
export default tabs;
