import I18nUtils from '@utils/i18n.utils.ts';

const { t } = I18nUtils;

export const ErrorEnum = {
  TOKEN_NOT_VALID: 'TOKEN_NOT_VALID'
};

export const ERRORS = {
  [ErrorEnum.TOKEN_NOT_VALID]: t('errors:invalidToken')
};

export const ERRORS_CODE: Record<any, string> = {
  400: t('errors.serverNotAvailable'),
  401: t('errors.notAuthorized'),
  502: t('errors.documentNotValid')
};
