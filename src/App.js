import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from "@material-ui/core";
import { routes } from "./Routes/Routes";
import { AuthContext } from "./Hooks/AuthContext";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Container style={{ paddingTop: "80px" }}>
          <NavBar />
          <Switch>
            {routes.map((item, ind) => {
              return (
                <Route
                  key={ind}
                  exact
                  path={item.path}
                  component={item.component}
                />
              );
            })}
            <Route path="/">
              <Redirect to="/main" />
            </Route>
          </Switch>
        </Container>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
