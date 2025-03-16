import {
  Box,
  Typography,
  Switch,
  AppBar,
  Toolbar,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import user_with_cartoon from "../assets/user_with_cartoon.png";
import carton from "../assets/carton.png";
import list from "../assets/list.png";
export default function () {
  const [isOnline, setIsOnline] = useState(true);
  return (
    <>
      {/* Header Section */}
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
          <Typography sx={{ textAlign: "center" }}>
            Welcome <br /> <span style={{ fontWeight: "bold" }}>Koby</span>
          </Typography>
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
        </Toolbar>
        <Box>
          <img src={user_with_cartoon} alt="all" />
        </Box>
      </AppBar>

      {/* Online Toggle */}
      <Box
        sx={{
          mx: 2,
          my: 2,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" color="orange">
            Online
          </Typography>{" "}
          <Typography variant="subtitle1" color="#868686" fontSize={12}>
            Open To any Delivery
          </Typography>
        </Box>
        <Switch
          checked={isOnline}
          onChange={() => setIsOnline(!isOnline)}
          color="warning"
        />
      </Box>

      {/* Order Status Cards */}
      <Box sx={{ px: 2, mb: 4 }}>
        <Card
          sx={{
            bgcolor: "#fb6b044c",
            mb: 2,
            display: "flex",
            borderRadius: 6,
            padding: 2,
          }}
        >
          <img src={carton} alt="Delivery Illustration" />
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "14px" }}
            >
              There no orders yet
            </Typography>
            <Typography variant="body2" color="#868686" fontSize={10}>
              Hang tight—stay online in busy areas and during peak times to
              boost your chances of getting orders soon!
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            bgcolor: "#0fb28137",
            display: "flex",
            borderRadius: 6,
            padding: 2,
          }}
        >
          <img
            src={list}
            alt="Delivery Illustration"
            // style={{ width: "60%", marginBottom: "20px" }}
          />
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "14px" }}
            >
              You are yet to complete an order
            </Typography>
            <Typography variant="body2" color="#868686" fontSize={10}>
              "Keep accepting orders and stay focused to quickly complete your
              first delivery!"
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
