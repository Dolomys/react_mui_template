import { SxProps } from '@mui/system';
import { FormControl, MenuItem, Select, SelectChangeEvent, Theme, Typography } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { InputBasePropsSizeOverrides } from '@mui/material/InputBase/InputBase';
import { useTranslation } from 'react-i18next';
import { ReactElement, Ref } from 'react';

export interface MenuItemOption<T> {
  value: T | string | undefined;
  label: string | ReactElement;
}

interface SelectFieldProps<T> {
  selectId: string;
  selectLabel: string;
  value?: T | T[];
  defaultValue?: T;
  onChange?: (value: T | undefined) => void;
  options?: MenuItemOption<T>[];
  sx?: SxProps<Theme>;
  size?: OverridableStringUnion<'small' | 'medium', InputBasePropsSizeOverrides>;
  multiple?: boolean;
  disable?: boolean;
  required?: boolean;
  ref?: Ref<T>;
}

export function SelectFieldComponent<T>(props: SelectFieldProps<T>) {
  const { selectId, required, selectLabel, defaultValue, value, onChange, options, disable, multiple, sx, size } = props;

  const { t } = useTranslation();
  // @ts-expect-error Description explaining why the @ts-expect-error is necessary.
  const handleChange = (event: SelectChangeEvent<T>) => onChange?.(event.target.value);

  return (
    <FormControl fullWidth sx={{ ...sx, justifyContent: 'center' }}>
      <Typography fontSize="14px" fontWeight="500" color="primary" position="absolute" ml="15px">
        {value && value !== '0' && (!Array.isArray(value) || (value as any[])?.length !== 0) ? '' : selectLabel}
      </Typography>
      <Select
        fullWidth
        defaultValue={defaultValue}
        multiple={multiple}
        id={selectId}
        labelId={`${selectId}-label`}
        size={size}
        disabled={disable}
        value={
          /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
          (value ?? (multiple ? [] : '')) as any
        }
        onChange={handleChange}>
        {!required && !multiple && <MenuItem>{t('global:none')}</MenuItem>}
        {options?.map((option, i) => (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <MenuItem key={i} value={option.value as any}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
