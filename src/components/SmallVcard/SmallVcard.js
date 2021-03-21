import { Grid } from "@material-ui/core";
import React from "react";
import { UserVeichleContext } from "../../App";
import { useContext, useState } from "react";
//Timeline
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const SmallVcard = ({ from, to }) => {
  const [selectedVeichle, setSelectedVeichle] = useContext(UserVeichleContext);

  const { vName, vImage, vCapacity, vRent } = selectedVeichle.vl;
  return (
    <div id="showRoute" style={{ display: "none" }}>
      <Grid container className="bg-warning rounded">
        <Grid item xs={4}>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{from}</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>{to}</TimelineContent>
            </TimelineItem>
            <h5>Lets Go</h5>
          </Timeline>
        </Grid>
      </Grid>

      <div className="p-4 m-2 p-2 bg-light rounded">
        <Grid container>
          <Grid item xs={4}>
            <img className="vIm" src={vImage} alt="" />
          </Grid>
          <Grid item xs={4}>
            <h5>{vName}</h5>{" "}
          </Grid>

          <Grid item xs={2}>
            <Grid container>
              <Grid item>
                <img
                  className="vIm2"
                  src="https://i.ibb.co/2FQKxYY/peopleicon.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <h5>{vCapacity} </h5>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <p>{vRent}</p>
          </Grid>
        </Grid>
      </div>

      <div className="p-4 m-2 p-2 bg-light rounded">
        <Grid container>
          <Grid item xs={4}>
            <img className="vIm" src={vImage} alt="" />
          </Grid>
          <Grid item xs={4}>
            <h5>{vName}</h5>{" "}
          </Grid>

          <Grid item xs={2}>
            <Grid container>
              <Grid item>
                <img
                  className="vIm2"
                  src="https://i.ibb.co/2FQKxYY/peopleicon.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <h5>{vCapacity} </h5>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <p>{vRent}</p>
          </Grid>
        </Grid>
      </div>

      <div className="p-4 m-2 p-2 bg-light rounded">
        <Grid container>
          <Grid item xs={4}>
            <img className="vIm" src={vImage} alt="" />
          </Grid>
          <Grid item xs={4}>
            <h5>{vName}</h5>{" "}
          </Grid>

          <Grid item xs={2}>
            <Grid container>
              <Grid item>
                <img
                  className="vIm2"
                  src="https://i.ibb.co/2FQKxYY/peopleicon.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <h5>{vCapacity} </h5>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <p>{vRent}</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SmallVcard;
