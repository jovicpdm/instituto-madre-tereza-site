import React from "react";
import "./styles.css";

const MemberCard = (props) => {
  return (
    <div className="member-card-container">
      <p className="name">{props.name}</p>
      <p className="office">{props.office}</p>
    </div>
  );
};

export default MemberCard;
