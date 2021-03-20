import { Container, Grid } from "@material-ui/core";
import React from "react";
import NavBar from "../NavBar/NavBar";

const RouteMap = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <Grid container>
          <Grid xs={4}>
            <h1>input fields</h1>
          </Grid>
          <Grid xs={8}>
            <h1>Map will be here in thi side bro</h1>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RouteMap;
