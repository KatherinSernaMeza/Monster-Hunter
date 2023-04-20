import axios from "axios";
import React, { useEffect, useState } from "react";
import LocationItem from "../components/LocationItem";
import { CircularProgress } from "@mui/material";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getLocations = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios("https://mhw-db.com/locations");
      setLocations(response.data);
    } catch {
      console.error(error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div>
      <h1>Locations</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <LocationItem propLocation={locations} />
        </>
      )}
    </div>
  );
};

export default Locations;
