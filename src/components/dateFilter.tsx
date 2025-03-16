import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function DateFilter() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          bgcolor: "#FFA726",
          color: "white",
          textTransform: "none",
          borderRadius: "20px",
          fontWeight: "bold",
          px: 2,
          py: 1,
          "&:hover": { bgcolor: "#FB8C00" },
        }}
        endIcon={<ArrowDropDownIcon />}
      >
        Today
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Today</MenuItem>
        <MenuItem onClick={handleClose}>This Week</MenuItem>
        <MenuItem onClick={handleClose}>This Month</MenuItem>
      </Menu>
    </>
  );
}
