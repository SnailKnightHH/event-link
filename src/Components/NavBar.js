import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { deepOrange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../Images/Eventlink-logo.png";

const customTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#DECEA1",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

const toolBarItemTheme = createTheme({
  palette: {
    primary: {
      main: "#3D3D3D",
    },

    secondary: {
      main: "#000000",
    },
  },
});

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={customTheme}>
        <AppBar position="static" color="primary">
          <ThemeProvider theme={toolBarItemTheme}>
            <Toolbar>
              {
                <img
                  src={Logo}
                  style={{ maxWidth: "2rem", margin: "0.5rem 0.2rem" }}
                  alt="EventLink Logo"
                />
              }
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                color="primary"
              >
                Event Link
              </Typography>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              > */}
              <Button variant="text" color="primary">
                Host
              </Button>
              {/* </IconButton> */}
              <Button color="inherit">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>NL</Avatar>
              </Button>
            </Toolbar>
          </ThemeProvider>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
