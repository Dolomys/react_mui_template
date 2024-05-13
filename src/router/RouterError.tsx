import { PAGES } from '@constants/routes.constants';
import Topbar from '@layouts/Topbar';
import { Stack, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOwlIcon from '@assets/svg/icons/errorOwl.svg?react';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '@utils/useResponsive';
import { CSSProperties } from 'react';
import { COLORS } from '@constants/colors.constant';

export const RouterError = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isTabletOrMobile } = useResponsive()

  const mobileStyle: CSSProperties = isTabletOrMobile ? { maxWidth: '80%', height: 'auto' } : {}

  return (
    <Stack height={'100vh'} pt={'16px'} overflow='auto'>
      <Topbar />
      <Stack height={'100%'} spacing={7.5} justifyContent='center' alignItems='center' pt={isTabletOrMobile ? '4rem' : undefined}>
        <Stack bgcolor={COLORS.background} borderRadius='16px' width='50%' pt={'38px'} alignItems='center'>
          <ErrorOwlIcon style={mobileStyle} />
        </Stack>
        <Stack spacing={4} alignItems='center'>
          <Stack spacing={2} textAlign='center' alignItems='center'>
            <Typography fontWeight={700} fontSize={isTabletOrMobile ? '26px' : '52px'} maxWidth='70%'>
              {t('error.title')}
            </Typography>
            <Typography fontWeight={400} fontSize={isTabletOrMobile ? '14px' : '18px'} maxWidth='50%'>
              {t('error.description')}
            </Typography>
          </Stack>
          <Button onClick={() => navigate(PAGES.HOME)}>
            {t('error.button')}
          </Button>
        </Stack>
      </Stack>
    </Stack >
  );
};
