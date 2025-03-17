import{ useState } from "react";
import {
  Box,
} from "@mui/material";

import BottomNavigation from "../components/bottomNavigation";
import Dashboard from "./dashboard";
import Activity from "./activity";
import Earnings from "./earnings";
import Account from "./account";

export default function HomePage() {
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
        return <Account/>;
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
