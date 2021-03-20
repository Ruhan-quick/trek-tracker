import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import "./SinUp.css";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, Grid } from "@material-ui/core";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
const SinUp = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSinUp = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        const { displayName, email } = result.user;
        const sinedInUser = { name: displayName, email };
        console.log("Hi", sinedInUser);
        setLoggedInUser(sinedInUser);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
  return (
    <div className="loginPage">
      <NavBar></NavBar>
      <div className="container">
        <div className="loginBox col-5 mx-auto p-5">
          <form action="">
            <h4 style={{ textAlign: "left" }}>SinUp</h4>
            <TextField
              style={{ marginTop: "30px" }}
              id="standard-basic"
              label="Name"
              fullWidth
            />
            <TextField
              style={{ marginTop: "30px" }}
              id="standard-basic"
              label="Username or Email"
              fullWidth
            />
            <TextField
              style={{ marginTop: "30px" }}
              id="standard-basic"
              type="password"
              label="Password"
              fullWidth
              required
            />
            <TextField
              style={{ marginTop: "30px", marginBottom: "20px" }}
              id="standard-basic"
              type="password"
              label="Conform Password"
              fullWidth
            />
            <Button fullWidth variant="contained" color="secondary">
              Sin Up
            </Button>
            <br />
            <p>
              Already have an account?<a href="login">Sin in here.</a>
            </p>
          </form>
        </div>
        <br />
        <Button onClick={handleGoogleSinUp} variant="contained" color="primary">
          Sin Up With Google
        </Button>
      </div>
    </div>
  );
};

export default SinUp;
