import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CabinIcon from "@mui/icons-material/Cabin";
import LocationModal from "./LocationModal";

const LocationItem = ({ propLocation }) => {
  const [open, setOpen] = React.useState(false);
  const [camps, setCamps] = React.useState([]);
  const handleOpen = (camps) => {
    setOpen(true);
    setCamps(camps);
  };
  const handleClose = () => setOpen(false);

  const currentLocation = (camps) => {
    setCamps(camps);
  };

  return (
    <>
      <Box
        sx={{ width: "100%", minWidth: "1200px", bgcolor: "background.paper" }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {propLocation.map((location) => (
              <ListItem
                disablePadding
                style={{
                  backgroundColor: "#FAFAFA",
                  marginBottom: "5px",
                  height: "50px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                key={location.id}
              >
                <LocationOnIcon style={{ color: "#8b6d2a" }} />
                <ListItemButton>
                  <Link to={`${location.id}`}>
                    <span style={{ color: "black" }}> Nombre: </span>
                    {location.name}
                    <span style={{ color: "black", paddingLeft: "10px" }}>
                      {" "}
                      Zone Count:{" "}
                    </span>
                    {location.zoneCount}
                  </Link>
                </ListItemButton>
                <button onClick={() => handleOpen(location.camps)}>
                  <CabinIcon style={{ color: "#8b6d2a" }} />
                </button>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>

      <LocationModal open={open} onHandleClose={handleClose} camps={camps} />
    </>
  );
};

LocationItem.propTypes = {
  propLocation: PropTypes.array,
};

export default LocationItem;
