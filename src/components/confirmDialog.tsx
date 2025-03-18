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

// Define props using TypeScript
interface ConfirmDialog {
  handleClose: () => void;
  handleConfirm: () => void;
  header: string;
  text: string;
  confirmButtonText: string;
}

const ConfirmDialog: React.FC<ConfirmDialog> = ({
  handleClose,
  handleConfirm,
  header,
  text,
  confirmButtonText,
}) => {
  const [timeLeft, setTimeLeft] = useState(4 * 60 + 59); 
  useEffect(() => {
    if (header !== "Confirm Pickup") return; // Only run when header matches

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [header]); // Runs when header changes

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
      <Box bgcolor="white" borderRadius={5} m={2}>
        <Box sx={{ textAlign: "center" }}>
          <IconButton
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
          </IconButton>
        </Box>

        <DialogContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold" color="#000000">
            {header}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }} color="#000000">
            {text}
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{ justifyContent: "center", pb: 2, flexDirection: "column" }}
        >
          <Box display="flex" gap={2} alignItems="center" mb={1}>
            {header === "Confirm Pickup" ? (
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
              onClick={handleConfirm}
              sx={{
                bgcolor:
                  header === "Confirm" || header === "Confirm Pickup"
                    ? "#FB6C04"
                    : "#D32F2F",
                textTransform: "none",
                fontWeight: "bold",
                px: 4,
                py: 1,
                borderRadius: 2,
                "&:hover": {
                  bgcolor:
                    header === "Confirm" || header === "Confirm Pickup"
                      ? "#bf5102d2"
                      : "#B71C1C",
                },
              }}
            >
              {confirmButtonText}
            </Button>
          </Box>

          {header === "Confirm Pickup" && (
            <Box>
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
