import { GlobalStyle } from "./styles/global";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import "./styles/fonts.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path={"/register"}>
          <Register />
        </Route>
        <Route exact path={"/home"}>
          <Home />
        </Route>
        <Route path={"/"}>
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
