import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import noEarnings from "../assets/no-earnings.png";
import DateFilter from "../components/dateFilter";
import { InfoRounded, QuestionMarkRounded } from "@mui/icons-material";

export default function Account() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#FF7300",
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 2,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            // justifyContent: "space-between",
            gap: 2,
            marginBottom: 4,
          }}
        >
          <img
            src="https://source.unsplash.com/random/800x600"
            alt="user"
            loading="lazy"
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontSize: "12px" }}>
              Gideon Essuman
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontSize: "32px" }}
            >
              059 467 9885
            </Typography>
          </Box>
          {/* <DateFilter /> */}
          {/* <Typography sx={{ textAlign: "center" }}>
            Welcome <br /> <span style={{ fontWeight: "bold" }}>Koby</span>
          </Typography> */}
        </Toolbar>
        <Box>{/* <img src={user_with_cartoon} alt="all" /> */}</Box>
      </AppBar>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          height: "90vh",
        }}
      >
        {/* <img src={noEarnings} alt="activity" /> */}
        <Box>
          <Typography
            fontSize={12}
            color="#868686"
            textAlign={"center"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <InfoRounded />
            About
          </Typography>{" "}
          <Typography
            fontSize={12}
            color="#868686"
            textAlign={"center"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <QuestionMarkRounded />
            Support
          </Typography>
        </Box>
      </Box>
    </>
  );
}
