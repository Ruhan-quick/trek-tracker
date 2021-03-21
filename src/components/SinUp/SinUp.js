import React, { useContext, useState } from "react";
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

  let [uemail, setUemail] = useState();
  let [upassword, setUpassword] = useState();

  const handleSignUp = (e) => {
    uemail = document.getElementById("t2").value;
    setUemail(uemail);
    upassword = document.getElementById("t3").value;
    setUpassword(upassword);
    //console.log(uemail, upassword);

    if (uemail && upassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(uemail, upassword)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user);
          document.getElementById(
            "message"
          ).innerHTML = `<p style={{color: 'green'}}> Account created successfully, go to login page and login then select your veichle</p>`;
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
    e.preventDefault();
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
              id="t1"
              type="text"
              label="Name"
              fullWidth
            />
            <TextField
              style={{ marginTop: "30px" }}
              id="t2"
              type="email"
              label="Username or Email"
              fullWidth
            />
            <TextField
              style={{ marginTop: "30px" }}
              id="t3"
              type="password"
              label="Password"
              fullWidth
              required
            />
            <TextField
              style={{ marginTop: "30px", marginBottom: "20px" }}
              id="t4"
              type="password"
              label="Conform Password"
              fullWidth
            />
            <Button
              onClick={handleSignUp}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Sin Up
            </Button>
            <br />
            <p>
              Already have an account?<a href="login">Sin in here.</a>
            </p>
          </form>
        </div>
        <br />
        <div id="message"></div>
        <Button onClick={handleGoogleSinUp} variant="contained" color="primary">
          Sin Up With Google
        </Button>
      </div>
    </div>
  );
};

export default SinUp;
