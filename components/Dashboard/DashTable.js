import * as React from "react";
import { useState, useRouter } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import BlockIcon from "@mui/icons-material/Block";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function createData(uid, type, medio, bio, preserv, date, visible) {
  return {
    uid,
    type,
    medio,
    bio,
    preserv,
    date,
    visible,
  };
}

const rows = [
  createData(
    1,
    "Microorganismos – Bacterias adquiridas",
    "Recolectado del medioambiente",
    "BSL 3",
    " Material modificado a partir de un material original",
    "20 de Noviembre"
  ),
  createData(
    2,
    "Microorganismos – Bacterias adquiridas",
    "Recolectado del medioambiente",
    "BSL 3",
    " Material modificado a partir de un material original",
    "20 de Noviembre",
    "Si"
  ),
  createData(
    3,
    "Microorganismos – Bacterias adquiridas",
    "Recolectado del medioambiente",
    "BSL 3",
    " Material modificado a partir de un material original",
    "20 de Noviembre",
    "No"
  ),
  createData(
    4,
    "Microorganismos – Bacterias adquiridas",
    "Recolectado del medioambiente",
    "BSL 3",
    " Material modificado a partir de un material original",
    "20 de Noviembre"
  ),
  createData(
    5,
    "Microorganismos – Bacterias adquiridas",
    "Recolectado del medioambiente",
    "BSL 3",
    " Material modificado a partir de un material original",
    "20 de Noviembre",
    "Si"
  ),
  createData(
    6,
    "Microorganismos – Bacterias adquiridas",
    "Recolectado del medioambiente",
    "BSL 3",
    " Material modificado a partir de un material original",
    "20 de Noviembre",
    "Si"
  ),
  createData(
    7,
    "Microorganismos – Bacterias adquiridas",
    "Recolectado del medioambiente",
    "BSL 3",
    " Material modificado a partir de un material original",
    "20 de Noviembre",
    "No"
  ),
];

const headCells = [
  {
    uid: "uid",
    id: "type",
    numeric: false,
    disablePadding: true,
    label: "Tipo de cultivo",
  },
  {
    id: "medio",
    numeric: true,
    disablePadding: false,
    label: "Medio de Cultivo",
  },
  {
    id: "bio",
    numeric: true,
    disablePadding: false,
    label: "Nivel de Bioseguridad",
  },
  {
    id: "preserv",
    numeric: true,
    disablePadding: false,
    label: "Métodos de Preservación",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "Fecha de publicación",
  },
  {
    id: "visible",
    numeric: false,
    disablePadding: true,
    label: "Visible en la Web",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: true,
    label: "Acciones",
  },
];

function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function DashTable() {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("date");

  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {rows
                .sort()
                .slice()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.uid}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.type}
                      </TableCell>
                      <TableCell align="left">{row.medio}</TableCell>
                      <TableCell align="left">{row.bio}</TableCell>
                      <TableCell align="left">{row.preserv}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">
                        {row.visible ? <CheckIcon /> : <BlockIcon />}
                      </TableCell>
                      <TableCell align="left">
                        <Link href="/">
                          <a href="/edit">
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="label"
                            >
                              <EditIcon />
                            </IconButton>
                          </a>
                        </Link>
                        <Link href="/">
                          <a href="/catalogo/material/1" target="_blank">
                            <IconButton color="primary" component="label">
                              <VisibilityIcon />
                            </IconButton>
                          </a>
                        </Link>
                        <IconButton
                          color="error"
                          aria-label="upload picture"
                          component="label"
                          onClick={handleClickOpen}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 43) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Vista compacta"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Desea eliminar el material?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Recordamos que al eliminar un material el mismo no podrá ser
            recuperado. Puede desactivarlo del catalogo configurando su
            Visibilidad en la web como NO.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose} color="error" autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
