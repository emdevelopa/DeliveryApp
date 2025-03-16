import { Box, Typography, Switch } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useState } from "react";

export default function Dashboard() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <Box className="flex flex-col h-screen w-full bg-gray-100">
      {/* Header Section */}
      <Box className="bg-orange-500 p-5 text-white rounded-b-3xl">
        <Typography variant="h6" className="font-semibold">
          Welcome <span className="font-bold">Koby</span>
        </Typography>
        <Typography variant="h6" className="mt-2">
          Your earning for today
        </Typography>
        <Typography variant="h4" className="font-bold">
          GHS 0.00
        </Typography>
      </Box>

      {/* Online Toggle */}
      <Box className="bg-white p-4 mt-3 rounded-xl shadow-md flex items-center justify-between">
        <Typography variant="h6" className="font-semibold text-orange-500">
          Online
        </Typography>
        <Switch
          checked={isOnline}
          onChange={() => setIsOnline(!isOnline)}
          color="warning"
        />
      </Box>

      {/* Orders Status Section */}
      <Box className="p-4 space-y-3">
        {/* No Orders Yet Card */}
        <Box className="bg-orange-100 p-4 rounded-lg flex">
          <img
            src="/icons/box.png" // Replace with actual image
            alt="box"
            className="w-12 h-12"
          />
          <Box className="ml-3">
            <Typography className="font-bold">There no orders yet</Typography>
            <Typography variant="body2" className="text-gray-600">
              Hang tight—stay online in busy areas and during peak times to
              boost your chances of getting orders soon!
            </Typography>
          </Box>
        </Box>

        {/* Yet to Complete Order Card */}
        <Box className="bg-green-100 p-4 rounded-lg flex">
          <img
            src="/icons/checklist.png" // Replace with actual image
            alt="checklist"
            className="w-12 h-12"
          />
          <Box className="ml-3">
            <Typography className="font-bold">
              You are yet to complete an order
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              "Keep accepting orders and stay focused to quickly complete your
              first delivery!"
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Navigation */}
      <Box className="fixed bottom-0 left-0 w-full bg-white p-3 shadow-md flex justify-between">
        <Box className="flex flex-col items-center text-orange-500">
          {/* <HomeIcon fontSize="large" /> */}
          <Typography className="text-xs">Home</Typography>
        </Box>
        <Box className="flex flex-col items-center text-gray-400">
          {/* <ReceiptIcon fontSize="large" /> */}
          <Typography className="text-xs">Activity</Typography>
        </Box>
        <Box className="flex flex-col items-center text-gray-400">
          {/* <MonetizationOnIcon fontSize="large" /> */}
          <Typography className="text-xs">Earnings</Typography>
        </Box>
        <Box className="flex flex-col items-center text-gray-400">
          {/* <AccountCircleIcon fontSize="large" /> */}
          <Typography className="text-xs">Account</Typography>
        </Box>
      </Box>
    </Box>
  );
}
