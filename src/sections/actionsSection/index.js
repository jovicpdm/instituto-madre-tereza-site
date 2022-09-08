import React from "react";
import ActionSectionCard from "../../components/actionSectionCard";
import "./styles.css";

import imageAf1 from "../../images/apoio-familiar/image1.jpg";
import imageAf2 from "../../images/apoio-familiar/image2.jpg";
import imageAf3 from "../../images/apoio-familiar/image3.jpg";
import imageAf4 from "../../images/apoio-familiar/image4.jpg";
import imageAf5 from "../../images/apoio-familiar/image5.jpg";
import imageAf6 from "../../images/apoio-familiar/image6.jpg";
import imageAf7 from "../../images/apoio-familiar/image7.jpg";
import imageAf8 from "../../images/apoio-familiar/image8.jpg";
import imageAf9 from "../../images/apoio-familiar/image9.jpg";
import imageAf10 from "../../images/apoio-familiar/image10.jpg";
import imageAf11 from "../../images/apoio-familiar/image11.jpg";

import imageJJ1 from "../../images/jiu-jitsu/image1.jpg";
import imageJJ2 from "../../images/jiu-jitsu/image2.jpg";
import imageJJ3 from "../../images/jiu-jitsu/image3.jpg";
import imageJJ4 from "../../images/jiu-jitsu/image4.jpg";
import imageJJ5 from "../../images/jiu-jitsu/image5.jpg";
import imageJJ6 from "../../images/jiu-jitsu/image6.jpg";
import imageJJ7 from "../../images/jiu-jitsu/image7.jpg";
import imageJJ8 from "../../images/jiu-jitsu/image8.jpg";

const ActionSection = () => {
  const imageAfs = [
    imageAf1,
    imageAf2,
    imageAf3,
    imageAf4,
    imageAf5,
    imageAf6,
    imageAf7,
    imageAf8,
    imageAf9,
    imageAf10,
    imageAf11,
  ];

  const imageJJs = [
    imageJJ1,
    imageJJ2,
    imageJJ3,
    imageJJ4,
    imageJJ5,
    imageJJ6,
    imageJJ7,
    imageJJ8,
  ];
  return (
    <section className="action-section-container" id="action-section">
      <h3 className="section-h3">Compromisso com a sociedade</h3>
      <p className="action-section-p">
        Nos preocupamos com o bem estar do cidadão e acreditamos em um mundo
        fraterno. Pensando nisso temos dois projetos sociais para ajudar nesse
        processo
      </p>
      <div className="action-section-cards-container">
        <ActionSectionCard
          title={"Projeto Social Ação do Bem - Apoio Familiar"}
          subtitle={
            "Um auxilio financeiro para famílias carentes para uso exclusivo de compra de alimento em supermercados parceiros"
          }
          // images={imageAfs}
        />
        <ActionSectionCard
          title="Projeto Realizando Sonhos, Resgatando e Formando Cidadãos"
          subtitle="Projeto de ensino de Jiu Jitsu para as crianças e adolescentes   de Itupiranga e Cajazeiras"
          // images={imageJJs}
        />
        
      </div>
    </section>
  );
};

export default ActionSection;
