import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { getCoreRowModel, useReactTable, flexRender, ColumnDef, Row } from "@tanstack/react-table";
import { ReactNode, useMemo } from "react";

interface TanTableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  expandedRow?: string;
  minWidth?: number | string;
  maxHeight?: number | string;
  ariaLabel?: string;
  customExpandedNode?: (x: Row<T>) => ReactNode;
}

function TanTable<T>(props: TanTableProps<T>) {
  const { data, columns, expandedRow, minWidth, maxHeight, ariaLabel, customExpandedNode } = props;

  const table = useReactTable({
    data,
    columns,
    defaultColumn: {
      minSize: 10,
      maxSize: 800,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  // We use this function to get the percent of space that each cell takes
  const colWidthsPercent = useMemo(() => {
    const allWidths: number[] = [];
    table.getAllFlatColumns().map((td) => allWidths.push(td.getSize()));
    const allWidthsTotal = allWidths.reduce((acc, valeur) => acc + valeur, 0);
    const percentsWidths = allWidths.map((valeur) => Math.round((valeur / allWidthsTotal) * 100).toString());
    return percentsWidths;
  }, [table]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: maxHeight ?? "80dvh" }}>
        <Table size="small" stickyHeader sx={{ minWidth: minWidth }} aria-label={ariaLabel ?? "table"}>
          <colgroup>
            {colWidthsPercent?.map((colWidth, i) => <col key={"colWidth_" + i} width={`${colWidth}%`} />)}
          </colgroup>
          <TableHead>
            <TableRow>
              {table.getFlatHeaders().map((header) => (
                <TableCell
                  {...{
                    key: header.id,
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize(),
                    },
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => {
              const isExpanded = expandedRow === row.id;
              return (
                <>
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell
                          sx={{ borderBottom: isExpanded ? "none" : undefined, width: cell.column.getSize() }}
                          key={cell.id}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  {isExpanded && (
                    <TableRow>
                      <TableCell colSpan={columns.length}>{customExpandedNode?.(row)}</TableCell>
                    </TableRow>
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TanTable;
