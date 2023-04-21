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
import PiecesArmorModal from "../components/PiecesArmorModal";
import BonusModalArmor from "./BonusModalArmor";
import PropTypes from "prop-types";

const TableArmors = ({ armors }) => {
  const [open, setOpen] = React.useState(false);
  const [openBonus, setOpenBonus] = React.useState(false);
  const [pieces, setPieces] = React.useState([]);
  const [bonus, setBonus] = React.useState([]);
  const handleOpen = (pieces) => {
    setOpen(true);
    setPieces(pieces);
  };
  const handleOpenBonus = (bonus) => {
    setOpenBonus(true);
    setBonus(bonus);
  };
  const handleClose = () => setOpen(false);
  const handleCloseBonus = () => setOpenBonus(false);

  return (
    <>
      <TableContainer
        component={Paper}
        style={{
          width: "1200px",
          height: "700px",
          overflowy: "auto",
        }}
      >
        <Table aria-label="simple table">
          <TableHead
            style={{
              background: "rgb(25 118 210)",
            }}
          >
            <TableRow>
              <TableCell>
                <p className="textTable">Id</p>
              </TableCell>
              <TableCell align="right">
                <p className="textTable" style={{ textAlign: "left" }}>
                  Name
                </p>
              </TableCell>
              <TableCell align="right" className="textTable">
                <p className="textTable">Rank</p>
              </TableCell>
              <TableCell align="right" className="textTable">
                <p className="textTable"> Pieces&nbsp;(g)</p>
              </TableCell>
              <TableCell align="right" className="textTable">
                <p className="textTable"> Bonus </p>
              </TableCell>
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
                  <button onClick={() => handleOpen(armor.pieces)}>
                    <SecurityIcon style={{ color: "#8b6d2a" }} />
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button onClick={() => handleOpenBonus(armor.bonus)}>
                    <SwitchAccessShortcutAddIcon
                      style={{ color: "rgb(42 129 237)" }}
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PiecesArmorModal
        open={open}
        onHandleClose={handleClose}
        pieces={pieces}
      />
      <BonusModalArmor
        open={openBonus}
        onHandleCloseBonus={handleCloseBonus}
        bonus={bonus}
      />
    </>
  );
};
TableArmors.propTypes = {
  armors: PropTypes.array,
};

export default TableArmors;
