import React, { useEffect, useState } from "react";
import {
  DialogActions,
  DialogContent,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import OTPInput from "./otp";
import info from "../assets/info.png";
import wrongPin from "../assets/wrong_pin.png";
import correctPin from "../assets/correct_pin.png";
import { useNavigate } from "react-router-dom";

// Define props using TypeScript
interface ConfirmDialog {
  handleClose: () => void;
  handleConfirm: () => void;
  header: string;
  text: string;
  confirmButtonText: string;
  setLoading?: (value: boolean) => void;
  setPinVerified?: (value: boolean) => void;
  pinVerified?: boolean;
}

const ConfirmDialog: React.FC<ConfirmDialog> = ({
  handleClose,
  handleConfirm,
  header,
  text,
  confirmButtonText,
  setLoading,
  setPinVerified,
  pinVerified,
}) => {
  const [timeLeft, setTimeLeft] = useState(4 * 60 + 59);
  const [incorrectPin, setIncorrectPin] = useState<boolean | null>(null);
  const navigate = useNavigate()

  const handleOTPComplete = (otp: string) => {
    if (otp === "1234") {
      setIncorrectPin(false); // Correct PIN
      console.log("Entered OTP:", otp);
      setLoading?.(true);
      handleClose();
      setTimeout(() => {
        setLoading?.(false);
        setPinVerified?.(true);

      
      }, 3000);
    } else {
      setIncorrectPin(true); // Incorrect PIN
    }
  };

  useEffect(() => {
    // Check if header matches either "Confirm Pickup" or "Confirm Package Delivery"
    const isCountdownActive =
      header === "Confirm Pickup" || header === "Confirm Package Delivery";
    if (!isCountdownActive) return;

    setTimeLeft(4 * 60 + 59); // Reset countdown when header changes

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [header]); // Restart countdown if header changes

  // Convert seconds to MM:SS format
  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Box
      bgcolor="#000000c8"
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      right={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box bgcolor="white" borderRadius={5} m={2} p={1}>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          {pinVerified ? (
            <img
              src={correctPin}
              alt="CorrectPin"
              loading="lazy"
              style={{ width: "4em" }}
            />
          ) : incorrectPin === null ? (
            <img
              src={info}
              alt="Info"
              loading="lazy"
              style={{ width: "4em" }}
            />
          ) : incorrectPin ? (
            <img
              src={wrongPin}
              alt="WrongPin"
              loading="lazy"
              style={{ width: "4em" }}
            />
          ) : (
            ""
          )}
          {/* {: } */}

          {/* <IconButton
            disableRipple
            sx={{
              bgcolor: header === "Confirm" ? "#FB6C04" : "red",
              color: "white",
              width: 50,
              height: 50,
              borderRadius: "50%",
              mt: 2,
            }}
          >
            <InfoIcon />
          </IconButton> */}
        </Box>

        <DialogContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold" color="#000000">
            {incorrectPin
              ? "Delivery Code Incorrect"
              : pinVerified
              ? "Delivery Code Correct"
              : header}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }} color="#000000">
            {incorrectPin
              ? "Do not hand package over to recipient yet"
              : pinVerified
              ? "Hand package over to recipient"
              : text}
          </Typography>
        </DialogContent>
        <DialogContent
          sx={{
            minHeight: "4em",
            bgcolor: "#F9FAFB",
            m: 2,
            borderRadius: 2,
            display:
              header === "Confirm Logout" ||
              header === "Confirm" ||
              header === "Confirm Pickup" ||
              pinVerified || incorrectPin
                ? "none"
                : "block",
          }}
        >
          {header === "Confirm Package Delivery" && (
            <OTPInput length={4} onComplete={handleOTPComplete} />
          )}
        </DialogContent>
        <DialogActions
          sx={{ justifyContent: "center", pb: 2, flexDirection: "column" }}
        >
          <Box display="flex" gap={2} alignItems="center" mb={1}>
            {header === "Confirm Pickup" ||
            header === "Confirm Package Delivery" ? (
              ""
            ) : (
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{
                  borderColor: "#FF9800",
                  color: "#FF9800",
                  textTransform: "none",
                  fontWeight: "bold",
                  //   width: "40%",
                  px: 4,
                  py: 1,
                  borderRadius: 2,
                }}
              >
                Cancel
              </Button>
            )}
            <Button
              variant="contained"
              onClick={
                incorrectPin
                  ? () => setIncorrectPin(null)
                  : pinVerified
                  ? handleClose
                  : handleConfirm
              }
              sx={{
                // minWidth: "100%",
                bgcolor:
                  header === "Confirm" ||
                  header === "Confirm Pickup" ||
                  header === "Confirm Package Delivery"
                    ? "#FB6C04"
                    : "#D32F2F",
                textTransform: "none",
                fontWeight: "bold",
                px: 4,
                py: 1,
                borderRadius: 2,
                "&:hover": {
                  bgcolor:
                    header === "Confirm" ||
                    header === "Confirm Pickup" ||
                    header === "Confirm Package Delivery"
                      ? "#bf5102d2"
                      : "#B71C1C",
                },
              }}
            >
              {incorrectPin
                ? "Retry"
                : pinVerified
                ? "Okay"
                : confirmButtonText}
            </Button>
          </Box>

          {(header === "Confirm Pickup" ||
            header === "Confirm Package Delivery") && (
            <Box sx={{ display: pinVerified ? "none" : "block" }}>
              <Typography color="#CDCBCB">
                Report Customer Delay ({formatTime(timeLeft)})
              </Typography>
            </Box>
          )}
        </DialogActions>
      </Box>
    </Box>
  );
};

export default ConfirmDialog;
