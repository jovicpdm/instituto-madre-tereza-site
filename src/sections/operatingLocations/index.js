import React from "react";
import CityOperating from "../../components/cityOperating";
import "./styles.css";

const OperatingLocations = () => {
  return (
    <section id="operation-section" className="semi-white-container">
      <div>
        <h3 className="section-h3">Cidades onde atuamos</h3>
        <CityOperating
          city="Marabá"
          hospitals={[
            {
              name: "Hospital Municipal de Marabá",
              address: "Folha 17, Quadra Especial - Nova Marabá",
            },
            {
              name: "Hospital Materno de Marabá",
              address: "R. Cinco de Abril - Velha Marabá",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default OperatingLocations;
