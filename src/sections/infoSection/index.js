import React from "react";
import QuestionFigure from "../../images/undraw_questions.svg";
import ImgContainer from "../../components/imgContainer";

import "./styles.css";

const InfoSection = () => {
  return (
    <section id="info">
      <div className="semi-white-container">
        <ImgContainer img={QuestionFigure} alt="figura informações" />
        <div className="info-section-text-container">
          <div className="divider" />
          <h3 className="info-section-h3">Quem somos nós?</h3>
          <p className="info-section-p">
            <ul></ul>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nós somos uma organização
            social <b>sem fins lucrativos</b> que atua no segmento de gestão em
            saúde.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fundado em 16 de Dezembro de 2015.
            Realizamos a gestão compartilhada com o Poder Público, na área de
            saúde nas esferar municipal, estadual e federal.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Atuamos em todo o território nacional
            desenvolvendo projetos com foco na pesquisa e inovação de práticas
            de gestão de saúde de forma complementar. Trabalhamos pela qualidade
            da operacionalização dos serviços de atendimento.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Com base nos princípios que norteiam
            nossa atuação, como a humanização do atendimento, e ética e a
            quelidade do serviço prestrado, promovemos ações em saúde.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
