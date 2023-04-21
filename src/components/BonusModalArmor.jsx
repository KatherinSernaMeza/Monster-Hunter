import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BonusArmor from "./BonusArmor";
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
const BonusModalArmor = ({ open, onHandleCloseBonus, bonus }) => {
  const handleClose = () => {
    onHandleCloseBonus(false);
  };
  return (
    <div>
      {" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Bonus
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <BonusArmor bonus={bonus} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
BonusModalArmor.propTypes = {
  open: PropTypes.bool,
  onHandleCloseBonus: PropTypes.func,
  bonus: PropTypes.obj,
};
export default BonusModalArmor;
