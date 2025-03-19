import React from "react";
import { Box, Typography, Card, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DeliveryHistoryCard = () => {
  const navigate = useNavigate();
  const handleOrderClick = (orderId: number) => {
    navigate(`/successful-order-details/${orderId}`); // Navigate with order ID
  };
  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 2,
        p: 2,
        boxShadow: "none",
        cursor: "pointer",
        bgcolor: "transparent",
      }}
      onClick={() => handleOrderClick(1)}
    >
      <Typography variant="h5" fontWeight="bold" textAlign="center">
        Delivery history
      </Typography>

      <Box
        sx={{
          p: 2,
          mt: 2,
          borderRadius: "12px",
          //   boxShadow: "0px 2px 10px rgb(152, 152, 152)",
          border: "0.2px solid rgb(152, 152, 152)",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
          mb={1}
          sx={{ borderBottom: "0.2px solid rgb(152, 152, 152)", pb: 2 }}
        >
          Grocery Delivery
        </Typography>

        <Typography variant="body2" color="text.secondary">
          25 Jun, 2024 • 10:23AM
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Typography variant="h6" fontWeight="bold">
            GHS 35.00
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
      </Box>
    </Card>
  );
};

export default DeliveryHistoryCard;
