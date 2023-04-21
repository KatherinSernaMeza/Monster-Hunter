import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PiecesArmor from "./PiecesArmor";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const PiecesArmorModal = ({ open, onHandleClose, pieces }) => {
  const handleClose = () => onHandleClose(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Armor
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <PiecesArmor pieces={pieces} />
        </Typography>
      </Box>
    </Modal>
  );
};
PiecesArmorModal.propTypes = {
  open: PropTypes.bool,
  onHandleClose: PropTypes.func,
  pieces: PropTypes.array,
};

export default PiecesArmorModal;
