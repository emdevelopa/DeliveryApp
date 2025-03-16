import { Box } from "@mui/material";
import logo from "../assets/logo.png"; // Ensure you have your logo image in the assets folder.

function SplashScreen() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF7300",
      
      }}
    >
      <img src={logo} alt="Forkin Logo" style={{ width: "150px" }} />
    </Box>
  );
}

export default SplashScreen;
