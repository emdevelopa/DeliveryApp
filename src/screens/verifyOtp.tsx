import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import phoneOtp from "../assets/verify_otp.png";
import Header from "../components/header";
import Loader from "../components/loader";
// import PhoneIcon from "@mui/icons-material/PhoneAndroid"; // Example icon

function VerifyScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loader, setLoader] = useState(false);

  // Handle OTP input
  const handleChange = (index: any, value: any) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleVerify = () => {
    setLoader(true);
    setTimeout(() => {
        setLoader(false);
        navigate("/dashboard");
    }, 3000);
  };

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
      <Header title={"Verify"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          //   bgcolor: "red",
        }}
      >
        <img
          src={phoneOtp}
          alt="Delivery Illustration"
          style={{ width: "30%", marginBottom: "20px" }}
        />

        <Typography variant="body2" sx={{ marginBottom: 3 }}>
          Enter the verification code sent to <br /> <strong>0594679885</strong>
          .
        </Typography>

        {/* OTP Input Fields */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              variant="outlined"
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                },
              }}
              sx={{
                width: "50px",
                height: "50px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </Box>

        {/* Verify Button */}
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
          onClick={handleVerify}
        >
          Verify
        </Button>
      </Box>
      {loader ? <Loader text="Please wait, Logging in." /> : null}
    </Box>
  );
}

export default VerifyScreen;
