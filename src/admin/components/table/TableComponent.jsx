import { useNavigate } from "react-router-dom";
import { formatMessage } from "../../Admin";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

export default function TableComponent(props) {
    const navigate = useNavigate();
    const { tableContent, columns, tableTitle } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function moveToDetails(id) {
        navigate("./" + id);
    }

    function formatDate(date) {
        if (date !== undefined) {
            const dateObj = date.split("-");
            const year = dateObj[0];
            const month = dateObj[1];
            const day = dateObj[2];
            const dayOfWeek = new Date(year, month - 1, day).toLocaleDateString(
                "en-us",
                { weekday: "long" }
            );
            return dayOfWeek + ", " + day + "/" + month + "/" + year;
        }
    }

    return (
        <Paper
            sx={{
                width: "100%",
                overflow: "hidden",
                boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
        >
            <div className="px-[16px] py-[8px] border-b font-bold">
                {formatMessage(tableTitle)}
            </div>
            <TableContainer sx={{ maxHeight: 450 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead
                        sx={{
                            "& th": {
                                backgroundColor: "var(--admin-stock-bg-color)",
                            },
                        }}
                    >
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                    key={index}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    <div className="font-bold">
                                        {formatMessage(
                                            tableTitle + "." + column.label
                                        )}
                                    </div>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableContent
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={index}
                                    >
                                        {columns.map((column, index) => {
                                            if (column.id === "actions") {
                                                return (
                                                    <TableCell
                                                        key={index}
                                                        align={column.align}
                                                    >
                                                        <button
                                                            className="border-b hover:border-b hover:border-black"
                                                            onClick={() =>
                                                                moveToDetails(
                                                                    row.id
                                                                )
                                                            }
                                                        >
                                                            {formatMessage(
                                                                `${tableTitle}.details`
                                                            )}
                                                        </button>
                                                    </TableCell>
                                                );
                                            } else if (
                                                column.id.includes("Date")
                                            ) {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {formatDate(value)}
                                                    </TableCell>
                                                );
                                            } else {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {column.format &&
                                                        typeof value ===
                                                            "number"
                                                            ? column.format(
                                                                  value
                                                              )
                                                            : value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={tableContent.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
