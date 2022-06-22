import React from "react";

import "./styles.css";

import MapFigure from "../../images/undraw_map.svg";
import ElevatedContainer from "../../components/elevatedContainer";
import ImgContainer from "../../components/imgContainer";
import LocalCard from "../../components/localCard";

const LocalSection = () => {
  return (
    <section id="local-section">
      <div className="semi-white-container">
        <ImgContainer img={MapFigure} />
        <ElevatedContainer>
          <div className="title-local-container">
            <h3>Estamos localizados em duas cidades</h3>
            <LocalCard
              city="Xinguara/PA"
              address="Rua Guajajaras, nº 55, centro"
              additionalInfo="sede"
            />
            <LocalCard
              city="Marabá/PA"
              address="Folha 26, Quadra 05 - Lote 15, Nova Marabá"
              additionalInfo="filial"
            />
          </div>
        </ElevatedContainer>
      </div>
    </section>
  );
};

export default LocalSection;
