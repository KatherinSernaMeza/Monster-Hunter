import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CampLocation from "./CampLocation";
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

const LocationModal = ({ open, onHandleClose, camps }) => {
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
          <h2> Camps </h2>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <CampLocation camps={camps} />
        </Typography>
      </Box>
    </Modal>
  );
};

export default LocationModal;
