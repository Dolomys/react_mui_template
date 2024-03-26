import { COLORS } from "@utils/constants/colors.constant";
import { InputLabel, MenuItem, Select, Stack, StandardSelectProps, Typography } from "@mui/material";
import ArrowDown from "@svgs/icons/arrowDown.svg?react";
import { isString } from "lodash";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

export interface ItemsFormState {
  label: string;
  value: any;
}

interface SelectFormProps extends StandardSelectProps {
  ariaLabel?: string;
  placeholder?: string;
  label?: string;
  items: ItemsFormState[] | string[];
  fullWidth?: boolean;
  isWhite?: boolean;
}

export type Ref = HTMLSelectElement;

// Look forwardRef doc
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/
// https://react.dev/reference/react/forwardRef

const SelectForm = forwardRef<Ref, SelectFormProps>((props, ref) => {
  const { label, placeholder, items, ariaLabel, fullWidth, isWhite, ...others } = props;
  const { t } = useTranslation();
  const isError = props.inputProps?.className === "error";
  return (
    <Stack width={fullWidth ? "100%" : undefined} spacing={1}>
      {!!label && <InputLabel sx={{ color: isWhite ? COLORS.white : undefined }}>{label}</InputLabel>}
      <Stack>
        <Select
          {...others}
          ref={ref}
          aria-label={ariaLabel}
          sx={{
            height: "100%",
            bgcolor: isWhite ? COLORS.white : undefined,
            border: isError ? `1px solid ${COLORS.red}` : undefined,
          }}
          displayEmpty
          IconComponent={(params) => <ArrowDown {...params} />}
        >
          {placeholder && (
            <MenuItem disabled value="">
              {isWhite ? (
                <Typography color="#979797" fontSize={"14px"} fontWeight={400}>
                  {placeholder}
                </Typography>
              ) : (
                placeholder
              )}
            </MenuItem>
          )}
          {items.map((item) => {
            const value = isString(item) ? item : item.value;
            const label = isString(item) ? item : item.label;
            return (
              <MenuItem key={`${label} ${value}`} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
        {isError && (
          <Typography fontSize="0.75rem" color={COLORS.red}>
            {t("errors.field.fieldRequired")}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
});

export default SelectForm;
