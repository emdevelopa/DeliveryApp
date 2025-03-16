import React, { useState } from "react";
import {
  Box,
  Typography,
  Switch,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Container,
} from "@mui/material";

import BottomNavigation from "../components/bottomNavigation";
import Dashboard from "./dashboard";
import Activity from "./activity";
import Earnings from "./earnings";
// import HomeIcon from "@mui/icons-material/Home";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function HomePage() {
  const [isOnline, setIsOnline] = useState(true);
  const [navValue, setNavValue] = useState(0);
  const [activeTab, setActiveTab] = useState("Home");

  const renderComponent = () => {
    switch (activeTab) {
      case "Home":
        return <Dashboard />;
      case "Activity":
        return <Activity />;
      case "Earnings":
        return <Earnings/>;
      case "Account":
        return <p>Account</p>;
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        height: "100vh",
        position: "relative",
        width: "100%",
      }}
    >
      <Box sx={{ height: "90vh", overflow: "auto" }}>{renderComponent()}</Box>
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </Box>
  );
}
