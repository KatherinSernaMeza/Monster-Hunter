import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SecurityIcon from "@mui/icons-material/Security";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";

const TableArmors = ({ armors }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Pieces&nbsp;(g)</TableCell>
            <TableCell align="right">Bonus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {armors.map((armor) => (
            <TableRow
              key={armor.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{armor.id}</TableCell>
              <TableCell component="th" scope="row">
                <Link to={`${armor.id}`}> {armor.name} </Link>
              </TableCell>
              <TableCell align="right">{armor.rank}</TableCell>
              <TableCell align="right">
                {" "}
                <SecurityIcon style={{ color: "#8b6d2a" }} />
              </TableCell>
              <TableCell align="right">
                {" "}
                <SwitchAccessShortcutAddIcon
                  style={{ color: "rgb(42 129 237)" }}
                />{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableArmors;
