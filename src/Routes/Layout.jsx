import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/MonsterHunter.png";
const Layout = () => {
  return (
    <>
      {" "}
      <AppBar>
        <Toolbar>
          {
            <>
              <img style={{ width: "60px" }} src={Logo} alt="Logo" />
              <Link
                to="/"
                style={{
                  color: "white",
                  paddingRight: "30px",
                  paddingLeft: "30px",
                }}
              >
                Home
              </Link>
              <Link
                to="monsters"
                style={{
                  color: "white",
                  paddingRight: "30px",
                  paddingLeft: "30px",
                }}
              >
                Monsters
              </Link>
              <Link
                to="locations"
                style={{
                  color: "white",
                  paddingRight: "30px",
                  paddingLeft: "30px",
                }}
              >
                Locations
              </Link>
              <Link
                to="armors"
                style={{
                  color: "white",
                  paddingRight: "30px",
                  paddingLeft: "30px",
                }}
              >
                Armors
              </Link>
            </>
          }
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
