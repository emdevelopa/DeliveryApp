import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";

import groceries from "../../assets/groceries.png";
import cash from "../../assets/cash.png";
import ConfirmDialog from "../../components/confirmDialog";
import Loader from "../../components/loader";
import { ChevronLeft } from "@mui/icons-material";

// Sample order data
const orders = [
  {
    id: "1",
    packageType: "Groceries",
    price: "GHS 47.00",
    pickup: "Cocoa Board Roundabout",
    dropoff: "Penkwase High Tension",
    paymentType: "Cash",
  },
  {
    id: "2",
    packageType: "Food",
    price: "GHS 35.00",
    pickup: "Fiapre Junction",
    dropoff: "Asufufu Junction",
    paymentType: "Cash",
  },
];

const SuccessfullOrderDetails: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>(); // Get the order ID from URL
  const navigate = useNavigate();

  const [accept, setAccept] = useState(false);
  const [loading, setloading] = useState(false);

  const handleAcceptOrder = () => {
    setAccept(true);
  };

  const handleCancel = () => {
    setAccept(false);
  };

  const handleConfirm = () => {
    handleCancel();
    setloading(true);
    setTimeout(() => {
      setloading(false);
      navigate("/pickup");
    }, 3000);
  };

  const order = orders.find((o) => o.id === orderId); // Find order by ID

  if (!order) {
    return <Typography textAlign="center">Order not found</Typography>;
  }

  return (
    <Box
      sx={{
        mx: "auto",
        py: 3,
        width: "100%",
        bgcolor: "#20202005",
        position: "relative",
        overflow: "auto",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="start"
        pl={2}
        mb={2}
        onClick={() => navigate(-1)}
      >
        <ChevronLeft />
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "white",
          p: 2,
          mb: 2,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <img src={groceries} alt="groceries" />
          <Box>
            <Typography fontSize={14} color="textSecondary">
              Package type
            </Typography>
            <Typography fontWeight="bold">{order.packageType}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography fontSize={14} color="textSecondary">
            Delivery price
          </Typography>
          <Typography fontWeight="bold">{order.price}</Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={1}
        px={2}
      >
        <Typography variant="body2" color="text.secondary">
          25 Jun, 2024 • 10:23AM
        </Typography>

        <Chip
          label="Completed"
          sx={{
            backgroundColor: "#00C853",
            color: "white",
            fontWeight: "bold",
            borderRadius: "8px",
            px: 1.5,
          }}
        />
      </Box>
      <Box mt={2} px={2}>
        <Box sx={{ bgcolor: "#F3F3F3", mb: 2, borderRadius: 3 }}>
          <CardContent>
            <Typography fontWeight="bold">Pickup details</Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <LocationOnIcon
                fontSize="small"
                sx={{ color: "#9E9E9E", mr: 1 }}
              />
              <Typography variant="body2" color="textSecondary">
                Location
              </Typography>
            </Box>
            <Typography fontWeight="bold" sx={{ ml: 3 }}>
              {order.pickup}
            </Typography>
          </CardContent>
        </Box>

        <Card
          sx={{
            bgcolor: "#fb6b0435",
            boxShadow: "none",
            mb: 2,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography fontWeight="bold">Delivery details</Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <LocationOnIcon
                fontSize="small"
                sx={{ color: "#FF5722", mr: 1 }}
              />
              <Typography variant="body2" color="textSecondary">
                Location
              </Typography>
            </Box>
            <Typography fontWeight="bold" sx={{ ml: 3 }}>
              {order.dropoff}
            </Typography>
          </CardContent>
        </Card>

        <Box mb={2}>
          <Typography fontWeight="bold">Payment type</Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <PaymentsIcon fontSize="small" sx={{ color: "#000", mr: 1 }} />
            <Typography fontWeight="bold">{order.paymentType}</Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            fontWeight: "bold",
            color: "#FB6C04",
            borderColor: "#FB6C04",
            borderRadius: 2,
            py: 2,
          }}
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
      </Box>
    </Box>
  );
};

export default SuccessfullOrderDetails;
