import React from "react";
import BarChart from "../../components/BarChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Logging = () => {
  return (
    <Box m="20px" height="75vh">
      <Header title="Sensor Logging" subtitle="Sensor Count" />
      <BarChart />
    </Box>
  );
};

export default Logging;
