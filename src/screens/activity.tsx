import { Box, Typography } from "@mui/material";
import ActivityImage from "../assets/activity_user.png";

export default function Activity() {
  return (
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
      <img src={ActivityImage} alt="activity" />
      <Typography fontSize={12} color="#868686">
        You are yet to accept and complete an order
      </Typography>
    </Box>
  );
}
