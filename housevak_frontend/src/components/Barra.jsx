import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const pages = ["Inicio", "Inmuebles", "Nosotros"];
const inmueblesOptions = ["Venta", "Renta"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElInmuebles, setAnchorElInmuebles] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenInmueblesMenu = (event) => {
    setAnchorElInmuebles(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseInmueblesMenu = () => {
    setAnchorElInmuebles(null);
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/Nosotros"
          sx={{
            marginLeft: 2,
            marginRight: 0.05,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          HOUSEVAK
        </Typography>
        <img
          src={logo}
          alt="Logo"
          style={{
            marginRight: "4px",
            width: "32px",
            height: "32px",
          }}
        />
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page === "Inicio" ? "/iniciosesion/Inicio" : "/Nosotros"}
              >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Typography
          variant="h5"
          noWrap
          component={Link}
          to="/iniciosesion"
          sx={{
            marginRight: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          HOUSEVAK
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <React.Fragment key={page}>
              {page === "Inmuebles" ? (
                <Button
                  onClick={handleOpenInmueblesMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ) : (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  component={Link}
                  to={page === "Inicio" ? "/iniciosesion/Inicio" : "/Nosotros"}
                >
                  {page}
                </Button>
              )}
            </React.Fragment>
          ))}
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElInmuebles}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElInmuebles)}
            onClose={handleCloseInmueblesMenu}
          >
            {inmueblesOptions.map((option, index) => (
              <MenuItem
                key={option}
                onClick={handleCloseInmueblesMenu}
                component={Link}
                to={
                  index === 0
                    ? "/iniciosesion/inicio/Catelog/Venta"
                    : "/iniciosesion/inicio/Catelog/Renta"
                }
              >
                <Typography textAlign="center">{option}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            key="Iniciar Sesión"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", ml: "auto" }}
          >
            Cerrar sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
