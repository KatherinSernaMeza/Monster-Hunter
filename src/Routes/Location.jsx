import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Divider from "@mui/material/Divider";

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
        "https://mhw-db.com/locations/" + idLocation
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
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <h1> {location.name}</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h2>
                <Divider>Zone Count</Divider>
              </h2>
              <h2>
                {location.zoneCount}
                <Divider />
              </h2>
            </div>
            <div>
              <h3>Camps</h3>
              {location.camps.length == 0 ? (
                <p> 0</p>
              ) : (
                location.camps.map((camp) => (
                  <div key={location.camps.id} style={{ textAlign: "left" }}>
                    <ul>
                      <li>
                        {camp.name} {camp.zone}
                      </li>
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
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
