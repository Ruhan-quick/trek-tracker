import React, { useContext } from "react";
import "./VeichleCard.css";
import { useHistory } from "react-router-dom";
import { UserVeichleContext } from "../../App";

const VeichleCard = ({ vl }) => {
  const history = useHistory();
  const [selectedVeichle, setSelectedVeichle] = useContext(UserVeichleContext);
  const handleVroute = () => {
    history.push(`/${vl.vName}`);
    const selectedVeichle = { vl };
    setSelectedVeichle(selectedVeichle);
  };
  return (
    <div onClick={handleVroute} className="vCard">
      <img className="cardImg" src={vl.vImage} alt="" />
      <h3 className="cardName">{vl.vName}</h3>
    </div>
  );
};

export default VeichleCard;
