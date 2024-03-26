import { InputLabel, Stack, StandardTextFieldProps, TextField } from '@mui/material';
import { ElementRef, forwardRef } from 'react';

interface TextFieldFormProps extends StandardTextFieldProps {
  label?: string;
  ariaLabel?: 'white';
  fullWidth?: boolean;
}

export type Ref = ElementRef<'input'>;

// Look forwardRef doc
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/
// https://react.dev/reference/react/forwardRef

const TextFieldForm = forwardRef<Ref, TextFieldFormProps>((props, ref) => {
  const { label, placeholder, fullWidth, ariaLabel, multiline, rows, ...others } = props;
  return (
    <Stack width={fullWidth ? '100%' : undefined} spacing={1}>
      {!!label && <InputLabel sx={{ color: ariaLabel?.includes('white') ? 'white' : undefined }}>{label}</InputLabel>}
      <Stack>
        <TextField
          ref={ref}
          {...others}
          aria-label={ariaLabel}
          minRows={rows}
          multiline={multiline}
          fullWidth
          hiddenLabel
          placeholder={placeholder ?? label}
        />
      </Stack>
    </Stack>
  );
});

export default TextFieldForm;
