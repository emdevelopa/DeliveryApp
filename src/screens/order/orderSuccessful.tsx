import { Box, Button, Typography } from "@mui/material";
import OrderSuccessfulImage from "../../assets/orderSuccessful.png";
import { useNavigate } from "react-router-dom";

export default function OrderSuccessful() {
    const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        px: 2,
      }}
    >
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
        <img src={OrderSuccessfulImage} alt="activity" />
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Package Delivery Successful
        </Typography>
        <Typography fontSize={12} color="#868686" textAlign="center">
          You have successfully delivered this grocery package to Gideon
          Essuman. You made <strong>GHS 35.00.</strong>
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "#FB6C04",
          mb: 1,
          fontWeight: "bold",
          borderRadius: 2,
          py: 2,
        }}
        onClick={()=>{navigate("/dashboard")}}
      >
        Go to Home
      </Button>
    </Box>
  );
}
