import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/Navbar/Topbar.jsx";
import { SidebarProvider } from "./components/Navbar/Sidebar/SidebarProvider.jsx";
import Dashboard from "./components/Dashboard/index.jsx";

function App() {
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
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </ThemeProvider>
      ;
    </ColorModeContext.Provider>
  );
}

export default App;
