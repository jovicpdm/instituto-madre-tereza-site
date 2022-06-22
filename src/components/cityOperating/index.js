import React, { useState } from "react";
import ElevatedContainer from "../elevatedContainer";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Expand from "react-expand-animated";

import "./styles.css";

const CityOperating = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ElevatedContainer>
      <div className="city-operating-container">
        <p className="city-name">{props.city}</p>
        <Expand open={expanded} easing={"ease-out"}>
          {props.hospitals.map((hospital) => (
            <div className="hospital-container">
              <p className="hospital-name">{hospital.name}</p>
              <p className="hospital-address">{hospital.address}</p>
            </div>
          ))}
        </Expand>
        <button
          className="button"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded === false ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </button>
      </div>
    </ElevatedContainer>
  );
};

export default CityOperating;
