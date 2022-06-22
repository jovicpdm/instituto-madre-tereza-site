import React from "react";

import "./styles.css";
import MedicineFigure from "../../images/undraw_medicine.svg";
import ImgContainer from "../../components/imgContainer";

const InitialSection = () => {
  return (
    <section id="#">
      <div className="initial-section-container">
        <span className="initial-section-span">
          Estamos comprometidos com a saúde e bem estar das pessoas que precisam
        </span>
        <ImgContainer img={MedicineFigure} />
      </div>
    </section>
  );
};

export default InitialSection;
