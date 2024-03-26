import { InputLabel, Stack } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import dayjs, { isDayjs } from "dayjs";

type DatePickerValue = string | number | Date | dayjs.Dayjs | null;

interface DatePickerFormProps extends DatePickerProps<DatePickerValue> {
  placeholder?: string;
  label?: string;
  setValue: (x: any) => void;
  value?: DatePickerValue;
  required?: boolean;
}

const DatePickerForm = (props: DatePickerFormProps) => {
  const { label, setValue, value, required, ...others } = props;
  return (
    <Stack width={"100%"} spacing={1}>
      {!!label && <InputLabel>{label}</InputLabel>}
      <DatePicker
        slotProps={{
          textField: {
            required: required,
          },
        }}
        value={value ? dayjs(value) : undefined}
        onChange={(e: DatePickerValue) => {
          if (e && isDayjs(e)) setValue(e.toDate());
        }}
        {...others}
      />
    </Stack>
  );
};

export default DatePickerForm;
