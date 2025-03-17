import React from "react";
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
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  header: string;
  text: string;
}

const ConfirmDialog: React.FC<ConfirmDialog> = ({
  open,
  handleClose,
  handleConfirm,
  header,
  text,
}) => {
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

        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
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
          <Button
            variant="contained"
            onClick={handleConfirm}
            sx={{
              bgcolor: header === "Confirm" ? "#FB6C04" : "#D32F2F",
              textTransform: "none",
              fontWeight: "bold",
              px: 4,
              py: 1,
              borderRadius: 2,
              "&:hover": {
                bgcolor: header === "Confirm" ? "#bf5102d2" : "#B71C1C",
              },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Box>
    </Box>
  );
};

export default ConfirmDialog;
