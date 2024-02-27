import { Components } from '@mui/material';
import { COLORS } from '@constants/colors.constant';

const switchTheme: Components = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 1,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: '#65C466',
              opacity: 1,
              border: 0
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5
            }
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff'
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color: COLORS.grey[500]
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.3
          }
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 20,
          height: 20
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: COLORS.grey[200],
          opacity: 1
        }
      }
    }
  }
};

export default switchTheme;
