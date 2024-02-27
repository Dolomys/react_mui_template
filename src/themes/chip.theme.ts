import { Components } from '@mui/material';

const chip: Components = {
  MuiChip: {
    styleOverrides: {
      root: () => ({
        padding: '4px 8px',
        textTransform: 'uppercase',
        '& .MuiChip-label': {
          fontSize: '12px',
          fontWeight: 700
        }
      })
    }
  }
};
export default chip;
