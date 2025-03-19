import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { HelpOutline, InfoOutlined } from "@mui/icons-material";
import logout from "../assets/log_out.png";
import profile_image from "../assets/profile_image.png";
import { useState } from "react";
import LogoutDialog from "../components/confirmDialog";
import Loader from "../components/loader";

export default function Account() {
  const [logginOut, setLogginOut] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLogginOut(true);
  };

  const handleClose = () => {
    setLogginOut(false);
  };

  const handleConfirm = () => {
    handleClose();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <Box position="relative">
      <AppBar
        position="static"
        sx={{
          bgcolor: "#FF7300",
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 2,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            // justifyContent: "space-between",
            gap: 2,
            marginBottom: 4,
          }}
        >
          <img src={profile_image} alt="user" loading="lazy" />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Gideon Essuman
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "12px" }}>
              059 467 9885
            </Typography>
          </Box>
          {/* <DateFilter /> */}
          {/* <Typography sx={{ textAlign: "center" }}>
            Welcome <br /> <span style={{ fontWeight: "bold" }}>Koby</span>
          </Typography> */}
        </Toolbar>
        <Box>{/* <img src={user_with_cartoon} alt="all" /> */}</Box>
      </AppBar>
      <Box
        sx={{
        //   width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexDirection: "column",
          height: "60vh",
        }}
        p={4}
      >
        {/* <img src={noEarnings} alt="activity" /> */}
        <Box display="flex" flexDirection="column" gap={5} width="100">
          <Typography
            fontSize={12}
            color="#000"
            display="flex"
            alignItems="center"
            justifyContent="start"
            gap={1}
            sx={{ cursor: "pointer", "&:hover": { color: "#FB8C00" } }}
          >
            <InfoOutlined />
            About
          </Typography>
          {/* <Box width="100%" height="2px" bgcolor="red"></Box> */}
          <Typography
            fontSize={12}
            color="#000"
            // textAlign={"center"}
            display="flex"
            alignItems="center"
            justifyContent="start"
            gap={1}
            sx={{ cursor: "pointer", "&:hover": { color: "#FB8C00" } }}
          >
            <HelpOutline />
            Support
          </Typography>
        </Box>
        <Typography
          fontSize={12}
          color="#CB1919"
          display="flex"
          alignItems="center"
          justifyContent="start"
          gap={1}
          fontWeight="bold"
          p={0.5}
          borderRadius={1}
          sx={{ cursor: "pointer", "&:hover": { bgcolor: "#86868635" } }}
          onClick={handleLogout}
        >
          <img src={logout} alt="Logout" />
          Logout
        </Typography>
      </Box>
      {logginOut && (
        <LogoutDialog
          handleClose={handleClose}
          handleConfirm={handleConfirm}
          header="Confirm Logout"
          text="You are logging out of the app. If you do , you wont receive notifications of orders"
          confirmButtonText="Confirm"
        />
      )}
      {loading && <Loader text="Logging out" />}
    </Box>
  );
}
