import React, { useState, useRef } from "react";
import { Box, TextField } from "@mui/material";

const OTPInput = ({
  length = 4,
  onComplete,
}: {
  length?: number;
  onComplete?: (otp: string) => void;
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move focus to next field
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call onComplete when filled
    if (newOtp.join("").length === length && onComplete) {
      onComplete(newOtp.join(""));
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Box display="flex" justifyContent="center"  gap={2} sx={{ m: 0 }}>
      {otp.map((value, index) => (
        <TextField
          key={index}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          inputRef={(el) => (inputRefs.current[index] = el)}
          variant="outlined"
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
            },
          }}
          sx={{
            width: 50,
            height: 20,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              borderColor: "#FFDDC1",
              "& fieldset": { borderColor: "#FFDDC1" },
              "&:hover fieldset": { borderColor: "#FFA07A" },
              "&.Mui-focused fieldset": { borderColor: "#FF4500" },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default OTPInput;
