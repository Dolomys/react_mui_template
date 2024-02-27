import {
  FieldErrors,
  FieldPath,
  FieldValues,
  InternalFieldName,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ReactElement } from "react";

export type CustomRegisterType<TFieldName extends InternalFieldName> = UseFormRegisterReturn<TFieldName> & {
  error?: boolean;
  helperText?: string | ReactElement;
  inputProps?: Record<string, unknown>;
};

export default function CustomRegister<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  register: UseFormRegister<TFieldValues>,
  errors: FieldErrors<TFieldValues>
): (name: TFieldName, noHelper?: boolean) => CustomRegisterType<TFieldName> {


  return (name: TFieldName, noHelpers?: boolean) => {
    return {
      ...register(name),
      ...(noHelpers ? {} : { helperText: errors[name]?.message?.toString(), error: !!errors[name] }),
      inputProps: { className: errors[name] ? "error" : "" },
    };
  };
}
