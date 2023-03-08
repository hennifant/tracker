import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SidebarProvider } from "./components/Navbar/Sidebar/SidebarProvider";

import Topbar from "./components/Navbar/Topbar";
import Dashboard from "./components/Dashboard";

import Sensor from "./pages/sensor";
import SensorDetail from "./pages/sensor/SensorDetail";
import Activity from "./pages/activity";
import Logging from "./pages/logging";
import Staff from "./pages/staff";
import Contacts from "./pages/contacts";
import Form from "./pages/profile";
import Calendar from "./pages/calendar";
import FAQ from "./pages/faq";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/sensor" element={<Sensor />} />
                <Route path="/datadetail/:id" element={<SensorDetail />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/logging" element={<Logging />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
