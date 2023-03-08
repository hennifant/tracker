import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import Grid from "@mui/material/Unstable_Grid2";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import { AllInbox, PersonAdd, SensorsOutlined } from "@mui/icons-material";

import Header from "../../components/Header";
import StatBox from "../StatBox.jsx";

const Dashboard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Data
          </Button>
        </Box>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={12} md={6} lg={4} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="234"
              subtitle="Sensors"
              progress="0.95"
              icon={
                <SensorsOutlined
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6} lg={4} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAdd
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="72,134"
              subtitle="Deliveries"
              progress="0.80"
              increase="+33%"
              icon={
                <AllInbox
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboard;
