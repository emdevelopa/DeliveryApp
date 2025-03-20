import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import noEarnings from "../assets/no-earnings.png";
import DateFilter from "../components/dateFilter";
import EarningsHistory from "./earningHistory";

const earningsData = [
  { date: "25 Jun, 2024", time: "10:23AM", amount: "GHS 35.00" },
  { date: "25 Jun, 2024", time: "12:23PM", amount: "GHS 27.00" },
];
export default function Earnings() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#FF7300",
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 2,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 4,
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ fontSize: "12px" }}>
              Your earning for today
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontSize: "32px" }}
            >
              GHS 0.00
            </Typography>
          </Box>
          <DateFilter />
          {/* <Typography sx={{ textAlign: "center" }}>
            Welcome <br /> <span style={{ fontWeight: "bold" }}>Koby</span>
          </Typography> */}
        </Toolbar>
        <Box>{/* <img src={user_with_cartoon} alt="all" /> */}</Box>
      </AppBar>
      <Box
        sx={{
          width: "100%",
          height: "90vh",
        }}
      >
        {earningsData.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "90vh",
            }}
          >
            {" "}
            <img src={noEarnings} alt="activity" />
            <Typography fontSize={12} color="#868686" textAlign={"center"}>
              You have no earnings yet, accept and complete orders to increase
              your earnings
            </Typography>
          </Box>
        ) : (
          <EarningsHistory />
        )}
      </Box>
    </>
  );
}
