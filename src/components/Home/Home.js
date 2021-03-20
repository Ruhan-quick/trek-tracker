import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import veichles from "../../NsData/VeicleData.json";
import VeichleCard from "../VeichleCard/VeichleCard";

const Home = () => {
  //   const { vName, vId, vImage } = veichles;
  useEffect(() => {
    console.log(veichles);
  }, []);

  return (
    <div className="homeClass">
      <NavBar></NavBar>

      <div className="container">
        <div className="row justify">
          {veichles.map((vl) => (
            <VeichleCard
              className="col-lg-3 col-sm-12"
              key={vl.vId}
              vName={vl.vName}
              vImage={vl.vImage}
            ></VeichleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
