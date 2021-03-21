import React, { useContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./LogIn.css";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, Grid } from "@material-ui/core";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const LogIn = () => {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

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
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  const handleFacebookSinUp = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        var accessToken = credential.accessToken;

        const { displayName, email } = result.user;
        const sinedInUser = { name: displayName, email };
        console.log("Hi", sinedInUser);
        setLoggedInUser(sinedInUser);
        history.replace(from);
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
  const handleLogin = (e) => {
    uemail = document.getElementById("t1").value;
    setUemail(uemail);
    upassword = document.getElementById("t2").value;
    setUpassword(upassword);
    //console.log(uemail, upassword);

    if (uemail && upassword) {
      firebase
        .auth()
        .signInWithEmailAndPassword(uemail, upassword)
        .then((userCredential) => {
          var user = userCredential.user;

          const { displayName, email } = user;
          const sinedInUser = { name: "Ruhan", email };
          console.log("Hi", sinedInUser);
          setLoggedInUser(sinedInUser);
          history.replace(from);
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
        <div className="sininBox col-5 mx-auto p-5">
          <h4 style={{ textAlign: "left" }}>Login</h4>
          <TextField
            style={{ marginTop: "30px" }}
            id="t1"
            type="email"
            label="Email"
            fullWidth
          />
          <TextField
            style={{ marginTop: "30px" }}
            id="t2"
            type="password"
            label="Password"
            fullWidth
          />
          <Grid container>
            <Grid xl={6}>
              <FormControlLabel
                style={{ float: "left", marginTop: "20px" }}
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Remember Me"
              />
            </Grid>
            {/* <Grid xl={6}>
              <a style={{ paddingTop: "40px" }} href="">
                Forgot Password
              </a>
            </Grid> */}
          </Grid>

          <Button
            onClick={handleLogin}
            fullWidth
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
          <p>
            Do you have an account?<a href="sinup">Create an account.</a>
          </p>
        </div>
        <p>__________________or_________________</p>
        <br />
        <Button onClick={handleGoogleSinUp} variant="contained" color="primary">
          Login With Google
        </Button>
        <br />
        <br />
        <Button
          onClick={handleFacebookSinUp}
          variant="contained"
          color="primary"
        >
          Login with facebook
        </Button>
      </div>
    </div>
  );
};

export default LogIn;
