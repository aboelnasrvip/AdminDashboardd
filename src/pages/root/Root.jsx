import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Drawerr from "../../components/Drawerr";
import getDesignTokens from "../../Theme";

export const Root = () => {
  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "dark"
  );
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Drawerr
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        setMode={setMode}
      />
      {/* Use <Outlet /> if you want nested routes to be rendered here */}
      {/* <div>Root Footer</div> */}
    </ThemeProvider>
  );
};
