import { Button, Popover, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MenuItemOption, SelectFieldComponent } from "./SelectField";
import { useAnchor } from "src/hooks/useAnchor";

export interface FilterOption<T> {
  selectId: keyof T;
  selectLabel: string;
  options: MenuItemOption<T>[];
}

interface GenericFilterPopoverProps<T> {
  filterOptions: FilterOption<T>[];
  currentFilters: T;
  setFilters: (filters: T) => void;
}

export function FilterBtnComponent<T>({ filterOptions, currentFilters, setFilters }: GenericFilterPopoverProps<T>) {
  const { anchorEl, handleClick, handleClose } = useAnchor();
  const { t } = useTranslation();

  return (
    <div>
      <Button disabled variant="contained" color="black" onClick={handleClick}>
        {t("dashboard.filters")}
      </Button>
      <Popover
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        sx={{ marginTop: "10px" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Stack p="12px" spacing={2}>
          {filterOptions.map((option) => (
            <SelectFieldComponent<T>
              key={option.selectId as string}
              sx={{ width: "200px" }}
              selectId={option.selectId as string}
              selectLabel={option.selectLabel}
              options={option.options}
              value={currentFilters[option.selectId] as any}
              onChange={(value: any) => {
                setFilters({ ...currentFilters, [option.selectId as string]: value });
              }}
            />
          ))}
        </Stack>
      </Popover>
    </div>
  );
}
