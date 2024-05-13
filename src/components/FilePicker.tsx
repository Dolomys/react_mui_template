import { IconButton, InputLabel, Stack, TextField, Typography } from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import { COLORS } from 'src/utils/constants/colors.constant';
import ErrorIcon from '@svgs/icons/important.svg?react';
import UploadIcon from '@assets/images/upload.png';

interface FilePickerProps {
  handleChangeFile?: (file?: File) => void;
  file?: string;
  type: 'image/*' | '.pdf' | '.xml' | 'video/mp4';
  label?: string;
  placeholder?: string;
  error?: string;
}

const FilePicker = (props: FilePickerProps) => {
  const { handleChangeFile, type, placeholder, label, error } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      setSelectedFile(files[0]);
      handleChangeFile ? handleChangeFile(files[0]) : null;
      e.target.value = '';
    }
  };

  const errorComponents = (
    <Stack component="span" direction="row" alignItems="center" spacing={0.5} sx={{ position: 'absolute' }}>
      <ErrorIcon />
      <Typography component="span" fontSize="12px" fontWeight={500} color={COLORS.error}>
        {error}
      </Typography>
    </Stack>
  );

  return (
    <Stack width="100%" spacing={1}>
      {!!label && <InputLabel>{label}</InputLabel>}
      <Stack alignItems="center" sx={error ? { border: `1px solid ${COLORS.error}`, borderRadius: '15px' } : {}}>
        <input ref={inputRef} hidden onChange={handleSelectFile} accept={type} type="file" />
        <TextField
          fullWidth
          placeholder={placeholder}
          error={!!error}
          helperText={error ? errorComponents : ''}
          hiddenLabel
          value={selectedFile?.name ?? ''}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <IconButton sx={{ marginLeft: 'auto' }} color="primary" component="span" onClick={() => inputRef.current?.click()}>
                <img src={UploadIcon} />
              </IconButton>
            )
          }}
        />
      </Stack>
    </Stack>
  );
};

export default FilePicker;
