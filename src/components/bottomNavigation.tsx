import { Box, Container } from "@mui/material";
import home from "../assets/home.png";
import homeActive from "../assets/home_active.png";
import activity from "../assets/activity.png";
import activityActive from "../assets/activity_active.png";
import earnings from "../assets/earnings.png";
import earningsActive from "../assets/earnings_active.png";
import account from "../assets/user-circle.png";
import accountActive from "../assets/user_circle_active.png";

export default function BottomNavigation(props: any) {
  return (
    <Container
      sx={{
        paddingX: 4,
        paddingY: 2,
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          ...(props.activeTab === "Home"
            ? { color: "#FF7300" }
            : { color: "#868686" }),
          fontSize: "10px",
        }}
        onClick={() => props.setActiveTab("Home")}
      >
        {props.activeTab === "Home" ? (
          <img src={homeActive} alt="Home" />
        ) : (
          <img src={home} alt="Home" />
        )}
        Home
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          ...(props.activeTab === "Activity"
            ? { color: "#FF7300" }
            : { color: "#868686" }),
          fontSize: "10px",
        }}
        onClick={() => props.setActiveTab("Activity")}
      >
        {props.activeTab === "Activity" ? (
          <img src={activityActive} alt="Activity" />
        ) : (
          <img src={activity} alt="Activity" />
        )}
        Activity
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          ...(props.activeTab === "Earnings"
            ? { color: "#FF7300" }
            : { color: "#868686" }),
          fontSize: "10px",
        }}
        onClick={() => props.setActiveTab("Earnings")}
      >
        {props.activeTab === "Earnings" ? (
          <img src={earningsActive} alt="Earnings" />
        ) : (
          <img src={earnings} alt="Earnings" />
        )}
        Earnings
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          ...(props.activeTab === "Account"
            ? { color: "#FF7300" }
            : { color: "#868686" }),
          fontSize: "10px",
        }}
        onClick={() => props.setActiveTab("Account")}
      >
        {props.activeTab === "Account" ? (
          <img src={accountActive} alt="Account" />
        ) : (
          <img src={account} alt="Account" />
        )}
        Account
      </Box>
    </Container>
  );
}
