import I18nUtils from "@utils/i18n.utils.ts";
import { boolean, date, mixed, number, string } from "yup";
import { isNil, isString } from "lodash";
import * as Yup from "yup";

const { t } = I18nUtils;

// Set all global error message for fields -- mostly used in const fieldsValidation
Yup.setLocale({
  mixed: {
    required: t("errors.field.fieldRequired"),
  },
  string: {
    email: t("errors:field.fieldEmail"),
  },
});

export enum FieldValidationType {
  STRING = "STRING",
  REQUIRED_STRING = "REQUIRED_STRING",
  REQUIRED_STRING_NUMBER = "REQUIRED_STRING_NUMBER",
  REQUIRED_NUMBER = "REQUIRED_NUMBER",
  REQUIRED_EMAIL = "REQUIRED_EMAIL",
  REQUIRED_DATE = "REQUIRED_DATE",
  REQUIRED_PHONE = "REQUIRED_PHONE",
  REQUIRED_FILE = "REQUIRED_FILE",
  REQUIRED_BOOLEAN = "REQUIRED_BOOLEAN",
  BOOLEAN = "BOOLEAN",
  FILE = "FILE",
  REQUIRED_ARRAY = "REQUIRED_ARRAY",
  REQUIRED_SELECT_ITEM = "REQUIRED_SELECT_ITEM",
  ARRAY_OF_CONTACTS = "ARRAY_OF_CONTACTS",
  REQUIRED_DOMAIN = "REQUIRED_DOMAIN",
  REQUIRED_DOCUMENT_TYPE = "REQUIRED_DOCUMENT_TYPE",
  REQUIRED_TRUE = "REQUIRED_TRUE",
  REQUIRED_PASSWORD = "REQUIRED_PASSWORD",
  CONFIRM_PASSWORD = "CONFIRM_PASSWORD",
}

const phoneRegExp = /^(?!(\d{1,9})$)(\+|00)?\d{10,}$/;
const passwordSecurityRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const fieldsValidation = {
  [FieldValidationType.REQUIRED_BOOLEAN]: boolean().required(),
  [FieldValidationType.STRING]: string(),
  [FieldValidationType.REQUIRED_STRING]: string().nullable().required(),
  [FieldValidationType.REQUIRED_PASSWORD]: string()
    .required(t("errors.field.fieldRequired"))
    .matches(passwordSecurityRegex, t("errors.passwordSecurity")),
  [FieldValidationType.CONFIRM_PASSWORD]: string()
    .required(t("errors.field.fieldRequired"))
    .oneOf([Yup.ref("password")], t("errors.passwordMatch")),
  [FieldValidationType.REQUIRED_TRUE]: boolean().required().oneOf([true]),
  [FieldValidationType.REQUIRED_DATE]: date()
    .nullable()
    .required()
    .typeError(t("errors.fields.date"))
    .test((value) => {
      if (!value) return true;
      const month = value.getMonth() + 1;
      return month >= 1 && month <= 12;
    }),
  [FieldValidationType.BOOLEAN]: boolean(),
  [FieldValidationType.REQUIRED_STRING_NUMBER]: string()
    .matches(/^[0-9]/, t("errors.field.stringNumber"))
    .required(),
  [FieldValidationType.REQUIRED_EMAIL]: string().required().email(),
  [FieldValidationType.REQUIRED_PHONE]: string().required().matches(phoneRegExp, t("errors.field.fieldPhone")),
  [FieldValidationType.REQUIRED_NUMBER]: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(t("errors.field.number")),
  [FieldValidationType.REQUIRED_FILE]: mixed<File | string>()
    .required()
    .test(
      "is-valid-type",
      t("errors.fields.notValidFileType"),
      (value) => isString(value) || isValidFileType(value && value.name.toLowerCase(), "image")
    )
    .test(
      "is-valid-size",
      "Max allowed size is 5Mo",
      (value) => isString(value) || (value && value.size <= MAX_FILE_SIZE)
    ),
  [FieldValidationType.FILE]: mixed<File | string>()
    .test(
      "is-valid-type",
      t("errors.fields.notValidFileType"),
      (value) => isNil(value) || isString(value) || isValidFileType(value && value.name?.toLowerCase(), "image")
    )
    .test(
      "is-valid-size",
      t("errors.fields.maxSizeFile"),
      (value) => isNil(value) || isString(value) || (value && value.size <= MAX_FILE_SIZE)
    ),
};

export type FieldErrorType = string | undefined;

export const checkIfErrors: any = (errors: object) =>
  Object.values(errors).some((err) =>
    typeof err === "string" || typeof err === "undefined" ? !!err : checkIfErrors(err)
  );

const MAX_FILE_SIZE = 5e6; //5Mb

const validFileExtensions = { image: ["jpg", "png", "jpeg", "xml", "csv"] };

function isValidFileType(fileName: any, fileType: string) {
  // @ts-expect-error Description: Ignore type checking for validFileExtensions[fileType].
  return fileName && validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1;
}
