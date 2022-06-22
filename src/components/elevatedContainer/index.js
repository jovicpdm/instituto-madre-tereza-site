import React from "react";
import './styles.css';

const ElevatedContainer = (props) => {
  return <div className={"elevated-container"}>{props.children}</div>;
};

export default ElevatedContainer;
