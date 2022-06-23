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
        <CityOperating 
          city="Nova Ipixuna"
          hospitals = {
            [
              {
                name: "Hospital Municipal de Nova Ipixuna",
                address: "Jerusalem - Cachoeira da Fumaça, S/n, Nova Ipixuna - PA, 68585-000"
              }
            ]
          }
        />
        <CityOperating 
          city="Brasil Novo"
          hospitals = {
            [
              {
                name: "Hospital Municipal Maria Jose Biancardi",
                address: " Tv. Vinte e Oito de Abril, 110-212, Brasil Novo - PA, 68148-000"
              }
            ]
          }
        />
        <CityOperating 
          city="Medicilândia"
          hospitals = {
            [
              {
                name: "Hospital Municipal de Medicilândia",
                address: "Tv. Cassandro Silvério - Medicilândia, PA, 68145-000"
              }
            ]
          }
        />
        <CityOperating 
          city="Uruará"
          hospitals = {
            [
              {
                name: "Hospital Municipal de Uruará",
                address: " Av. Pará - Val-de-Caes, Uruará - PA, 68140-000"
              }
            ]
          }
        />
      </div>
    </section>
  );
};

export default OperatingLocations;
