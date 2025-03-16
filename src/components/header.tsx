import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header(props: any) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        top: 15,
        width: "100%",
        bgcolor: "#ececec",
      }}
    >
      <Button
        onClick={() => navigate(-1)}
        sx={{
          //   position: "absolute",
          //   top: 20,
          //   left: 20,
          fontSize: "20px",
          color: "#000",
        }}
      >
        ←
      </Button>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {props.title}
      </Typography>
      <span style={{ width: "10%" }}></span>
    </Box>
  );
}
