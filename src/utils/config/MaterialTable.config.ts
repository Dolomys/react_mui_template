import { COLORS } from "@utils/constants/colors.constant";
import { MRT_RowData, MRT_TableOptions } from "material-react-table";

export function getMaterialTableConfig<T extends MRT_RowData>(): Partial<MRT_TableOptions<T>> {
  return {
    enableRowSelection: true,
    mrtTheme: () => ({
      baseBackgroundColor: COLORS.white,
    }),
    muiTablePaperProps: {
      sx: {
        borderRadius: "12px",
      },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiPaginationProps: {
      rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
    },
    renderTopToolbar: false,
    muiTableHeadCellProps: {
      sx: {
        color: COLORS.grey[500],
      },
    },
  };
}
