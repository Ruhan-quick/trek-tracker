import React from "react";
import "./VeichleCard.css";
import { useHistory } from "react-router-dom";

const VeichleCard = ({ vName, vImage }) => {
  const history = useHistory();

  const handleVroute = () => {
    history.push(`/${vName}`);
  };
  return (
    <div onClick={handleVroute} className="vCard">
      <img className="cardImg" src={vImage} alt="" />
      <h3 className="cardName">{vName}</h3>
    </div>
  );
};

export default VeichleCard;
