import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-charts/themeAugmentation";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppTheme from "../shared-theme/AppTheme";
import SideMenu from "./dashboard/components/SideMenu";
import AppNavbar from "./dashboard/components/AppNavbar";
import Header from "./dashboard/components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./NotFound";
import { useAuth } from "../contexts/AuthContext";

const Layout = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {user ? (
        <AppTheme>
          <CssBaseline enableColorScheme />
          <Box sx={{ display: "flex" }}>
            <SideMenu user={user} />
            <AppNavbar />

            {/* Main content */}
            <Box
              component="main"
              sx={(theme: any) => ({
                flexGrow: 1,
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                  : alpha(theme.palette.background.default, 1),
                overflow: "auto",
              })}
            >
              <Stack
                spacing={2}
                sx={{
                  alignItems: "center",
                  mx: 3,
                  pb: 5,
                  mt: { xs: 8, md: 0 },
                }}
              >
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={user ? <Navigate to="/dashboard" /> : <Login />}
                  />

                  <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : <Navigate to="/" />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Stack>
            </Box>
          </Box>
        </AppTheme>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/login" /> : <Login />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/login" /> : <Login />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default Layout;
