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
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Order {
  id: number;
  type: string;
  price: string;
  pickup: string;
  dropoff: string;
}

const orders: Order[] = [
  {
    id: 1,
    type: "Grocery Pickup",
    price: "GHS 47.00",
    pickup: "Cocoa Board Roundabout",
    dropoff: "Penkwase High Tension",
  },
  {
    id: 2,
    type: "Food Pickup",
    price: "GHS 35.00",
    pickup: "Fiapre Junction",
    dropoff: "Asufufu Junction",
  },
];

export default function () {
  const [isOnline, setIsOnline] = useState(true);

  const navigate = useNavigate();
  const completedOrder = true;
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
          <Typography
            variant="h6"
            fontWeight="bold"
            color={isOnline ? "orange" : "#4E4E4E"}
          >
            {isOnline ? "Online" : "Offline"}
          </Typography>{" "}
          <Typography variant="subtitle1" color="#868686" fontSize={12}>
            {isOnline
              ? "Open To any Delivery"
              : "You can not recieve order as you are offline."}
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
            alignItems: "center",
            borderRadius: 6,
            padding: 2,
            cursor: orders.length ? "pointer" : "default",
            transition: "background-color 0.3s ease", // Smooth transition
            "&:hover": orders.length ? { bgcolor: "#fb6b0470" } : {}, // Change
          }}
          onClick={() => (orders.length ? navigate("/order") : "")}
        >
          <img src={carton} alt="Delivery Illustration" />
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "14px" }}
            >
              {orders.length
                ? `${orders.length} new orders`
                : "There no orders yet"}
            </Typography>
            <Typography variant="body2" color="#868686" fontSize={10}>
              {orders.length
                ? " Other bikers in your location can accept and work on this delivery too.."
                : "Hang tight—stay online in busy areas and during peak times to boost your chances of getting orders soon!"}
            </Typography>
          </CardContent>
          {orders.length ? (
            <Typography color="orange">
              <ChevronRight />
            </Typography>
          ) : null}
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
              {completedOrder
                ? "1 order completed"
                : " You are yet to complete an order"}
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
