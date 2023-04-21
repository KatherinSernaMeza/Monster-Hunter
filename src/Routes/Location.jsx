import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import LocationDetail from "../components/LocationDetail";

const Location = () => {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { idLocation } = useParams();
  const navigate = useNavigate();

  const getLocation = async (idLocation) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        `https://mhw-db.com/locations/${idLocation}`
      );
      setLocation(response.data);
    } catch {
      console.error(error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getLocation(idLocation);
  }, []);

  return (
    <div>
      {loading ? <CircularProgress /> : <LocationDetail location={location} />}
      <div>
        <button
          style={{ backgroundColor: "#1976d2", color: "white" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Location;
