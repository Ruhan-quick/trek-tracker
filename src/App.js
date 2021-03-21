import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import SinUp from "./components/SinUp/SinUp";
import RouteMap from "./components/RouteMap/RouteMap";
import { createContext, useState } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const UserVeichleContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedVeichle, setSelectedVeichle] = useState("");

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserVeichleContext.Provider
        value={[selectedVeichle, setSelectedVeichle]}
      >
        {/* <p>Name: {loggedInUser.name}</p> */}
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/sinup">
              <SinUp></SinUp>
            </Route>
            <PrivateRoute path="/:vn">
              <RouteMap></RouteMap>
            </PrivateRoute>
            <Route path="/destination">
              <RouteMap></RouteMap>
            </Route>
          </Switch>
        </Router>
      </UserVeichleContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
