/* eslint-disable react-hooks/exhaustive-deps */
import { GlobalStyle } from "./styles/global";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import "./styles/fonts.css";
import { useEffect, useState } from "react";

function App() {
    const [userData, setUserData] = useState({});
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("userData")) {
            setUserData(JSON.parse(localStorage.getItem("userData")));
            history.push("/home");
        }
    }, []);

    return (
        <>
            <GlobalStyle />
            <Switch>
                <Route exact path={"/register"}>
                    <Register />
                </Route>
                <Route exact path={"/home"}>
                    <Home userData={userData} setUserData={setUserData} />
                </Route>
                <Route path={"/"}>
                    <Login setUserData={setUserData} />
                </Route>
            </Switch>
        </>
    );
}

export default App;
