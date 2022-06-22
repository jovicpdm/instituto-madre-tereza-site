import React from "react";
import "./styles.css";

const LocalCard = (props) => {
  return (
    <div className="local-card-container">
      <p className="local-card-p">{props.city}</p>
      <p className="local-card-p">{props.address}</p>
      <br />
      <p className="local-card-p">{"(" + props.additionalInfo + ")"}</p>
    </div>
  );
};

export default LocalCard;
