import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      console.log(response.data.flat(), "response.data.flat()");
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
      {loading ? <CircularProgress /> : <TableArmors armors={armors} />}

      {/* armors.map((armor) => (
          <div key={armor.id}>
            <Link to={`${armor.id}`}>{armor.name}</Link> {armor.rank}
          </div>
        )) */}
    </div>
  );
};

export default Armors;
