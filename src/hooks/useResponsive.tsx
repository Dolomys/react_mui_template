import { useMediaQuery, useTheme } from '@mui/material';
export const useResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('ld'));
  const isLessThan555Px = useMediaQuery('(max-width:555px)');
  const isLessThan1200px = useMediaQuery('(max-width:1200px)');
  const isLessThan1300Px = useMediaQuery('(max-width:1300px)');
  const isHorizontalPhone = useMediaQuery('(max-width:1400px) and (max-height:500px)');
  const isTabletOrMobile = isMobile || isTablet;

  return { isMobile, isTablet, isDesktop, isLessThan555Px, isLessThan1200px, isHorizontalPhone, isLessThan1300Px, isTabletOrMobile };
};
