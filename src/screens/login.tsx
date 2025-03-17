import { Box, Button, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
import getStartedImage1 from "../assets/delivery_man.png";
import Header from "../components/header";

function LoginScreen() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        height: "100vh",
        justifyContent: "center",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Back Button */}
      {/* <Button
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          fontSize: "20px",
          color: "#000",
        }}
      >
        ←
      </Button> */}
          <Header title={"Login"}/>

      {/* Illustration */}
      <img
        src={getStartedImage1}
        alt="Delivery Illustration"
        style={{ width: "60%", marginBottom: "20px" }}
      />

      {/* Title */}
      {/* <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Login
      </Typography> */}

      {/* Input Field */}
      <TextField
        fullWidth
        placeholder="Enter your mobile number"
        variant="outlined"
        sx={{
          backgroundColor: "#F6F6F6",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
          marginBottom: 2,
        }}
      />

      {/* Login Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF7300",
          color: "#fff",
          width: "100%",
          maxWidth: "300px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "12px 0",
        }}
        onClick={() => navigate("/verify")} // Navigate to Verify Screen
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginScreen;
