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
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close"; // Importa el ícono de cerrar
import logo from "../assets/logo.png";
import IniciarSesion from "./IniciarSesion";

const pages = ["Inicio", "Inmuebles", "Nosotros"];
const inmueblesOptions = ["Venta", "Renta"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElInmuebles, setAnchorElInmuebles] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);

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

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/invitado/nosotros"
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
                to={
                  page === "Inicio" ? "/invitado/inicio" : "/invitado/nosotros"
                }
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
          to="/invitado/nosotros"
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
                  to={
                    page === "Inicio"
                      ? "/invitado/inicio"
                      : "/invitado/nosotros"
                  }
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
                    ? "/invitado/catalogo/venta"
                    : "/invitado/catalogo/renta"
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
            onClick={handleOpenDialog}
            sx={{ my: 2, color: "white", ml: "auto" }}
          >
            Iniciar sesión
          </Button>
        </Box>
      </Toolbar>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            width: "500px",
            height: "500px",
          },
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", padding: "8px" }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseDialog}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <IniciarSesion />
      </Dialog>
    </AppBar>
  );
}

export default ResponsiveAppBar;
