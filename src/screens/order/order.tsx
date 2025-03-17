import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PlaceIcon from "@mui/icons-material/Place";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
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

const OrderScreen: React.FC = () => {
    const navigate = useNavigate();

    const handleOrderClick = (orderId: number) => {
      navigate(`/order-details/${orderId}`); // Navigate with order ID
    };
  return (
    <Box sx={{ mx: "auto", p: 3, width: "100%", overflow:"auto" }}>
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
        Orders
      </Typography>

      {orders.map((order) => (
        <Card
          key={order.id}
          sx={{ mb: 2, borderRadius: 3, boxShadow: "none", bgcolor: "#F8F8F8", cursor:"pointer" }}
          onClick={() => handleOrderClick(order.id)}
        >
          <CardContent>
            <Box display="flex" alignItems="center" mb={1}>
              <LocalMallIcon
                sx={{ color: "#FF9800", mr: 1, fontSize: "14px" }}
              />

              <Typography fontWeight="bold" fontSize={10} color="#FF9800">
                {order.type}
              </Typography>
            </Box>

            <Typography
              variant="h6"
              fontSize={16}
              fontWeight="bold"
              gutterBottom
            >
              {order.price}
            </Typography>

            <Box display="flex" alignItems="center">
              <RadioButtonCheckedIcon
                fontSize="small"
                sx={{ color: "#9E9E9E", mr: 1, fontSize: "14px" }}
              />
              <Typography variant="body2" fontSize={8}>
                Pickup point
              </Typography>
            </Box>
            <Typography fontWeight="bold" sx={{ ml: 3, mb: 3 }} fontSize={10}>
              {order.pickup}
            </Typography>

            {/* <Divider
              sx={{ ml: 2, borderLeft: "2px dotted #9E9E9E", height: 20 }}
            /> */}

            <Box display="flex" alignItems="center" mt={1}>
              <PlaceIcon
                fontSize="small"
                sx={{ color: "#FF5722", mr: 1, fontSize: "14px" }}
              />
              <Typography variant="body2" fontSize={8}>
                Drop off location
              </Typography>
            </Box>
            <Typography fontWeight="bold" sx={{ ml: 3 }} fontSize={10}>
              {order.dropoff}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default OrderScreen;
