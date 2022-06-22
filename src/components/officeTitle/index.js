import React from "react";
import "./styles.css";

const OfficeTitle = (props) => {
  return (
    <div>
      <h5 className="title">{props.title}</h5>
    </div>
  );
};

export default OfficeTitle;
