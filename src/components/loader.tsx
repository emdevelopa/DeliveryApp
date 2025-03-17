import { Box, CircularProgress, Container, Typography } from "@mui/material";

export default function Loader(props:any) {
  return (
    <Container
      sx={{
        position: "absolute",
        zIndex: 1,
        bgcolor: "black",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0000008f",
      }}
    >
      <Box
        sx={{
          borderRadius: "1em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          flexDirection: "column",
          padding: 4,
          gap: 2,
          width: "70%",
        }}
      >
        <CircularProgress
          sx={{
            width: "40px !important", // Custom width
            height: "40px !important", // Custom height (Oval shape)
            animation: "spin 1s linear infinite",
            color: "#FF7300",
          }}
        />
        <Typography>{props.text}</Typography>
      </Box>
    </Container>
  );
}
