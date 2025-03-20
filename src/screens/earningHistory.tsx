import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const earningsData = [
  { date: "25 Jun, 2024", time: "10:23AM", amount: "GHS 35.00" },
  { date: "25 Jun, 2024", time: "12:23PM", amount: "GHS 27.00" },
];

const EarningsHistory = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 2, p: 2 }}>
      <Typography variant="h6" fontWeight="bold">
        History of your earnings
      </Typography>

      {earningsData.map((entry, index) => (
        <Box key={index} mt={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="text.secondary">
              {entry.date} • {entry.time}
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              {entry.amount}
            </Typography>
          </Box>

          {index !== earningsData.length - 1 && <Divider sx={{ mt: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default EarningsHistory;
