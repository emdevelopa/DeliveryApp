import React, { useState } from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Paper,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PhoneIcon from "@mui/icons-material/Phone";
import NavigationIcon from "@mui/icons-material/Navigation";
import Map, { Marker } from "react-map-gl/mapbox";
import groceries from "../../assets/groceries.png";

const MAPBOX_TOKEN = "YOUR_MAPBOX_ACCESS_TOKEN"; // Replace with your API Key

const PickupScreen = () => {
  const [viewport, setViewport] = useState({
    latitude: 5.614818,
    longitude: -0.205874,
    zoom: 15,
  });

  const pickupLocation = { latitude: 5.614818, longitude: -0.205874 };
  const driverLocation = { latitude: 5.6123, longitude: -0.2045 };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Mapbox Map */}
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ width: "100%", height: "100vh" }}
      >
        {/* Driver Marker */}
        <Marker
          latitude={driverLocation.latitude}
          longitude={driverLocation.longitude}
        >
          <NavigationIcon sx={{ color: "blue", fontSize: 40 }} />
        </Marker>

        {/* Pickup Marker */}
        <Marker
          latitude={pickupLocation.latitude}
          longitude={pickupLocation.longitude}
        >
          <LocalMallIcon sx={{ color: "red", fontSize: 40 }} />
        </Marker>
      </Map>

      {/* Pickup Details Card */}
      <Card
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          right: 20,
          background: "white",
          p: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ width: "50%" }}>
              <Typography variant="h6" fontWeight="bold" fontSize={16}>
                Pickup Details
              </Typography>
              <Typography variant="body2" color="textSecondary" fontSize={10}>
                Confirm code with customer before you pickup package.
              </Typography>
            </Box>

            {/* Pickup Code */}
            <Box
              //   display="flex"
              alignItems="center"
              justifyContent="space-between"
              //   mt={2}
            >
              <Typography variant="body2">Pickup Code:</Typography>
              <Typography
                fontWeight="bold"
                sx={{
                  background: "#FF6600",
                  color: "white",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                }}
                textAlign="center"
              >
                4546
              </Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between">
            {/* Package Type */}
            <Box
              display="flex"
              //   flexDirection="column"
              alignItems="center"
              mt={2}
            >
              <img src={groceries} alt="groceries" />
              <Box>
                <Typography variant="body2">Package Type:</Typography>
                <Typography fontWeight="bold" sx={{ ml: 1 }}>
                  Groceries
                </Typography>
              </Box>
            </Box>

            {/* Mobile Number */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={1}
            >
              <Typography variant="body2">Mobile Number:</Typography>
              <Typography fontWeight="bold" sx={{ ml: 1 }}>
                0594679885
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Arrival Time Badge */}
      {/* <Paper
        sx={{
          position: "absolute",
          top: 120,
          left: 20,
          px: 2,
          py: 1,
          background: "#FF6600",
          color: "white",
          borderRadius: 1,
        }}
      >
        Arrival (2 mins)
      </Paper> */}

      {/* Action Button */}
      <Button
        variant="contained"
              // fullWidth
              
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: "#FF6600",
          fontSize: "16px",
          fontWeight: "bold",
        //   width: "100%",
          py: 2,
        }}
      >
        I've Arrived At Pickup Location
      </Button>
    </Box>
  );
};

export default PickupScreen;
