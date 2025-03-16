import { Box, Container, Typography } from "@mui/material";
import logo from "./assets/logo.png"; // Ensure you have your logo image in the assets folder.
import { useEffect, useState } from "react";
import SplashScreen from "./screens/splash";
import GetStartedScreen from "./screens/getStarted";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login";
import VerifyScreen from "./screens/verifyOtp";
import Dashboard from "./screens/homepage";

function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, [splashScreen]);

  return (
    //   {splashScreen ? <SplashScreen /> : <GetStartedScreen />}
    //
    <Container
      maxWidth="xs"
      disableGutters
      sx={{
        height: "100vh",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {splashScreen ? (
        <SplashScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<GetStartedScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/verify" element={<VerifyScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      )}
    </Container>
  );
}

export default App;
