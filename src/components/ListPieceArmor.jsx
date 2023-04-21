import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";

const ListPieceArmor = ({ armor }) => {
  return (
    <div>
      {" "}
      <Box
        sx={{
          width: "100%",
          minWidth: "1200px",
          bgcolor: "background.paper",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {armor.pieces.map((piece) => (
              <div key={piece.id}>
                <ListItem
                  style={{
                    background: "#f3f3f3",
                    height: "74px",
                    margin: "10px",
                  }}
                >
                  <ListItemButton
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "60px" }}
                        src={piece.assets.imageMale}
                        alt="Logo"
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          paddingLeft: "30px",
                        }}
                      >
                        <div style={{ fontSize: "13px" }}>Nombre</div>
                        <strong>{piece.name}</strong>
                      </div>
                      <Divider
                        orientation="vertical"
                        flexItem
                        style={{ marginLeft: "40px", marginRight: "40px" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div style={{ fontSize: "13px" }}>Piece</div>

                        <strong>{piece.type}</strong>
                      </div>
                      <Divider
                        orientation="vertical"
                        flexItem
                        style={{ marginLeft: "40px", marginRight: "40px" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div style={{ fontSize: "13px" }}>Rank</div>
                        <strong>
                          <Chip label={piece.rank} />
                        </strong>
                      </div>
                      <Divider
                        orientation="vertical"
                        flexItem
                        style={{ marginLeft: "40px", marginRight: "40px" }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{ fontSize: "13px" }}>Rarity</span>
                          <span style={{ fontSize: "13px" }}>ArmorSet</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingLeft: "16px",
                            paddingRight: "22px",
                          }}
                        >
                          <strong>{piece.rarity}</strong>
                          <strong>{piece.armorSet}</strong>
                        </div>
                        <span>
                          **************************************************************************************************
                        </span>
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
              </div>
            ))}
          </List>
        </nav>
      </Box>
    </div>
  );
};

ListPieceArmor.propTypes = {
  armor: PropTypes.object,
};
export default ListPieceArmor;
