import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Button } from "@mui/material";
import "./InvoiceTable.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const InvioceTable = () => {
  function createData(invoice, code, price, icon) {
    return { invoice, code, price, icon };
  }

  const rows = [
    createData("March, 01, 2020  ", "#MS-415646", 180, <PictureAsPdfIcon />),
    createData("February, 10, 2021 ", "#RV-126749", 250, <PictureAsPdfIcon />),
    createData("April, 05, 2020 ", "#QW-103578", 120, <PictureAsPdfIcon />),
    createData("June, 25, 2019 ", "#MS-415646", 180, <PictureAsPdfIcon />),
    createData("March, 01, 2019 ", "#AR-803481", 300, <PictureAsPdfIcon />),
  ];
  return (
    <TableContainer component={Paper} className="invoiceList">
      <Table
        sx={{ minWidth: 500 }}
        aria-label="a dense table"
        className="invoiceTable"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell className="invoiceTitle">Invoice</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">
              <Button variant="outlined" size="small">
                View All
              </Button>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.invoice}>
              <StyledTableCell component="th" scope="row">
                <h4 className="invoice__date">{row.invoice}</h4>
                <p className="invoice__code">{row.code}</p>
              </StyledTableCell>
              <StyledTableCell className="invoice__price" align="right">
                ${row.price}
              </StyledTableCell>
              <StyledTableCell className="invoice__icon" align="right">
                <div>{row.icon}</div> <div>pdf</div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvioceTable;
