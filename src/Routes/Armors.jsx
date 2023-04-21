import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import TableArmors from "../components/TableArmors";

const Armors = () => {
  const [armors, setArmors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getArmors = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios("https://mhw-db.com/armor/sets");
      setArmors(response.data.flat());
    } catch {
      console.error(error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getArmors();
  }, []);

  return (
    <div style={{ paddingTop: "50px" }}>
      <h1>Armors</h1>
      {loading ? <CircularProgress /> : <TableArmors armors={armors} />}
    </div>
  );
};

export default Armors;
