import React, { useContext } from "react";
import { AppBar, Box, Toolbar, Button } from "@material-ui/core";
import { AuthContext } from "../../Hooks/AuthContext";
import { useHistory } from "react-router-dom";

function NavBar() {
  const { setAuth, auth } = useContext(AuthContext);

  const history = useHistory();
  const handleRedirect = () => {
    history.push(`/main`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Button color="inherit" onClick={() => handleRedirect()}>
            Home
          </Button>
          <Button color="inherit" onClick={() => setAuth(!auth)}>
            {!auth ? "Login" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
