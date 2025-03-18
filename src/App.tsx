import {Container } from "@mui/material";
import { useEffect, useState } from "react";
import SplashScreen from "./screens/splash";
import GetStartedScreen from "./screens/getStarted";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login";
import VerifyScreen from "./screens/verifyOtp";
import Dashboard from "./screens/homepage";
import OrderScreen from "./screens/order/order";
import OrderDetails from "./screens/order/orderDetails";
import PickupScreen from "./screens/order/PickupScreen";
import DeliveryScreen from "./screens/order/delivery";

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
        // alignItems: "center",
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
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/order-details/:orderId" element={<OrderDetails />} />
            <Route path="/pickup" element={<PickupScreen />} />
            <Route path="/delivery" element={<DeliveryScreen />} />
          </Routes>
        </Router>
      )}
    </Container>
  );
}

export default App;
