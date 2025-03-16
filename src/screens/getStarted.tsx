import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import getStartedImage1 from "../assets/rider_sitting.png";
import getStartedImage2 from "../assets/delivery_bike.png"; // Another slide image
import { useNavigate } from "react-router-dom";
function GetStartedScreen() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        // padding: "20px",
        // height: "100vh",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide every 3s
        loop={true} // Infinite loop
        // spaceBetween={20}
        slidesPerView={1}
        style={{ width: "100%", maxWidth: "90%" }}
      >
        <SwiperSlide>
          <img
            src={getStartedImage1}
            alt="Delivery Illustration 1"
            // style={{ width: "100%", maxWidth: "100%" }}
          />
          <Typography
            variant="h6"
            sx={{
              marginTop: 2,
              fontWeight: "bold",
              fontSize: "16px",
              width: "100%",
            }}
          >
            Accept Orders with Ease Quickly see and accept delivery orders,
            navigate routes effortlessly, and track your earnings
          </Typography>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={getStartedImage2}
            alt="Delivery Illustration 2"
            style={{ width: "100%", maxWidth: "90%" }}
          />
          <Typography
            variant="h6"
            sx={{
              marginTop: 2,
              fontWeight: "bold",
              fontSize: "16px",
              width: "100%",
            }}
          >
            Start Earning Work on your own schedule, earn more during peak
            hours, and deliver with care to maximize your income.
          </Typography>
        </SwiperSlide>
      </Swiper>

      {/* Get Started Button */}
      <Button
        variant="contained"
        sx={{
          marginTop: 3,
          backgroundColor: "#FF7300",
          color: "#fff",
          width: "100%",
          maxWidth: "300px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "12px 0",
        }}
        onClick={() => navigate("/login")}
      >
        Get Started
      </Button>
    </Box>
  );
}

export default GetStartedScreen;
