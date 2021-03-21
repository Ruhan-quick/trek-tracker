import { Container, Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { UserVeichleContext } from "../../App";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./RouteMap.css";
import SmallVcard from "../SmallVcard/SmallVcard";
const RouteMap = () => {
  const [selectedVeichle, setSelectedVeichle] = useContext(UserVeichleContext);
  console.log("sv:", selectedVeichle.vl);
  const { vName, vImage, vCapacity, vRent } = selectedVeichle.vl;
  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");

  const handleRoute = () => {
    from = document.getElementById("input1").value;
    setFrom(from);
    to = document.getElementById("input2").value;
    setTo(to);
    document.getElementById("routeForm").style.display = "none";
    document.getElementById("showRoute").style.display = "block";
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <Grid container>
          <Grid item xs={4} className="mt-4">
            <Form className="p-3 m-3 bg-light" id="routeForm">
              <Form.Group>
                <Form.Label>Pick from</Form.Label>
                <Form.Control id="input1" type="text" placeholder="From" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Pick to</Form.Label>
                <Form.Control id="input2" type="text" placeholder="To" />
              </Form.Group>
              <Form.Group>
                <Button onClick={handleRoute} variant="primary" block>
                  Submit
                </Button>
              </Form.Group>
            </Form>
            <SmallVcard from={from} to={to}></SmallVcard>
          </Grid>
          <Grid item xs={8}>
            <img
              style={{ margin: "20px" }}
              src="https://i.ibb.co/rFHC665/Map.png"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RouteMap;
